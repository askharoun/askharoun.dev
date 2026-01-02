// ==========================================
// 1. DATA: Bible Structure (Bilingual)
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
        { en: "Esther", ar: "أستير", c: 10 }
    ],
    prophets: [
        { en: "Isaiah", ar: "إشعياء", c: 66 }, { en: "Jeremiah", ar: "إرميا", c: 52 },
        { en: "Lamentations", ar: "مراثي إرميا", c: 5 }, { en: "Ezekiel", ar: "حزقيال", c: 48 },
        { en: "Daniel", ar: "دانيال", c: 12 }, { en: "Hosea", ar: "هوشع", c: 14 },
        { en: "Joel", ar: "يوئيل", c: 3 }, { en: "Amos", ar: "عاموس", c: 9 },
        { en: "Obadiah", ar: "عوبديا", c: 1 }, { en: "Jonah", ar: "يونان", c: 4 },
        { en: "Micah", ar: "ميخا", c: 7 }, { en: "Nahum", ar: "ناحوم", c: 3 },
        { en: "Habakkuk", ar: "حبقوق", c: 3 }, { en: "Zephaniah", ar: "صفنيا", c: 3 },
        { en: "Haggai", ar: "حجي", c: 2 }, { en: "Zechariah", ar: "زكريا", c: 14 },
        { en: "Malachi", ar: "ملاخي", c: 4 }
    ],
    wisdom: [
        { en: "Job", ar: "أيوب", c: 42 }, { en: "Psalms", ar: "المزامير", c: 150 },
        { en: "Proverbs", ar: "الأمثال", c: 31 }, { en: "Ecclesiastes", ar: "الجامعة", c: 12 },
        { en: "Song of Solomon", ar: "نشيد الأنشاد", c: 8 }
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

// UI Translations
const DICTIONARY = {
    en: {
        subtitle: "Daily Orthodox Bible Plan",
        prev: "Prev", next: "Next", today: "Today",
        hint: "(Tap date to change)",
        sec_hist: "History & Law", sec_proph: "The Prophets",
        sec_wis: "Wisdom & Psalms", sec_nt: "New Testament",
        finished: "Reading Plan Complete!"
    },
    ar: {
        subtitle: "خطة قراءة الكتاب المقدس اليومية",
        prev: "السابق", next: "التالي", today: "اليوم",
        hint: "(اضغط على التاريخ للتغيير)",
        sec_hist: "التاريخ والشريعة", sec_proph: "الأنبياء",
        sec_wis: "الحكمة والمزامير", sec_nt: "العهد الجديد",
        finished: "تم الانتهاء من الخطة!"
    }
};

// State
let currentDate = new Date();
let currentLang = 'en'; // 'en' or 'ar'

// Rates to finish in 365 days
const RATES = { history: 1.195, prophets: 0.685, wisdom: 0.666, nt: 0.712 };

// ==========================================
// 2. INITIALIZATION & EVENTS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderPage(currentDate);
    setupDatePicker();
    setupNotifications();
});

// Language Toggle
document.getElementById('lang-btn').addEventListener('click', (e) => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    e.target.innerText = currentLang === 'en' ? 'عربي' : 'English';
    document.body.classList.toggle('rtl', currentLang === 'ar');
    renderPage(currentDate);
});

// Date Picker Logic
function setupDatePicker() {
    const picker = document.getElementById('date-picker');
    picker.addEventListener('change', (e) => {
        if(e.target.value) {
            // Fix timezone offset issue by appending time
            currentDate = new Date(e.target.value + 'T00:00:00');
            renderPage(currentDate);
        }
    });
}

// Navigation Events
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

// ==========================================
// 3. CORE LOGIC
// ==========================================
function renderPage(date) {
    const t = DICTIONARY[currentLang];
    
    // Update Text
    document.getElementById('subtitle').innerText = t.subtitle;
    document.getElementById('tap-hint').innerText = t.hint;
    document.querySelector('[data-i18n="prev"]').innerText = t.prev;
    document.querySelector('[data-i18n="next"]').innerText = t.next;
    document.querySelector('[data-i18n="today"]').innerText = t.today;

    // Date Formatting
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
    document.getElementById('date-display').innerText = date.toLocaleDateString(locale, options);
    
    // Sync Date Picker Input (ISO format YYYY-MM-DD)
    const isoDate = date.getFullYear() + '-' + String(date.getMonth()+1).padStart(2,'0') + '-' + String(date.getDate()).padStart(2,'0');
    document.getElementById('date-picker').value = isoDate;

    // Render Cards
    const list = document.getElementById('readings-list');
    list.innerHTML = '';
    
    const dayOfYear = getDayOfYear(date);
    const readings = [
        getPassage(BIBLE_DATA.history, t.sec_hist, dayOfYear, RATES.history),
        getPassage(BIBLE_DATA.prophets, t.sec_proph, dayOfYear, RATES.prophets),
        getPassage(BIBLE_DATA.wisdom, t.sec_wis, dayOfYear, RATES.wisdom),
        getPassage(BIBLE_DATA.nt, t.sec_nt, dayOfYear, RATES.nt)
    ].filter(Boolean);

    if (readings.length > 0) {
        readings.forEach(r => {
            const card = document.createElement('a');
            card.className = 'reading-card';
            // Search Query logic
            const queryName = currentLang === 'ar' ? r.bookAr : r.bookEn;
            const searchTerm = `${queryName} ${r.chapter} Coptic Reader`;
            card.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
            card.target = "_blank";
            
            card.innerHTML = `
                <span class="reading-section">${r.section}</span>
                <span class="reading-ref">${currentLang === 'ar' ? r.bookAr : r.bookEn} ${r.chapter.toLocaleString(locale)}</span>
            `;
            list.appendChild(card);
        });
    } else {
        list.innerHTML = `<p style="text-align:center; color:#888; padding:2rem;">${t.finished}</p>`;
    }
}

function getPassage(bookList, sectionName, dayNum, rate) {
    let target = Math.ceil(dayNum * rate);
    let cumulative = 0;

    for (let book of bookList) {
        if (cumulative + book.c >= target) {
            let chapter = target - cumulative;
            if (chapter > book.c) return null;
            return {
                section: sectionName,
                bookEn: book.en,
                bookAr: book.ar,
                chapter: chapter
            };
        }
        cumulative += book.c;
    }
    return null;
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// ==========================================
// 4. NOTIFICATIONS
// ==========================================
function setupNotifications() {
    const btn = document.getElementById('notify-btn');
    if (!("Notification" in window)) { btn.style.display = 'none'; return; }

    btn.addEventListener('click', () => {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Coptic Bible Plan", { body: currentLang === 'en' ? "Reminders Enabled" : "تم تفعيل التذكيرات" });
            }
        });
    });
}
