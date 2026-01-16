'use client'

import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Zap, Globe } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import 3D card to avoid SSR issues
const CreditCard3D = dynamic(() => import('@/components/3d/CreditCard3D'), {
  ssr: false,
  loading: () => <div className="h-[500px] animate-pulse bg-gradient-to-br from-bamis-primary/20 to-bamis-secondary/20 rounded-3xl" />
})

export default function HeroEnhanced() {
  const t = useTranslations('home')
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Create smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 }

  // Multiple parallax layers with different speeds
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig)
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig)
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -450]), springConfig)
  const y4 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig)

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // Animated gradient orbs
  const orbVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >

      <Container size="wide" className="relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-screen py-16 md:py-20">
          {/* Left content with parallax */}
          <motion.div
            style={{ opacity, scale }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bamis-secondary/10 border border-bamis-secondary/20"
            >
              <TrendingUp className="w-4 h-4 text-bamis-secondary" />
              <span className="text-sm font-medium text-bamis-secondary">
                {t('heroBadge')}
              </span>
            </motion.div>

            {/* Main heading with stagger animation */}
            <div className="space-y-3 md:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight leading-tight"
              >
                <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 bg-clip-text text-transparent animate-gradient">
                  {t('heroMainTitle')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-green-400 bg-clip-text text-transparent">
                  {t('heroSubTitle')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-lg lg:text-xl text-black font-medium max-w-xl mx-auto lg:mx-0"
              >
                {t('heroDescription2')}
              </motion.p>
            </div>

            {/* Animated stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 py-4 md:py-6"
            >
              {[
                { icon: Shield, value: t('stats.experience.value'), label: t('stats.experience.label') },
                { icon: Globe, value: t('stats.branches.value'), label: t('stats.branches.label') },
                { icon: Zap, value: t('stats.atms.value'), label: t('stats.atms.label') },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-bamis-primary/10 mb-1 md:mb-2">
                    <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-bamis-primary" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-black">{stat.value}</div>
                  <div className="text-[10px] md:text-sm text-black font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="group w-full md:w-auto">
                <Link href="/fr/contact">
                  {t('heroCTA1')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full md:w-auto">
                <Link href="/fr/about/president">
                  {t('heroCTA2')}
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-3 md:gap-6 pt-4 md:pt-8 justify-center lg:justify-start text-xs md:text-sm text-black font-medium"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-bamis-secondary" />
                <span>{t('trustBadge1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-bamis-secondary" />
                <span>{t('trustBadge2')}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Card with parallax */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative order-first lg:order-last -mx-4 md:mx-0"
          >
            {/* 3D Card */}
            <div className="relative">
              <CreditCard3D className="w-full" />
            </div>

            {/* Floating transaction indicators */}
            {[
              { text: '+150MRU', delay: 0, x: -20, y: 50 },
              { text: '+90MRU', delay: 0.2, x: 300, y: 100 },
              { text: '+1200MRU', delay: 0.4, x: -50, y: 400 },
            ].map((indicator, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1, 0],
                  y: [0, -20, -40, -60]
                }}
                transition={{
                  duration: 3,
                  delay: indicator.delay,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute pointer-events-none"
                style={{ left: indicator.x, top: indicator.y }}
              >
                <div className="px-3 py-1.5 rounded-full bg-bamis-secondary text-white text-sm font-medium shadow-lg">
                  {indicator.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-bamis-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ["20%", "80%", "20%"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 bg-bamis-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
