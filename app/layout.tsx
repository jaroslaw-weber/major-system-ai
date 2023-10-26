import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import './globals.css'


export const metadata: Metadata = {
  title: 'Major System Ai',
  description: 'Generate Major System Mnemonics with Ai',
}
const font = Inconsolata({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
