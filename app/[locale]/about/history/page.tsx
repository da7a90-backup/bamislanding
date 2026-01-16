'use client'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar } from 'lucide-react'

const timelineKeys = ['1985', '1992-1995', '1996-2001', '1999-2011', '2009-2019', 'today']

export default function HistoryPage() {
  const t = useTranslations('history')

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-bamis-primary mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {t('subtitle')}
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-bamis-secondary/30 hidden md:block"></div>

            <div className="space-y-8">
              {timelineKeys.map((key, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 h-5 w-5 rounded-full bg-bamis-secondary border-4 border-white shadow-lg hidden md:block"></div>

                  {/* Content Card */}
                  <Card className="md:ml-20 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex items-center gap-2 shrink-0">
                          <Calendar className="h-5 w-5 text-bamis-secondary" />
                          <span className="font-heading text-xl font-bold text-bamis-primary">
                            {t(`timeline.${key}.year`)}
                          </span>
                        </div>
                        <div className="h-px flex-1 bg-gray-200 mt-3"></div>
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                        {t(`timeline.${key}.title`)}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t(`timeline.${key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl lg:text-4xl font-bold text-bamis-secondary mb-2">
                {t('stats.experience.value')}
              </div>
              <div className="text-sm text-gray-600">{t('stats.experience.label')}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl lg:text-4xl font-bold text-bamis-secondary mb-2">
                {t('stats.mauritanian.value')}
              </div>
              <div className="text-sm text-gray-600">{t('stats.mauritanian.label')}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl lg:text-4xl font-bold text-bamis-secondary mb-2">
                {t('stats.branches.value')}
              </div>
              <div className="text-sm text-gray-600">{t('stats.branches.label')}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl lg:text-4xl font-bold text-bamis-secondary mb-2">
                {t('stats.atms.value')}
              </div>
              <div className="text-sm text-gray-600">{t('stats.atms.label')}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
