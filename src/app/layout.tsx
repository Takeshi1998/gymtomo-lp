import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {GoogleAnalytics} from '@next/third-parties/google';


const url = "https://www.gymtomo.com"
const title = "ジムトモ | 筋トレ記録アプリ"
const description = "ジムトモはLINEで友達と記録をシェアして、ジム通いをもっと手軽に続けられるアプリです。記録はワンクリックで残せます。お互いの進捗をチェックして、やる気をキープ！ "
export const metadata: Metadata = {
    title: title,
    description: description,
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
                alt: title + 'のバナー画像',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/ogp.jpg']
    },
    robots: 'index, follow',
    keywords: ['ジムトモ', "ジム友", 'トレーニング記録','筋トレ記録アプリ', 'LINEアプリ', 'ジム', 'トレーニング', '健康'],
    alternates: {
        canonical: url
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

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
        {!!GA_ID && <GoogleAnalytics gaId={GA_ID}/>}
        </body>
        </html>
    );
}
