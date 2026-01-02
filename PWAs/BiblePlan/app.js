// ==========================================
// 1. DATA (73 Books)
// ==========================================
const BIBLE_DATA = {
    history: [
        { en: "Genesis", ar: "التكوين", c: 50 }, { en: "Exodus", ar: "الخروج", c: 40 },
        { en: "Leviticus", ar: "اللاويين", c: 27 }, { en: "Numbers", ar: "العدد", c: 36 },
        { en: "Deuteronomy", ar: "التثنية", c: 34 }, { en: "Joshua", ar: "يشوع", c: 24 },
        { en: "Judges", ar: "القضاة", c: 21 }, { en: "Ruth", ar: "راعوث", c: 4 },
        { en: "1 Samuel", ar: "صموئيل الأول", c: 31 }, { en: "2 Samuel", ar: "صموئيل الثاني", c: 24 },
        { en: "1 Kings", ar: "ملوك الأول", c: 22 }, { en: "2 Kings", ar: "ملوك الثاني", c: 25 },
        { en: "1 Chronicles", ar: "أخبار الأيام الأول", c: 29 }, { en: "2 Chronicles", ar: "أخبار الأيام الثاني", c: 36 },
        { en: "Ezra", ar: "عزرا", c: 10 }, { en: "Nehemiah", ar: "نحميا", c: 13 },
        { en: "Tobit", ar: "طوبيا", c: 14 }, { en: "Judith", ar: "يهوديت", c: 16 },
        { en: "Esther", ar: "أستير", c: 10 }, { en: "1 Maccabees", ar: "المكابيين الأول", c: 16 },
        { en: "2 Maccabees", ar: "المكابيين الثاني", c: 15 }
    ],
    prophets: [
        { en: "Isaiah", ar: "إشعياء", c: 66 }, { en: "Jeremiah", ar: "إرميا", c: 52 },
        { en: "Lamentations", ar: "مراثي إرميا", c: 5 }, { en: "Baruch", ar: "باروخ", c: 6 },
        { en: "Ezekiel", ar: "حزقيال", c: 48 }, { en: "Daniel", ar: "دانيال", c: 12 },
        { en: "Hosea", ar: "هوشع", c: 14 }, { en: "Joel", ar: "يوئيل", c: 3 },
        { en: "Amos", ar: "عاموس", c: 9 }, { en: "Obadiah", ar: "عوبديا", c: 1 },
        { en: "Jonah", ar: "يونان", c: 4 }, { en: "Micah", ar: "ميخا", c: 7 },
        { en: "Nahum", ar: "ناحوم", c: 3 }, { en: "Habakkuk", ar: "حبقوق", c: 3 },
        { en: "Zephaniah", ar: "صفنيا", c: 3 }, { en: "Haggai", ar: "حجي", c: 2 },
        { en: "Zechariah", ar: "زكريا", c: 14 }, { en: "Malachi", ar: "ملاخي", c: 4 }
    ],
    wisdom: [
        { en: "Job", ar: "أيوب", c: 42 }, { en: "Psalms", ar: "المزامير", c: 150 },
        { en: "Proverbs", ar: "الأمثال", c: 31 }, { en: "Ecclesiastes", ar: "الجامعة", c: 12 },
        { en: "Song of Solomon", ar: "نشيد الأنشاد", c: 8 },
        { en: "Wisdom of Solomon", ar: "الحكمة", c: 19 }, { en: "Sirach", ar: "يشوع بن سيراخ", c: 51 }
    ],
    nt: [
        { en: "Matthew", ar: "متى", c: 28 }, { en: "Mark", ar: "مرقس", c: 16 },
        { en: "Luke", ar: "لوقا", c: 24 }, { en: "John", ar: "يوحنا", c: 21 },
        { en: "Acts", ar: "أعمال الرسل", c: 28 }, { en: "Romans", ar: "رومية", c: 16 },
        { en: "1 Corinthians", ar: "كورنثوس الأولى", c: 16 }, { en: "2 Corinthians", ar: "كورنثوس الثانية", c: 13 },
        { en: "Galatians", ar: "غلاطية", c: 6 }, { en: "Ephesians", ar: "أفسس", c: 6 },
        { en: "Philippians", ar: "فيلبي", c: 4 }, { en: "Colossians", ar: "كولوسي", c: 4 },
        { en: "1 Thessalonians", ar: "تسالونيكي الأولى", c: 5 }, { en: "2 Thessalonians", ar: "تسالونيكي الثانية", c: 3 },
        { en: "1 Timothy", ar: "تيموثاوس الأولى", c: 6 }, { en: "2 Timothy", ar: "تيموثاوس الثانية", c: 4 },
        { en: "Titus", ar: "تيطس", c: 3 }, { en: "Philemon", ar: "فليمون", c: 1 },
        { en: "Hebrews", ar: "العبرانيين", c: 13 }, { en: "James", ar: "يعقوب", c: 5 },
        { en: "1 Peter", ar: "بطرس الأولى", c: 5 }, { en: "2 Peter", ar: "بطرس الثانية", c: 3 },
        { en: "1 John", ar: "يوحنا الأولى", c: 5 }, { en: "2 John", ar: "يوحنا الثانية", c: 1 },
        { en: "3 John", ar: "يوحنا الثالثة", c: 1 }, { en: "Jude", ar: "يهوذا", c: 1 },
        { en: "Revelation", ar: "رؤيا يوحنا", c: 22 }
    ]
};

// ==========================================
// 2. HARD-CODED DICTIONARY
// ==========================================
const DICTIONARY = {
    en: {
        date_label: "Reading For:",
        tap_text: "Tap to change date",
        prev: "Prev Day", next: "Next Day", today: "TODAY",
        sec_hist: "History & Law", sec_proph: "Prophets",
        sec_wis: "Wisdom", sec_nt: "New Testament",
        finished: "Plan complete for today!",
        catchup: "Rest / Catch-up Day",
        greeting: "Hello! Below are your readings for today.",
        // NOTIFICATIONS
        notify_btn: "🔔 Tap to enable reading reminders",
        notify_title: "Daily Reminder",
        notify_body: "It is time to read your daily chapters."
    },
    ar: {
        date_label: "قراءات اليوم:",
        tap_text: "اضغط لتغيير التاريخ",
        prev: "السابق", next: "التالي", today: "اليوم",
        sec_hist: "التاريخ والشريعة", sec_proph: "الأنبياء",
        sec_wis: "كتب الحكمة", sec_nt: "العهد الجديد",
        finished: "تمت قراءة اليوم!",
        catchup: "يوم راحة",
        greeting: "أهلاً بك! إليك قراءاتك لليوم.",
        // NOTIFICATIONS
        notify_btn: "🔔 اضغط لتفعيل تذكير القراءة",
        notify_title: "تذكير يومي",
        notify_body: "حان وقت قراءة وردك اليومي."
    }
};

let currentDate = new Date();
let currentLang = 'en';

// ==========================================
// 3. INIT & EVENTS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Splash Screen Timer
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if(splash) splash.classList.add('hidden');
    }, 2000);

    renderPage(currentDate);
    setupDatePicker();
    setupNotifications();
    showGreeting();
});

document.getElementById('lang-btn').addEventListener('click', (e) => {
    // Toggle Language
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Update Button Text
    e.target.innerText = currentLang === 'en' ? 'عربي' : 'English';
    
    // Toggle Direction
    document.body.classList.toggle('rtl', currentLang === 'ar');
    
    // Re-render Page
    renderPage(currentDate);
    showGreeting();
    
    // FORCE UPDATE NOTIFICATION BUTTON TEXT
    const notifyBtn = document.getElementById('notify-enable-btn');
    if(notifyBtn) {
        notifyBtn.innerText = DICTIONARY[currentLang].notify_btn;
    }
});

// ==========================================
// 4. NOTIFICATION LOGIC (RE-MADE)
// ==========================================
function setupNotifications() {
    const btn = document.getElementById('notify-enable-btn');
    
    // 1. Check if supported
    if (!("Notification" in window)) {
        if(btn) btn.style.display = 'none'; 
        return;
    }
    
    // 2. Check if already granted/denied
    if (Notification.permission !== 'default') {
        if(btn) btn.style.display = 'none';
        return;
    }
    
    // 3. Show button with correct language
    btn.innerText = DICTIONARY[currentLang].notify_btn;
    btn.style.display = 'block';

    // 4. Handle Click
    btn.addEventListener('click', () => {
        Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
                // Hide button immediately
                btn.style.display = 'none';
                
                // Send "Test" Notification immediately
                const t = DICTIONARY[currentLang];
                new Notification(t.notify_title, { 
                    body: t.notify_body,
                    icon: 'icons/icon-192.png'
                });
            }
        });
    });
}

function showGreeting() {
    const banner = document.getElementById('greeting-banner');
    if(banner) banner.innerText = DICTIONARY[currentLang].greeting;
}

// ==========================================
// 5. DATE & NAV LOGIC
// ==========================================
function setupDatePicker() {
    const picker = document.getElementById('date-picker');
    picker.addEventListener('change', (e) => {
        if(e.target.value) {
            currentDate = new Date(e.target.value + 'T00:00:00');
            renderPage(currentDate);
        }
    });
}

document.getElementById('prev-btn').addEventListener('click', () => { currentDate.setDate(currentDate.getDate() - 1); renderPage(currentDate); });
document.getElementById('next-btn').addEventListener('click', () => { currentDate.setDate(currentDate.getDate() + 1); renderPage(currentDate); });
document.getElementById('today-btn').addEventListener('click', () => { currentDate = new Date(); renderPage(currentDate); });

// ==========================================
// 6. MATH ENGINE (Do not edit)
// ==========================================
function getTotalChapters(s) { return s.reduce((sum, b) => sum + b.c, 0); }

function getChapterFromAbsolute(section, abs) {
    let current = 0;
    for (let book of section) {
        if (current + book.c >= abs) {
            return { bookEn: book.en, bookAr: book.ar, chapter: abs - current };
        }
        current += book.c;
    }
    let last = section[section.length - 1];
    return { bookEn: last.en, bookAr: last.ar, chapter: last.c };
}

function getReadingForSection(section, title, day) {
    const rate = getTotalChapters(section) / 365;
    const start = Math.floor((day - 1) * rate) + 1;
    const end = Math.floor(day * rate);
    
    if (start > end) return null;

    const sRead = getChapterFromAbsolute(section, start);
    const eRead = getChapterFromAbsolute(section, end);

    let display = "", query = "";
    if (sRead.bookEn === eRead.bookEn) {
        display = (sRead.chapter === eRead.chapter) 
            ? `${currentLang === 'ar' ? sRead.bookAr : sRead.bookEn} ${sRead.chapter}`
            : `${currentLang === 'ar' ? sRead.bookAr : sRead.bookEn} ${sRead.chapter}-${eRead.chapter}`;
        query = `${sRead.bookEn} ${sRead.chapter}-${eRead.chapter}`;
    } else {
        const b1 = currentLang === 'ar' ? sRead.bookAr : sRead.bookEn;
        const b2 = currentLang === 'ar' ? eRead.bookAr : eRead.bookEn;
        display = `${b1} ${sRead.chapter} — ${b2} ${eRead.chapter}`;
        query = `${sRead.bookEn} ${sRead.chapter} ${eRead.bookEn} ${eRead.chapter}`;
    }
    return { section: title, display: display, query: query };
}

function renderPage(date) {
    const t = DICTIONARY[currentLang];
    
    document.querySelector('[data-i18n="date_label"]').innerText = t.date_label;
    document.querySelector('[data-i18n="tap_text"]').innerText = t.tap_text;
    document.querySelector('[data-i18n="prev"]').innerText = t.prev;
    document.querySelector('[data-i18n="next"]').innerText = t.next;
    document.querySelector('[data-i18n="today"]').innerText = t.today;

    const opts = { weekday: 'long', month: 'long', day: 'numeric' };
    const loc = currentLang === 'ar' ? 'ar-EG' : 'en-US';
    document.getElementById('date-display').innerText = date.toLocaleDateString(loc, opts);
    document.getElementById('date-picker').value = date.toISOString().split('T')[0];

    const list = document.getElementById('readings-list');
    list.innerHTML = '';
    
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
    
    if (dayOfYear > 366 || dayOfYear < 1) {
        list.innerHTML = `<p style="text-align:center; color:#666;">${t.finished}</p>`;
        return;
    }

    const readings = [
        getReadingForSection(BIBLE_DATA.history, t.sec_hist, dayOfYear),
        getReadingForSection(BIBLE_DATA.prophets, t.sec_proph, dayOfYear),
        getReadingForSection(BIBLE_DATA.wisdom, t.sec_wis, dayOfYear),
        getReadingForSection(BIBLE_DATA.nt, t.sec_nt, dayOfYear)
    ].filter(Boolean);

    if (readings.length > 0) {
        readings.forEach(r => {
            const card = document.createElement('a');
            card.className = 'reading-card';
            card.href = `https://www.google.com/search?q=${encodeURIComponent(r.query + " Coptic Reader")}`;
            card.target = "_blank";
            card.innerHTML = `<span class="reading-section">${r.section}</span><span class="reading-ref">${r.display}</span>`;
            list.appendChild(card);
        });
    } else {
        list.innerHTML = `<p style="text-align:center; color:#666; padding:2rem;">${t.catchup}</p>`;
    }
}