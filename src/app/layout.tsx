import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {GoogleAnalytics} from '@next/third-parties/google';


const url = "https://www.gymtomo.com"
const title = "ジムトモ | 嘘がつけない筋トレ共有アプリ"
const description = "LINEで友達とジム通いを共有するアプリです。LINEからワンクリックで簡単に記録。通っているジムから離れている場合はチェックインできないため、嘘の記録はできません。"
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
    keywords: ['ジムトモ', "ジム友", "筋トレ記録",'トレーニング記録', 'LINEアプリ', 'LINEでジム通いを報告','ジム', 'トレーニング', '健康'],
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
