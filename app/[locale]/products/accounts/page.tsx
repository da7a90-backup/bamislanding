'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import BubbleCard from '@/components/ui/BubbleCard'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Wallet, TrendingUp, Shield, Clock, Users, ArrowRight } from 'lucide-react'

export default function AccountsPage() {
  const t = useTranslations('accounts')

  const accounts = [
    {
      title: t('list.0.title'),
      description: t('list.0.description'),
      icon: Wallet,
      features: [
        t('list.0.features.0'),
        t('list.0.features.1'),
        t('list.0.features.2'),
        t('list.0.features.3'),
      ],
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      title: t('list.1.title'),
      description: t('list.1.description'),
      icon: TrendingUp,
      features: [
        t('list.1.features.0'),
        t('list.1.features.1'),
        t('list.1.features.2'),
        t('list.1.features.3'),
      ],
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      title: t('list.2.title'),
      description: t('list.2.description'),
      icon: Users,
      features: [
        t('list.2.features.0'),
        t('list.2.features.1'),
        t('list.2.features.2'),
        t('list.2.features.3'),
      ],
      gradient: 'from-purple-500 to-pink-400',
    },
  ]

  const requirements = {
    individual: [
      t('requirements.individual.list.0'),
      t('requirements.individual.list.1'),
      t('requirements.individual.list.2'),
      t('requirements.individual.list.3'),
    ],
    business: [
      t('requirements.business.list.0'),
      t('requirements.business.list.1'),
      t('requirements.business.list.2'),
      t('requirements.business.list.3'),
    ],
  }

  return (
    <>
      <AnimatedGridBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <Container size="wide" className="px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-bamis-primary mb-4 md:mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12">
              {t('hero.description')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Accounts Grid */}
      <section className="relative py-16 md:py-24">
        <Container size="wide" className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {accounts.map((account, index) => (
              <motion.div
                key={account.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BubbleCard className="h-full">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div
                      className={'bg-gradient-to-br ' + account.gradient + ' h-16 w-16 rounded-2xl flex items-center justify-center mb-6'}
                    >
                      <account.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-gray-900">
                      {account.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 mb-6">
                      {account.description}
                    </p>

                    <ul className="space-y-3 mb-6 flex-grow">
                      {account.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-5 w-5 text-bamis-secondary mr-3 shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href="/fr/contact" className="w-full block">
                      <Button variant="secondary" className="w-full group">
                        {t('hero.title')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </BubbleCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Requirements Section */}
      <section className="relative py-16 md:py-24">
        <Container size="wide" className="px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-bamis-primary mb-4">
              {t('requirements.title')}
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              {t('requirements.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Individual Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BubbleCard>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-6 text-gray-900">
                    {t('requirements.individual.title')}
                  </h3>
                  <ul className="space-y-4">
                    {requirements.individual.map((req) => (
                      <li key={req} className="flex items-start text-sm md:text-base text-gray-600">
                        <Shield className="h-5 w-5 text-bamis-secondary mr-3 shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </BubbleCard>
            </motion.div>

            {/* Business Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BubbleCard>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-6 text-gray-900">
                    {t('requirements.business.title')}
                  </h3>
                  <ul className="space-y-4">
                    {requirements.business.map((req) => (
                      <li key={req} className="flex items-start text-sm md:text-base text-gray-600">
                        <Shield className="h-5 w-5 text-bamis-secondary mr-3 shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </BubbleCard>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24">
        <Container size="wide" className="px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-bamis rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <Clock className="h-16 w-16 mx-auto mb-6 text-bamis-secondary" />
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-sm md:text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/fr/contact">
                <Button size="lg" variant="secondary">
                  {t('cta.button1')}
                </Button>
              </Link>
              <Link href="/fr/locations">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                  {t('cta.button2')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
