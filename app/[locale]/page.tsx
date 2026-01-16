import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import HeroEnhanced from '@/components/sections/HeroEnhanced'
import Features from '@/components/sections/Features'
import ProductsShowcase from '@/components/sections/ProductsShowcase'
import DigitalServices from '@/components/sections/DigitalServices'
import CallToAction from '@/components/sections/CallToAction'
import AnimatedGridBackground from '@/components/ui/AnimatedGridBackground'

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return (
    <>
      <AnimatedGridBackground />
      <HeroEnhanced />
      <Features />
      <ProductsShowcase />
      <DigitalServices />
      <CallToAction />
    </>
  )
}
