import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const url="https://www.gymtomo.com"
const title="ジムトモ | フィットネスLINEアプリ"
const description="ジムトモは、友達と一緒にジム通いを続けられるフィットネスアプリ。LINEを使ってジム通いの状況を簡単に共有し、継続をサポートします。"
export const metadata:Metadata = {
  title: title,
  description:description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    type: 'website',
    images: [
      {
        url: '/images/ogp.png',
        width: 1200,
        height: 630,
        alt: title+'のバナー画像',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: title,
    description: description,
    images:['/images/twitter-ogp.png']
  },
  robots: 'index, follow',
  keywords: ['ジムトモ', 'フィットネスアプリ', 'LINE連携', 'ジム', 'トレーニング', '健康'],
  alternates:{
    canonical:url
  }
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
