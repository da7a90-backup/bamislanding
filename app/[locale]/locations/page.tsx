'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, Banknote, Building2, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

const branches = [
  {
    nameKey: 'headquarters',
    address: '758, Rue 22-018 - Avenue du Roi Fayçal',
    city: 'Nouakchott',
    phone: '+222 45 25 14 24 / 45 25 22 26',
    fax: '+222 45 25 16 21',
    hoursKey: 'weekdays',
    services: ['all', 'direction', 'customerService'],
  },
  {
    nameKey: 'capitale',
    address: 'Avenue Gamal Abdel Nasser',
    city: 'Nouakchott',
    phone: '+222 45 25 06 01',
    hoursKey: 'everyday',
    services: ['accounts', 'cards', 'transfers', 'deposits'],
  },
  {
    nameKey: 'congres',
    address: 'Avenue Moktar Ould Daddah',
    city: 'Nouakchott',
    phone: '+222 45 25 86 85',
    hoursKey: 'everyday',
    services: ['complete'],
  },
  {
    nameKey: 'tevragh',
    address: 'Avenue Charles de Gaulle',
    city: 'Nouakchott',
    phone: '+222 45 24 44 45 / 46 / 47',
    hoursKey: 'weekdays',
    services: ['complete'],
  },
  {
    nameKey: 'teyarett',
    address: 'Près du Carrefour Family Center',
    city: 'Nouakchott',
    phone: '+222 38 89 00 87 / 09',
    hoursKey: 'weekdays',
    services: ['complete'],
  },
  {
    nameKey: 'digital',
    address: 'Carrefour OULD MAH',
    city: 'Nouakchott',
    phone: '+222 38 89 00 14 / 16',
    hoursKey: 'everyday',
    services: ['digital', 'opening', 'cards'],
  },
  {
    nameKey: 'nouadhibou',
    address: 'Boulevard Médian, BP 205',
    city: 'Nouadhibou',
    phone: '+222 45 74 56 63 / 64',
    hoursKey: 'weekdays',
    services: ['complete'],
  },
  {
    nameKey: 'nouadhibou2',
    address: 'À côté du Marché',
    city: 'Nouadhibou',
    phone: '+222 38 89 00 18',
    hoursKey: 'weekdays',
    services: ['complete'],
  },
  {
    nameKey: 'atar',
    address: 'Zone administrative',
    city: 'Atar',
    phone: '+222 45 26 51 07 / 09',
    hoursKey: 'weekdays',
    services: ['complete'],
  },
]

const atms = [
  { name: 'Siège BAMIS au Ksar', city: 'Nouakchott', location: 'Agence principale' },
  { name: 'Immeuble AL Khayma City Center', city: 'Nouakchott', location: 'Khayma' },
  { name: 'Près de la mosquée Saoudienne', city: 'Nouakchott', location: 'Tevragh-Zeina' },
  { name: 'Près du carrefour BMD', city: 'Nouakchott', location: 'Jemal Abdel Nasser' },
  { name: 'Teyarett', city: 'Nouakchott', location: 'Teyarett' },
  { name: 'Palais des congrès', city: 'Nouakchott', location: 'Agence Palais des congrès' },
  { name: 'Carrefour Ould Mahe', city: 'Nouakchott', location: 'BAMIS DIGITAL' },
  { name: 'Emira', city: 'Nouakchott', location: 'BAMIS DIGITAL Point' },
  { name: 'Boulevard Médian', city: 'Nouadhibou', location: 'Agence principale' },
  { name: 'Aéroport de Nouadhibou', city: 'Nouadhibou', location: "À l'intérieur de l'aéroport" },
  { name: 'Cansado', city: 'Nouadhibou', location: 'Carrefour' },
  { name: 'Zone administrative', city: 'Atar', location: 'Agence Atar' },
  { name: 'Rosso', city: 'Rosso', location: 'Agence Rosso' },
  { name: 'Zouérate', city: 'Zouérate', location: 'Agence' },
  { name: 'Akjoujet', city: 'Akjoujet', location: 'Agence' },
]

export default function LocationsPage() {
  const t = useTranslations('locations')
  const [activeTab, setActiveTab] = useState<'branches' | 'atms'>('branches')
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const cities = Array.from(new Set([...branches.map(b => b.city), ...atms.map(a => a.city)]))

  const filteredBranches = selectedCity
    ? branches.filter(b => b.city === selectedCity)
    : branches

  const filteredATMs = selectedCity
    ? atms.filter(a => a.city === selectedCity)
    : atms

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-32">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-bamis-primary">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-bamis-secondary/10 p-3 rounded-xl">
                  <Building2 className="h-8 w-8 text-bamis-secondary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-bamis-primary">9</div>
                  <div className="text-sm text-gray-600">{t('hero.branchesCount')}</div>
                </div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="bg-bamis-secondary/10 p-3 rounded-xl">
                  <CreditCard className="h-8 w-8 text-bamis-secondary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-bamis-primary">15+</div>
                  <div className="text-sm text-gray-600">{t('hero.atmsCount')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Tabs & Filters */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b">
        <Container size="wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Tabs */}
            <div className="flex gap-2">
              <Button
                variant={activeTab === 'branches' ? 'default' : 'outline'}
                onClick={() => setActiveTab('branches')}
              >
                <Building2 className="h-4 w-4 mr-2" />
                {t('tabs.branches')} ({branches.length})
              </Button>
              <Button
                variant={activeTab === 'atms' ? 'default' : 'outline'}
                onClick={() => setActiveTab('atms')}
              >
                <Banknote className="h-4 w-4 mr-2" />
                {t('tabs.atms')} ({atms.length})
              </Button>
            </div>

            {/* City Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCity === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCity(null)}
              >
                {t('tabs.allCities')}
              </Button>
              {cities.map((city) => (
                <Button
                  key={city}
                  variant={selectedCity === city ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Branches */}
      {activeTab === 'branches' && (
        <section className="py-20 bg-gray-50">
          <Container size="wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBranches.map((branch, index) => (
                <motion.div
                  key={branch.nameKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-12 w-12 rounded-xl bg-bamis-secondary/10 flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-bamis-secondary" />
                        </div>
                        <span className="px-3 py-1 bg-bamis-primary/10 text-bamis-primary text-xs font-medium rounded-full">
                          {branch.city}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{t(`branches.${branch.nameKey}`)}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-5 w-5 text-gray-400 shrink-0" />
                        <a
                          href={`tel:${branch.phone.split('/')[0].trim()}`}
                          className="text-bamis-primary hover:underline"
                        >
                          {branch.phone}
                        </a>
                      </div>
                      {branch.fax && (
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="w-5"></span>
                          {t('branch.fax')} {branch.fax}
                        </div>
                      )}
                      <div className="flex items-start gap-3 text-sm">
                        <Clock className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{t(`hours.${branch.hoursKey}`)}</span>
                      </div>
                      <div className="pt-4 border-t">
                        <p className="text-xs font-medium text-gray-500 mb-2">
                          {t('branch.services')}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {branch.services.map((service) => (
                            <span
                              key={service}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {t(`services.${service}`)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ATMs */}
      {activeTab === 'atms' && (
        <section className="py-20 bg-gray-50">
          <Container size="wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredATMs.map((atm, index) => (
                <motion.div
                  key={`${atm.city}-${atm.location}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="h-10 w-10 rounded-lg bg-bamis-secondary/10 flex items-center justify-center shrink-0">
                          <Banknote className="h-5 w-5 text-bamis-secondary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">{atm.name}</h3>
                          <p className="text-xs text-gray-600">{atm.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-bamis-primary">
                          {atm.city}
                        </span>
                      </div>
                      <div className="mt-4 pt-4 border-t text-xs text-gray-500">
                        <span className="text-bamis-secondary">●</span> {t('atm.available')}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <Container>
          <Card className="bg-gradient-bamis text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="font-heading text-3xl font-bold mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+22245251424">
                  <Button variant="secondary" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    +222 45 25 14 24
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-bamis-primary"
                >
                  {t('cta.email')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  )
}
