/* eslint-disable react/no-unescaped-entities */
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Garmani',
    default:
      'Garmani - Your Gateway to a World-Class Network',
  },
  description:
    ' Welcome to Garmani. We are a boutique business dedicated to connecting you with a vast, carefully curated network of high-quality service and goods providers across a wide range of industries—farming, technology, legal, business, sports, entertainment, and more. Our strength lies in our personal approach: as a two-person team, we are constantly networking, synergizing, and ensuring our pool of providers remains the best and most up-to-date. Discover the value of true access—without the noise, without the middlemen, just genuine connections to excellence.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
