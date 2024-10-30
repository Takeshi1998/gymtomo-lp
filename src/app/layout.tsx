import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const url="https://www.gymtomo.com"
const title="ジムトモ | フィットネスLINEアプリ"
const description="ジムトモは仲間と目標を共有し、継続をサポートするフィットネスLINEアプリです。"
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
        url: '/images/ogp.jpg',
        width: 1200,
        height: 630,
        alt: title+'のバナー画像',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images:['/images/ogp.jpg']
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
