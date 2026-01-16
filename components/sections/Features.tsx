'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import BubbleCard from '@/components/ui/BubbleCard'
import {
  Building2,
  Smartphone,
  MapPin,
  Sparkles,
  Shield,
  Clock,
  Users,
  Award,
  Zap,
  TrendingUp,
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Features() {
  const t = useTranslations('home')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: Building2,
      title: t('feature1Title'),
      description: t('feature1Desc'),
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Smartphone,
      title: t('feature2Title'),
      description: t('feature2Desc'),
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      icon: MapPin,
      title: t('feature3Title'),
      description: t('feature3Desc'),
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      icon: Sparkles,
      title: t('feature4Title'),
      description: t('feature4Desc'),
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      gradient: 'from-amber-500 to-orange-400',
    },
  ]

  const additionalFeatures = [
    {
      icon: Shield,
      title: t('additionalFeatures.security.title'),
      description: t('additionalFeatures.security.description'),
      stat: t('additionalFeatures.security.stat'),
      statLabel: t('additionalFeatures.security.statLabel'),
    },
    {
      icon: Clock,
      title: t('additionalFeatures.availability.title'),
      description: t('additionalFeatures.availability.description'),
      stat: t('additionalFeatures.availability.stat'),
      statLabel: t('additionalFeatures.availability.statLabel'),
    },
    {
      icon: Users,
      title: t('additionalFeatures.team.title'),
      description: t('additionalFeatures.team.description'),
      stat: t('additionalFeatures.team.stat'),
      statLabel: t('additionalFeatures.team.statLabel'),
    },
    {
      icon: Award,
      title: t('additionalFeatures.innovation.title'),
      description: t('additionalFeatures.innovation.description'),
      stat: t('additionalFeatures.innovation.stat'),
      statLabel: t('additionalFeatures.innovation.statLabel'),
    },
    {
      icon: Zap,
      title: t('additionalFeatures.speed.title'),
      description: t('additionalFeatures.speed.description'),
      stat: t('additionalFeatures.speed.stat'),
      statLabel: t('additionalFeatures.speed.statLabel'),
    },
    {
      icon: TrendingUp,
      title: t('additionalFeatures.stability.title'),
      description: t('additionalFeatures.stability.description'),
      stat: t('additionalFeatures.stability.stat'),
      statLabel: t('additionalFeatures.stability.statLabel'),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-bamis-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-bamis-primary/5 rounded-full blur-3xl"></div>
      </motion.div>

      <Container size="wide" className="relative z-10 px-4">
        {/* Main Features Grid */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-bamis-secondary/10 text-bamis-secondary rounded-full text-sm font-semibold mb-4"
            >
              {t('featuresSubtitle')}
            </motion.span>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-bamis-primary mb-4 md:mb-6">
              {t('featuresTitle')}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('featuresDescription')}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="h-full"
            >
              <BubbleCard gradient={`${feature.gradient} from-opacity-90 to-opacity-60`} className="h-full">
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <motion.div
                    className={`${feature.bg} ${feature.color} h-12 w-12 md:h-16 md:w-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 relative`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-6 w-6 md:h-8 md:w-8" />
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-bamis-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </BubbleCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <div className="bg-gradient-bamis rounded-2xl md:rounded-3xl p-6 md:p-12 text-white text-center">
            <h3 className="font-heading text-base md:text-xl lg:text-2xl font-bold mb-6 md:mb-8">
              {t('trustIndicators.title')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: t('trustIndicators.clients.value'), label: t('trustIndicators.clients.label') },
                { value: t('trustIndicators.assets.value'), label: t('trustIndicators.assets.label') },
                { value: t('trustIndicators.availability.value'), label: t('trustIndicators.availability.label') },
                { value: t('trustIndicators.satisfaction.value'), label: t('trustIndicators.satisfaction.label') },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <motion.div
                    className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-bamis-secondary"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[10px] md:text-sm text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Features - Enhanced Bento Grid */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-3xl font-bold text-bamis-primary mb-3 md:mb-4"
          >
            {t('additionalFeaturesTitle')}
          </motion.h3>
          <p className="text-xs md:text-base text-gray-600">
            {t('additionalFeaturesSubtitle')}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="h-full"
            >
              <BubbleCard className="h-full">
                <div className="p-5 md:p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-bamis-secondary" />
                    </motion.div>
                    <div className="text-right">
                      <div className="text-xl md:text-2xl font-bold text-bamis-primary">{feature.stat}</div>
                      <div className="text-[10px] md:text-xs text-gray-500">{feature.statLabel}</div>
                    </div>
                  </div>

                  <h4 className="font-heading font-bold text-base md:text-lg text-gray-900 mb-2 md:mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Gradient accent bar */}
                  <div className="mt-3 md:mt-4 h-1 bg-gradient-bamis rounded-full" />
                </div>
              </BubbleCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
