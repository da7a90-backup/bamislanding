'use client'

import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'
import {
  Smartphone,
  QrCode,
  ShoppingBag,
  Zap,
  Gift,
  TrendingUp,
  Shield,
  Users,
  Store,
  Receipt,
  CheckCircle2,
  ArrowRight,
  Percent,
  Clock,
  CreditCard,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function BamisPayPage() {
  const t = useTranslations('bamisPay')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: QrCode,
      title: t('features.qrCode.title'),
      description: t('features.qrCode.description'),
      benefits: [t('features.qrCode.benefits.0'), t('features.qrCode.benefits.1'), t('features.qrCode.benefits.2'), t('features.qrCode.benefits.3')],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: ShoppingBag,
      title: t('features.ecommerce.title'),
      description: t('features.ecommerce.description'),
      benefits: [t('features.ecommerce.benefits.0'), t('features.ecommerce.benefits.1'), t('features.ecommerce.benefits.2'), t('features.ecommerce.benefits.3')],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: Receipt,
      title: t('features.bills.title'),
      description: t('features.bills.description'),
      benefits: [t('features.bills.benefits.0'), t('features.bills.benefits.1'), t('features.bills.benefits.2'), t('features.bills.benefits.3')],
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: Users,
      title: t('features.p2p.title'),
      description: t('features.p2p.description'),
      benefits: [t('features.p2p.benefits.0'), t('features.p2p.benefits.1'), t('features.p2p.benefits.2'), t('features.p2p.benefits.3')],
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: Gift,
      title: t('features.loyalty.title'),
      description: t('features.loyalty.description'),
      benefits: [t('features.loyalty.benefits.0'), t('features.loyalty.benefits.1'), t('features.loyalty.benefits.2'), t('features.loyalty.benefits.3')],
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    {
      icon: Store,
      title: t('features.merchants.title'),
      description: t('features.merchants.description'),
      benefits: [t('features.merchants.benefits.0'), t('features.merchants.benefits.1'), t('features.merchants.benefits.2'), t('features.merchants.benefits.3')],
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
  ]

  const stats = [
    { icon: Store, value: t('stats.merchants.value'), label: t('stats.merchants.label'), color: 'text-blue-600' },
    { icon: Users, value: t('stats.users.value'), label: t('stats.users.label'), color: 'text-emerald-600' },
    { icon: TrendingUp, value: t('stats.transactions.value'), label: t('stats.transactions.label'), color: 'text-purple-600' },
    { icon: Percent, value: t('stats.cashback.value'), label: t('stats.cashback.label'), color: 'text-amber-600' },
  ]

  const useCases = [
    {
      title: t('useCases.0.title'),
      description: t('useCases.0.description'),
      icon: '🍽️',
    },
    {
      title: t('useCases.1.title'),
      description: t('useCases.1.description'),
      icon: '🛒',
    },
    {
      title: t('useCases.2.title'),
      description: t('useCases.2.description'),
      icon: '⛽',
    },
    {
      title: t('useCases.3.title'),
      description: t('useCases.3.description'),
      icon: '💊',
    },
    {
      title: t('useCases.4.title'),
      description: t('useCases.4.description'),
      icon: '👕',
    },
    {
      title: t('useCases.5.title'),
      description: t('useCases.5.description'),
      icon: '🔧',
    },
  ]

  return (
    <div>
      <AnimatedGridBackground />
      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative overflow-hidden py-20 lg:py-32"
      >

        <Container size="wide" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-bamis-secondary/20 px-4 py-2 rounded-full mb-6"
              >
                <Zap className="h-4 w-4 text-bamis-primary" />
                <span className="text-sm font-semibold text-bamis-primary">
                  {t('hero.badge')}
                </span>
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block"
                >
                  {t('hero.title')}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block bg-gradient-to-r from-bamis-secondary to-emerald-300 bg-clip-text text-transparent"
                >
                  {t('hero.subtitle')}
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" className="group shadow-2xl">
                    {t('hero.downloadApp')}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-2 border-bamis-primary text-bamis-primary hover:bg-bamis-primary hover:text-white shadow-2xl">
                    {t('hero.becomePartner')}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl p-6"
                >
                  <stat.icon className={`h-8 w-8 ${stat.color} mb-3`} />
                  <div className="text-3xl font-bold text-bamis-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32">
        <Container size="wide">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-bamis-secondary/10 text-bamis-primary rounded-full text-sm font-semibold mb-4">
                {t('features.sectionBadge')}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-bamis-primary mb-4">
                {t('features.sectionTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('features.sectionDescription')}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`${feature.bg} ${feature.color} h-16 w-16 rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <feature.icon className="h-8 w-8" />
                    </motion.div>
                    <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-bamis-primary mr-2 shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <Container size="wide">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-bamis-primary mb-4">
                {t('useCases.sectionTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('useCases.sectionDescription')}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-2 border-gray-100 hover:border-bamis-secondary/30 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{useCase.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
                    <p className="text-sm text-gray-600">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cashback CTA */}
      <section className="py-20 bg-gradient-bamis text-white">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Gift className="h-16 w-16 mx-auto mb-6 text-bamis-primary" />
            <h2 className="font-heading text-3xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-2xl">
                {t('cta.startNow')}
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-bamis-primary shadow-2xl">
                {t('cta.seeOffers')}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
