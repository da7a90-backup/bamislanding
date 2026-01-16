'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import BubbleCard from '@/components/ui/BubbleCard'
import { CreditCard, Wallet, TrendingUp, Globe, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductsShowcase() {
  const common = useTranslations('common')
  const t = useTranslations('home.productsShowcase')
  const locale = useLocale()

  const products = [
    {
      icon: Wallet,
      title: t('accounts.title'),
      description: t('accounts.description'),
      features: [t('accounts.features.0'), t('accounts.features.1'), t('accounts.features.2')],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      href: '/products/accounts',
    },
    {
      icon: CreditCard,
      title: t('cards.title'),
      description: t('cards.description'),
      features: [t('cards.features.0'), t('cards.features.1'), t('cards.features.2')],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      href: '/products/cards',
    },
    {
      icon: TrendingUp,
      title: t('financing.title'),
      description: t('financing.description'),
      features: [t('financing.features.0'), t('financing.features.1'), t('financing.features.2')],
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      href: '/products/financing',
    },
    {
      icon: Globe,
      title: t('international.title'),
      description: t('international.description'),
      features: [t('international.features.0'), t('international.features.1'), t('international.features.2')],
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      href: '/products/international',
    },
  ]

  return (
    <section className="py-20 lg:py-32">
      <Container size="wide">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-bamis-primary mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BubbleCard>
                <div className="p-6">
                  <div className={`${product.bg} ${product.color} h-16 w-16 rounded-2xl flex items-center justify-center mb-4`}>
                    <product.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-4">
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-bamis-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/${locale}${product.href}`}>
                    <Button variant="ghost" className="w-full group/btn">
                      {common('learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </BubbleCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
