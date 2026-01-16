'use client'

import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'
import {
  Building2,
  Users,
  Target,
  Award,
  Globe,
  Shield,
  TrendingUp,
  Heart,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function OrganizationPage() {
  const t = useTranslations('organization')

  const values = [
    {
      icon: Shield,
      title: t('values.list.islamicCompliance.title'),
      description: t('values.list.islamicCompliance.description'),
    },
    {
      icon: Heart,
      title: t('values.list.clientService.title'),
      description: t('values.list.clientService.description'),
    },
    {
      icon: Target,
      title: t('values.list.innovation.title'),
      description: t('values.list.innovation.description'),
    },
    {
      icon: Award,
      title: t('values.list.integrity.title'),
      description: t('values.list.integrity.description'),
    },
  ]

  const stats = [
    { icon: Building2, value: t('stats.experience.value'), label: t('stats.experience.label') },
    { icon: Users, value: t('stats.clients.value'), label: t('stats.clients.label') },
    { icon: Globe, value: t('stats.branches.value'), label: t('stats.branches.label') },
    { icon: TrendingUp, value: t('stats.ranking.value'), label: t('stats.ranking.label') },
  ]

  return (
    <div>
      <AnimatedGridBackground />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">

        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-bamis-secondary/20 px-4 py-2 rounded-full mb-6"
            >
              <Building2 className="h-4 w-4 text-bamis-primary" />
              <span className="text-sm font-semibold text-bamis-primary">
                {t('hero.badge')}
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-bamis-primary">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl p-6 text-center"
              >
                <stat.icon className="h-10 w-10 text-bamis-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-bamis-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <Container size="wide">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-bamis-secondary/20 hover:border-bamis-secondary/40 transition-all">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-bamis-primary mb-4" />
                  <h2 className="font-heading text-2xl font-bold mb-4 text-bamis-primary">{t('mission.title')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('mission.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-bamis-secondary/20 hover:border-bamis-secondary/40 transition-all">
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-bamis-primary mb-4" />
                  <h2 className="font-heading text-2xl font-bold mb-4 text-bamis-primary">{t('vision.title')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('vision.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <Container size="wide">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-bamis-primary mb-4">
                {t('values.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('values.description')}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-bamis-secondary/10 mb-4">
                      <value.icon className="h-8 w-8 text-bamis-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2 border-bamis-secondary/20">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-bamis-primary mx-auto mb-6" />
                <h2 className="font-heading text-2xl font-bold text-center mb-6 text-bamis-primary">
                  {t('headquarters.title')}
                </h2>
                <div className="space-y-4 text-center text-gray-600">
                  <p className="text-lg">
                    <strong className="text-bamis-primary">{t('headquarters.name')}</strong>
                  </p>
                  <p>
                    {t('headquarters.address')}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p><strong>{t('headquarters.phone')}</strong></p>
                    <p><strong>{t('headquarters.fax')}</strong></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
            <Users className="h-16 w-16 mx-auto mb-6 text-bamis-primary" />
            <h2 className="font-heading text-3xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
