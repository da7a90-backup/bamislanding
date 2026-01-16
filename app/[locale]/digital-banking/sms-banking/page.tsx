'use client'

import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'
import {
  MessageSquare,
  Smartphone,
  Zap,
  Shield,
  Clock,
  DollarSign,
  CreditCard,
  Send,
  Receipt,
  CheckCircle2,
  ArrowRight,
  Signal,
  Battery,
  Users,
  Globe,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

export default function SmsBankingPage() {
  const t = useTranslations('smsBanking')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: DollarSign,
      title: t('features.balance.title'),
      description: t('features.balance.description'),
      command: t('features.balance.command'),
      response: t('features.balance.response'),
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Send,
      title: t('features.transfer.title'),
      description: t('features.transfer.description'),
      command: t('features.transfer.command'),
      response: t('features.transfer.response'),
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: Receipt,
      title: t('features.history.title'),
      description: t('features.history.description'),
      command: t('features.history.command'),
      response: t('features.history.response'),
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: CreditCard,
      title: t('features.cardStatus.title'),
      description: t('features.cardStatus.description'),
      command: t('features.cardStatus.command'),
      response: t('features.cardStatus.response'),
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: MessageSquare,
      title: t('features.billPayment.title'),
      description: t('features.billPayment.description'),
      command: t('features.billPayment.command'),
      response: t('features.billPayment.response'),
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    {
      icon: Globe,
      title: t('features.blockCard.title'),
      description: t('features.blockCard.description'),
      command: t('features.blockCard.command'),
      response: t('features.blockCard.response'),
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
  ]

  const commands = [
    { code: t('commands.list.0.code'), description: t('commands.list.0.description'), example: t('commands.list.0.example') },
    { code: t('commands.list.1.code'), description: t('commands.list.1.description'), example: t('commands.list.1.example') },
    { code: t('commands.list.2.code'), description: t('commands.list.2.description'), example: t('commands.list.2.example') },
    { code: t('commands.list.3.code'), description: t('commands.list.3.description'), example: t('commands.list.3.example') },
    { code: t('commands.list.4.code'), description: t('commands.list.4.description'), example: t('commands.list.4.example') },
    { code: t('commands.list.5.code'), description: t('commands.list.5.description'), example: t('commands.list.5.example') },
  ]

  const benefits = [
    {
      icon: Zap,
      title: t('benefits.list.0.title'),
      description: t('benefits.list.0.description'),
    },
    {
      icon: Signal,
      title: t('benefits.list.1.title'),
      description: t('benefits.list.1.description'),
    },
    {
      icon: Battery,
      title: t('benefits.list.2.title'),
      description: t('benefits.list.2.description'),
    },
    {
      icon: Smartphone,
      title: t('benefits.list.3.title'),
      description: t('benefits.list.3.description'),
    },
    {
      icon: Shield,
      title: t('benefits.list.4.title'),
      description: t('benefits.list.4.description'),
    },
    {
      icon: Clock,
      title: t('benefits.list.5.title'),
      description: t('benefits.list.5.description'),
    },
  ]

  const stats = [
    { icon: Users, value: t('stats.users.value'), label: t('stats.users.label'), color: 'text-blue-600' },
    { icon: MessageSquare, value: t('stats.sms.value'), label: t('stats.sms.label'), color: 'text-emerald-600' },
    { icon: Zap, value: t('stats.responseTime.value'), label: t('stats.responseTime.label'), color: 'text-purple-600' },
    { icon: Shield, value: t('stats.security.value'), label: t('stats.security.label'), color: 'text-amber-600' },
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
                <MessageSquare className="h-4 w-4 text-bamis-primary" />
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
                    {t('hero.startNow')}
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
                    {t('hero.seeCommands')}
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

      {/* Features Section */}
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
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Commande:</div>
                        <div className="font-mono text-sm font-semibold text-bamis-primary">
                          {feature.command}
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <div className="text-xs text-gray-500 mb-1">Réponse:</div>
                        <div className="text-sm text-gray-700">{feature.response}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Commands Reference */}
      <section className="py-20">
        <Container size="wide">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-bamis-primary mb-4">
                {t('commands.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('commands.description')}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {commands.map((command, index) => (
              <motion.div
                key={command.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-2 border-gray-100 hover:border-bamis-secondary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="inline-block px-3 py-1 bg-bamis-secondary/10 rounded-full mb-3">
                      <span className="font-mono font-bold text-bamis-primary">{command.code}</span>
                    </div>
                    <h3 className="font-bold mb-2 text-gray-900">{command.description}</h3>
                    <p className="text-sm text-gray-600 font-mono bg-gray-50 px-3 py-2 rounded">
                      {command.example}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Card className="max-w-2xl mx-auto bg-bamis-primary/5 border-2 border-bamis-primary/20">
              <CardContent className="p-8">
                <MessageSquare className="h-12 w-12 text-bamis-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{t('number.title')}</h3>
                <div className="text-4xl font-bold text-bamis-primary mb-2">{t('number.value')}</div>
                <p className="text-sm text-gray-600">
                  {t('number.description')}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <Container size="wide">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-bamis-primary mb-4">
                {t('benefits.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('benefits.sectionDescription')}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-bamis-secondary/10 mb-4">
                  <benefit.icon className="h-8 w-8 text-bamis-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
                {t('cta.button')}
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-bamis-primary shadow-2xl">
                {t('cta.downloadGuide')}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
