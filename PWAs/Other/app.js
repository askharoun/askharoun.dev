// ==========================================
// 1. DATA: The Book Lists & Chapter Counts
// ==========================================
const BIBLE_DATA = {
    history: [
        { n: "Genesis", c: 50 }, { n: "Exodus", c: 40 }, { n: "Leviticus", c: 27 }, 
        { n: "Numbers", c: 36 }, { n: "Deuteronomy", c: 34 }, { n: "Joshua", c: 24 },
        { n: "Judges", c: 21 }, { n: "Ruth", c: 4 }, { n: "1 Samuel", c: 31 }, 
        { n: "2 Samuel", c: 24 }, { n: "1 Kings", c: 22 }, { n: "2 Kings", c: 25 }, 
        { n: "1 Chronicles", c: 29 }, { n: "2 Chronicles", c: 36 }, { n: "Ezra", c: 10 }, 
        { n: "Nehemiah", c: 13 }, { n: "Esther", c: 10 }
    ],
    prophets: [
        { n: "Isaiah", c: 66 }, { n: "Jeremiah", c: 52 }, { n: "Lamentations", c: 5 }, 
        { n: "Ezekiel", c: 48 }, { n: "Daniel", c: 12 }, { n: "Hosea", c: 14 }, 
        { n: "Joel", c: 3 }, { n: "Amos", c: 9 }, { n: "Obadiah", c: 1 }, 
        { n: "Jonah", c: 4 }, { n: "Micah", c: 7 }, { n: "Nahum", c: 3 }, 
        { n: "Habakkuk", c: 3 }, { n: "Zephaniah", c: 3 }, { n: "Haggai", c: 2 }, 
        { n: "Zechariah", c: 14 }, { n: "Malachi", c: 4 }
    ],
    wisdom: [
        { n: "Job", c: 42 }, { n: "Psalms", c: 150 }, { n: "Proverbs", c: 31 }, 
        { n: "Ecclesiastes", c: 12 }, { n: "Song of Solomon", c: 8 }
    ],
    nt: [
        { n: "Matthew", c: 28 }, { n: "Mark", c: 16 }, { n: "Luke", c: 24 }, 
        { n: "John", c: 21 }, { n: "Acts", c: 28 }, { n: "Romans", c: 16 }, 
        { n: "1 Corinthians", c: 16 }, { n: "2 Corinthians", c: 13 }, { n: "Galatians", c: 6 }, 
        { n: "Ephesians", c: 6 }, { n: "Philippians", c: 4 }, { n: "Colossians", c: 4 }, 
        { n: "1 Thessalonians", c: 5 }, { n: "2 Thessalonians", c: 3 }, { n: "1 Timothy", c: 6 }, 
        { n: "2 Timothy", c: 4 }, { n: "Titus", c: 3 }, { n: "Philemon", c: 1 }, 
        { n: "Hebrews", c: 13 }, { n: "James", c: 5 }, { n: "1 Peter", c: 5 }, 
        { n: "2 Peter", c: 3 }, { n: "1 John", c: 5 }, { n: "2 John", c: 1 }, 
        { n: "3 John", c: 1 }, { n: "Jude", c: 1 }, { n: "Revelation", c: 22 }
    ]
};

// Precise Rates to finish exactly in 365 days
const RATES = { history: 1.195, prophets: 0.685, wisdom: 0.666, nt: 0.712 };

let currentDate = new Date();

document.addEventListener('DOMContentLoaded', () => {
    renderPage(currentDate);
    initNotifications();
});

// ==========================================
// 2. LOGIC: The Generator Engine
// ==========================================

function getReadingsForDate(date) {
    const dayOfYear = getDayOfYear(date);
    
    return [
        getPassage(BIBLE_DATA.history, "History & Law", dayOfYear, RATES.history),
        getPassage(BIBLE_DATA.prophets, "The Prophets", dayOfYear, RATES.prophets),
        getPassage(BIBLE_DATA.wisdom, "Wisdom & Psalms", dayOfYear, RATES.wisdom),
        getPassage(BIBLE_DATA.nt, "New Testament", dayOfYear, RATES.nt)
    ].filter(Boolean);
}

function getPassage(bookList, sectionName, dayNum, rate) {
    // Calculate exact target chapter number for this day of year
    let target = Math.ceil(dayNum * rate);
    let cumulative = 0;

    for (let book of bookList) {
        if (cumulative + book.c >= target) {
            let chapter = target - cumulative;
            // Prevent going over book limit (clean finish)
            if (chapter > book.c) return null; 
            
            return {
                section: sectionName,
                book: book.n,
                chapter: chapter
            };
        }
        cumulative += book.c;
    }
    return null; // Track finished
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// ==========================================
// 3. UI RENDERING
// ==========================================

function renderPage(date) {
    // Header Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date-display').innerText = date.toLocaleDateString('en-US', options);

    // Generate List
    const readings = getReadingsForDate(date);
    const list = document.getElementById('readings-list');
    list.innerHTML = '';

    if (readings.length > 0) {
        readings.forEach(r => {
            const card = document.createElement('a');
            card.className = 'reading-card';
            // Search Query: "Book Chapter Coptic Reader"
            card.href = `https://www.google.com/search?q=${encodeURIComponent(r.book + " " + r.chapter + " Coptic Reader")}`;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            
            card.innerHTML = `
                <span class="reading-section">${r.section}</span>
                <span class="reading-ref">${r.book} ${r.chapter}</span>
            `;
            list.appendChild(card);
        });
    } else {
        list.innerHTML = `<p style="text-align:center; color:#888; padding:2rem;">Reading Plan Complete!</p>`;
    }
}

// ==========================================
// 4. NOTIFICATIONS
// ==========================================

function initNotifications() {
    const btn = document.getElementById('notify-btn');
    const status = document.getElementById('notify-status');

    // 1. Check if browser supports notifications
    if (!("Notification" in window)) {
        btn.style.display = 'none';
        return;
    }

    // 2. Check current permission
    if (Notification.permission === "granted") {
        btn.innerText = "Send Test Reminder";
        status.innerText = "Notifications are active";
    }

    // 3. Handle Click
    btn.addEventListener('click', () => {
        if (Notification.permission === "granted") {
            // If already granted, send a test notification
            sendNotification("Here is your test reminder!");
        } else if (Notification.permission !== "denied") {
            // Request permission
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    btn.innerText = "Send Test Reminder";
                    status.innerText = "Notifications enabled!";
                    sendNotification("Welcome to the Bible Plan!");
                }
            });
        }
    });
}

function sendNotification(msg) {
    const notif = new Notification("Orthodox Bible Plan", {
        body: msg,
        icon: 'icons/icon-192.png',
        badge: 'icons/icon-192.png'
    });
}

// ==========================================
// 5. NAV CONTROLS
// ==========================================

document.getElementById('prev-btn').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    renderPage(currentDate);
});
document.getElementById('next-btn').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1);
    renderPage(currentDate);
});
document.getElementById('today-btn').addEventListener('click', () => {
    currentDate = new Date();
    renderPage(currentDate);
});
