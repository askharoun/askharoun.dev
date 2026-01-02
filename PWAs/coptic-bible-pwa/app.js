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
        finished: "Reading Plan Complete!",
        catchup: "Rest / Catch-up Day"
    },
    ar: {
        subtitle: "خطة قراءة الكتاب المقدس اليومية",
        prev: "السابق", next: "التالي", today: "اليوم",
        hint: "(اضغط على التاريخ للتغيير)",
        sec_hist: "التاريخ والشريعة", sec_proph: "الأنبياء",
        sec_wis: "الحكمة والمزامير", sec_nt: "العهد الجديد",
        finished: "تم الانتهاء من الخطة!",
        catchup: "يوم راحة / استدراك"
    }
};

// State
let currentDate = new Date();
let currentLang = 'en';

// ==========================================
// 2. LOGIC: Absolute Range Calculation
// ==========================================

// Pre-calculate total chapters per section to ensure exact finishing
function getTotalChapters(section) {
    return section.reduce((sum, book) => sum + book.c, 0);
}

// Maps an absolute chapter number (e.g., 51) to a Book/Chapter (e.g., Exodus 1)
function getChapterFromAbsolute(section, absoluteIndex) {
    let current = 0;
    for (let book of section) {
        if (current + book.c >= absoluteIndex) {
            return {
                bookEn: book.en,
                bookAr: book.ar,
                chapter: absoluteIndex - current
            };
        }
        current += book.c;
    }
    // Fallback for end of year
    let lastBook = section[section.length - 1];
    return { bookEn: lastBook.en, bookAr: lastBook.ar, chapter: lastBook.c };
}

function getReadingForSection(section, sectionTitle, dayOfYear) {
    const totalChapters = getTotalChapters(section);
    const dailyRate = totalChapters / 365;

    // Calculate Start and End for Today
    // Day 1: start 1, end ~1.2
    const startAbsolute = Math.floor((dayOfYear - 1) * dailyRate) + 1;
    const endAbsolute = Math.floor(dayOfYear * dailyRate);

    // If start > end, it means we don't finish a full chapter today (rare/rest day)
    // or the math implies a very slow pace. For Bible reading, we force at least 1 
    // if the gap is small, but usually this logic handles "skipping" days for shorter sections.
    if (startAbsolute > endAbsolute) return null;

    const startRead = getChapterFromAbsolute(section, startAbsolute);
    const endRead = getChapterFromAbsolute(section, endAbsolute);

    // Formatting the output string
    let rangeString = "";
    let searchString = "";

    if (startRead.bookEn === endRead.bookEn) {
        // Same Book (e.g., Genesis 1 to Genesis 2)
        if (startRead.chapter === endRead.chapter) {
            rangeString = `${startRead.chapter}`; // Just "1"
            searchString = `${startRead.bookEn} ${startRead.chapter}`;
        } else {
            rangeString = `${startRead.chapter}-${endRead.chapter}`; // "1-2"
            searchString = `${startRead.bookEn} ${startRead.chapter}-${endRead.chapter}`;
        }
    } else {
        // Across Books (e.g., Genesis 50 - Exodus 1)
        // Note: For simplicity in the UI, we show the range, 
        // but the search link might default to the first book or we instruct user.
        rangeString = `${startRead.chapter} — ${endRead.bookEn} ${endRead.chapter}`;
        // Complex search query
        searchString = `${startRead.bookEn} ${startRead.chapter} ${endRead.bookEn} ${endRead.chapter}`;
    }

    const bookName = currentLang === 'ar' ? startRead.bookAr : startRead.bookEn;
    const endBookName = currentLang === 'ar' ? endRead.bookAr : endRead.bookEn;

    let displayRef = "";
    if (startRead.bookEn === endRead.bookEn) {
        displayRef = `${bookName} ${rangeString}`;
    } else {
        displayRef = `${bookName} ${startRead.chapter} — ${endBookName} ${endRead.chapter}`;
    }

    return {
        section: sectionTitle,
        displayRef: displayRef,
        searchQuery: searchString
    };
}

// ==========================================
// 3. INITIALIZATION & EVENTS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Set Date Input min/max to ensure user stays within valid range if needed
    // or just let it float.
    renderPage(currentDate);
    setupDatePicker();
    setupNotifications();
});

document.getElementById('lang-btn').addEventListener('click', (e) => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    e.target.innerText = currentLang === 'en' ? 'عربي' : 'English';
    document.body.classList.toggle('rtl', currentLang === 'ar');
    renderPage(currentDate);
});

function setupDatePicker() {
    const picker = document.getElementById('date-picker');
    picker.addEventListener('change', (e) => {
        if(e.target.value) {
            // T00:00:00 ensures we don't get timezone shifts
            currentDate = new Date(e.target.value + 'T00:00:00');
            renderPage(currentDate);
        }
    });
}

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
// 4. RENDERING
// ==========================================
function renderPage(date) {
    const t = DICTIONARY[currentLang];
    
    // Translations
    document.getElementById('subtitle').innerText = t.subtitle;
    document.getElementById('tap-hint').innerText = t.hint;
    document.querySelector('[data-i18n="prev"]').innerText = t.prev;
    document.querySelector('[data-i18n="next"]').innerText = t.next;
    document.querySelector('[data-i18n="today"]').innerText = t.today;

    // Date Format
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
    document.getElementById('date-display').innerText = date.toLocaleDateString(locale, options);
    
    // Sync Picker
    const isoDate = date.getFullYear() + '-' + String(date.getMonth()+1).padStart(2,'0') + '-' + String(date.getDate()).padStart(2,'0');
    document.getElementById('date-picker').value = isoDate;

    // Generate Readings
    const list = document.getElementById('readings-list');
    list.innerHTML = '';
    
    const dayOfYear = getDayOfYear(date);

    // Safety check for day 366 (leap years) or bounds
    if (dayOfYear > 365) {
        list.innerHTML = `<p style="text-align:center; color:#888;">${t.finished}</p>`;
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
            
            // Build Search Link
            // Note: We append "Coptic Reader" to ensure Orthodox context
            const searchTerm = `${r.searchQuery} Coptic Reader`;
            card.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
            card.target = "_blank";
            
            // Render
            card.innerHTML = `
                <span class="reading-section">${r.section}</span>
                <span class="reading-ref">${r.displayRef}</span>
            `;
            list.appendChild(card);
        });
    } else {
        list.innerHTML = `<p style="text-align:center; color:#888; padding:2rem;">${t.catchup}</p>`;
    }
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// ==========================================
// 5. NOTIFICATIONS
// ==========================================
function setupNotifications() {
    const btn = document.getElementById('notify-btn');
    if (!("Notification" in window)) { btn.style.display = 'none'; return; }

    btn.addEventListener('click', () => {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                const msg = currentLang === 'en' ? "Reminders Enabled" : "تم تفعيل التذكيرات";
                new Notification("Coptic Bible Plan", { body: msg, icon: 'icons/icon-192.png' });
            }
        });
    });
}
