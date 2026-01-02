# Coptic Bible Plan PWA

This is a static Progressive Web App designed to distribute the reading of the Coptic Orthodox biblical canon over exactly 365 days.

Most reading plans fail because they rely on fixed chapter counts that get bottlenecked by long books like Psalms or Isaiah. This project uses a deterministic algorithm to calculate daily reading ranges based on the total chapter count of each section (History, Prophets, Wisdom, New Testament). This ensures a balanced pace that mathematically guarantees completion on day 365.

## Project Overview

The application is built for accessibility, specifically targeting older users who need high contrast and large touch targets. It includes the full 73-book canon including the Deuterocanonical books (Tobit, Judith, Maccabees, etc).

### Core Features

* **Algorithmic Scheduling:** The app does not fetch a static list of readings. It calculates the day of the year (1 to 365) and generates the correct chapter ranges dynamically using a float-based daily rate.
* **Bilingual Support:** Full English and Arabic text support with instantaneous RTL layout switching.
* **Offline First:** Uses a Service Worker to cache the application shell and assets. It functions entirely without a network connection after the initial load.
* **Zero Dependencies:** Built using vanilla HTML, CSS, and JavaScript. No build steps, no node modules, and no frameworks.

## Installation

Since this is a PWA you do not need an app store.

1.  Navigate to the hosted URL on a mobile device.
2.  On iOS use the Share button and select Add to Home Screen.
3.  On Android use the Chrome menu and select Install App.

## Technical Structure

The logic resides entirely in `app.js`.

* **Data Structure:** The Bible is stored as a JSON-like object array containing book names (EN/AR) and chapter counts.
* **State Management:** The app tracks the current date and language state in memory. It syncs with the HTML5 Date Input for manual overrides.
* **Math Engine:** The `getReadingForSection` function determines the cumulative chapter target for the current day of the year and maps it back to the specific book and chapter index.

## Deployment

You can host this on any static file server.

1.  Upload the files to a repository.
2.  Enable GitHub Pages or drag the folder into Netlify Drop.
3.  The `manifest.json` and `sw.js` must be in the root directory for the PWA to register correctly.

## License

Free to use and modify.