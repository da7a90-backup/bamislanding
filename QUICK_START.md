# BAMIS Website - Quick Start Guide

## 🚀 Running the Project

### Start the Development Server

```bash
cd bamis-website
npm run dev
```

The website will be available at `http://localhost:3000`

### Available Routes

#### Working Pages (Ready to View)
- `http://localhost:3000` or `http://localhost:3000/fr` - Homepage (French)
- `http://localhost:3000/en` - Homepage (English)
- `http://localhost:3000/ar` - Homepage (Arabic)
- `http://localhost:3000/fr/about/president` - President's Message
- `http://localhost:3000/fr/about/history` - Bank History
- `http://localhost:3000/fr/about/key-figures` - Financial Data with Charts

#### Not Yet Implemented (404)
- `/products/*`
- `/digital-banking/*`
- `/locations`
- `/blog`
- `/contact`

## 📁 Project Structure Quick Reference

```
bamis-website/
├── app/[locale]/          # All pages go here
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Page layout with Header/Footer
│   └── about/             # About section pages
│       ├── president/
│       ├── history/
│       └── key-figures/
├── components/
│   ├── ui/                # Reusable UI components
│   └── sections/          # Page sections (Hero, Features, etc.)
├── content/blog/          # MDX blog posts
├── messages/              # i18n translation files
│   ├── fr.json           # French translations
│   ├── ar.json           # Arabic translations
│   └── en.json           # English translations
└── lib/utils.ts           # Helper functions
```

## 🎨 Design System Quick Reference

### Colors
```typescript
// Use these Tailwind classes
bg-bamis-primary      // #0A2540 (Deep blue)
bg-bamis-secondary    // #00D9A3 (Electric green)
bg-gradient-bamis     // Gradient from primary to secondary
```

### Components
```typescript
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'

// Button variants
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Container sizes
<Container size="default">Content</Container>
<Container size="wide">Wide content</Container>
<Container size="narrow">Narrow content</Container>
```

## ✍️ Adding New Pages

### 1. Create a New Page

```bash
# Example: Adding a products page
mkdir -p app/[locale]/products
touch app/[locale]/products/page.tsx
```

### 2. Page Template

```typescript
import { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for SEO',
}

export default function PageName() {
  return (
    <div className="py-16 lg:py-24">
      <Container>
        <h1 className="font-heading text-4xl font-bold text-bamis-primary mb-8">
          Page Title
        </h1>
        <p className="text-gray-600">Page content goes here</p>
      </Container>
    </div>
  )
}
```

### 3. Add Translations

In `messages/fr.json`, `messages/en.json`, `messages/ar.json`:
```json
{
  "pageName": {
    "title": "Page Title",
    "description": "Page description",
    "cta": "Call to action"
  }
}
```

### 4. Use Translations in Component

```typescript
import { useTranslations } from 'next-intl'

export default function PageName() {
  const t = useTranslations('pageName')

  return <h1>{t('title')}</h1>
}
```

## 📝 Adding Blog Posts

### 1. Create MDX File

```bash
touch content/blog/my-new-post.mdx
```

### 2. Add Frontmatter

```mdx
---
title: "Post Title"
description: "Post description"
date: "2025-01-15"
author: "BAMIS"
tags: ["tag1", "tag2"]
category: "Category Name"
locale: "fr"
---

# Post Title

Your markdown content here...
```

## 🌐 Adding Navigation Links

### Update Header Navigation

Edit `components/sections/Header.tsx`:

```typescript
const navigation = {
  // Add new menu section
  newSection: [
    { name: t('newPage1'), href: '/new-page-1' },
    { name: t('newPage2'), href: '/new-page-2' },
  ],
}
```

### Update Footer Links

Edit `components/sections/Footer.tsx`:

```typescript
const footerLinks = {
  newSection: [
    { name: 'Link 1', href: '/link-1' },
    { name: 'Link 2', href: '/link-2' },
  ],
}
```

## 🎯 Next Implementation Priorities

### 1. Blog Pages (Easiest - Start Here!)

Create these files:
- `app/[locale]/blog/page.tsx` - Blog index with post grid
- `app/[locale]/blog/[slug]/page.tsx` - Individual post page

**Blog Index Example**:
```typescript
import { allPosts } from 'contentlayer/generated'

export default function BlogPage() {
  return (
    <div>
      {allPosts.map(post => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </article>
      ))}
    </div>
  )
}
```

**Individual Post Example**:
```typescript
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )
}
```

### 2. Products Pages

Create:
- `app/[locale]/products/page.tsx` - Products overview
- `app/[locale]/products/accounts/page.tsx` - Accounts
- `app/[locale]/products/cards/page.tsx` - Cards
- `app/[locale]/products/financing/page.tsx` - Financing

### 3. Digital Banking Pages

Create:
- `app/[locale]/digital-banking/bamis-digital/page.tsx`
- `app/[locale]/digital-banking/bamis-pay/page.tsx`
- `app/[locale]/digital-banking/web-mobile/page.tsx`
- `app/[locale]/digital-banking/sms-banking/page.tsx`

## 🔧 Common Tasks

### Adding a New UI Component

```bash
touch components/ui/new-component.tsx
```

```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'

interface NewComponentProps {
  className?: string
  children: React.ReactNode
}

export function NewComponent({ className, children }: NewComponentProps) {
  return (
    <div className={cn('base-classes', className)}>
      {children}
    </div>
  )
}
```

### Adding Animations

```typescript
'use client'
import { motion } from 'framer-motion'

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Animated content
    </motion.div>
  )
}
```

### Adding Forms

```typescript
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

export function MyForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('name')} placeholder="Name" />
      <Input {...register('email')} placeholder="Email" />
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

## 📊 Data from Original Site

All the scraped data is documented in:
- `PROJECT_SUMMARY.md` - Complete list of pages and content
- `README.md` - Full project documentation

### Key Data Points

**Branches (9)**:
- Main Office: Avenue du Roi Fayçal, +222 45 25 14 24
- Capital, Congress Palace, Tevragh-Zeina, Teyarett, BAMIS Digital
- Nouadhibou (2), Atar

**ATMs (14+)**:
- 8 in Nouakchott, 3 in Nouadhibou
- Regional: Atar, Rosso, Zouérate, Akjoujet

**Products**:
- 3 Account Types
- 8 Card Types
- 4 Financing Products
- 4 Digital Services

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📚 Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# TypeScript
npx tsc --noEmit     # Type check without building

# Format (if you add Prettier)
npx prettier --write .
```

## 🎓 Learning Resources

- **Next.js 15 Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **next-intl**: https://next-intl-docs.vercel.app
- **ContentLayer**: https://contentlayer.dev

## ✅ Pre-Deployment Checklist

- [ ] All pages implemented
- [ ] All images optimized (WebP)
- [ ] SEO metadata on all pages
- [ ] Lighthouse score 90+
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Accessibility audit passed
- [ ] Forms working and validated
- [ ] Analytics integrated
- [ ] Error tracking setup

---

**Need Help?** Check `README.md` and `PROJECT_SUMMARY.md` for detailed documentation.
