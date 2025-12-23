document.addEventListener('DOMContentLoaded', () => {
  const d = document;
  
  // Elements
  const ui = {
    dz: d.getElementById('dropzone'),
    fileInput: d.getElementById('fileInput'),
    btnPick: d.getElementById('btnPick'),
    nameInput: d.getElementById('nameInput'),
    canvasWrap: d.getElementById('canvasWrap'),
    canvas: d.getElementById('canvas'),
    toggleBtns: d.querySelectorAll('.toggle-btn'),
    btnFloat: d.getElementById('btnFloat'),
    btnSave: d.getElementById('btnSave'),
    btnClear: d.getElementById('btnClear'),
    metaSize: d.getElementById('metaSize'),
    metaType: d.getElementById('metaType')
  };

  const ctx = ui.canvas.getContext('2d');
  let currentFormat = 'image/png';

  const sanitize = (s) => (s || 'image').toLowerCase().replace(/[^a-z0-9-_]+/g, '-').replace(/^-+|-+$/g, '');

  function draw(img) {
    ui.canvas.width = img.naturalWidth;
    ui.canvas.height = img.naturalHeight;
    ctx.clearRect(0,0, ui.canvas.width, ui.canvas.height);
    ctx.drawImage(img, 0, 0);
    ui.metaSize.textContent = `${img.naturalWidth} x ${img.naturalHeight}`;
    ui.canvasWrap.classList.add('has-image');
  }

  async function handleFile(file) {
    if(!file || !file.type?.startsWith('image/')) return;
    ui.metaType.textContent = file.type.split('/')[1].toUpperCase();
    
    const safeName = sanitize((file.name||'image').replace(/\.[^.]+$/,''));
    ui.nameInput.value = safeName;
    
    ui.btnSave.disabled = false;
    ui.btnFloat.disabled = false;

    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      draw(img);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  // --- Toggle Logic ---
  ui.toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ui.toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFormat = btn.dataset.val;
    });
  });

  // --- Picture-in-Picture Logic ---
  ui.btnFloat.addEventListener('click', async () => {
    if(!ui.canvas.width) return;
    
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (tab.url.startsWith("chrome://") || tab.url.startsWith("edge://") || tab.url.startsWith("about:")) {
      alert("Cannot open PiP on this page.\nPlease try a regular website.");
      return;
    }

    const dataUrl = ui.canvas.toDataURL();

    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: injectOverlay,
        args: [dataUrl]
      });
      window.close();
    } catch (err) {
      console.error(err);
      alert("Error: Refresh the page and try again.");
    }
  });

  // This function is injected into the webpage
  function injectOverlay(imageUrl) {
    const existing = document.getElementById('pixelpaste-overlay');
    if(existing) existing.remove();

    const div = document.createElement('div');
    div.id = 'pixelpaste-overlay';
    div.style.cssText = `
      position: fixed; top: 20px; right: 20px; z-index: 2147483647;
      border: 1px solid #30363d; box-shadow: 0 10px 30px rgba(0,0,0,0.6);
      background: #0b0d10; cursor: move; max-width: 350px;
      border-radius: 8px; overflow: hidden; transition: opacity 0.2s;
    `;

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.cssText = 'display: block; width: 100%; height: auto; pointer-events: none;';
    
    // Improved Close Button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    closeBtn.style.cssText = `
      position: absolute; top: 8px; right: 8px; 
      background: rgba(0,0,0,0.6); color: white;
      border: none; width: 28px; height: 28px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; transition: background 0.2s;
    `;
    closeBtn.onmouseover = () => closeBtn.style.background = '#cf222e';
    closeBtn.onmouseout = () => closeBtn.style.background = 'rgba(0,0,0,0.6)';
    closeBtn.onclick = () => div.remove();

    div.appendChild(img);
    div.appendChild(closeBtn);
    document.body.appendChild(div);

    let isDown = false, offset = [0,0];
    div.addEventListener('mousedown', (e) => {
      if(e.target.tagName === 'BUTTON' || e.target.tagName === 'svg' || e.target.tagName === 'line') return;
      isDown = true;
      offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
    });
    document.addEventListener('mouseup', () => isDown = false);
    document.addEventListener('mousemove', (e) => {
      if(isDown) {
        e.preventDefault();
        div.style.left = (e.clientX + offset[0]) + 'px';
        div.style.top  = (e.clientY + offset[1]) + 'px';
        div.style.right = 'auto';
      }
    });
  }

  // --- Handlers ---
  document.addEventListener('paste', e => {
    const it = e.clipboardData?.items?.[0];
    if(it?.type?.startsWith('image/')) handleFile(it.getAsFile());
  });
  
  ui.btnPick.addEventListener('click', () => ui.fileInput.click());
  ui.dz.addEventListener('click', () => ui.fileInput.click());
  ui.fileInput.addEventListener('change', () => handleFile(ui.fileInput.files[0]));

  ui.btnSave.addEventListener('click', () => {
    if(!ui.canvas.width) return;
    const link = d.createElement('a');
    const ext = currentFormat === 'image/jpeg' ? 'jpg' : 'png';
    link.download = `${ui.nameInput.value.trim() || 'pixelpaste'}.${ext}`;
    link.href = ui.canvas.toDataURL(currentFormat, 0.9);
    link.click();
  });

  ui.btnClear.addEventListener('click', () => {
    ui.fileInput.value = '';
    ui.canvas.width = 0; ui.canvas.height = 0;
    ui.canvasWrap.classList.remove('has-image');
    ui.nameInput.value = '';
    ui.btnSave.disabled = true;
    ui.btnFloat.disabled = true;
    ui.metaSize.textContent = '----';
    ui.metaType.textContent = '----';
  });
});