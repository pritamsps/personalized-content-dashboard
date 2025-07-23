# Personalized Content Dashboard

## 🚀 Overview

This project is a dynamic, user-centric "Personalized Content Dashboard" designed to provide a unified and customizable feed of information. It aggregates content like news articles, movie/music recommendations, and social media posts from various sources, allowing users to tailor their experience and interact with the data in an engaging interface.

Built with a focus on modern frontend architecture, robust state management, and efficient API handling, this dashboard showcases key skills in developing complex, interactive web applications.

## ✨ Features

* **Personalized Content Feed:**
    * **User Preferences:** Configure content preferences (e.g., favorite categories like Technology, Sports, Finance) from a dedicated settings panel. Settings are persisted across sessions.
    * **Dynamic Data Fetching:** Integrates with multiple external APIs for diverse content:
        * **News API:** Fetches the latest news articles based on selected categories.
        * **Recommendations API (e.g., TMDB/Spotify):** Provides personalized movie or music suggestions.
        * **Social Media API (Mock):** Displays posts based on specific hashtags or profiles.
* **Interactive Content Cards:**
    * Rich display for each content piece (images, headlines, brief descriptions).
    * Call-to-action buttons like "Read More" or "Play Now."
    * **Infinite Scrolling/Pagination:** Efficiently loads content as the user scrolls.
* **Intuitive Dashboard Layout:**
    * Fully responsive design for seamless experience across devices.
    * Dedicated sidebar for navigation and a top header featuring a search bar, user settings, and account info.
* **Content Sections:**
    * **Unified Feed:** All personalized content (news, recommendations, social posts) in one place.
    * **Trending Section:** Highlights top trending items by category.
    * **Favorites Section:** Curated space for user-marked favorite content.
* **Advanced Search:**
    * Comprehensive search bar to find content across all integrated categories.
    * **Debounced Search:** Optimized for performance, preventing excessive API calls while typing.
* **Enhanced UI/UX:**
    * **Drag-and-Drop Organization:** Users can intuitively reorder content cards in their feed for a custom layout.
    * **Dark Mode Toggle:** Seamless dark mode implementation for improved readability and aesthetics.
    * **Smooth Animations:** Subtle transitions between sections, loading spinners, and interactive card hover effects.

## 🛠️ Tech Stack

**Frontend:**
* **Next.js:** React framework for production-ready applications.
* **React.js:** For building interactive user interfaces.
* **TypeScript:** For type-safe and robust code.
* **Tailwind CSS:** Utility-first CSS framework for rapid and consistent styling.
* **Framer Motion:** For declarative animations and drag-and-drop functionality.
* **Redux Toolkit:** Efficient state management, including `createSlice` and `RTK Query` for API handling.
* **Redux Persist:** For persisting user preferences (dark mode, categories) to local storage.

**API Integration:**
* **News API** (e.g., NewsAPI.org)
* **Recommendations API** (e.g., TMDB API)
* **Social Media API** (Mocked for demonstration)

**Development & Tools:**
* **ESLint:** For maintaining code quality and consistency.
* **Prettier:** For automatic code formatting.
* **Git & GitHub:** Version control and collaborative development.

**Testing:**
* **Unit Testing:** (e.g., Jest, React Testing Library)
* **Integration Testing:** (e.g., React Testing Library)
* **End-to-End (E2E) Testing:** (e.g., Cypress or Playwright)

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (v18.x or higher recommended)
* npm (v8.x or higher) or Yarn


