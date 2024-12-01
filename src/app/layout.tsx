import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {GoogleAnalytics} from '@next/third-parties/google';


const url = "https://www.gymtomo.com"
const title = "ジムトモ | LINEで友達とジム通いを報告"
const description = "LINEで友達とジム通いを報告し合うアプリです。LINEからワンクリックで簡単に報告。友達とグループを作成することで、お互いの記録が共有されます。"
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
                url: '/images/ogp.png',
                width: 1200,
                height: 630,
                alt: title + 'のバナー画像',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: title,
        description: description,
        images: ['/images/twitter-ogp.png'],
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
