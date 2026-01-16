# BAMIS Website - Modern Next.js Redesign

A complete redesign of the bamis.mr website using Next.js 15, TypeScript, and Tailwind CSS with a modern, innovative financial design aesthetic.

## 🚀 Project Overview

This project is a comprehensive rebuild of the BAMIS (Banque Al Wava Mauritanienne Islamique) website with:
- **SEO-optimized** structure and metadata
- **Tri-lingual** support (French, Arabic, English)
- **Modern** innovative financial design
- **Responsive** mobile-first approach
- **Accessible** WCAG 2.1 AA compliance
- **Fast** performance with Next.js 15

## 📁 Project Structure

```
bamis-website/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── about/          # About pages (President, History, Key Figures)
│   │   ├── products/       # Product pages (to be implemented)
│   │   ├── digital-banking/ # Digital services pages (to be implemented)
│   │   ├── locations/      # Branch and ATM locator (to be implemented)
│   │   ├── blog/           # Blog pages (to be implemented)
│   │   ├── contact/        # Contact page (to be implemented)
│   │   ├── layout.tsx      # Locale-specific layout
│   │   └── page.tsx        # Homepage
│   ├── globals.css         # Global styles with Tailwind
│   └── layout.tsx          # Root layout
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── container.tsx
│   └── sections/           # Page section components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── ProductsShowcase.tsx
│       ├── DigitalServices.tsx
│       └── CallToAction.tsx
├── content/
│   └── blog/               # MDX blog posts
│       ├── bamis-digital-solution-numerique.mdx
│       ├── cartes-visa-bamis.mdx
│       └── transfert-bamis-digital-gimtel.mdx
├── lib/
│   └── utils.ts            # Utility functions
├── messages/               # i18n translations
│   ├── fr.json
│   ├── ar.json
│   └── en.json
├── public/
│   └── images/             # Static assets
├── contentlayer.config.ts  # ContentLayer configuration
├── i18n.ts                 # i18n setup
├── middleware.ts           # Next.js middleware for i18n
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design System

### Colors
- **Primary**: `#0A2540` (Deep blue) - Trust, professionalism
- **Secondary**: `#00D9A3` (Electric green) - Growth, innovation
- **Dark**: `#051627` - Contrast, depth
- **Light**: `#F0F4F8` - Clean, modern

### Typography
- **Headings**: Space Grotesk - Bold, modern
- **Body**: Inter - Clean, readable

### Components
- **Glassmorphic** cards with backdrop blur
- **Gradient** overlays and accents
- **Subtle animations** with Framer Motion
- **Interactive** hover effects and micro-interactions

## ✅ Completed Features

### 1. **Core Setup**
- [x] Next.js 15 with App Router
- [x] TypeScript configuration
- [x] Tailwind CSS with custom design tokens
- [x] ESLint setup

### 2. **Internationalization (i18n)**
- [x] next-intl configuration
- [x] French, Arabic, and English support
- [x] RTL layout for Arabic
- [x] Language switcher in header
- [x] Locale-based routing

### 3. **Layout Components**
- [x] Responsive Header with mega menu
- [x] Footer with comprehensive links
- [x] Mobile navigation drawer
- [x] Language switcher

### 4. **Homepage Sections**
- [x] Hero section with animated elements
- [x] Features grid (8 feature cards)
- [x] Products showcase (4 main products)
- [x] Digital services section (4 digital offerings)
- [x] Call-to-action section

### 5. **About Section**
- [x] President's Message page
- [x] History page with timeline
- [x] Key Figures page with charts (using Recharts)

### 6. **Blog System**
- [x] ContentLayer configuration for MDX
- [x] 3 sample blog posts in French
- [x] Blog post schema with metadata

### 7. **UI Components**
- [x] Button component with variants
- [x] Card components
- [x] Input component
- [x] Container component

### 8. **Animations**
- [x] Framer Motion integration
- [x] Page transition animations
- [x] Hover effects
- [x] Floating elements

## 🎯 Content Migrated from bamis.mr

The following content has been successfully mapped and migrated:

### Corporate Information
- ✅ President's message (Mohamed Abdallahi Abdallahi)
- ✅ Bank history (1985-present timeline)
- ✅ Key financial figures (2019-2021 data)
- ⏳ Organization chart (to be implemented)
- ⏳ Capital and shares structure (to be implemented)

### Products & Services Identified
- **Accounts**: Personal, Business, Savings
- **Cards**: VISA Gold, VISA Classic/MIHVADHATI, Errasside, Essayire, Al Vidda, Al Moussafir
- **Financing**: Mourabaha, Mourabaha Revolving, Leasing, Consumer credits
- **International**: Documentary operations, transfers, foreign currency accounts
- **Digital**: BAMIS Digital, Pay, Web/Mobile Banking, SMS Banking

### Network Information Mapped
- **9 Branches**: Main office, Capital, Congress Palace, Tevragh-Zeina, Teyarett, BAMIS Digital, Nouadhibou (2), Atar
- **14+ ATMs**: Across Nouakchott, Nouadhibou, Atar, Rosso, Zouérate, Akjoujet

### Blog Content Migrated
- ✅ BAMIS Digital app features
- ✅ VISA cards overview
- ✅ GIMTEL transfer functionality

## 🚧 Remaining Tasks

### High Priority
1. **Blog Implementation**
   - [ ] Blog index page with filtering
   - [ ] Individual blog post pages
   - [ ] Search functionality
   - [ ] Category and tag pages

2. **Products Section**
   - [ ] Account comparison tool
   - [ ] Cards comparison tool
   - [ ] Financing products pages
   - [ ] International services page
   - [ ] Rates and fees page

3. **Digital Banking Section**
   - [ ] BAMIS Digital detailed page
   - [ ] BAMIS Pay page
   - [ ] Web/Mobile Banking page
   - [ ] SMS Banking page

4. **Branch/ATM Locator**
   - [ ] Interactive map (Mapbox/Leaflet)
   - [ ] Filter by branch/ATM
   - [ ] Directions integration
   - [ ] Service availability indicators

5. **Account Opening Forms**
   - [ ] Personal account form
   - [ ] Business account form
   - [ ] Multi-step wizard
   - [ ] PDF generation
   - [ ] Form validation

### Medium Priority
6. **Product Comparison Tool**
   - [ ] Side-by-side comparison
   - [ ] Feature matrix
   - [ ] Recommendations engine

7. **SEO Optimization**
   - [ ] JSON-LD structured data
   - [ ] Dynamic metadata
   - [ ] Sitemap generation
   - [ ] robots.txt
   - [ ] Image optimization

8. **Additional Content Pages**
   - [ ] Contact page
   - [ ] FAQ section
   - [ ] Legal pages (Privacy, Terms)
   - [ ] Media/Press section
   - [ ] Careers page

### Low Priority
9. **Performance**
   - [ ] Image optimization (WebP, lazy loading)
   - [ ] Code splitting
   - [ ] Lighthouse optimization (target: 90+)

10. **Accessibility**
    - [ ] WCAG 2.1 AA compliance audit
    - [ ] Keyboard navigation testing
    - [ ] Screen reader testing

## 🛠️ Technologies Used

- **Framework**: Next.js 15.1.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Custom (shadcn/ui style)
- **Animations**: Framer Motion 11.15.0
- **i18n**: next-intl 3.26.3
- **Blog**: ContentLayer 2 (MDX)
- **Forms**: React Hook Form 7.54.2 + Zod 3.24.1
- **Icons**: Lucide React 0.468.0
- **Charts**: Recharts 3.6.0
- **Utilities**: clsx, tailwind-merge, date-fns

## 🚀 Getting Started

### Prerequisites
- Node.js 20.9.0 or higher
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd bamis-website

# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 URL Structure (SEO-Optimized)

```
/                                    # Homepage (redirects to /fr)
/fr, /ar, /en                        # Localized homepages
/[locale]/about/president            # President's message
/[locale]/about/history              # Bank history
/[locale]/about/key-figures          # Financial data
/[locale]/about/organization         # Organization chart (to be implemented)

/[locale]/products/accounts          # Account types (to be implemented)
/[locale]/products/cards             # Card products (to be implemented)
/[locale]/products/financing         # Financing options (to be implemented)
/[locale]/products/international     # International services (to be implemented)

/[locale]/digital-banking/bamis-digital   # BAMIS Digital app (to be implemented)
/[locale]/digital-banking/bamis-pay       # BAMIS Pay (to be implemented)
/[locale]/digital-banking/web-mobile      # Web/Mobile Banking (to be implemented)
/[locale]/digital-banking/sms-banking     # SMS Banking (to be implemented)

/[locale]/locations                  # Branch and ATM locator (to be implemented)
/[locale]/blog                       # Blog index (to be implemented)
/[locale]/blog/[slug]                # Individual blog posts (to be implemented)
/[locale]/contact                    # Contact page (to be implemented)
```

## 📊 SEO Improvements

### Implemented
- Clean, semantic URL structure
- Descriptive page titles and meta descriptions
- Open Graph tags
- Twitter Card tags
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images
- Semantic HTML5 elements

### To Be Implemented
- JSON-LD structured data (Organization, FinancialProduct schemas)
- Sitemap.xml with priorities
- robots.txt
- Breadcrumb navigation
- Internal linking strategy

## 🎨 Design Highlights

### Innovative Financial Aesthetic
- **Modern gradients** with deep blue to electric green
- **Glassmorphic** UI elements with backdrop blur
- **Floating elements** with smooth animations
- **Interactive cards** with hover effects
- **Bento-style** layouts for visual interest

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px)
- Collapsible mobile navigation
- Touch-friendly interactive elements

## 📱 Mobile Features
- Hamburger menu with smooth drawer animation
- Touch-optimized buttons and links
- Optimized images for mobile devices
- Fast page loads with code splitting

## 🔒 Security & Performance
- CSP headers (to be configured)
- HTTPS only (production)
- Lazy loading for images
- Code splitting by route
- Optimized bundle size

## 📝 License

Proprietary - BAMIS (Banque Al Wava Mauritanienne Islamique)

## 👥 Contact

For questions or support regarding this project, contact the development team.

---

**Last Updated**: January 2025
**Version**: 1.0.0 (Initial Development)
