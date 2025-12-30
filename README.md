# 🍽️ Digital Restaurant Menu

Mobile-first digital restaurant menu built with Next.js.  
Supports multiple languages and time-based menus (breakfast / dinner).

---

## ✨ Features

- 🌍 Multi-language menu (ES / EN)
- ⏰ Automatic menu switching based on local time
- 📱 Mobile-first design
- 🔗 Scroll-spy category navigation
- 🧩 Fully data-driven menu structure

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 🧠 How it works

- Menus are defined as plain TypeScript objects inside the `/data` folder
- The displayed menu changes automatically based on the user's local time
- Categories are tracked using the Intersection Observer API to highlight the active section
- No backend or database required

---

## ✏️ Customization

- Edit menu items in `/data`
- Change UI constants (colors, etc.) in `/constants`
- Add a new language by duplicating an existing menu file

---

## 📄 License

MIT
