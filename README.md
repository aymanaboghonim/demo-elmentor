# Elmentor Program - Landing Page

A bilingual (English/Arabic) mentorship community landing page built with Vite and vanilla JavaScript.

[![Deploy to GitHub Pages](https://github.com/aymanaboghonim/demo-elmentor/actions/workflows/deploy.yml/badge.svg)](https://github.com/aymanaboghonim/demo-elmentor/actions/workflows/deploy.yml)

## 🌟 Features

- **Bilingual Support**: Seamless switching between English and Arabic with RTL layout support
- **Responsive Design**: Mobile-first approach optimized for all screen sizes
- **Modern Stack**: Built with Vite 5, vanilla JavaScript (ES2023)
- **Lightweight**: ~7KB gzipped total bundle size
- **Static Site**: No backend required, deployed via GitHub Pages

## 📋 Sections

- Hero with call-to-action
- About the program
- Participant circles (Mentors, Mentees, Alumni, Partners)
- Activities & Benefits showcase
- Founder's vision
- Latest updates/news
- Contact section *(form coming soon)*

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/aymanaboghonim/demo-elmentor.git
cd demo-elmentor

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:5173

### Build for Production

```bash
npm run build
npm run preview
```

## 📦 Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch.

### Enable GitHub Pages (First Time Setup)

1. Go to **Settings** → **Pages** in your repository
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically build and deploy on every push

**Live URL**: https://aymanaboghonim.github.io/demo-elmentor/

## 🛠️ Tech Stack

- **Build Tool**: Vite 5
- **Language**: JavaScript (ES2023)
- **Styling**: Vanilla CSS with CSS custom properties
- **Testing**: Vitest + @testing-library/dom
- **Linting**: ESLint
- **Formatting**: Prettier

## 📁 Project Structure

```
.
├── src/
│   ├── main.js                 # Application entry point
│   ├── components/             # Reusable components
│   │   ├── language-toggle.js
│   │   ├── smooth-scroll.js
│   │   └── form-handler.js
│   ├── sections/               # Page sections
│   │   ├── hero.js
│   │   ├── about.js
│   │   ├── circles.js
│   │   ├── activities.js
│   │   ├── founder.js
│   │   ├── news.js
│   │   ├── join.js
│   │   └── footer.js
│   ├── i18n/                   # Translations
│   │   ├── en.json
│   │   └── ar.json
│   ├── assets/
│   │   ├── styles/             # Global styles
│   │   └── data/               # Static data (circles, news)
│   └── utils/                  # Helper utilities
├── tests/                      # Test files
├── specs/                      # Feature specifications
└── public/                     # Static assets

```

## 🔮 Future Enhancements

See [FUTURE_TASKS.md](./FUTURE_TASKS.md) for planned features:
- Full contact form with Formspree integration
- Additional animations
- More social sharing options

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ for the Elmentor mentorship community**
