# 🌍 KHEOBS NGO Website – Frontend

This is the frontend codebase for the official website of **KHEOBS**, an NGO focused on development research and innovation. Built with **Next.js**, the project aims to deliver a clean, responsive, and content-driven user experience. It integrates dynamic content management, research visualization tools, and communication channels.

---

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) – React framework for server-side rendering and static site generation
- Tailwind CSS – For utility-first styling
- CMS (e.g. Strapi, Sanity, or custom) – For managing editable content (if integrated)
- ArcGIS StoryMap – Embedded mapping
- Zotero – Publications integration
- Facebook/Meta – News feed embedding

---

## 🗂️ Page Structure & Features

### 🏠 Home

- Overview of KHEOBS
- Highlights from:
  - About Us
  - News
  - Featured Projects

### 👤 About Us

#### ➤ Introduction

- Lab history and mission
- Editable via CMS or static HTML
- Includes photo galleries

#### ➤ Team

- Team member profiles (photo + bio)
- Categorized and managed via CMS

### 🔬 Research

#### ➤ Projects

- List of ongoing and completed projects
- Create/edit project entries through CMS

#### ➤ Publications

- Auto-sync with Zotero or manually entered
- Downloadable PDFs or links (optional)

### 📊 Resource

#### ➤ Mapping

- Embedded [ArcGIS StoryMap](https://storymaps.arcgis.com/)
- Instructions included for map interaction

#### ➤ Dashboards

- Embedded data tools, dashboards, and reports
- Manageable via CMS

### 📰 News

- Embedded Facebook feed
- Optional: Internal blog/news article system

### 📞 Contact Us

- Contact form (with email handling)
- Google Map embed for physical address
- Links to social media channels

---

## 🔧 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-org/kheobs-frontend.git
cd kheobs-frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# Open your browser at http://localhost:5173
```
