'use client'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import BubbleCard from '@/components/ui/BubbleCard'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'
import { CreditCard, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function CardsPage() {
  const t = useTranslations('cards')

  const debitCards = [
    {
      name: t('debitCards.errassid.name'),
      description: t('debitCards.errassid.description'),
      features: [
        t('debitCards.errassid.features.0'),
        t('debitCards.errassid.features.1'),
        t('debitCards.errassid.features.2'),
        t('debitCards.errassid.features.3'),
      ],
      gradient: 'from-blue-600 to-cyan-500',
      network: t('debitCards.errassid.network'),
    },
    {
      name: t('debitCards.visa.name'),
      description: t('debitCards.visa.description'),
      features: [
        t('debitCards.visa.features.0'),
        t('debitCards.visa.features.1'),
        t('debitCards.visa.features.2'),
        t('debitCards.visa.features.3'),
      ],
      gradient: 'from-purple-600 to-pink-500',
      network: t('debitCards.visa.network'),
    },
  ]

  const creditCards = [
    {
      name: t('creditCards.visaGold.name'),
      description: t('creditCards.visaGold.description'),
      features: [
        t('creditCards.visaGold.features.0'),
        t('creditCards.visaGold.features.1'),
        t('creditCards.visaGold.features.2'),
        t('creditCards.visaGold.features.3'),
        t('creditCards.visaGold.features.4'),
        t('creditCards.visaGold.features.5'),
      ],
      gradient: 'from-amber-600 to-yellow-500',
      network: t('creditCards.visaGold.network'),
    },
    {
      name: t('creditCards.essayire.name'),
      description: t('creditCards.essayire.description'),
      features: [
        t('creditCards.essayire.features.0'),
        t('creditCards.essayire.features.1'),
        t('creditCards.essayire.features.2'),
        t('creditCards.essayire.features.3'),
        t('creditCards.essayire.features.4'),
      ],
      gradient: 'from-emerald-600 to-teal-500',
      network: t('creditCards.essayire.network'),
    },
  ]

  const requirements = [
    t('requirements.list.0'),
    t('requirements.list.1'),
    t('requirements.list.2'),
    t('requirements.list.3'),
    t('requirements.list.4'),
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
          </motion.div>
        </Container>
      </section>

      {/* Debit Cards Section */}
      <section className="relative py-8 md:py-12 lg:py-16">
        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-bamis-primary mb-3 md:mb-4">
              {t('debitCards.title')}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {t('debitCards.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {debitCards.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BubbleCard gradient="from-white/20 to-white/10" className="h-full">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div className={`bg-gradient-to-br ${card.gradient} h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                      <CreditCard className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">
                      {card.name}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{card.description}</p>

                    <div className="mb-4 md:mb-6">
                      <span className="inline-block px-3 py-1 bg-bamis-secondary/10 text-bamis-secondary rounded-full text-xs md:text-sm font-semibold">
                        {card.network}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4 md:mb-6 flex-grow">
                      {card.features.map((feature) => (
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

      {/* Credit Cards Section */}
      <section className="relative py-8 md:py-12 lg:py-16">
        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-bamis-primary mb-3 md:mb-4">
              {t('creditCards.title')}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {t('creditCards.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {creditCards.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BubbleCard gradient="from-white/20 to-white/10" className="h-full">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div className={`bg-gradient-to-br ${card.gradient} h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                      <CreditCard className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">
                      {card.name}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{card.description}</p>

                    <div className="mb-4 md:mb-6">
                      <span className="inline-block px-3 py-1 bg-bamis-secondary/10 text-bamis-secondary rounded-full text-xs md:text-sm font-semibold">
                        {card.network}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4 md:mb-6 flex-grow">
                      {card.features.map((feature) => (
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
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-bamis-primary to-bamis-secondary h-12 w-12 md:h-14 md:w-14 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-bamis-primary">
                    {t('requirements.title')}
                  </h2>
                </div>

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
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-bamis-secondary text-white text-xs md:text-sm font-bold mr-3 shrink-0 mt-0.5">
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
                {t('cta.button1')}
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
