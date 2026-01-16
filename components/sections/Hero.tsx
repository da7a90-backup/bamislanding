'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ArrowRight, Smartphone, CreditCard, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const t = useTranslations('home')
  const common = useTranslations('common')
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bamis-dark via-bamis-primary to-bamis-dark text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <CreditCard className="h-32 w-32 text-bamis-secondary" />
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-10 opacity-20">
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Smartphone className="h-24 w-24 text-bamis-secondary" />
        </motion.div>
      </div>

      <Container size="wide" className="relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-bamis-secondary/20 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="h-4 w-4 text-bamis-secondary" />
              <span className="text-sm font-medium text-bamis-secondary">
                100% Banque Mauritanienne
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('heroTitle')}
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg">
              {t('heroDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group"
              >
                <Link href={`/${locale}/products`}>
                  {t('heroCTA')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-bamis-primary"
              >
                <Link href={`/${locale}/contact`}>{common('openAccount')}</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-bamis-secondary mb-1">
                  35+
                </div>
                <div className="text-sm text-gray-300">Années d&apos;expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bamis-secondary mb-1">
                  9
                </div>
                <div className="text-sm text-gray-300">Agences</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bamis-secondary mb-1">
                  14+
                </div>
                <div className="text-sm text-gray-300">GAB</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element - Glass Card Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="aspect-[1.6/1] bg-gradient-to-br from-bamis-secondary to-emerald-400 rounded-2xl p-6 flex flex-col justify-between shadow-2xl">
                  <div>
                    <div className="text-white/80 text-sm mb-1">
                      BAMIS Digital
                    </div>
                    <div className="text-white text-2xl font-bold">
                      **** **** **** 5678
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/80 text-xs mb-1">
                        Titulaire
                      </div>
                      <div className="text-white font-semibold">
                        Mohamed OULD Ahmed
                      </div>
                    </div>
                    <div className="h-12 w-16 bg-white/20 rounded backdrop-blur"></div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 w-48"
              >
                <div className="text-xs text-gray-300 mb-1">Solde actuel</div>
                <div className="text-2xl font-bold text-bamis-secondary">
                  125,450 MRU
                </div>
                <div className="text-xs text-green-400 mt-1">+12.5% ce mois</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 fill-current text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}
