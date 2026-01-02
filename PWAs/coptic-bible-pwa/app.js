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

const DICTIONARY = {
    en: {
        tap_text: "Tap to Change Date",
        prev: "Prev", next: "Next", today: "Today",
        sec_hist: "History", sec_proph: "Prophets",
        sec_wis: "Wisdom", sec_nt: "New Testament",
        finished: "All done for today!",
        catchup: "Rest & Reflection Day"
    },
    ar: {
        tap_text: "اضغط لتغيير التاريخ",
        prev: "السابق", next: "التالي", today: "اليوم",
        sec_hist: "التاريخ", sec_proph: "الأنبياء",
        sec_wis: "الحكمة", sec_nt: "العهد الجديد",
        finished: "أكملت قراءة اليوم!",
        catchup: "يوم راحة وتأمل"
    }
};

const GREETINGS = {
    en: [
        "Good Morning! Let's start with the Word.", 
        "Peace be with you. Ready for today's wisdom?", 
        "A lamp to my feet and a light to my path.", 
        "Take a moment. Breathe. Read.",
        "Today is a great day to grow closer to Him."
    ],
    ar: [
        "صباح الخير! لنبدأ بكلمة الرب.",
        "سلام لكم. هل أنت مستعد لحكمة اليوم؟",
        "سراج لرجلي كلامك ونور لسبيلي.",
        "خذ لحظة. تنفس. اقرأ.",
        "اليوم هو يوم عظيم للاقتراب منه."
    ]
};

let currentDate = new Date();
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    renderPage(currentDate);
    showDailyGreeting();
    setupDatePicker();
});

document.getElementById('lang-btn').addEventListener('click', (e) => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    e.target.innerText = currentLang === 'en' ? 'عربي' : 'English';
    document.body.classList.toggle('rtl', currentLang === 'ar');
    renderPage(currentDate);
    showDailyGreeting();
});

function setupDatePicker() {
    const picker = document.getElementById('date-picker');
    picker.addEventListener('change', (e) => {
        if(e.target.value) {
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

function showDailyGreeting() {
    const banner = document.getElementById('daily-message');
    const msgs = GREETINGS[currentLang];
    const dayIndex = new Date().getDate() % msgs.length;
    banner.innerText = msgs[dayIndex];
    banner.style.display = 'block';
}

function getTotalChapters(section) {
    return section.reduce((sum, book) => sum + book.c, 0);
}

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
    let lastBook = section[section.length - 1];
    return { bookEn: lastBook.en, bookAr: lastBook.ar, chapter: lastBook.c };
}

function getReadingForSection(section, sectionTitle, dayOfYear) {
    const totalChapters = getTotalChapters(section);
    const dailyRate = totalChapters / 365;

    const startAbsolute = Math.floor((dayOfYear - 1) * dailyRate) + 1;
    const endAbsolute = Math.floor(dayOfYear * dailyRate);

    if (startAbsolute > endAbsolute) return null;

    const startRead = getChapterFromAbsolute(section, startAbsolute);
    const endRead = getChapterFromAbsolute(section, endAbsolute);

    let displayRef = "";
    let searchString = "";

    if (startRead.bookEn === endRead.bookEn) {
        if (startRead.chapter === endRead.chapter) {
            displayRef = `${currentLang === 'ar' ? startRead.bookAr : startRead.bookEn} ${startRead.chapter}`;
            searchString = `${startRead.bookEn} ${startRead.chapter}`;
        } else {
            displayRef = `${currentLang === 'ar' ? startRead.bookAr : startRead.bookEn} ${startRead.chapter}-${endRead.chapter}`;
            searchString = `${startRead.bookEn} ${startRead.chapter}-${endRead.chapter}`;
        }
    } else {
        const b1 = currentLang === 'ar' ? startRead.bookAr : startRead.bookEn;
        const b2 = currentLang === 'ar' ? endRead.bookAr : endRead.bookEn;
        displayRef = `${b1} ${startRead.chapter} — ${b2} ${endRead.chapter}`;
        searchString = `${startRead.bookEn} ${startRead.chapter} ${endRead.bookEn} ${endRead.chapter}`;
    }

    return { section: sectionTitle, displayRef: displayRef, searchQuery: searchString };
}

function renderPage(date) {
    const t = DICTIONARY[currentLang];
    document.getElementById('change-date-text').innerText = t.tap_text;
    document.querySelector('[data-i18n="prev"]').innerText = t.prev;
    document.querySelector('[data-i18n="next"]').innerText = t.next;
    document.querySelector('[data-i18n="today"]').innerText = t.today;

    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
    document.getElementById('date-display').innerText = date.toLocaleDateString(locale, options);
    
    const isoDate = date.getFullYear() + '-' + String(date.getMonth()+1).padStart(2,'0') + '-' + String(date.getDate()).padStart(2,'0');
    document.getElementById('date-picker').value = isoDate;

    const list = document.getElementById('readings-list');
    list.innerHTML = '';
    
    const dayOfYear = getDayOfYear(date);

    if (dayOfYear > 365) {
        list.innerHTML = `<p style="text-align:center; color:#999;">${t.finished}</p>`;
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
            card.href = `https://www.google.com/search?q=${encodeURIComponent(r.searchQuery + " Coptic Reader")}`;
            card.target = "_blank";
            
            card.innerHTML = `
                <span class="reading-section">${r.section}</span>
                <span class="reading-ref">${r.displayRef}</span>
            `;
            list.appendChild(card);
        });
    } else {
        list.innerHTML = `<p style="text-align:center; color:#999; padding:2rem;">${t.catchup}</p>`;
    }
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}
