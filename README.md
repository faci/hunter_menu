# 🍽️ Digital Restaurant Menu

Mobile-first digital restaurant menu built with Next.js.  
Supports multiple languages.

No dashboard. No backend. Just a menu you can edit in minutes.

---

## ✨ Features

- 🌍 Multi-language menu (ES / EN)
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

- Menus are defined as plain TypeScript objects
- Labels use translation keys
- No backend or database required

---

## ✏️ Customization

### ➕ Add a new item to your menu

Adding a new dish takes 2 steps:

---

### 1. Add translations

Edit:

```
/src/app/[locale]/messages/*.json
```

Example:

```json
{
  "menu": {
    "burgers": {
      "items": {
        "cheeseburger": {
          "label": "Cheeseburger",
          "description": "Beef, cheddar, pickles"
        }
      }
    }
  }
}
```

---

### 2. Add the item to your menu

Edit your menu file in:

```
/src/app/[locale]/data/menus
```

Example:

```ts
export const Burgers = {
  id: "burgers",
  categorie: "menu.burgers.title",
  i18nKey: "menu.burgers",
  plats: [
    {
      label: "menu.burgers.items.cheeseburger.label",
      description: "menu.burgers.items.cheeseburger.description",
      price: 9.5,
    },
  ],
};
```

---

## ⚡ Philosophy

Simple > complex.

If updating your menu takes more than a few minutes,  
the tool is already too complicated.

---

## 📄 License

MIT
