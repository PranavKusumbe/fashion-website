# Fashion Website Development Instructions

This document contains the complete specifications for building a modern, luxury fashion brand website.



---

## 🧭 1. **Overall Website Structure**

**Framework:** React or Next.js
**Styling:** Tailwind CSS
**Animations:**

* **Framer Motion** → Page and element entrances, hover effects, route transitions
* **GSAP ScrollTrigger** → Scroll storytelling, pinning sections, horizontal scroll effects
* **Optional AOS** → Quick fade-up reveals if needed

**Layout Width:**

* Max container width: `1200px`
* Gutter padding: `1.5rem` on mobile, `3rem` on desktop
* Content should always remain centered and aligned to a vertical rhythm.

**Grid System:**

* Use Tailwind's grid and flex utilities.
* Ensure consistent spacing between sections and elements using Tailwind spacing scale.
* **Section Vertical Spacing:**

  * Hero: `100vh` height
  * Content sections: `min-h-[90vh]`, `pt-24 pb-24` on desktop, `pt-16 pb-16` on mobile
  * Footer: `min-h-[40vh]`, `pt-16`

---

## 🌈 2. **Color & Typography System**

**Theme Style:** Elegant · Minimal · Premium

**Primary Colors:**

* Background: `#FFFFFF`
* Text: `#111111` (Rich Black)
* Accent: `#C5A572` (Luxury Gold) — used for buttons, lines, highlights, and hover states

**Secondary Colors:**

* Light Gray `#F8F8F8` — section backgrounds for contrast
* Dark Gray `#222222` — for footer or darker sections

**Typography:**

* **Headings Font:** *Playfair Display* (Serif, elegant, high contrast)
* **Body Font:** *Inter* or *Poppins* (Sans-serif, clean, modern)
* **Font Sizes:**

  * H1: `clamp(2.5rem, 5vw, 4rem)`
  * H2: `clamp(2rem, 4vw, 3rem)`
  * Body: `clamp(1rem, 2vw, 1.125rem)`
* **Line Height:**

  * Headings: `1.4`
  * Body: `1.6`
* **Font Weights:**

  * Headings: `600–700`
  * Body: `400–600`
* **Letter-spacing:** `0.5px` on headings for an airy, luxury look.
* Use only **two fonts max** throughout the site.

---

## ✨ 3. **Animation & Transition System**

**Entrance Animations (Framer Motion):**

* All sections fade in and slide up as they enter viewport.
* Hero headlines split into multiple lines with staggered reveal.
* Duration: `0.8s`
* Ease: `easeInOut`
* Stagger children for elegant reveal sequences.

**Scroll Animations (GSAP ScrollTrigger):**

* Sections pin and transition smoothly as the user scrolls down.
* Use parallax effects (background moves slower than scroll).
* As one section scrolls out, the next fades in smoothly (opacity & position).

**Hover Animations:**

* **Buttons:** Slight scale up `scale(1.05)` + smooth color transition + soft shadow.
* **Product Cards:** Image zoom-in + overlay fade-in with "View Details" CTA on hover.

**Page Transitions:**

* Use Framer Motion's `AnimatePresence` to fade out old content and fade in new content on route changes.

**Cursor (Optional):**

* Replace default cursor with a small dot.
* Expand the dot on hover over interactive elements for a modern feel.

**Timing Consistency:**

* All fade/slide transitions use `0.8s easeInOut` for a unified motion system.

---

## 📐 4. **Website Section Breakdown**

### 🟡 (1) Navigation Bar — Height: `80px`

* Sticky at the top.
* Transparent on the hero section, transitions to white background with shadow after scroll.
* **Layout:**

  * Left: Logo
  * Center or Right: Nav links
  * Far right: CTA (e.g., "Shop Now")
* Hover underline animation for nav links.
* Mobile: Hamburger menu slides in from the right with smooth transition.

---

### 🌟 (2) Hero Section — Height: `100vh`

* **Background:** High-quality full-screen image or subtle gradient (`linear-gradient(120deg, #FFFFFF, #F8F8F8)`).
* **Layout:** Centered vertically and horizontally.
* **Content:**

  * H1 headline split into lines → staggered animation
  * Subtext fades in afterward
  * CTA button slides up with delay
* Optional: Ken Burns effect (slow background zoom + opacity change)
* **Scroll Behavior:** Hero pins for the first 100vh with parallax background movement.

---

### 👗 (3) Product Grid / Collection Section — Min Height: `90vh`

* **Grid:**

  * 3 columns on desktop
  * 2 on tablet
  * 1 on mobile
* **Card Structure:**

  * Image
  * Product Name
  * Price
  * Hover: Image zoom-in + overlay with "View Details" button.
* Section title centered with gold underline accent.
* **Animation:** Cards fade up one by one as they enter viewport.

---

### 🖼 (4) Feature Highlight Sections (2–3 alternating blocks)

* Alternating image/text layouts.
* Each section ~90vh.
* Background alternates between white and light gray.
* **Layout:**

  * Image left, text right; next section reversed.
* **Animation:**

  * Scroll-triggered slide-in for image and text from opposite sides.
  * GSAP pinning for storytelling effect.

---

### 🧭 (5) Horizontal Scroll Lookbook Section — Min Height: `100vh`

* Vertical scrolling triggers **horizontal scrolling** of multiple fashion lookbook images.
* Background stays fixed.
* Images slide horizontally using GSAP horizontal transform.
* Clean navigation indicators or minimal arrows if needed.

---

### 📩 (6) Newsletter / CTA Section — Min Height: `60vh`

* Center-aligned content.
* **Background:** Gradient from gold to white.
* **Elements:**

  * Headline
  * Subtext
  * Email input + CTA button in one row (stacked on mobile)
* **Animation:**

  * Fade-up on scroll
  * Input and button animate sequentially.

---

### ⚫ (7) Footer — Min Height: `40vh`

* **Background:** `#111111` (dark)
* **Text:** Light
* **Layout:** 3 or 4 columns using grid

  * Logo
  * Navigation Links
  * Social Media
  * Contact Info
* Thin top border in gold.
* Bottom copyright centered.
* **Animation:** Fade-in from bottom on scroll.

---

## 🪄 5. **Consistency & Theming Rules**

* All sections must use **the same typography, spacing rhythm, animation easing, and button styles**.
* Backgrounds alternate between white and light gray to provide subtle visual separation.
* Button designs remain consistent across hero, product cards, and CTA sections.
* Animation timing and easing remain uniform throughout.
* Avoid mixing too many animation techniques—stick with **Framer Motion for entrances and interactions**, **GSAP ScrollTrigger for scroll control**.
* Ensure all transitions feel smooth, never abrupt.

---

## ⚡ 6. **Responsive Design Rules**

* Navbar collapses into a hamburger menu at `lg` breakpoint.
* Product grid adjusts:

  * Mobile → 1 column
  * Tablet → 2 columns
  * Desktop → 3 columns
* Feature sections stack vertically on mobile (image on top, text below).
* Horizontal scroll section turns into a **simple vertical image carousel** on mobile for better UX.
* Typography uses `clamp()` for fluid scaling between devices.
* Buttons and paddings adjust using Tailwind's responsive utilities.

---

## 🧪 7. **Performance & Optimization**

* Use `loading="lazy"` for all images.
* Compress and optimize all background and product images.
* Use `will-change: transform;` on animated elements for smoother GPU-accelerated transitions.
* Avoid running too many heavy animations simultaneously.
* Keep DOM structure clean and semantic for better performance and SEO.

---

## ✨ Final Result Expectation

The final website should deliver a **high-end, cinematic scrolling experience**, with **pinning and storytelling transitions**, **buttery-smooth animations**, and **a consistent luxury aesthetic**.

It should feel **refined, elegant, and minimal**, with **fluid typography**, **intentional spacing**, **elegant hover effects**, and **scroll-triggered animations** that guide the user through each section seamlessly.

This structure is ideal for **premium fashion brands**, **boutiques**, **jewelry stores**, or any **luxury product website**.

---


