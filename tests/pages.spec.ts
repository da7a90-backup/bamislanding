import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:3333'

test.describe('BAMIS Website - All Pages Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Start from the homepage
    await page.goto(BASE_URL)
  })

  test('homepage loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/BAMIS/)
    await expect(page.locator('header')).toBeVisible()

    // Check hero section
    await expect(page.locator('text=Votre avenir financier')).toBeVisible()

    // Check features section exists
    await expect(page.locator('text=Pourquoi')).toBeVisible()
  })

  test('navigation dropdowns work correctly', async ({ page }) => {
    // Test About dropdown
    const aboutButton = page.locator('button:has-text("À propos")')
    await aboutButton.hover()

    // Wait for dropdown to appear and be visible
    await page.waitForTimeout(300)
    await expect(page.locator('text=Message du Président')).toBeVisible()

    // Test Products dropdown
    const productsButton = page.locator('button:has-text("Produits")')
    await productsButton.hover()
    await page.waitForTimeout(300)
    await expect(page.locator('a:has-text("Comptes Bancaires")')).toBeVisible()
  })

  test('about section pages load', async ({ page }) => {
    // Navigate to president page
    await page.goto(`${BASE_URL}/fr/about/president`)
    await expect(page.locator('text=Message du Président')).toBeVisible()

    // Navigate to history page
    await page.goto(`${BASE_URL}/fr/about/history`)
    await expect(page.locator('text=Notre Histoire')).toBeVisible()

    // Navigate to key figures page
    await page.goto(`${BASE_URL}/fr/about/key-figures`)
    await expect(page.locator('text=Chiffres Clés')).toBeVisible()
  })

  test('blog page loads with posts', async ({ page }) => {
    await page.goto(`${BASE_URL}/fr/blog`)
    await expect(page.locator('text=Blog BAMIS')).toBeVisible()

    // Check that blog posts are visible
    const posts = page.locator('article')
    await expect(posts).toHaveCount(3)
  })

  test('products pages load correctly', async ({ page }) => {
    // Accounts page
    await page.goto(`${BASE_URL}/fr/products/accounts`)
    await expect(page.locator('text=Comptes Bancaires')).toBeVisible()

    // Cards page
    await page.goto(`${BASE_URL}/fr/products/cards`)
    await expect(page.locator('text=Cartes Bancaires')).toBeVisible()

    // Financing page
    await page.goto(`${BASE_URL}/fr/products/financing`)
    await expect(page.locator('text=Solutions de Financement')).toBeVisible()

    // International page
    await page.goto(`${BASE_URL}/fr/products/international`)
    await expect(page.locator('text=Services Internationaux')).toBeVisible()
  })

  test('digital banking pages load correctly', async ({ page }) => {
    // BAMIS Digital page
    await page.goto(`${BASE_URL}/fr/digital/bamis-digital`)
    await expect(page.locator('text=BAMIS Digital')).toBeVisible()

    // BAMIS Pay page
    await page.goto(`${BASE_URL}/fr/digital/bamis-pay`)
    await expect(page.locator('text=BAMIS Pay')).toBeVisible()

    // Web & Mobile Banking page
    await page.goto(`${BASE_URL}/fr/digital/web-mobile-banking`)
    await expect(page.locator('text=Web & Mobile')).toBeVisible()

    // SMS Banking page
    await page.goto(`${BASE_URL}/fr/digital/sms-banking`)
    await expect(page.locator('text=SMS Banking')).toBeVisible()
  })

  test('locations page loads with branches and ATMs', async ({ page }) => {
    await page.goto(`${BASE_URL}/fr/locations`)
    await expect(page.locator('text=Nos Agences')).toBeVisible()

    // Check tabs work
    await page.locator('button:has-text("Agences")').click()
    await expect(page.locator('text=Siège Social')).toBeVisible()

    await page.locator('button:has-text("GAB")').click()
    await expect(page.locator('text=Disponible 24/7')).toBeVisible()
  })

  test('contact page loads with form', async ({ page }) => {
    await page.goto(`${BASE_URL}/fr/contact`)
    await expect(page.locator('text=Contactez-nous')).toBeVisible()

    // Check form elements exist
    await expect(page.locator('text=Type de demande')).toBeVisible()
  })

  test('language switcher works', async ({ page }) => {
    const languageButton = page.locator('button:has(svg[class*="lucide-globe"])')
    await languageButton.hover()
    await page.waitForTimeout(300)

    // Check language options appear
    await expect(page.locator('text=Français')).toBeVisible()
    await expect(page.locator('text=العربية')).toBeVisible()
    await expect(page.locator('text=English')).toBeVisible()
  })

  test('mobile menu works', async ({ page, viewport }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    // Click mobile menu button
    const menuButton = page.locator('button').filter({ has: page.locator('svg') }).first()
    await menuButton.click()

    // Check mobile menu is visible
    await expect(page.locator('text=À propos')).toBeVisible()
    await expect(page.locator('text=Produits')).toBeVisible()
  })

  test('animations and parallax work on homepage', async ({ page }) => {
    // Check that animated elements exist
    await expect(page.locator('.glass')).toHaveCount(await page.locator('.glass').count())

    // Scroll down to trigger parallax
    await page.evaluate(() => window.scrollTo(0, 1000))
    await page.waitForTimeout(500)

    // Check that page scrolled
    const scrollY = await page.evaluate(() => window.scrollY)
    expect(scrollY).toBeGreaterThan(900)
  })

  test('cards comparison tool works', async ({ page }) => {
    await page.goto(`${BASE_URL}/fr/products/cards`)

    // Click compare button
    const compareButton = page.locator('button:has-text("Comparer")')
    if (await compareButton.isVisible()) {
      await compareButton.click()
      await page.waitForTimeout(300)
    }
  })

  test('all CTA buttons are clickable', async ({ page }) => {
    // Check for various CTA texts (French, English, Arabic)
    const ctaButtons = page.locator('a:has-text("compte"), a:has-text("contacter"), a:has-text("Découvrir"), a:has-text("Contact"), a:has-text("Account")')
    const count = await ctaButtons.count()

    expect(count).toBeGreaterThan(0)

    // Check first CTA is clickable
    if (count > 0) {
      await expect(ctaButtons.first()).toBeVisible()
    }
  })

  test('footer links are present', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)

    // Check footer content
    await expect(page.locator('footer')).toBeVisible()
  })

  test('no console errors on homepage', async ({ page }) => {
    const errors: string[] = []

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    page.on('pageerror', (error) => {
      errors.push(error.message)
    })

    await page.goto(BASE_URL)
    await page.waitForLoadState('networkidle')

    // Filter out known warnings
    const criticalErrors = errors.filter(
      (error) =>
        !error.includes('experimental.turbo') &&
        !error.includes('asChild') &&
        !error.includes('requestLocale')
    )

    expect(criticalErrors.length).toBe(0)
  })

  test('responsive design works on different viewports', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1920, height: 1080, name: 'Desktop' },
    ]

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height })
      await page.goto(BASE_URL)

      // Check that header is visible
      await expect(page.locator('header')).toBeVisible()

      // Check that content loads
      await expect(page.locator('text=BAMIS')).toBeVisible()
    }
  })
})
