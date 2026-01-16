'use client'

import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import BubbleCard from '@/components/ui/BubbleCard'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'
import { Globe, FileText, Send, DollarSign, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function InternationalPage() {
  const t = useTranslations('international')

  const services = [
    {
      name: t('services.documentary.name'),
      subtitle: t('services.documentary.subtitle'),
      description: t('services.documentary.description'),
      icon: FileText,
      gradient: 'from-blue-600 to-cyan-500',
      features: [
        t('services.documentary.features.0'),
        t('services.documentary.features.1'),
        t('services.documentary.features.2'),
        t('services.documentary.features.3'),
      ],
    },
    {
      name: t('services.transfers.name'),
      subtitle: t('services.transfers.subtitle'),
      description: t('services.transfers.description'),
      icon: Send,
      gradient: 'from-emerald-600 to-teal-500',
      features: [
        t('services.transfers.features.0'),
        t('services.transfers.features.1'),
        t('services.transfers.features.2'),
        t('services.transfers.features.3'),
      ],
    },
    {
      name: t('services.currencyAccounts.name'),
      subtitle: t('services.currencyAccounts.subtitle'),
      description: t('services.currencyAccounts.description'),
      icon: DollarSign,
      gradient: 'from-purple-600 to-pink-500',
      features: [
        t('services.currencyAccounts.features.0'),
        t('services.currencyAccounts.features.1'),
        t('services.currencyAccounts.features.2'),
        t('services.currencyAccounts.features.3'),
      ],
    },
    {
      name: t('services.exchange.name'),
      subtitle: t('services.exchange.subtitle'),
      description: t('services.exchange.description'),
      icon: Globe,
      gradient: 'from-amber-600 to-orange-500',
      features: [
        t('services.exchange.features.0'),
        t('services.exchange.features.1'),
        t('services.exchange.features.2'),
        t('services.exchange.features.3'),
      ],
    },
    {
      name: t('services.guarantees.name'),
      subtitle: t('services.guarantees.subtitle'),
      description: t('services.guarantees.description'),
      icon: Shield,
      gradient: 'from-rose-600 to-red-500',
      features: [
        t('services.guarantees.features.0'),
        t('services.guarantees.features.1'),
        t('services.guarantees.features.2'),
        t('services.guarantees.features.3'),
      ],
    },
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

      {/* Services Section */}
      <section className="relative py-8 md:py-12 lg:py-16">
        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BubbleCard gradient="from-white/20 to-white/10" className="h-full">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div className={`bg-gradient-to-br ${service.gradient} h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                      <service.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>

                    <div className="mb-4">
                      <h3 className="font-heading text-xl md:text-2xl font-bold mb-1 text-bamis-primary">
                        {service.name}
                      </h3>
                      <p className="text-sm md:text-base font-semibold text-gray-700">{service.subtitle}</p>
                    </div>

                    <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">{service.description}</p>

                    <ul className="space-y-2 flex-grow">
                      {service.features.map((feature) => (
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

      {/* Benefits Section */}
      <section className="relative py-8 md:py-12 lg:py-16 bg-gray-50/50">
        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-bamis-primary mb-3 md:mb-4">
              {t('benefits.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <BubbleCard>
              <div className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-br from-bamis-primary to-bamis-secondary h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {t('benefits.network.title')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('benefits.network.description')}
                </p>
              </div>
            </BubbleCard>

            <BubbleCard>
              <div className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-br from-bamis-primary to-bamis-secondary h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {t('benefits.security.title')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('benefits.security.description')}
                </p>
              </div>
            </BubbleCard>

            <BubbleCard>
              <div className="p-6 md:p-8 text-center">
                <div className="bg-gradient-to-br from-bamis-primary to-bamis-secondary h-16 w-16 mx-auto rounded-xl flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-2 text-gray-900">
                  {t('benefits.expertise.title')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t('benefits.expertise.description')}
                </p>
              </div>
            </BubbleCard>
          </div>
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
