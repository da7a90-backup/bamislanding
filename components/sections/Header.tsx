'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const t = useTranslations('nav')
  const locale = useLocale()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0

    if (latest > previous && latest > 100) {
      // Scrolling down
      setHidden(true)
    } else {
      // Scrolling up
      setHidden(false)
    }
  })

  const navigation = {
    about: [
      { name: t('aboutPresident'), href: '/about/president' },
      { name: t('aboutHistory'), href: '/about/history' },
      { name: t('aboutFigures'), href: '/about/key-figures' },
      { name: t('aboutOrganization'), href: '/about/organization' },
    ],
    products: [
      { name: t('productsAccounts'), href: '/products/accounts' },
      { name: t('productsCards'), href: '/products/cards' },
      { name: t('productsFinancing'), href: '/products/financing' },
      { name: t('productsInternational'), href: '/products/international' },
    ],
    digital: [
      { name: t('digitalApp'), href: '/digital-banking/bamis-digital' },
      { name: t('digitalPay'), href: '/digital-banking/bamis-pay' },
      { name: t('digitalWeb'), href: '/digital-banking/web-mobile' },
      { name: t('digitalSMS'), href: '/digital-banking/sms-banking' },
    ],
    locations: [
      { name: t('locationsBranches'), href: '/locations#branches' },
      { name: t('locationsATMs'), href: '/locations#atms' },
    ],
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      }}
      className="fixed top-0 z-50 w-full"
    >
      <Container size="wide" className="px-4">
        <nav className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center p-2">
            <img
              src="/images/logo/bamis-logo-transparent.png"
              alt="BAMIS"
              className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavDropdown title={t('about')} items={navigation.about} />
            <NavDropdown title={t('products')} items={navigation.products} />
            <NavDropdown
              title={t('digitalBanking')}
              items={navigation.digital}
            />
            <NavDropdown title={t('locations')} items={navigation.locations} />
            <Link
              href={`/${locale}/blog`}
              className="text-sm font-medium text-gray-700 hover:text-bamis-primary transition-colors"
            >
              {t('blog')}
            </Link>
          </div>

          {/* CTA & Language Switcher */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <LanguageSwitcher />
            <Button asChild>
              <Link href={`/${locale}/contact`}>{t('contact')}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 md:h-6 md:w-6" />
            ) : (
              <Menu className="h-5 w-5 md:h-6 md:w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-3 md:py-4 space-y-2 md:space-y-4 bg-white/30 backdrop-blur-lg rounded-b-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileNavSection title={t('about')} items={navigation.about} />
            <MobileNavSection
              title={t('products')}
              items={navigation.products}
            />
            <MobileNavSection title={t('digitalBanking')} items={navigation.digital} />
            <MobileNavSection
              title={t('locations')}
              items={navigation.locations}
            />
            <Link
              href={`/${locale}/blog`}
              className="block px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 hover:bg-white/50 rounded-md"
            >
              {t('blog')}
            </Link>
            <div className="px-3 md:px-4 pt-3 md:pt-4 border-t border-white/20">
              <Button asChild className="w-full text-sm">
                <Link href={`/${locale}/contact`}>{t('contact')}</Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </motion.header>
  )
}

function NavDropdown({
  title,
  items,
}: {
  title: string
  items: Array<{ name: string; href: string }>
}) {
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 text-xs md:text-sm font-medium text-gray-700 hover:text-bamis-primary transition-colors py-2">
        <span>{title}</span>
        <ChevronDown className="h-3 w-3 md:h-4 md:w-4" />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-48 md:w-56">
          <div className="rounded-lg bg-white/80 backdrop-blur-xl shadow-xl border border-white/30 py-1.5 md:py-2 animate-fade-in">
            {items.map((item) => (
              <Link
                key={item.name}
                href={`/${locale}${item.href}`}
                className="block px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-gray-700 hover:bg-white/50 hover:text-bamis-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileNavSection({
  title,
  items,
}: {
  title: string
  items: Array<{ name: string; href: string }>
}) {
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700"
      >
        <span>{title}</span>
        <ChevronDown
          className={cn('h-3 w-3 md:h-4 md:w-4 transition-transform', isOpen && 'rotate-180')}
        />
      </button>
      {isOpen && (
        <div className="mt-1 md:mt-2 space-y-1 pl-2 md:pl-4">
          {items.map((item) => (
            <Link
              key={item.name}
              href={`/${locale}${item.href}`}
              className="block px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm text-gray-600 hover:bg-white/50 hover:text-bamis-primary rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function LanguageSwitcher() {
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' },
  ]

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 text-xs md:text-sm font-medium text-gray-700 hover:text-bamis-primary py-2">
        <Globe className="h-3 w-3 md:h-4 md:w-4" />
        <span>{locale.toUpperCase()}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full pt-2 w-40">
          <div className="rounded-lg bg-white/80 backdrop-blur-xl shadow-xl border border-white/30 py-2">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code}`}
                className={cn(
                  'block px-4 py-2 text-sm hover:bg-white/50 transition-colors',
                  locale === lang.code
                    ? 'text-bamis-primary font-medium'
                    : 'text-gray-700'
                )}
              >
                {lang.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
