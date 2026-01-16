'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CallToAction() {
  const common = useTranslations('common')
  const t = useTranslations('home')
  const locale = useLocale()

  return (
    <section className="py-20 lg:py-32">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-bamis p-12 lg:p-16 text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {t('callToAction.title')}
              </h2>
              <p className="text-lg text-gray-100 mb-8">
                {t('callToAction.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="group"
                >
                  <Link href={`/${locale}/contact`}>
                    {common('openAccount')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-bamis-primary"
                >
                  <Link href={`/${locale}/contact`}>{common('contactUs')}</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h3 className="font-heading text-xl font-bold mb-4">
                  {t('callToAction.contactTitle')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-bamis-secondary flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-200">{t('callToAction.phone')}</div>
                      <div className="font-semibold">{t('callToAction.phoneValue')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-bamis-secondary flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-200">{t('callToAction.email')}</div>
                      <div className="font-semibold">{t('callToAction.emailValue')}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold mb-3">
                  {t('callToAction.hours')}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-200">{t('callToAction.mondayThursday')}</span>
                    <span className="font-semibold">{t('callToAction.mondayThursdayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200">{t('callToAction.friday')}</span>
                    <span className="font-semibold">{t('callToAction.fridayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200">{t('callToAction.digitalServices')}</span>
                    <span className="font-semibold text-bamis-secondary">{t('callToAction.digitalHours')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
