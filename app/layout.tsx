import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meta会議 - いつでも、どこでも、ホイホイ会議',
  description: 'パソコン内にメタバース空間を作って、そこで実際に会って会議しているような体験を提供します。',
  keywords: 'メタバース, 会議, バーチャル, リモートワーク, オンライン会議',
  openGraph: {
    title: 'Meta会議 - いつでも、どこでも、ホイホイ会議',
    description: 'パソコン内にメタバース空間を作って、そこで実際に会って会議しているような体験を提供します。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
