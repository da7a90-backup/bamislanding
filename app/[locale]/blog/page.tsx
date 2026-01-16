'use client'

import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calendar, Tag, Search, ArrowRight } from 'lucide-react'
import { allPosts } from 'contentlayer/generated'
import { formatDate } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BlogPage() {
  const locale = useLocale()
  const t = useTranslations('blog')
  const tCommon = useTranslations('common')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter posts by locale
  const localePosts = allPosts.filter(post => post.locale === locale)

  // Get unique categories and tags
  const categories = Array.from(new Set(localePosts.map(post => post.category).filter(Boolean)))
  const allTags = Array.from(new Set(localePosts.flatMap(post => post.tags || [])))

  // Filter posts based on search and category
  const filteredPosts = localePosts.filter(post => {
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = !selectedCategory || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Sort posts by date (newest first)
  const sortedPosts = filteredPosts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <Container size="wide">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-bamis-primary mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder={t('search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              {t('allCategories')}
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sortedPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/${locale}/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group hover:-translate-y-2">
                  {post.image && (
                    <div className="aspect-video relative overflow-hidden rounded-t-xl bg-gradient-bamis">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute bottom-4 left-4">
                        {post.category && (
                          <span className="px-3 py-1 bg-bamis-secondary text-white text-sm font-medium rounded-full">
                            {post.category}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {formatDate(post.date, locale)}
                      </time>
                    </div>
                    <CardTitle className="text-xl group-hover:text-bamis-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center text-bamis-primary font-medium group-hover:gap-2 transition-all">
                      {tCommon('readMore')}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {t('noResults')}
            </p>
          </div>
        )}

        {/* Popular Tags */}
        {allTags.length > 0 && (
          <div className="mt-12 p-8 bg-white rounded-2xl shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              {t('popularTags')}
            </h2>
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-bamis-primary hover:text-white text-gray-700 rounded-lg transition-colors cursor-pointer"
                >
                  <Tag className="h-4 w-4" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
