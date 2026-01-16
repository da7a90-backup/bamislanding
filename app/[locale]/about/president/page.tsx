'use client'

import { Metadata } from 'next'
import { useTranslations, useLocale } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function PresidentPage() {
  const t = useTranslations('president')
  const locale = useLocale()

  return (
    <div className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-bamis-primary mb-8">
            {t('title')}
          </h1>

          <Card className="mb-12">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3">
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-bamis opacity-10"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-xl font-bold text-white drop-shadow-lg">
                        {t('presidentName')}
                      </h3>
                      <p className="text-sm text-white drop-shadow-lg">
                        {t('presidentTitle')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    {t('message.greeting')}
                  </p>

                  <p className="leading-relaxed">
                    {t('message.para1')}
                  </p>

                  <p className="leading-relaxed">
                    {t('message.para2')}
                  </p>

                  <p className="leading-relaxed">
                    {t('message.para3')}
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t('services.digital')}</li>
                    <li>{t('services.pay')}</li>
                    <li>{t('services.mobile')}</li>
                    <li>{t('services.web')}</li>
                    <li>{t('services.sms')}</li>
                  </ul>

                  <p className="leading-relaxed">
                    {t('message.para4')}
                  </p>

                  <p className="leading-relaxed">
                    {t('message.para5')}
                  </p>

                  <p className="leading-relaxed">
                    {t('message.para6')}
                  </p>

                  <p className="text-lg font-medium mt-8">
                    {t('message.closing')}
                    <br />
                    <span className="text-bamis-primary">{t('presidentName')}</span>
                    <br />
                    <span className="text-sm text-gray-600">{t('message.signature')}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="bg-gradient-bamis rounded-2xl p-8 text-white text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="mb-6 text-gray-100">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/products`}
                className="px-8 py-3 bg-white text-bamis-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {t('cta.button1')}
              </a>
              <a
                href={`/${locale}/contact`}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-bamis-primary transition-colors"
              >
                {t('cta.button2')}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
