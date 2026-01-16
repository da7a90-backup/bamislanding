'use client'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import BubbleCard from '@/components/ui/BubbleCard'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'
import { TrendingUp, Shield, Building2, FileCheck, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function FinancingPage() {
  const t = useTranslations('financing')

  const financingProducts = [
    {
      name: t('products.mourabaha.name'),
      description: t('products.mourabaha.description'),
      details: t('products.mourabaha.details'),
      features: [
        t('products.mourabaha.features.0'),
        t('products.mourabaha.features.1'),
        t('products.mourabaha.features.2'),
        t('products.mourabaha.features.3'),
      ],
      icon: TrendingUp,
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      name: t('products.murabahaRevolving.name'),
      description: t('products.murabahaRevolving.description'),
      details: t('products.murabahaRevolving.details'),
      features: [
        t('products.murabahaRevolving.features.0'),
        t('products.murabahaRevolving.features.1'),
        t('products.murabahaRevolving.features.2'),
        t('products.murabahaRevolving.features.3'),
      ],
      icon: Shield,
      gradient: 'from-emerald-600 to-teal-500',
    },
    {
      name: t('products.guarantees.name'),
      description: t('products.guarantees.description'),
      details: t('products.guarantees.details'),
      features: [
        t('products.guarantees.features.0'),
        t('products.guarantees.features.1'),
        t('products.guarantees.features.2'),
        t('products.guarantees.features.3'),
      ],
      icon: FileCheck,
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      name: t('products.leasing.name'),
      description: t('products.leasing.description'),
      details: t('products.leasing.details'),
      features: [
        t('products.leasing.features.0'),
        t('products.leasing.features.1'),
        t('products.leasing.features.2'),
        t('products.leasing.features.3'),
      ],
      icon: Building2,
      gradient: 'from-amber-600 to-orange-500',
    },
  ]

  const personalCredits = [
    {
      name: t('personalCredits.ettemwile.name'),
      description: t('personalCredits.ettemwile.description'),
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      name: t('personalCredits.ettejhizze.name'),
      description: t('personalCredits.ettejhizze.description'),
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      name: t('personalCredits.essekene.name'),
      description: t('personalCredits.essekene.description'),
      gradient: 'from-emerald-500 to-teal-400',
    },
  ]

  const advantages = [
    t('advantages.list.0'),
    t('advantages.list.1'),
    t('advantages.list.2'),
    t('advantages.list.3'),
    t('advantages.list.4'),
  ]

  const beneficiaries = [
    t('beneficiaries.list.0'),
    t('beneficiaries.list.1'),
    t('beneficiaries.list.2'),
    t('beneficiaries.list.3'),
    t('beneficiaries.list.4'),
  ]

  const requirements = [
    t('requirements.list.0'),
    t('requirements.list.1'),
    t('requirements.list.2'),
    t('requirements.list.3'),
    t('requirements.list.4'),
    t('requirements.list.5'),
  ]

  return (
    <>
      <AnimatedGridBackground />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-bamis-primary mb-4 md:mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="mt-6">
              <Button size="lg" className="bg-bamis-secondary hover:bg-bamis-secondary/90">
                <a href="https://mobile.bamis.mr:4449/portail/" target="_blank" rel="noopener noreferrer">
                  {t('hero.ctaButton')}
                </a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Financing Products */}
      <section className="relative py-8 md:py-12 lg:py-16">
        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-bamis-primary mb-3 md:mb-4">
              {t('products.title')}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {t('products.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {financingProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BubbleCard gradient="from-white/20 to-white/10" className="h-full">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div className={`bg-gradient-to-br ${product.gradient} h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                      <product.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 md:mb-3 text-bamis-primary">
                      {product.name}
                    </h3>

                    <p className="text-sm md:text-base font-semibold text-gray-700 mb-3">{product.description}</p>
                    <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">{product.details}</p>

                    <ul className="space-y-2 flex-grow">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start text-xs md:text-sm text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-bamis-secondary mr-2 md:mr-3 shrink-0 mt-1.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </BubbleCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Personal Credits Section */}
      <section className="relative py-8 md:py-12 lg:py-16 bg-gray-50/50">
        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-bamis-primary mb-3 md:mb-4">
              {t('personalCredits.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {personalCredits.map((credit, index) => (
              <motion.div
                key={credit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BubbleCard className="h-full">
                  <div className="p-6 md:p-8 text-center">
                    <div className={`bg-gradient-to-br ${credit.gradient} h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4`}>
                      <Home className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-gray-900">
                      {credit.name}
                    </h3>
                    <p className="text-sm text-gray-600">{credit.description}</p>
                  </div>
                </BubbleCard>
              </motion.div>
            ))}
          </div>

          {/* Advantages and Beneficiaries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <BubbleCard>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 text-bamis-primary">
                  {t('advantages.title')}
                </h3>
                <ul className="space-y-2">
                  {advantages.map((advantage) => (
                    <li key={advantage} className="flex items-start text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-bamis-secondary mr-3 shrink-0 mt-1.5" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BubbleCard>

            <BubbleCard>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 text-bamis-primary">
                  {t('beneficiaries.title')}
                </h3>
                <ul className="space-y-2">
                  {beneficiaries.map((beneficiary) => (
                    <li key={beneficiary} className="flex items-start text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-bamis-secondary mr-3 shrink-0 mt-1.5" />
                      <span>{beneficiary}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BubbleCard>
          </div>
        </Container>
      </section>

      {/* Requirements Section */}
      <section className="relative py-8 md:py-12 lg:py-16">
        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <BubbleCard gradient="from-bamis-primary/10 to-bamis-secondary/10">
              <div className="p-6 md:p-8 lg:p-10">
                <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-bamis-primary mb-6">
                  {t('requirements.title')}
                </h2>
                <p className="text-sm md:text-base text-gray-700 mb-6">
                  {t('requirements.intro')}
                </p>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <motion.li
                      key={req}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start text-sm md:text-base text-gray-700"
                    >
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-bamis-secondary text-white text-xs font-bold mr-3 shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </BubbleCard>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-8 md:py-12 lg:py-16">
        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-bamis rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16"
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-bamis-primary hover:bg-white/90">
                <a href="https://mobile.bamis.mr:4449/portail/" target="_blank" rel="noopener noreferrer">
                  {t('cta.button1')}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('cta.button2')}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
