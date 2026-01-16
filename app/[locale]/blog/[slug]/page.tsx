'use client'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { allPosts } from 'contentlayer/generated'
import { formatDate } from '@/lib/utils'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
    locale: string
  }>
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    return {
      title: 'Article not found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, locale } = await params
  const post = allPosts.find((post) => post.slug === slug && post.locale === locale)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.category === post.category &&
        p.locale === locale
    )
    .slice(0, 3)

  return <BlogPostContent post={post} relatedPosts={relatedPosts} locale={locale} />
}

function BlogPostContent({ post, relatedPosts, locale }: { post: any, relatedPosts: any[], locale: string }) {
  const t = useTranslations('blogPost')

  return (
    <div className="py-16 lg:py-24 bg-white">
      <Container className="max-w-4xl">
        {/* Back Button */}
        <Link href={`/${locale}/blog`}>
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('backToBlog')}
          </Button>
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            {post.category && (
              <span className="inline-block px-4 py-2 bg-bamis-secondary/10 text-bamis-secondary font-medium rounded-full mb-4">
                {post.category}
              </span>
            )}

            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-bamis-primary mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">{post.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
              </div>

              {post.author && (
                <div className="flex items-center gap-2">
                  <span>{t('by')}</span>
                  <span className="font-medium text-gray-900">{post.author}</span>
                </div>
              )}

              <button
                className="ml-auto flex items-center gap-2 text-bamis-primary hover:text-bamis-primary/80 transition-colors"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.description,
                      url: window.location.href,
                    })
                  }
                }}
              >
                <Share2 className="h-5 w-5" />
                {t('share')}
              </button>
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-bamis-primary
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-bamis-secondary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-code:text-bamis-primary prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
              "
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t">
            <h2 className="font-heading text-3xl font-bold text-bamis-primary mb-8">
              {t('relatedPosts')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/${locale}/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-bamis-primary hover:text-white transition-all duration-300 h-full">
                    <div className="text-sm text-gray-500 group-hover:text-white/80 mb-2">
                      {formatDate(relatedPost.date, locale)}
                    </div>
                    <h3 className="font-heading font-semibold text-lg group-hover:text-white mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-white/90 line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-bamis rounded-2xl text-white text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">
            {t('cta.title')}
          </h3>
          <p className="text-gray-100 mb-6">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/digital-banking/bamis-digital`}>
              <Button variant="secondary" size="lg">
                {t('cta.button1')}
              </Button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-bamis-primary"
              >
                {t('cta.button2')}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
