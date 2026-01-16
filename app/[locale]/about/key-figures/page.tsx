'use client'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, DollarSign, Users, Building, Percent } from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts'

// Financial data from bamis.mr
const balanceSheetData = [
  {
    year: '2019',
    assets: 5052,
    deposits: 3287,
    credit: 2115,
    equity: 1330,
  },
  {
    year: '2020',
    assets: 4996,
    deposits: 3274,
    credit: 2102,
    equity: 1375,
  },
  {
    year: '2021',
    assets: 5672,
    deposits: 3703,
    credit: 2522,
    equity: 1446,
  },
]

export default function KeyFiguresPage() {
  const t = useTranslations('keyFigures')
  const latestYear = balanceSheetData[balanceSheetData.length - 1]
  const previousYear = balanceSheetData[balanceSheetData.length - 2]

  const calculateGrowth = (current: number, previous: number) => {
    return (((current - previous) / previous) * 100).toFixed(1)
  }

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-bamis-primary mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {t('subtitle')}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-green-600 text-sm font-medium">
                    +{calculateGrowth(latestYear.assets, previousYear.assets)}%
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {latestYear.assets.toLocaleString()}M
                </div>
                <div className="text-sm text-gray-600">{t('cards.assets')}</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="text-green-600 text-sm font-medium">
                    +{calculateGrowth(latestYear.deposits, previousYear.deposits)}%
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {latestYear.deposits.toLocaleString()}M
                </div>
                <div className="text-sm text-gray-600">{t('cards.deposits')}</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-green-600 text-sm font-medium">
                    +{calculateGrowth(latestYear.credit, previousYear.credit)}%
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {latestYear.credit.toLocaleString()}M
                </div>
                <div className="text-sm text-gray-600">{t('cards.credit')}</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Percent className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="text-green-600 text-sm font-medium">
                    +{calculateGrowth(latestYear.equity, previousYear.equity)}%
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {latestYear.equity.toLocaleString()}M
                </div>
                <div className="text-sm text-gray-600">{t('cards.equity')}</div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>{t('charts.balanceEvolution')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={balanceSheetData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="assets" fill="#0A2540" name={t('charts.assets')} />
                    <Bar dataKey="deposits" fill="#00D9A3" name={t('charts.deposits')} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('charts.creditGrowth')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={balanceSheetData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="credit"
                      stroke="#0A2540"
                      strokeWidth={2}
                      name={t('charts.credit')}
                    />
                    <Line
                      type="monotone"
                      dataKey="equity"
                      stroke="#00D9A3"
                      strokeWidth={2}
                      name={t('charts.equityLabel')}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Table */}
          <Card>
            <CardHeader>
              <CardTitle>{t('table.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">
                        {t('table.indicator')}
                      </th>
                      {balanceSheetData.map((year) => (
                        <th
                          key={year.year}
                          className="text-right py-4 px-4 font-semibold text-gray-900"
                        >
                          {year.year}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-700">{t('table.totalAssets')}</td>
                      {balanceSheetData.map((year) => (
                        <td
                          key={year.year}
                          className="text-right py-4 px-4 font-medium"
                        >
                          {year.assets.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-700">{t('table.totalDeposits')}</td>
                      {balanceSheetData.map((year) => (
                        <td
                          key={year.year}
                          className="text-right py-4 px-4 font-medium"
                        >
                          {year.deposits.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-700">{t('table.totalCredit')}</td>
                      {balanceSheetData.map((year) => (
                        <td
                          key={year.year}
                          className="text-right py-4 px-4 font-medium"
                        >
                          {year.credit.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-700">{t('table.shareCapital')}</td>
                      {balanceSheetData.map(() => (
                        <td
                          key={Math.random()}
                          className="text-right py-4 px-4 font-medium"
                        >
                          1,013
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-700">{t('table.equity')}</td>
                      {balanceSheetData.map((year) => (
                        <td
                          key={year.year}
                          className="text-right py-4 px-4 font-medium"
                        >
                          {year.equity.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t('observations.title')}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-bamis-secondary mr-2 mt-1.5"></div>
                    <span>{t('observations.obs1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-bamis-secondary mr-2 mt-1.5"></div>
                    <span>{t('observations.obs2')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-bamis-secondary mr-2 mt-1.5"></div>
                    <span>{t('observations.obs3')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-bamis-secondary mr-2 mt-1.5"></div>
                    <span>{t('observations.obs4')}</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
