# Élégance - Luxury Fashion Website

A modern, luxury fashion brand website built with Next.js, Tailwind CSS, Framer Motion, and GSAP ScrollTrigger.

## 🌟 Features

- **Elegant Design**: Minimalist luxury aesthetic with premium typography and gold accents
- **Smooth Animations**: Cinematic scrolling experience with Framer Motion and GSAP
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Performance Optimized**: Lazy loading images, GPU-accelerated animations
- **Modern Tech Stack**: Built with Next.js 14, React 18, and TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
fashion-website/
├── app/
│   ├── globals.css       # Global styles and Tailwind configuration
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar with scroll effects
│   ├── Hero.tsx          # Hero section with parallax
│   ├── ProductGrid.tsx   # Product collection grid
│   ├── FeatureSection.tsx # Feature highlights
│   ├── HorizontalScroll.tsx # Horizontal scrolling lookbook
│   ├── Newsletter.tsx    # Newsletter signup
│   └── Footer.tsx        # Footer component
├── ASSETS/               # Image assets
├── instructions.md       # Development instructions
└── package.json

```

## 🎨 Design System

### Colors
- **Primary**: Luxury Gold (#C5A572)
- **Text**: Rich Black (#111111)
- **Background**: White (#FFFFFF)
- **Accent**: Light Gray (#F8F8F8)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

### Animations
- **Entrance**: 0.8s ease-in-out
- **Hover**: 0.3s scale & color transitions
- **Scroll**: GSAP ScrollTrigger with pinning

## 📱 Sections

1. **Navigation** - Sticky header with transparent-to-white transition
2. **Hero** - Full-screen hero with parallax background
3. **Product Grid** - Responsive 3-column grid with hover effects
4. **Features** - Alternating image/text layouts with scroll animations
5. **Horizontal Scroll** - Cinematic horizontal scrolling lookbook
6. **Newsletter** - Email signup with gradient background
7. **Footer** - Multi-column footer with links and social media

## 🛠 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **GSAP** - ScrollTrigger animations
- **Next/Image** - Optimized image loading

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

Design specifications provided in instructions.md
