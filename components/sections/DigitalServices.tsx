'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import BubbleCard from '@/components/ui/BubbleCard'
import { Smartphone, QrCode, Globe, MessageSquare, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DigitalServices() {
  const common = useTranslations('common')
  const t = useTranslations('home.digitalServices')
  const locale = useLocale()

  const services = [
    {
      name: t('bamisDigital.name'),
      description: t('bamisDigital.description'),
      icon: Smartphone,
      features: [
        t('bamisDigital.features.0'),
        t('bamisDigital.features.1'),
        t('bamisDigital.features.2'),
        t('bamisDigital.features.3'),
      ],
      gradient: 'from-blue-600 to-cyan-500',
      href: '/digital-banking/bamis-digital',
    },
    {
      name: t('bamisPay.name'),
      description: t('bamisPay.description'),
      icon: QrCode,
      features: [
        t('bamisPay.features.0'),
        t('bamisPay.features.1'),
        t('bamisPay.features.2'),
        t('bamisPay.features.3'),
      ],
      gradient: 'from-emerald-600 to-teal-500',
      href: '/digital-banking/bamis-pay',
    },
    {
      name: t('webMobile.name'),
      description: t('webMobile.description'),
      icon: Globe,
      features: [
        t('webMobile.features.0'),
        t('webMobile.features.1'),
        t('webMobile.features.2'),
        t('webMobile.features.3'),
      ],
      gradient: 'from-purple-600 to-pink-500',
      href: '/digital-banking/web-mobile',
    },
    {
      name: t('smsBanking.name'),
      description: t('smsBanking.description'),
      icon: MessageSquare,
      features: [
        t('smsBanking.features.0'),
        t('smsBanking.features.1'),
        t('smsBanking.features.2'),
        t('smsBanking.features.3'),
      ],
      gradient: 'from-amber-600 to-orange-500',
      href: '/digital-banking/sms-banking',
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden relative">
      <Container size="wide" className="relative z-10 px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-bamis-primary">
              {t('title')}
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <BubbleCard gradient="from-white/20 to-white/10" className="h-full">
                <div className="p-5 md:p-6 lg:p-8 h-full flex flex-col">
                  <div className={`bg-gradient-to-br ${service.gradient} h-12 w-12 md:h-14 md:w-14 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>

                  <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-gray-900">
                    {service.name}
                  </h3>

                  <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-4 md:mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-4 md:mb-6 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs md:text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-bamis-secondary mr-2 md:mr-3 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/${locale}${service.href}`}>
                    <Button
                      variant="secondary"
                      className="group/btn"
                    >
                      {common('learnMore')}
                      <Download className="ml-2 h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </BubbleCard>
            </motion.div>
          ))}
        </div>

        {/* App Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-6 border border-gray-200 rounded-2xl p-5 md:p-8 bg-white/80 backdrop-blur-sm w-full max-w-2xl">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-lg md:text-2xl font-bold mb-2 text-bamis-primary">
                {t('downloadTitle')}
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                {t('downloadSubtitle')}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
              <a
                href="#"
                className="px-4 md:px-6 py-2.5 md:py-3 bg-bamis-primary text-white rounded-lg text-sm md:text-base font-medium hover:bg-bamis-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5 md:h-6 md:w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                {t('appStore')}
              </a>
              <a
                href="#"
                className="px-4 md:px-6 py-2.5 md:py-3 bg-bamis-primary text-white rounded-lg text-sm md:text-base font-medium hover:bg-bamis-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5 md:h-6 md:w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                {t('googlePlay')}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
