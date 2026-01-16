import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  const locale = useLocale()

  const footerLinks = {
    about: [
      { name: nav('aboutPresident'), href: '/about/president' },
      { name: nav('aboutHistory'), href: '/about/history' },
      { name: nav('aboutFigures'), href: '/about/key-figures' },
      { name: nav('aboutOrganization'), href: '/about/organization' },
    ],
    products: [
      { name: nav('productsAccounts'), href: '/products/accounts' },
      { name: nav('productsCards'), href: '/products/cards' },
      { name: nav('productsFinancing'), href: '/products/financing' },
      { name: nav('productsInternational'), href: '/products/international' },
    ],
    digital: [
      { name: nav('digitalApp'), href: '/digital-banking/bamis-digital' },
      { name: nav('digitalPay'), href: '/digital-banking/bamis-pay' },
      { name: nav('digitalWeb'), href: '/digital-banking/web-mobile' },
    ],
    resources: [
      { name: nav('blog'), href: '/blog' },
      { name: 'Tarifs', href: '/resources/rates' },
      { name: 'Formulaires', href: '/resources/forms' },
      { name: 'FAQ', href: '/resources/faq' },
    ],
  }

  return (
    <footer className="relative border-t bg-white text-bamis-dark" style={{ zIndex: 10 }}>
      <Container size="wide" className="py-8 md:py-12 lg:py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-3 md:mb-4">
              <img
                src="/images/logo/bamis-logo-transparent.png"
                alt="BAMIS"
                className="h-10 md:h-14 lg:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-4 md:mb-6 max-w-md">
              Banque Al Wava Mauritanienne Islamique - Votre partenaire bancaire
              de confiance en Mauritanie depuis 1985.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-bamis-secondary shrink-0 mt-0.5" />
                <span>
                  758, Rue 22-018 - Avenue du Roi Fayçal
                  <br />
                  BP 650 Nouakchott, Mauritanie
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-bamis-secondary shrink-0" />
                <span>+222 45 25 14 24 / 45 25 22 26</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-bamis-secondary shrink-0" />
                <span>contact@bamis.mr</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 md:space-x-4 mt-4 md:mt-6">
              <a
                href="#"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/10 hover:bg-bamis-secondary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/10 hover:bg-bamis-secondary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/10 hover:bg-bamis-secondary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/10 hover:bg-bamis-secondary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold text-bamis-dark mb-3 md:mb-4 text-sm md:text-base">{t('about')}</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-600 hover:text-bamis-secondary transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-bamis-dark mb-3 md:mb-4 text-sm md:text-base">{nav('products')}</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-600 hover:text-bamis-secondary transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-bamis-dark mb-3 md:mb-4 text-sm md:text-base">
              {nav('digitalBanking')}
            </h3>
            <ul className="space-y-1.5 md:space-y-2 mb-5 md:mb-6">
              {footerLinks.digital.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-600 hover:text-bamis-secondary transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-bamis-dark mb-3 md:mb-4 text-sm md:text-base">{t('quickLinks')}</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-600 hover:text-bamis-secondary transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">{t('copyright')}</p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-xs md:text-sm text-gray-500 text-center">
            <Link
              href={`/${locale}/legal/privacy`}
              className="hover:text-bamis-secondary transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href={`/${locale}/legal/terms`}
              className="hover:text-bamis-secondary transition-colors"
            >
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
