# THE FRENCH HUB

**Your Gateway to Master French**

A premium French language institute website offering DELF training, spoken French, and school-level coaching.

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** v4
- **Framer Motion** (animations)
- Functional components only
- No backend

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── WhyChooseUs.jsx
│   ├── Courses.jsx
│   ├── Levels.jsx
│   ├── Benefits.jsx
│   ├── Duration.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── Enroll.jsx
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx
│   └── Card.jsx (reusable)
├── App.jsx
├── main.jsx
└── index.css
```

## Design System

- **Primary:** #0B2C4D (Navy)
- **Accent:** #E63946 (Red)
- **Background:** #FAF6F0 (Cream)
- **Text:** #2E2E2E
- **Fonts:** Poppins, Inter (Google Fonts)

## Configuration

Before going live, update the following:

1. **Enroll Form URL** – In `src/components/Enroll.jsx`, replace `https://forms.google.com/your-link-here` with your actual Google Form link.
2. **WhatsApp Number** – In `src/components/WhatsAppButton.jsx`, update `WHATSAPP_NUMBER` if needed (format: country code + number, no + or spaces).
3. **Contact Info** – Update phone, email, Instagram, and address in `src/components/Contact.jsx` and `src/components/Footer.jsx`.
