'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'
import {
  Globe,
  Smartphone,
  Monitor,
  Lock,
  Eye,
  Download,
  Send,
  CreditCard,
  FileText,
  BarChart3,
  Bell,
  Shield,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function WebMobileBankingPage() {
  const t = useTranslations('webMobile')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: Eye,
      title: t('features.consultation.title'),
      description: t('features.consultation.description'),
      benefits: [
        t('features.consultation.benefits.0'),
        t('features.consultation.benefits.1'),
        t('features.consultation.benefits.2'),
        t('features.consultation.benefits.3')
      ],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Send,
      title: t('features.transfers.title'),
      description: t('features.transfers.description'),
      benefits: [
        t('features.transfers.benefits.0'),
        t('features.transfers.benefits.1'),
        t('features.transfers.benefits.2'),
        t('features.transfers.benefits.3')
      ],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: CreditCard,
      title: t('features.cards.title'),
      description: t('features.cards.description'),
      benefits: [
        t('features.cards.benefits.0'),
        t('features.cards.benefits.1'),
        t('features.cards.benefits.2'),
        t('features.cards.benefits.3')
      ],
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: FileText,
      title: t('features.checkbook.title'),
      description: t('features.checkbook.description'),
      benefits: [
        t('features.checkbook.benefits.0'),
        t('features.checkbook.benefits.1'),
        t('features.checkbook.benefits.2'),
        t('features.checkbook.benefits.3')
      ],
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: Download,
      title: t('features.documents.title'),
      description: t('features.documents.description'),
      benefits: [
        t('features.documents.benefits.0'),
        t('features.documents.benefits.1'),
        t('features.documents.benefits.2'),
        t('features.documents.benefits.3')
      ],
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      benefits: [
        t('features.analytics.benefits.0'),
        t('features.analytics.benefits.1'),
        t('features.analytics.benefits.2'),
        t('features.analytics.benefits.3')
      ],
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
  ]

  const platforms = [
    {
      icon: Monitor,
      name: t('platforms.web.title'),
      description: t('platforms.description'),
      features: [
        t('platforms.web.features.0'),
        t('platforms.web.features.1'),
        t('platforms.web.features.2'),
        t('platforms.web.features.3'),
        t('platforms.web.features.4')
      ],
    },
    {
      icon: Smartphone,
      name: t('platforms.mobile.title'),
      description: t('platforms.description'),
      features: [
        t('platforms.mobile.features.0'),
        t('platforms.mobile.features.1'),
        t('platforms.mobile.features.2'),
        t('platforms.mobile.features.3'),
        t('platforms.mobile.features.4')
      ],
    },
  ]

  const stats = [
    { icon: Users, value: t('stats.users.value'), label: t('stats.users.label'), color: 'text-blue-600' },
    { icon: TrendingUp, value: t('stats.operations.value'), label: t('stats.operations.label'), color: 'text-emerald-600' },
    { icon: Clock, value: t('stats.availability.value'), label: t('stats.availability.label'), color: 'text-purple-600' },
    { icon: Shield, value: t('stats.satisfaction.value'), label: t('stats.satisfaction.label'), color: 'text-amber-600' },
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: t('security.features.twoFactor.title'),
      description: t('security.features.twoFactor.description'),
    },
    {
      icon: Shield,
      title: t('security.features.ssl.title'),
      description: t('security.features.ssl.description'),
    },
    {
      icon: Bell,
      title: t('security.features.monitoring.title'),
      description: t('security.features.monitoring.description'),
    },
    {
      icon: Eye,
      title: t('security.features.encryption.title'),
      description: t('security.features.encryption.description'),
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
                <Globe className="h-4 w-4 text-bamis-primary" />
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
                    {t('hero.accessWeb')}
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
                    {t('hero.downloadMobile')}
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
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group">
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

      {/* Platforms Comparison */}
      <section className="py-20">
        <Container size="wide">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-bamis-primary mb-4">
                {t('platforms.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('platforms.description')}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full border-2 border-gray-100 hover:border-bamis-secondary/30 transition-all">
                  <CardContent className="p-8">
                    <platform.icon className="h-16 w-16 text-bamis-primary mb-6" />
                    <h3 className="font-heading font-bold text-2xl mb-3">{platform.name}</h3>
                    <p className="text-gray-600 mb-6">{platform.description}</p>
                    <div className="space-y-2">
                      {platform.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <CheckCircle2 className="h-4 w-4 text-bamis-primary mr-2 shrink-0" />
                          {feature}
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
        <Container size="wide">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-bamis-secondary/10 mb-4">
                      <feature.icon className="h-8 w-8 text-bamis-primary" />
                    </div>
                    <h3 className="font-bold text-sm mb-2">{feature.title}</h3>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
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
            <Globe className="h-16 w-16 mx-auto mb-6 text-bamis-primary" />
            <h2 className="font-heading text-3xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-2xl">
                {t('cta.button')}
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-bamis-primary shadow-2xl">
                {t('cta.userGuide')}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
