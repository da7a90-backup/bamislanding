'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  HelpCircle,
  User,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    type: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const contactInfo = [
    {
      icon: Phone,
      title: t('info.phone'),
      details: ['+222 45 25 14 24', '+222 45 25 22 26'],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Mail,
      title: t('info.email'),
      details: ['contact@bamis.mr', 'info@bamis.mr'],
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: MapPin,
      title: t('info.address'),
      details: ['758, Rue 22-018', 'Avenue du Roi Fayçal, Nouakchott'],
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: t('info.hours'),
      details: ['Lun-Jeu: 8h-16h', 'Ven: 8h-11h30'],
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ]

  const contactTypes = [
    {
      value: 'account',
      label: t('types.account.label'),
      icon: User,
      description: t('types.account.description'),
    },
    {
      value: 'support',
      label: t('types.support.label'),
      icon: HelpCircle,
      description: t('types.support.description'),
    },
    {
      value: 'business',
      label: t('types.business.label'),
      icon: Building2,
      description: t('types.business.description'),
    },
    {
      value: 'other',
      label: t('types.other.label'),
      icon: MessageSquare,
      description: t('types.other.description'),
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <Container size="wide" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-gray-50 border-b">
        <Container size="wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all">
                  <CardContent className="p-6 text-center">
                    <div className={`${info.bg} ${info.color} h-14 w-14 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <info.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Content - Form + Map */}
      <section className="py-20 lg:py-32 bg-white">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold text-bamis-primary mb-4">
                  {t('form.title')}
                </h2>
                <p className="text-gray-600">
                  {t('form.description')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Type de demande */}
                {formStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="font-semibold text-lg mb-4">{t('form.step1Title')}</h3>
                    <div className="grid gap-4">
                      {contactTypes.map((type) => (
                        <motion.div
                          key={type.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Card
                            className={`cursor-pointer transition-all ${
                              formData.type === type.value
                                ? 'border-2 border-bamis-secondary bg-bamis-secondary/5'
                                : 'border-2 border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => setFormData({ ...formData, type: type.value })}
                          >
                            <CardContent className="p-4 flex items-start gap-4">
                              <div className={`${formData.type === type.value ? 'bg-bamis-secondary/20' : 'bg-gray-100'} p-3 rounded-xl`}>
                                <type.icon className={`h-6 w-6 ${formData.type === type.value ? 'text-bamis-primary' : 'text-gray-600'}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold mb-1">{type.label}</h4>
                                <p className="text-sm text-gray-600">{type.description}</p>
                              </div>
                              {formData.type === type.value && (
                                <CheckCircle2 className="h-5 w-5 text-bamis-primary shrink-0" />
                              )}
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={() => setFormStep(2)}
                      disabled={!formData.type}
                      className="w-full"
                      size="lg"
                    >
                      {t('form.continue')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                )}

                {/* Step 2: Informations personnelles */}
                {formStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{t('form.step2Title')}</h3>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setFormStep(1)}
                      >
                        {t('form.back')}
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t('form.firstName')} {t('form.required')}</Label>
                        <Input
                          id="firstName"
                          placeholder={t('form.firstNamePlaceholder')}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t('form.lastName')} {t('form.required')}</Label>
                        <Input
                          id="lastName"
                          placeholder={t('form.lastNamePlaceholder')}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('form.email')} {t('form.required')}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('form.emailPlaceholder')}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('form.phone')} {t('form.required')}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t('form.phonePlaceholder')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <Button
                      type="button"
                      onClick={() => setFormStep(3)}
                      disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                      className="w-full"
                      size="lg"
                    >
                      {t('form.continue')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                )}

                {/* Step 3: Message */}
                {formStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{t('form.step3Title')}</h3>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setFormStep(2)}
                      >
                        {t('form.back')}
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('form.subject')} {t('form.required')}</Label>
                      <Input
                        id="subject"
                        placeholder={t('form.subjectPlaceholder')}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('form.message')} {t('form.required')}</Label>
                      <Textarea
                        id="message"
                        placeholder={t('form.messagePlaceholder')}
                        rows={8}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={!formData.subject || !formData.message}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {t('form.submit')}
                    </Button>
                  </motion.div>
                )}

                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`h-2 rounded-full transition-all ${
                        step === formStep
                          ? 'w-8 bg-bamis-secondary'
                          : step < formStep
                          ? 'w-2 bg-bamis-secondary/50'
                          : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* FAQ Section */}
              <Card className="border-2 border-gray-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <HelpCircle className="h-6 w-6 text-bamis-primary" />
                    {t('faq.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{t('faq.q1')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('faq.a1')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('faq.q2')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('faq.a2')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('faq.q3')}</h4>
                    <p className="text-sm text-gray-600">
                      {t('faq.a3')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-gradient-bamis text-white border-0">
                <CardContent className="p-8">
                  <Phone className="h-12 w-12 text-bamis-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {t('emergency.title')}
                  </h3>
                  <p className="text-gray-100 mb-4">
                    {t('emergency.description')}
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+22245251424"
                      className="block text-2xl font-bold text-bamis-primary hover:text-white transition-colors"
                    >
                      +222 45 25 14 24
                    </a>
                    <p className="text-sm text-gray-600">{t('emergency.availability')}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-2 border-gray-100">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">{t('social.title')}</h3>
                  <div className="flex gap-3">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <Button key={social} variant="outline" size="sm">
                        {t(`social.${social}`)}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Branches CTA */}
      <section className="py-20 bg-gray-50">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Building2 className="h-16 w-16 text-bamis-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold text-bamis-primary mb-4">
              {t('branches.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('branches.description')}
            </p>
            <Button size="lg" variant="default">
              {t('branches.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
