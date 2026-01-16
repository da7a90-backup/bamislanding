'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Wallet,
  CreditCard,
  TrendingUp,
  Globe,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductsPage() {
  const locale = useLocale()
  const t = useTranslations('products')
  const tCommon = useTranslations('common')

  const products = [
    {
      icon: Wallet,
      title: t('list.0.title'),
      description: t('list.0.description'),
      features: [
        t('list.0.features.0'),
        t('list.0.features.1'),
        t('list.0.features.2'),
        t('list.0.features.3'),
      ],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      gradient: 'from-blue-600 to-cyan-500',
      href: '/products/accounts',
    },
    {
      icon: CreditCard,
      title: t('list.1.title'),
      description: t('list.1.description'),
      features: [
        t('list.1.features.0'),
        t('list.1.features.1'),
        t('list.1.features.2'),
        t('list.1.features.3'),
      ],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      gradient: 'from-emerald-600 to-teal-500',
      href: '/products/cards',
    },
    {
      icon: TrendingUp,
      title: t('list.2.title'),
      description: t('list.2.description'),
      features: [
        t('list.2.features.0'),
        t('list.2.features.1'),
        t('list.2.features.2'),
        t('list.2.features.3'),
      ],
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      gradient: 'from-purple-600 to-pink-500',
      href: '/products/financing',
    },
    {
      icon: Globe,
      title: t('list.3.title'),
      description: t('list.3.description'),
      features: [
        t('list.3.features.0'),
        t('list.3.features.1'),
        t('list.3.features.2'),
        t('list.3.features.3'),
      ],
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      gradient: 'from-amber-600 to-orange-500',
      href: '/products/international',
    },
  ]

  const advantages = [
    {
      icon: Shield,
      title: t('advantages.list.0.title'),
      description: t('advantages.list.0.description'),
    },
    {
      icon: Clock,
      title: t('advantages.list.1.title'),
      description: t('advantages.list.1.description'),
    },
    {
      icon: CheckCircle2,
      title: t('advantages.list.2.title'),
      description: t('advantages.list.2.description'),
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('hero.description')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button variant="secondary" size="lg">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <Container size="wide">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group hover:-translate-y-2">
                  <CardHeader>
                    <div
                      className={`${product.bg} ${product.color} h-16 w-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <product.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-gray-700"
                        >
                          <CheckCircle2 className="h-5 w-5 text-bamis-primary mr-3 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${locale}${product.href}`}>
                      <Button className="w-full group/btn">
                        {tCommon('learnMore')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages */}
      <section className="py-20 lg:py-32 bg-white">
        <Container size="wide">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-bamis-primary mb-4">
              {t('advantages.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('advantages.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-bamis-secondary/10 mb-6">
                  <advantage.icon className="h-8 w-8 text-bamis-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-bamis text-white">
        <Container className="text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`}>
              <Button variant="secondary" size="lg">
                {t('cta.button1')}
              </Button>
            </Link>
            <Link href={`/${locale}/locations`}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-bamis-primary"
              >
                {t('cta.button2')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
