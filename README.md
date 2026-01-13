# Optimum Hospitality

A modern, responsive hotel hospitality management landing page built with React, TypeScript, and Tailwind CSS.

![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?logo=tailwindcss&logoColor=white)

## 🏨 About

Optimum Hospitality is a premium hotel management consultancy website showcasing services across Southeast Asia. The site features smooth animations, responsive design, and modern UI/UX patterns.

## ✨ Features

- **Fully Responsive Design** - Optimized for all screen sizes from mobile to desktop
- **Smooth Animations** - Powered by GSAP and Locomotive Scroll
- **Modern UI Components** - Clean, premium design with glassmorphism effects
- **Multi-page Application** - React Router for seamless navigation
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 📄 Pages

| Page           | Route             | Description                                    |
| -------------- | ----------------- | ---------------------------------------------- |
| Home           | `/`               | Landing page with hero, services, testimonials |
| About          | `/about`          | Company information and leadership team        |
| Services       | `/services`       | Overview of hospitality services               |
| Service Detail | `/services/:slug` | Individual service details                     |
| Team           | `/team`           | Team members directory                         |
| Team Member    | `/team/:id`       | Individual team member profile                 |
| Vertize AI     | `/vertize-ai`     | AI partnership and solutions                   |
| Contact        | `/contact`        | Contact form and information                   |

## 🛠️ Tech Stack

### Core

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework

### Animation & UX

- **GSAP** - Professional-grade animations
- **Locomotive Scroll** - Smooth scrolling effects
- **React CountUp** - Animated number counters

### Routing & Icons

- **React Router DOM 7** - Client-side routing
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── assets/
│   └── image/              # All images organized by section
├── components/
│   ├── about/              # About page components
│   ├── common/             # Shared/reusable components
│   ├── contact/            # Contact page components
│   ├── home/               # Home page components
│   ├── layout/             # Navbar, Footer
│   ├── service-detail/     # Service detail components
│   ├── services/           # Services page components
│   ├── team/               # Team page components
│   └── vertize-ai/         # Vertize AI page components
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── ServiceDetailPage.tsx
│   ├── TeamPage.tsx
│   ├── TeamMemberDetailPage.tsx
│   ├── VertizeAiPage.tsx
│   └── ContactPage.tsx
├── App.tsx                 # Main app with routing
├── main.tsx                # Entry point
└── index.css               # Global styles & Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/optimum-hospitality.git
   cd optimum-hospitality
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server with HMR |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build locally  |
| `npm run lint`    | Run ESLint for code quality       |

## 🎨 Design System

### Colors

| Color                  | Variable    | Hex       |
| ---------------------- | ----------- | --------- |
| Primary (Blue)         | `primary`   | `#23283C` |
| Secondary (Cream)      | `secondary` | `#F7EFE3` |
| Tertiary (Light Cream) | `tertinary` | `#FFFDF8` |

### Typography

- **Headings**: Clean, bold typography with responsive sizing
- **Body**: Light weight fonts for readability

## 🌐 Deployment

The project is configured for Vercel deployment with `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

## 📝 License

This project is private and proprietary to Optimum Hospitality Technology Ltd.

---

**© Optimum Hospitality Technology Ltd. 2025**
