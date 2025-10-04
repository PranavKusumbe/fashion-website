import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Élégance - Luxury Fashion',
  description: 'Premium fashion boutique featuring elegant and timeless pieces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
