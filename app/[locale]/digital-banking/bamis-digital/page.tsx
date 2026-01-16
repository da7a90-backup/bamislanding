'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'
import {
  Smartphone,
  CreditCard,
  Send,
  Receipt,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle2,
  Download,
  QrCode,
  Users,
  Globe,
  Wallet,
  ArrowRight,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function BamisDigitalPage() {
  const t = useTranslations('bamisDigital')
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFeature, setActiveFeature] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: CreditCard,
      title: t('features.accountManagement.title'),
      description: t('features.accountManagement.description'),
      benefits: [
        t('features.accountManagement.benefit1'),
        t('features.accountManagement.benefit2'),
        t('features.accountManagement.benefit3'),
        t('features.accountManagement.benefit4'),
      ],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Send,
      title: t('features.transfers.title'),
      description: t('features.transfers.description'),
      benefits: [
        t('features.transfers.benefit1'),
        t('features.transfers.benefit2'),
        t('features.transfers.benefit3'),
        t('features.transfers.benefit4'),
      ],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: Receipt,
      title: t('features.billPayments.title'),
      description: t('features.billPayments.description'),
      benefits: [
        t('features.billPayments.benefit1'),
        t('features.billPayments.benefit2'),
        t('features.billPayments.benefit3'),
        t('features.billPayments.benefit4'),
      ],
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: QrCode,
      title: t('features.qrPayments.title'),
      description: t('features.qrPayments.description'),
      benefits: [
        t('features.qrPayments.benefit1'),
        t('features.qrPayments.benefit2'),
        t('features.qrPayments.benefit3'),
        t('features.qrPayments.benefit4'),
      ],
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: Wallet,
      title: t('features.cardRequest.title'),
      description: t('features.cardRequest.description'),
      benefits: [
        t('features.cardRequest.benefit1'),
        t('features.cardRequest.benefit2'),
        t('features.cardRequest.benefit3'),
        t('features.cardRequest.benefit4'),
      ],
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    {
      icon: Globe,
      title: t('features.international.title'),
      description: t('features.international.description'),
      benefits: [
        t('features.international.benefit1'),
        t('features.international.benefit2'),
        t('features.international.benefit3'),
        t('features.international.benefit4'),
      ],
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
  ]

  const stats = [
    { icon: Users, value: t('stats.usersValue'), label: t('stats.users'), color: 'text-blue-600' },
    { icon: TrendingUp, value: t('stats.transactionsValue'), label: t('stats.transactions'), color: 'text-emerald-600' },
    { icon: Clock, value: t('stats.availabilityValue'), label: t('stats.availability'), color: 'text-purple-600' },
    { icon: Shield, value: t('stats.securityValue'), label: t('stats.security'), color: 'text-amber-600' },
  ]

  const securityFeatures = [
    {
      icon: Shield,
      title: t('security.biometric.title'),
      description: t('security.biometric.description'),
    },
    {
      icon: Zap,
      title: t('security.notifications.title'),
      description: t('security.notifications.description'),
    },
    {
      icon: CheckCircle2,
      title: t('security.encryption.title'),
      description: t('security.encryption.description'),
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
                <Smartphone className="h-4 w-4 text-bamis-primary" />
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
                    <Download className="mr-2 h-5 w-5" />
                    {t('hero.downloadAndroid')}
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
                    <Download className="mr-2 h-5 w-5" />
                    {t('hero.downloadIOS')}
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

      {/* Main Features Section */}
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
                    <div className={`${feature.bg} ${feature.color} h-16 w-16 rounded-2xl flex items-center justify-center mb-6`}>
                      <feature.icon className="h-8 w-8" />
                    </div>
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

      {/* Security Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Shield className="h-16 w-16 text-bamis-primary mx-auto mb-6" />
              <h2 className="font-heading text-3xl font-bold text-bamis-primary mb-4">
                {t('security.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('security.description')}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-bamis-secondary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-bamis-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-bamis text-white">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Smartphone className="h-16 w-16 mx-auto mb-6 text-bamis-primary" />
            <h2 className="font-heading text-3xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-2xl">
                <Download className="mr-2 h-5 w-5" />
                {t('cta.downloadNow')}
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-bamis-primary shadow-2xl">
                {t('cta.learnMore')}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
