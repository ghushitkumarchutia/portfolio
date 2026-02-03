# Ghushit Kumar Chutia | Full-Stack Developer & UI/UX Designer

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Framer Motion](https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

> _"Passionate about crafting clean code and beautiful interfaces."_

## 🚀 Overview

Welcome to my personal portfolio. This project represents a fusion of **technical robustness** and **aesthetic precision**. Built with **React**, **vite**, **Tailwind CSS**, and **Framer Motion**, it features a custom-designed interface that emphasizes fluid interactions, inclusive design (dark/light mode), and a polished visual identity.

The design philosophy revolves around a "bento-grid" style layout, offering a clean, organized, and responsive experience that adapts seamlessly from desktop to mobile.

## ✨ Key Features

- **🎨 Dynamic Theme System**: A robust global theme context that persists user preference (Dark/Light), featuring a smooth toggle animation and high-contrast color palettes.
- **🎬 Cinematic Motion**: Leveraging **Framer Motion** for industry-standard, apple-esque page transitions, ensuring overlays slide with perfect physics (`[0.22, 1, 0.36, 1]` bezier), combined with optimized CSS for lightweight micro-interactions.
- **🖱️ Intelligent Cursor**: A custom-built animated cursor that morphs contextually—shifting from a precise circle to a vertical bar when hovering over text for enhanced readability.
- **📱 Adaptive Layouts**: A dual-architecture approach with distinct `Hero` (Desktop) and `MobileHero` components ensures a native-like feel on any device.
- **🧩 Modular Architecture**: Feature-based folder structure with self-contained, theme-aware components (`About`, `Projects`, `Skills`) for maximum scalability.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Linting**: ESLint + Prettier

## 📂 Project Structure

The project follows a scalable feature-based structure (Refactored):

```
src/
├── assets/          # Static assets (images, textures)
├── components/      # Reusable UI atoms (e.g., CustomCursor)
├── context/         # Global state (ThemeContext)
├── sections/        # Major feature sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Project.jsx
│   ├── Skill.jsx
│   └── MobileHero.jsx
├── App.jsx          # Main Layout & Routing
└── main.jsx         # Entry Point
```

## ⚡ Getting Started

1.  **Clone the repository**

    ```bash
    git clone https://github.com/ghushitkumarchutia/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📬 Contact

I am currently open to new opportunities and collaborations.

- **Email**: ghushitchutia@gmail.com
- **Focus**: AI/ML integration in web experiences

---

© 2026 Ghushit Kumar Chutia. Built with intention.
