# ⚡ AHMAD Store — Product Requirements Document

> **Version:** 3.0.0 · **Status:** Approved for Development · **Date:** May 2026
> **Stack:** React.js · Node.js · MongoDB · Firebase Auth · Tailwind CSS · Framer Motion
> **Prepared for:** AHMAD Store Engineering & Product Team

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision & Goals](#2-product-vision--goals)
3. [Target Audience](#3-target-audience)
4. [Tech Stack & Architecture](#4-tech-stack--architecture)
5. [Folder Structure](#5-folder-structure)
6. [Environment Variables & Configuration](#6-environment-variables--configuration)
7. [Design System](#7-design-system)
8. [Page-by-Page Specifications](#8-page-by-page-specifications)
   - [8.1 Home Page](#81-home-page)
   - [8.2 Products Page](#82-products-page)
   - [8.3 Product Details Page](#83-product-details-page)
   - [8.4 Cart Page](#84-cart-page)
   - [8.5 Wishlist Page](#85-wishlist-page)
   - [8.6 Signup Page](#86-signup-page)
   - [8.7 Login Page](#87-login-page)
   - [8.8 About Us Page](#88-about-us-page)
   - [8.9 Contact Page](#89-contact-page)
   - [8.10 Admin Dashboard](#810-admin-dashboard)
   - [8.11 Order Tracking Page](#811-order-tracking-page)
   - [8.12 404 & Error Pages](#812-404--error-pages)
9. [Component Library](#9-component-library)
10. [API Reference](#10-api-reference)
11. [Database Schema](#11-database-schema)
12. [Authentication System](#12-authentication-system)
13. [State Management](#13-state-management)
14. [Animation Catalogue](#14-animation-catalogue)
15. [SEO Strategy](#15-seo-strategy)
16. [Performance Targets](#16-performance-targets)
17. [Security Requirements](#17-security-requirements)
18. [Dummy Data Seeding](#18-dummy-data-seeding)
19. [Deployment Guide](#19-deployment-guide)
20. [Testing Strategy](#20-testing-strategy)
21. [Open Questions](#21-open-questions)
22. [Glossary](#22-glossary)

---

## 1. Executive Summary

AHMAD Store is a **premium, full-stack eCommerce web application** specializing in computers and consumer electronics. Built on a modern React + Node.js + MongoDB stack with Firebase Authentication, it delivers a visually stunning, production-ready shopping experience with an integrated admin dashboard, real-time order tracking, and advanced filtering.

### Store Identity

| Field | Value |
|---|---|
| Store Name | AHMAD Store |
| Tagline | *"Power Your World with the Best in Tech"* |
| Contact | +92 349 9344466 |
| Email | talhaahmad1379@gmail.com |
| Address | KPK, Pakistan |
| Theme | Dark, futuristic, blue & white accents |

### Key Differentiators

- Cinematic page transitions powered by Framer Motion
- Custom animated cursor with magnetic hover effects
- Glassmorphism product cards with depth-layered glow
- Persistent cart & wishlist via Redux + localStorage
- Full admin panel with live analytics charts
- SEO-optimized SSG-ready structure for Vercel

---

## 2. Product Vision & Goals

### Vision

To be Pakistan's most visually impressive and technically robust online electronics destination — where every interaction feels premium, every animation is purposeful, and every purchase is seamless.

### Business Goals

| Goal | Target | Timeframe |
|---|---|---|
| Monthly Active Users | 5,000+ | Month 3 |
| Conversion Rate | 3.5%+ | Month 3 |
| Average Session Duration | 4+ minutes | Month 2 |
| Cart Abandonment Rate | < 65% | Month 3 |
| Lighthouse Performance Score | 90+ | Launch |
| Lighthouse SEO Score | 95+ | Launch |

### Product Goals

1. Ship 10 fully animated, production-ready pages at launch
2. Zero auth-related security incidents in first 6 months
3. Admin can manage entire catalogue without developer intervention
4. Mobile-first: 100% feature parity on all screen sizes ≥ 320px
5. Sub-2-second LCP on all key pages

---

## 3. Target Audience

### Primary Personas

**Persona A — The Gamer (18–28)**
- Wants: GPUs, gaming peripherals, RGB everything
- Device: Desktop (75%), mobile (25%)
- Behavior: Browses late at night, impulse-buys on discount
- Pain point: Hard to find legitimate stock + price comparisons in KPK

**Persona B — The Professional (25–40)**
- Wants: Business laptops, SSDs, monitors
- Device: Desktop (60%), mobile (40%)
- Behavior: Reads reviews, compares specs, slow to convert
- Pain point: No trusted local online store with detailed specs

**Persona C — The Student (16–22)**
- Wants: Budget RAM, keyboards, mice
- Device: Mobile (80%), desktop (20%)
- Behavior: Price-sensitive, social-proof driven, wishlist-heavy
- Pain point: Shipping cost & cash-on-delivery availability

---

## 4. Tech Stack & Architecture

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| React.js | 18.x | UI framework |
| React Router DOM | 6.x | Client-side routing |
| Tailwind CSS | 3.x | Utility-first styling |
| Framer Motion | 11.x | Animations & transitions |
| Redux Toolkit | 2.x | Global state (cart, wishlist, auth) |
| React Query | 5.x | Server state, caching, refetching |
| Axios | 1.x | HTTP client |
| React Hook Form | 7.x | Form management |
| Zod | 3.x | Schema validation |
| React Hot Toast | 2.x | Toast notifications |
| Recharts | 2.x | Admin analytics charts |
| Lucide React | latest | Icon library |
| React Helmet Async | 2.x | SEO meta tags |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Node.js | 20 LTS | Runtime |
| Express.js | 4.x | REST API framework |
| MongoDB | 7.x | Database |
| Mongoose | 8.x | ODM |
| Firebase Admin SDK | 12.x | Token verification |
| Multer | 1.x | File uploads |
| Cloudinary | 2.x | Image CDN |
| express-rate-limit | 7.x | Rate limiting |
| helmet | 7.x | HTTP security headers |
| morgan | 1.x | Request logging |
| cors | 2.x | CORS configuration |
| dotenv | 16.x | Environment variables |
| compression | 1.x | Gzip compression |

### Authentication

| Technology | Purpose |
|---|---|
| Firebase Authentication | Email/password + Google + GitHub OAuth |
| Firebase Admin SDK | Backend token verification |
| JWT (via Firebase) | Stateless session tokens |

### Infrastructure

| Service | Purpose |
|---|---|
| Vercel | Frontend hosting + serverless edge |
| Railway / Render | Node.js backend hosting |
| MongoDB Atlas | Managed database |
| Cloudinary | Product image CDN |
| Firebase | Auth provider |
| Google Maps Embed API | Contact page map |

### Architecture Diagram (Text)

```
Browser (React SPA)
    │
    ├── Firebase Auth SDK ─────────────────→ Firebase (auth.google.com)
    │
    ├── Axios (API calls with Bearer token)
    │        │
    │        ▼
    │   Vercel Edge / Express.js (Node.js)
    │        │
    │        ├── Firebase Admin (verify token)
    │        ├── Mongoose ODM
    │        │       │
    │        │       ▼
    │        │   MongoDB Atlas
    │        │
    │        └── Cloudinary (image upload/serve)
    │
    └── React Query (cache + refetch)
```

---

## 5. Folder Structure

```
ahmad-store/
│
├── client/                          # React Frontend
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── manifest.json
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/              # Static images, hero banners
│   │   │   ├── icons/               # Custom SVG icons
│   │   │   └── fonts/               # Custom font files
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── CustomCursor.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── PageTransition.jsx
│   │   │   │   ├── ScrollToTop.jsx
│   │   │   │   ├── ThemeToggle.jsx
│   │   │   │   └── ToastProvider.jsx
│   │   │   │
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Skeleton.jsx
│   │   │   │   ├── Spinner.jsx
│   │   │   │   └── Tooltip.jsx
│   │   │   │
│   │   │   ├── product/
│   │   │   │   ├── ProductCard.jsx
│   │   │   │   ├── ProductGrid.jsx
│   │   │   │   ├── ProductFilters.jsx
│   │   │   │   ├── ProductSort.jsx
│   │   │   │   ├── ProductImageGallery.jsx
│   │   │   │   ├── ProductReviews.jsx
│   │   │   │   ├── StarRating.jsx
│   │   │   │   └── RelatedProducts.jsx
│   │   │   │
│   │   │   ├── cart/
│   │   │   │   ├── CartItem.jsx
│   │   │   │   ├── CartSummary.jsx
│   │   │   │   └── CartDrawer.jsx
│   │   │   │
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── FeaturedProducts.jsx
│   │   │   │   ├── CategorySection.jsx
│   │   │   │   ├── TrendingSection.jsx
│   │   │   │   ├── NewsletterBanner.jsx
│   │   │   │   └── BrandsSection.jsx
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── AdminSidebar.jsx
│   │   │       ├── AdminHeader.jsx
│   │   │       ├── AnalyticsCard.jsx
│   │   │       ├── ProductTable.jsx
│   │   │       ├── OrderTable.jsx
│   │   │       └── CustomerTable.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Wishlist.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── OrderTracking.jsx
│   │   │   ├── NotFound.jsx
│   │   │   └── admin/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── ProductManagement.jsx
│   │   │       ├── OrderManagement.jsx
│   │   │       └── CustomerManagement.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── store/
│   │   │   ├── index.js              # Redux store
│   │   │   ├── cartSlice.js
│   │   │   ├── wishlistSlice.js
│   │   │   └── authSlice.js
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useCart.js
│   │   │   ├── useWishlist.js
│   │   │   ├── useProducts.js
│   │   │   ├── useDebounce.js
│   │   │   ├── useLocalStorage.js
│   │   │   └── useScrollPosition.js
│   │   │
│   │   ├── api/
│   │   │   ├── axiosConfig.js        # Axios instance + interceptors
│   │   │   ├── products.api.js
│   │   │   ├── orders.api.js
│   │   │   ├── users.api.js
│   │   │   ├── reviews.api.js
│   │   │   └── admin.api.js
│   │   │
│   │   ├── utils/
│   │   │   ├── formatPrice.js
│   │   │   ├── formatDate.js
│   │   │   ├── validateForm.js
│   │   │   ├── generateSlug.js
│   │   │   └── constants.js
│   │   │
│   │   ├── animations/
│   │   │   ├── variants.js           # Framer Motion variants
│   │   │   └── transitions.js        # Shared transition configs
│   │   │
│   │   ├── styles/
│   │   │   ├── globals.css           # Tailwind + custom CSS vars
│   │   │   ├── scrollbar.css
│   │   │   └── cursor.css
│   │   │
│   │   ├── firebase.js               # Firebase SDK config
│   │   ├── App.jsx                   # Routes + layout wrappers
│   │   └── main.jsx                  # ReactDOM.createRoot
│   │
│   ├── .env.local                    # Frontend env vars (gitignored)
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                           # Node.js Backend
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── product.controller.js
│   │   │   ├── order.controller.js
│   │   │   ├── user.controller.js
│   │   │   ├── review.controller.js
│   │   │   └── admin.controller.js
│   │   │
│   │   ├── models/
│   │   │   ├── Product.model.js
│   │   │   ├── Order.model.js
│   │   │   ├── User.model.js
│   │   │   └── Review.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── product.routes.js
│   │   │   ├── order.routes.js
│   │   │   ├── user.routes.js
│   │   │   ├── review.routes.js
│   │   │   └── admin.routes.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js    # Firebase token verification
│   │   │   ├── admin.middleware.js   # Admin role check
│   │   │   ├── rateLimiter.js
│   │   │   ├── errorHandler.js
│   │   │   └── upload.middleware.js  # Multer + Cloudinary
│   │   │
│   │   ├── config/
│   │   │   ├── db.js                 # MongoDB connection
│   │   │   ├── cloudinary.js
│   │   │   └── firebase-admin.js
│   │   │
│   │   ├── utils/
│   │   │   ├── ApiError.js
│   │   │   ├── ApiResponse.js
│   │   │   └── asyncHandler.js
│   │   │
│   │   └── seed/
│   │       ├── products.seed.js      # 50 dummy products
│   │       └── users.seed.js         # 5 dummy users
│   │
│   ├── .env                          # Server env vars (gitignored)
│   ├── index.js                      # Express app entry
│   └── package.json
│
├── .gitignore
├── README.md
└── vercel.json                       # Vercel deployment config
```

---

## 6. Environment Variables & Configuration

### Client (`client/.env.local`)

```env
# Firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Backend
VITE_API_BASE_URL=https://your-backend.railway.app/api/v1

# Google Maps
VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key
```

### Server (`server/.env`)

```env
# App
NODE_ENV=production
PORT=5000
CLIENT_URL=https://ahmadstore.vercel.app

# MongoDB
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/ahmadstore

# Firebase Admin
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@your_project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Admin
ADMIN_EMAIL=talhaahmad1379@gmail.com
```

---

## 7. Design System

### Color Palette

```css
:root {
  /* Primary Brand */
  --color-primary:        #2563EB;   /* Blue 600 — CTAs, links */
  --color-primary-light:  #3B82F6;   /* Blue 500 — hover states */
  --color-primary-glow:   rgba(37, 99, 235, 0.35);

  /* Surfaces (Dark Mode) */
  --color-bg:             #050A18;   /* Near-black navy — page background */
  --color-surface:        #0D1526;   /* Card backgrounds */
  --color-surface-2:      #111E35;   /* Elevated cards */
  --color-border:         rgba(255,255,255,0.08);

  /* Text */
  --color-text-primary:   #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-text-muted:     #475569;

  /* Semantic */
  --color-success:        #10B981;
  --color-warning:        #F59E0B;
  --color-danger:         #EF4444;
  --color-info:           #06B6D4;

  /* Glow effects */
  --glow-blue:            0 0 30px rgba(37, 99, 235, 0.4);
  --glow-blue-sm:         0 0 15px rgba(37, 99, 235, 0.25);
  --glow-white:           0 0 20px rgba(248, 250, 252, 0.1);

  /* Glassmorphism */
  --glass-bg:             rgba(13, 21, 38, 0.7);
  --glass-blur:           blur(20px);
  --glass-border:         1px solid rgba(255,255,255,0.08);
}

/* Light Mode Overrides */
[data-theme="light"] {
  --color-bg:             #F0F4FF;
  --color-surface:        #FFFFFF;
  --color-surface-2:      #F8FAFC;
  --color-text-primary:   #0F172A;
  --color-text-secondary: #475569;
  --color-border:         rgba(0,0,0,0.08);
  --glass-bg:             rgba(255,255,255,0.7);
}
```

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero | `Orbitron` (Google Fonts) | 700, 900 | 48px–96px |
| Headings | `Space Grotesk` | 600, 700 | 24px–40px |
| Body | `Inter` | 400, 500 | 14px–16px |
| Mono / Code | `JetBrains Mono` | 400 | 13px |
| Price tags | `Orbitron` | 700 | 18px–28px |

### Spacing Scale

Uses Tailwind's default 4px-base scale. Key breakpoints:

| Breakpoint | Width | Layout |
|---|---|---|
| `sm` | 640px | Single column |
| `md` | 768px | 2-column grid |
| `lg` | 1024px | 3-column grid |
| `xl` | 1280px | 4-column grid |
| `2xl` | 1536px | 4-column + sidebar |

### Component Tokens

| Component | Radius | Shadow |
|---|---|---|
| Cards | `16px` | `var(--glow-blue-sm)` on hover |
| Buttons (primary) | `9999px` (pill) | `var(--glow-blue)` on hover |
| Buttons (secondary) | `8px` | None |
| Inputs | `10px` | Blue ring on focus |
| Modals | `20px` | `0 25px 80px rgba(0,0,0,0.6)` |
| Navbar | `0` | `backdrop-filter: blur(20px)` |

---

## 8. Page-by-Page Specifications

### 8.1 Home Page

**Route:** `/`  
**Access:** Public

#### Sections (in order)

| # | Section | Description |
|---|---|---|
| 1 | **Navbar** | Sticky, blur-glass, animated on scroll (shadow + shrink) |
| 2 | **Hero** | Full-viewport animated banner with 3 slides (auto-play carousel), CTA buttons, floating product mockup |
| 3 | **Category Strip** | 9 animated icon + label cards (CPUs, RAMs, LCDs, Keyboards, Mice, GPUs, SSDs, Motherboards, Gaming) |
| 4 | **Featured Products** | 4-wide grid of `ProductCard` components, "View All" CTA |
| 5 | **Trending Now** | Horizontal scroll strip of 8 trending products with live "🔥 Hot" badge |
| 6 | **Brands Banner** | Logo marquee strip (Intel, AMD, Nvidia, Samsung, Corsair, ASUS, Logitech, Seagate) |
| 7 | **Why AHMAD Store** | 4 icon + copy cards: Fast Delivery · Genuine Products · Easy Returns · 24/7 Support |
| 8 | **Newsletter Banner** | Email subscription input with glowing submit button |
| 9 | **Footer** | Full links, social icons, contact details |

#### Hero Slides Content

| Slide | Headline | Subline | CTA |
|---|---|---|---|
| 1 | "Level Up Your Setup" | "RTX 40-Series GPUs — Now in Stock" | Shop GPUs |
| 2 | "Build Your Dream PC" | "Intel 14th Gen + DDR5 Bundles" | Explore Bundles |
| 3 | "Gaming Gear Drop" | "Keyboards · Mice · Headsets · Pads" | Shop Gaming |

#### Framer Motion Specs

- Hero text: `staggerChildren: 0.15`, each child `fadeInUp` (y: 40 → 0)
- Category cards: `staggerChildren: 0.05` on viewport enter
- Product cards: viewport-triggered `fadeIn` with `once: true`
- Brands marquee: `x: 0 → -50%`, `repeat: Infinity`, no spring

---

### 8.2 Products Page

**Route:** `/products`  
**Access:** Public

#### Layout

- Left sidebar (desktop): filters panel (collapsible on mobile as bottom sheet)
- Right main area: sort bar + product grid

#### Filter Options

| Filter | Type | Options |
|---|---|---|
| Category | Multi-select checkboxes | CPUs · RAMs · LCDs · Keyboards · Mice · Graphics Cards · SSDs · Motherboards · Gaming Accessories |
| Price Range | Dual-handle range slider | PKR 0 — PKR 500,000 |
| Brand | Multi-select checkboxes | Intel · AMD · Nvidia · Samsung · Corsair · ASUS · Logitech · Seagate · WD · Kingston |
| Rating | Star selector | 4★+ · 3★+ · 2★+ · Any |
| Availability | Toggle | In Stock only |
| Discount | Toggle | On Sale only |

#### Sort Options

- Newest First (default)
- Price: Low to High
- Price: High to Low
- Best Rating
- Most Reviewed
- Most Popular

#### Product Grid

- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column (full-width cards)
- Pagination: 20 products per page + "Load More" button (infinite scroll option via React Query)
- Skeleton loader: show 8 animated skeletons while fetching

#### ProductCard Component Fields

| Field | Source |
|---|---|
| Product image | Cloudinary URL |
| Product name | DB |
| Category badge | DB |
| Star rating | Avg of reviews |
| Review count | DB |
| Price (PKR) | DB |
| Discount badge | If `discountPercent > 0` |
| Add to Cart button | Redux action |
| Wishlist heart icon | Redux toggle |
| "Low Stock" badge | If `stock ≤ 5` |

---

### 8.3 Product Details Page

**Route:** `/products/:slug`  
**Access:** Public

#### Sections

| Section | Details |
|---|---|
| **Breadcrumb** | Home › Category › Product Name |
| **Image Gallery** | Main image + 4 thumbnails, click-to-zoom lightbox, swipe on mobile |
| **Product Info** | Name, brand, SKU, category, rating, review count |
| **Pricing Block** | Current price, original price (strikethrough), discount % badge, availability status |
| **Variant Selector** | (If applicable) color / storage / RAM variant chips |
| **Quantity Selector** | +/– stepper (1–99), respects stock limit |
| **Action Buttons** | Add to Cart (primary, glowing), Add to Wishlist (secondary), Buy Now (direct checkout) |
| **Delivery Info** | "Ships to KPK in 1–3 days" + COD badge |
| **Product Specs Table** | Key-value spec sheet (dynamic, from DB `specs` object) |
| **Description** | Rich text product description |
| **Reviews Section** | Star histogram, individual review cards, "Write a Review" form (auth required) |
| **Related Products** | Horizontal scroll of 6 same-category products |

#### Review Form Fields

- Overall rating (interactive stars)
- Review title (max 80 chars)
- Review body (max 500 chars)
- Submit button (disabled until rating selected)

---

### 8.4 Cart Page

**Route:** `/cart`  
**Access:** Public (persisted via localStorage)

#### Layout

- Left: Cart items list
- Right: Order summary card (sticky on desktop)

#### Cart Item Row Fields

| Field | Interaction |
|---|---|
| Product thumbnail | Links to product detail |
| Product name | Links to product detail |
| Category | Static |
| Unit price | Static |
| Quantity stepper | +/– buttons, min 1, max stock |
| Item total | Computed |
| Remove button | Slide-out animation on remove |

#### Order Summary Card

| Line | Calculation |
|---|---|
| Subtotal | Sum of all item totals |
| Shipping | Free if > PKR 5,000, else PKR 200 |
| Discount | Applied coupon code deduction |
| **Total** | Subtotal + Shipping − Discount |

#### Coupon System

- Input field + "Apply" button
- Codes stored in DB, validated via API
- Visual feedback: green success / red invalid

#### Empty Cart State

- Animated illustration + "Your cart is empty" + "Start Shopping" CTA

---

### 8.5 Wishlist Page

**Route:** `/wishlist`  
**Access:** Auth required (redirect to `/login`)

#### Layout

- Same card grid as Products page
- Each card has: "Move to Cart" button + "Remove" button
- Empty state: animated heart illustration + CTA

---

### 8.6 Signup Page

**Route:** `/signup`  
**Access:** Public (redirect to `/` if already authed)

#### Form Fields

| Field | Validation |
|---|---|
| Full Name | Required, 2–50 chars |
| Username | Required, 3–20 chars, alphanumeric + underscore, unique |
| Email | Required, valid email format |
| Password | Required, min 8 chars, 1 uppercase, 1 number, 1 special char |
| Confirm Password | Must match Password |
| Terms & Conditions | Checkbox, required |

#### Auth Options

- Email/password signup (primary)
- Continue with Google (OAuth button)
- Continue with GitHub (OAuth button)

#### UI Details

- Split-screen layout: animated product showcase left, form right
- Password strength indicator bar (4 levels: Weak / Fair / Good / Strong)
- Real-time field validation with animated error messages
- Success state: animated checkmark + redirect countdown

---

### 8.7 Login Page

**Route:** `/login`  
**Access:** Public (redirect to `/` if already authed)

#### Form Fields

| Field | Validation |
|---|---|
| Email | Required, valid format |
| Password | Required |
| Remember Me | Checkbox (persists session) |

#### Auth Options

- Email/password (primary)
- Continue with Google
- Continue with GitHub
- Forgot Password link → modal with email input → Firebase password reset email

#### Security UX

- 5 failed attempts → show CAPTCHA (reCAPTCHA v2 checkbox)
- Loading spinner on submit button during auth
- Error messages from Firebase mapped to user-friendly copy

---

### 8.8 About Us Page

**Route:** `/about`  
**Access:** Public

#### Sections

| Section | Content |
|---|---|
| **Hero** | "About AHMAD Store" headline + subtext, animated line reveal |
| **Our Story** | Founding narrative, 2-column text + image layout |
| **Mission & Vision** | 2 large animated cards with icons |
| **Key Stats** | Animated number counters: 500+ Products · 2000+ Customers · 3 Years · 4.8★ Avg Rating |
| **Our Values** | 4 glassmorphism cards: Authenticity · Quality · Speed · Support |
| **Team Section** | 3 animated team member cards (placeholder avatars, name, role) |
| **Location Map** | Embedded Google Maps iframe, KPK Pakistan pin |

---

### 8.9 Contact Page

**Route:** `/contact`  
**Access:** Public

#### Left Column: Contact Info

| Item | Value |
|---|---|
| Phone | +92 349 9344466 |
| Email | talhaahmad1379@gmail.com |
| Address | KPK, Pakistan |
| Hours | Mon–Sat 10:00 AM – 8:00 PM PKT |
| WhatsApp | Floating button linking to wa.me/923499344466 |

#### Right Column: Contact Form

| Field | Validation |
|---|---|
| Full Name | Required |
| Email | Required, valid format |
| Subject | Required, select dropdown |
| Message | Required, 20–1000 chars |

- Submit sends email via backend (Nodemailer / EmailJS)
- Success: animated confirmation card
- Subjects: Order Issue · Product Inquiry · Technical Support · Partnership · Other

#### Below Form

- Embedded Google Maps (`<iframe>` with KPK, Pakistan coordinates)
- 3 icon cards: Chat (WhatsApp), Call, Email

---

### 8.10 Admin Dashboard

**Route:** `/admin` (sub-routes: `/admin/products`, `/admin/orders`, `/admin/customers`)  
**Access:** Admin role required (checked via `adminEmails` array in `.env`)

#### Layout

- Collapsible left sidebar (icon + label, collapses to icon-only on small screens)
- Top header bar: search, notification bell, admin avatar dropdown

#### Dashboard Overview (`/admin`)

| Widget | Data |
|---|---|
| Total Revenue | Sum of paid orders (PKR) |
| Total Orders | Count |
| Total Customers | Count |
| Total Products | Count |
| Revenue Chart | Line chart — last 30 days (Recharts) |
| Orders by Status | Doughnut chart (Pending · Processing · Shipped · Delivered · Cancelled) |
| Top 5 Products | Table: name, units sold, revenue |
| Recent Orders | Table: last 10 orders with status badge |

#### Product Management (`/admin/products`)

| Action | UI |
|---|---|
| Add Product | Slide-in drawer form |
| Edit Product | Same drawer, pre-filled |
| Delete Product | Confirmation modal |
| Upload Images | Drag-and-drop Cloudinary upload, up to 5 images per product |
| Toggle Featured | Switch toggle |
| Toggle In-Stock | Switch toggle |

**Product Form Fields:** Name · Slug (auto-generated) · Category · Brand · Price · Original Price · Discount % · Stock · Short Description · Full Description (rich text) · Specs (key-value pairs, add/remove rows) · Images

#### Order Management (`/admin/orders`)

| Column | Actions |
|---|---|
| Order ID | Copy |
| Customer | View profile |
| Date | Sort |
| Items | View breakdown |
| Total | Sort |
| Status | Dropdown: Pending → Processing → Shipped → Delivered → Cancelled |
| Payment | Badge: Paid / COD / Refunded |

#### Customer Management (`/admin/customers`)

| Column | Actions |
|---|---|
| Avatar + Name | — |
| Email | — |
| Join Date | Sort |
| Orders | Count, link to filtered orders |
| Total Spent | — |
| Status | Active / Banned toggle |

---

### 8.11 Order Tracking Page

**Route:** `/orders/:orderId`  
**Access:** Auth required + must own the order

#### Tracking Timeline

```
[✓] Order Placed      — {date}
[✓] Payment Confirmed — {date}
[✓] Processing        — {date}
[ ] Shipped           — Estimated: {date}
[ ] Out for Delivery  — —
[ ] Delivered         — —
```

- Animated vertical stepper with connecting line fill animation
- Order summary: items, quantities, totals
- Shipping address displayed
- "Need Help?" → Contact link

---

### 8.12 404 & Error Pages

**Route:** `*` (404), error boundary component

#### 404 Page

- Animated glitching "404" in `Orbitron` font
- Subtext: "Oops. This page got lost in cyberspace."
- Animated floating astronaut illustration (CSS)
- "Go Home" + "Browse Products" buttons

#### 500 / Error Boundary

- "Something went wrong" with error code display
- "Retry" + "Contact Support" buttons

---

## 9. Component Library

### Reusable UI Components

| Component | Props | Notes |
|---|---|---|
| `Button` | `variant` (primary/secondary/ghost/danger), `size` (sm/md/lg), `isLoading`, `leftIcon`, `rightIcon`, `glowing` | Glowing prop adds `box-shadow` pulse animation |
| `Card` | `glass` (bool), `hoverable` (bool), `padding` | Glass applies backdrop-filter blur |
| `Badge` | `variant` (success/warning/danger/info/new/hot/sale), `size` | Used on product cards |
| `Input` | `label`, `error`, `leftIcon`, `rightIcon`, `hint` | Blue ring + glow on focus |
| `Modal` | `isOpen`, `onClose`, `title`, `size` (sm/md/lg/xl) | Framer Motion scale-in animation |
| `Skeleton` | `width`, `height`, `rounded`, `animate` | Shimmer gradient animation |
| `Spinner` | `size`, `color` | CSS conic-gradient spin |
| `Tooltip` | `content`, `position` (top/bottom/left/right) | Fade-in on hover |
| `StarRating` | `value`, `onChange`, `readOnly`, `size` | Interactive for forms, static for display |
| `PageTransition` | wraps page content | Framer Motion `AnimatePresence` page slide |
| `CustomCursor` | No props (global) | Replaces native cursor on desktop |

---

## 10. API Reference

**Base URL:** `https://your-backend.railway.app/api/v1`  
**Auth Header:** `Authorization: Bearer <firebase_id_token>`

### Products

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/products` | No | List products (paginated, filtered, sorted) |
| `GET` | `/products/:slug` | No | Get single product by slug |
| `GET` | `/products/featured` | No | Get featured products (max 8) |
| `GET` | `/products/trending` | No | Get trending products (by views, max 12) |
| `GET` | `/products/categories` | No | Get all categories with counts |
| `POST` | `/products` | Admin | Create product |
| `PATCH` | `/products/:id` | Admin | Update product |
| `DELETE` | `/products/:id` | Admin | Delete product |
| `POST` | `/products/:id/images` | Admin | Upload images to Cloudinary |

**Query Params for `GET /products`:**

```
?category=GPUs
&brand=Nvidia,AMD
&minPrice=5000
&maxPrice=150000
&rating=4
&inStock=true
&onSale=true
&sort=price_asc
&page=1
&limit=20
&q=rtx 4070
```

### Orders

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/orders` | User | Place new order |
| `GET` | `/orders/:id` | User (owner) | Get order details |
| `GET` | `/orders/my` | User | Get current user's orders |
| `PATCH` | `/orders/:id/status` | Admin | Update order status |
| `GET` | `/orders` | Admin | List all orders (paginated) |

### Reviews

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/reviews/:productId` | User | Create review |
| `GET` | `/reviews/:productId` | No | Get reviews for product |
| `DELETE` | `/reviews/:reviewId` | User (owner) or Admin | Delete review |

### Users

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/users/sync` | User | Sync Firebase user to MongoDB (first login) |
| `GET` | `/users/me` | User | Get own profile |
| `PATCH` | `/users/me` | User | Update profile |
| `GET` | `/users` | Admin | List all users |
| `PATCH` | `/users/:id/ban` | Admin | Toggle ban status |

### Admin

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/admin/stats` | Admin | Dashboard statistics |
| `GET` | `/admin/revenue-chart` | Admin | Revenue by day (last 30 days) |
| `GET` | `/admin/top-products` | Admin | Top 5 products by revenue |

### Coupons

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/coupons/validate` | User | Validate coupon code |
| `POST` | `/coupons` | Admin | Create coupon |
| `GET` | `/coupons` | Admin | List all coupons |

---

## 11. Database Schema

### Product

```javascript
{
  _id: ObjectId,
  name: String,                  // "NVIDIA RTX 4070 Ti Super"
  slug: String,                  // "nvidia-rtx-4070-ti-super" (unique)
  category: {
    type: String,
    enum: ["CPUs","RAMs","LCDs","Keyboards","Mice",
           "Graphics Cards","SSDs","Motherboards","Gaming Accessories"]
  },
  brand: String,
  sku: String,                   // unique
  price: Number,                 // current selling price (PKR)
  originalPrice: Number,         // before discount
  discountPercent: Number,       // 0–100
  stock: Number,                 // integer ≥ 0
  images: [String],              // Cloudinary URLs (max 5)
  shortDescription: String,      // max 160 chars
  description: String,           // full HTML/Markdown
  specs: Map,                    // { "VRAM": "16GB", "TDP": "285W" }
  isFeatured: Boolean,
  isActive: Boolean,
  viewCount: Number,
  averageRating: Number,         // 0–5, computed
  reviewCount: Number,
  soldCount: Number,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Order

```javascript
{
  _id: ObjectId,
  orderNumber: String,           // "AHM-2026-000001"
  userId: String,                // Firebase UID
  items: [{
    productId: ObjectId,
    name: String,
    image: String,
    price: Number,
    quantity: Number
  }],
  shippingAddress: {
    fullName: String,
    phone: String,
    address: String,
    city: String,
    province: String,
    postalCode: String
  },
  subtotal: Number,
  shippingCost: Number,
  discount: Number,
  couponCode: String,
  total: Number,
  paymentMethod: { type: String, enum: ["COD","JazzCash","EasyPaisa","BankTransfer"] },
  paymentStatus: { type: String, enum: ["Pending","Paid","Refunded"] },
  orderStatus: {
    type: String,
    enum: ["Pending","Processing","Shipped","Delivered","Cancelled"],
    default: "Pending"
  },
  statusHistory: [{ status: String, timestamp: Date, note: String }],
  createdAt: Date,
  updatedAt: Date
}
```

### User (MongoDB mirror of Firebase)

```javascript
{
  _id: ObjectId,
  firebaseUid: String,           // unique
  email: String,                 // unique
  displayName: String,
  username: String,              // unique
  avatar: String,                // URL
  phone: String,
  role: { type: String, enum: ["user","admin"], default: "user" },
  isBanned: Boolean,
  wishlist: [ObjectId],          // Product refs
  addresses: [{ ... }],
  totalOrders: Number,
  totalSpent: Number,
  createdAt: Date,
  lastLoginAt: Date
}
```

### Review

```javascript
{
  _id: ObjectId,
  productId: ObjectId,
  userId: String,                // Firebase UID
  userName: String,
  userAvatar: String,
  rating: Number,                // 1–5
  title: String,
  body: String,
  verifiedPurchase: Boolean,
  helpful: Number,
  createdAt: Date
}
```

### Coupon

```javascript
{
  _id: ObjectId,
  code: String,                  // unique, uppercase
  discountType: { type: String, enum: ["percent","flat"] },
  discountValue: Number,
  minOrderAmount: Number,
  maxUses: Number,
  usedCount: Number,
  expiresAt: Date,
  isActive: Boolean
}
```

---

## 12. Authentication System

### Flow: New User (Email)

```
1. /signup form submit
2. createUserWithEmailAndPassword(Firebase)
3. updateProfile(displayName)
4. sendEmailVerification()
5. POST /api/v1/users/sync (with Firebase ID token)
6. User doc created in MongoDB
7. Redirect → /  (email verify banner shown)
```

### Flow: Login (Email)

```
1. /login form submit
2. signInWithEmailAndPassword(Firebase)
3. Firebase returns ID token
4. Axios interceptor attaches token to all requests
5. Backend middleware: admin.auth().verifyIdToken(token)
6. User identified by firebaseUid
7. Redirect → previous route or /
```

### Flow: Google/GitHub OAuth

```
1. signInWithPopup(provider)
2. First login → POST /users/sync
3. Subsequent logins → token refresh only
```

### Token Refresh

- Firebase SDK auto-refreshes ID tokens (1-hour expiry)
- Axios request interceptor calls `currentUser.getIdToken()` before each request
- No manual refresh logic needed

### Admin Detection

```javascript
// server/middleware/admin.middleware.js
const ADMIN_EMAILS = process.env.ADMIN_EMAIL.split(',');
if (!ADMIN_EMAILS.includes(decodedToken.email)) {
  throw new ApiError(403, 'Forbidden: Admin access required');
}
```

---

## 13. State Management

### Redux Toolkit Slices

#### `cartSlice`

```javascript
// State shape
{
  items: [{ productId, name, image, price, quantity, stock }],
  coupon: { code, discountType, discountValue } | null,
  isDrawerOpen: boolean
}

// Actions
addToCart(product)
removeFromCart(productId)
updateQuantity({ productId, quantity })
clearCart()
applyCoupon(coupon)
removeCoupon()
toggleCartDrawer()
```

#### `wishlistSlice`

```javascript
// State shape
{ items: [ProductId, ...] }

// Actions
toggleWishlist(productId)
clearWishlist()
```

#### `authSlice`

```javascript
// State shape
{
  user: { uid, email, displayName, avatar, role } | null,
  isLoading: boolean,
  isInitialized: boolean
}

// Actions
setUser(user)
clearUser()
```

### Persistence

- `cartSlice` and `wishlistSlice` persisted to `localStorage` via `redux-persist`
- `authSlice` NOT persisted (Firebase handles session)

### React Query Usage

| Query Key | Endpoint | Stale Time |
|---|---|---|
| `['products', filters]` | `GET /products` | 2 minutes |
| `['product', slug]` | `GET /products/:slug` | 5 minutes |
| `['featured-products']` | `GET /products/featured` | 10 minutes |
| `['reviews', productId]` | `GET /reviews/:id` | 3 minutes |
| `['my-orders']` | `GET /orders/my` | 30 seconds |
| `['admin-stats']` | `GET /admin/stats` | 1 minute |

---

## 14. Animation Catalogue

All animations use Framer Motion unless noted as CSS.

| Animation | Component | Config |
|---|---|---|
| **Page Enter** | `PageTransition` | `initial: {opacity:0, y:20}` → `animate: {opacity:1, y:0}`, 0.4s ease |
| **Hero Text Reveal** | `HeroSection` | Stagger 0.15s, each word `y: 60 → 0` + opacity |
| **Card Float-In** | `ProductCard` | Viewport trigger, `y: 40 → 0`, `once: true` |
| **Card Hover Lift** | `ProductCard` | `whileHover: {y: -8, boxShadow: var(--glow-blue)}`, 0.2s spring |
| **Button Glow Pulse** | `Button` (primary) | CSS `@keyframes glow-pulse`, alternates shadow intensity, 2s infinite |
| **Category Icon Bounce** | Category card hover | `whileHover: {scale: 1.15, rotate: -5}` |
| **Number Counter** | Stats section | `useMotionValue` + `useTransform`, 0 → target in 2s |
| **Navbar Shrink** | `Navbar` | CSS scroll listener → class toggle → height 80px → 64px + blur appears |
| **Cart Drawer** | `CartDrawer` | `x: '100%' → 0`, 0.35s ease, overlay fade-in |
| **Remove Item** | Cart item row | `exit: {x: -100, opacity: 0}` + `AnimatePresence` |
| **Toast Notification** | react-hot-toast | Custom style, slide from top-right |
| **Custom Cursor** | `CustomCursor` | `useSpring` following `mousemove`, inner dot lags 0.1s behind outer ring |
| **Cursor Magnetic** | All buttons | `onMouseEnter` → `useSpring` pulls cursor to button center |
| **Skeleton Shimmer** | `Skeleton` | CSS `background-position` animation, 1.5s infinite |
| **Brands Marquee** | `BrandsSection` | `x: 0 → -50%`, `repeat: Infinity`, linear, 20s |
| **Modal Scale-In** | `Modal` | `scale: 0.9 → 1`, `opacity: 0 → 1`, `ease: [0.16,1,0.3,1]` |
| **Star Rating Fill** | `StarRating` | `width: 0% → rating%`, 0.6s ease, on viewport enter |
| **Order Timeline** | `OrderTracking` | Connecting line `scaleY: 0 → 1`, staggered per completed step |
| **404 Glitch** | `NotFound` | CSS `@keyframes glitch` with `clip-path` alternating shapes |
| **Admin Chart Load** | `AnalyticsCard` | Recharts `animationDuration: 1000` |
| **Gradient Background** | Global | CSS animated mesh gradient, `@keyframes gradientShift`, 15s infinite |

---

## 15. SEO Strategy

### Meta Tags (via React Helmet Async)

Every page sets:

```jsx
<Helmet>
  <title>{pageTitle} | AHMAD Store — Electronics KPK Pakistan</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <link rel="canonical" href={canonicalUrl} />

  {/* Open Graph */}
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:image" content={ogImage} />
</Helmet>
```

### Page-Specific SEO

| Page | Title Pattern | Description |
|---|---|---|
| Home | "AHMAD Store — Buy Computers & Electronics in KPK Pakistan" | "Pakistan's premium online electronics store. Shop CPUs, GPUs, RAMs, SSDs and gaming gear. Fast delivery across KPK." |
| Products | "Buy {Category} in Pakistan — AHMAD Store" | Dynamic per category |
| Product Detail | "{Product Name} Price in Pakistan — AHMAD Store" | Uses product shortDescription |
| About | "About AHMAD Store — KPK's Trusted Electronics Store" | — |
| Contact | "Contact AHMAD Store — +92 349 9344466" | — |

### Structured Data (JSON-LD)

- `Organization` schema on every page (name, url, contactPoint, address)
- `Product` schema on Product Details pages (name, image, price, availability, aggregateRating)
- `BreadcrumbList` on Products and Product Detail pages

### Technical SEO

- `robots.txt`: allow all except `/admin`
- `sitemap.xml`: generated with all product slugs + static pages
- All images: `alt` attributes required, lazy-loaded
- Semantic HTML: `<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`
- Lang attribute: `<html lang="en">`

---

## 16. Performance Targets

| Metric | Target | Tool |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.0s | Lighthouse |
| FID / INP | < 100ms | Web Vitals |
| CLS | < 0.05 | Lighthouse |
| FCP | < 1.2s | Lighthouse |
| Lighthouse Performance | 90+ | CI check |
| Lighthouse SEO | 95+ | CI check |
| Lighthouse Accessibility | 90+ | CI check |
| Bundle Size (initial JS) | < 200 KB gzipped | Vite bundle analysis |
| API Response (p95) | < 300ms | Railway metrics |

### Optimisation Techniques

1. **Code splitting:** `React.lazy()` + `Suspense` for all page components
2. **Image optimisation:** Cloudinary auto-format + quality + responsive `srcset`
3. **Font loading:** `font-display: swap`, preconnect to Google Fonts
4. **Prefetching:** React Query prefetchQuery on product card hover
5. **Compression:** `compression` middleware (gzip) on Express
6. **Caching headers:** Cloudinary CDN for images (1-year cache); API responses with `Cache-Control: public, s-maxage=60`
7. **Tree shaking:** Vite production build with terser minification
8. **Tailwind purge:** Remove unused CSS classes in production (< 15 KB CSS)
9. **Skeleton loaders:** On all data-fetching states (no layout shift)
10. **Debounced search:** 350ms debounce on product search input

---

## 17. Security Requirements

| Category | Requirement |
|---|---|
| **Authentication** | All protected routes verify Firebase ID token on backend |
| **Admin Routes** | Secondary middleware checks `role === 'admin'` or email in allowlist |
| **HTTP Headers** | `helmet()` middleware: CSP, X-Frame-Options, HSTS, etc. |
| **Rate Limiting** | 100 req/min per IP (general); 10 req/min (auth endpoints) |
| **Input Validation** | Zod schemas on all API request bodies and query params |
| **File Uploads** | MIME type check + max 5MB per image; Cloudinary handles storage |
| **CORS** | Whitelist `CLIENT_URL` only; no wildcard in production |
| **MongoDB Injection** | Mongoose parameterised queries; no raw `$where` |
| **XSS** | React's built-in escaping; DOMPurify for any rich-text display |
| **HTTPS** | Enforced by Vercel (frontend) and Railway (backend) |
| **Env Secrets** | Never committed; `.env` in `.gitignore`; Vercel env vars for production |
| **Admin Guarding** | Client-side route guard + backend middleware (defence in depth) |

---

## 18. Dummy Data Seeding

Run `node server/src/seed/products.seed.js` after DB connection.

### Product Seed Data (50 products across 9 categories)

| Category | Count | Price Range (PKR) | Sample Products |
|---|---|---|---|
| CPUs | 6 | 15,000–80,000 | Intel i5-14600K, i7-14700K, i9-14900K; AMD Ryzen 5 7600X, Ryzen 7 7800X3D, Ryzen 9 7950X |
| RAMs | 6 | 4,000–35,000 | Corsair Vengeance 16GB DDR4, G.Skill Trident Z5 32GB DDR5, Kingston Fury 64GB |
| LCDs | 5 | 20,000–120,000 | ASUS 24" FHD, Samsung 27" QHD 165Hz, LG 32" 4K IPS, AOC 27" 240Hz |
| Keyboards | 6 | 2,000–25,000 | Logitech K380, Corsair K70 RGB, Keychron K2, HyperX Alloy FPS |
| Mice | 6 | 1,500–18,000 | Logitech G502 Hero, Razer DeathAdder V3, SteelSeries Rival 650 |
| Graphics Cards | 6 | 60,000–200,000 | RTX 4060, RTX 4070 Ti Super, RTX 4090, RX 7700 XT, RX 7900 XTX |
| SSDs | 5 | 5,000–30,000 | Samsung 970 Evo 1TB, WD Black SN850X 2TB, Seagate FireCuda 4TB |
| Motherboards | 5 | 15,000–60,000 | ASUS ROG Strix B650-E, MSI MAG X670E, Gigabyte Z790 Aorus |
| Gaming Accessories | 5 | 1,500–15,000 | HyperX Cloud II Headset, Corsair MM300 Mousepad, Elgato Stream Deck |

Each seeded product includes: name, slug, brand, price, stock, 3 placeholder Cloudinary image URLs, specs, shortDescription, isFeatured (random 30%), averageRating (3.5–5.0), reviewCount (5–200).

---

## 19. Deployment Guide

### Frontend (Vercel)

```bash
# 1. Connect GitHub repo to Vercel
# 2. Set Root Directory: client/
# 3. Build Command: npm run build
# 4. Output Directory: dist
# 5. Add all VITE_ env vars in Vercel dashboard
# 6. Deploy
```

### Backend (Railway)

```bash
# 1. Connect GitHub repo to Railway
# 2. Set Root Directory: server/
# 3. Start Command: node index.js
# 4. Add all server env vars in Railway dashboard
# 5. Set PORT to Railway's $PORT variable
# 6. Enable health check: GET /health
```

### `vercel.json` (for SPA routing)

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### MongoDB Atlas Setup

1. Create free M0 cluster
2. Create database user with read/write access
3. Whitelist `0.0.0.0/0` (or Railway IP range)
4. Copy connection string to `MONGODB_URI`

### Cloudinary Setup

1. Create free account at cloudinary.com
2. Copy cloud name, API key, API secret to `.env`
3. Create upload preset: `ahmadstore_products` (unsigned)

### Post-Deployment Checklist

- [ ] All env vars set in Vercel and Railway
- [ ] CORS `CLIENT_URL` matches Vercel deployment URL
- [ ] Firebase domain added to Auth authorized domains
- [ ] MongoDB Atlas connection string active
- [ ] Run seed script: `node server/src/seed/products.seed.js`
- [ ] Test auth flow (signup, login, Google OAuth)
- [ ] Test admin panel access with admin email
- [ ] Run Lighthouse on production URL — confirm scores

---

## 20. Testing Strategy

| Type | Tool | Coverage |
|---|---|---|
| Unit (hooks, utils) | Vitest + React Testing Library | `useCart`, `useAuth`, `formatPrice`, `validateForm` |
| Integration (API) | Supertest + Vitest | All REST endpoints, auth middleware |
| E2E (critical flows) | Playwright | Signup → Browse → Add to Cart → Checkout; Admin product CRUD |
| Accessibility | axe-core (Playwright plugin) | All 12 pages, WCAG 2.1 AA |
| Performance | Lighthouse CI | All pages on every PR |

### Critical E2E Test Flows

1. **Happy path purchase:** Signup → Browse products → Filter by category → Add to cart → Apply coupon → Place order (COD) → View order tracking
2. **Auth guard:** Attempt `/wishlist` unauthenticated → redirect to `/login` → login → redirect back to `/wishlist`
3. **Admin CRUD:** Login as admin → Add product → Edit product → Delete product → Confirm in products list
4. **Search flow:** Type in search bar → debounce fires → products filter live → click result → land on product detail

---

## 21. Open Questions

| # | Question | Owner | Due |
|---|---|---|---|
| 1 | Which payment gateway to integrate? JazzCash API or manual COD only for MVP? | Product | Pre-launch |
| 2 | Should product images be self-hosted on Cloudinary or rely on manufacturer image URLs? | Engineering | Sprint 1 |
| 3 | Is email verification mandatory before purchase, or allow guest checkout? | Product | Sprint 1 |
| 4 | WhatsApp Business API for order notifications vs simple wa.me link? | Product | Sprint 2 |
| 5 | Are multi-language (Urdu + English) requirements needed at launch? | Product | Pre-launch |
| 6 | Should admin analytics export to CSV/PDF? | Product | Phase 2 |

---

## 22. Glossary

| Term | Definition |
|---|---|
| **Slug** | URL-safe version of product name (e.g., `rtx-4070-ti-super`) |
| **LCP** | Largest Contentful Paint — Google Core Web Vital, measures perceived load speed |
| **ODM** | Object Document Mapper — Mongoose for MongoDB (equivalent of ORM for SQL) |
| **Glassmorphism** | UI design: semi-transparent cards with backdrop-filter blur and subtle border |
| **SKU** | Stock Keeping Unit — unique product identifier |
| **COD** | Cash on Delivery — payment method |
| **Framer Motion** | React animation library, used for all page transitions and micro-interactions |
| **Hydration** | React's process of attaching event listeners to server-rendered HTML |
| **SPA** | Single Page Application — entire app in one HTML shell, React Router handles routing |
| **PWA** | Progressive Web App — installable via browser, offline-capable |
| **JWT** | JSON Web Token — Firebase-issued token used to authenticate API requests |
| **CSP** | Content Security Policy — HTTP header restricting what scripts/resources can load |
| **Skeleton Loader** | Animated placeholder shown while content is fetching (avoids layout shift) |
| **Stagger** | Framer Motion technique: animating children in sequence with a time offset |

---

*Document maintained by AHMAD Store Product Team · Last updated May 2026 · v3.0.0*
