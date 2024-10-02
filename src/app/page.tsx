import {ArrowRight, Calendar, CheckCircle, Users} from "lucide-react"
import {ReactNode} from "react";


const url="https://www.gymtomo.com"
const title="ジムとも | フィットネスLINEアプリ"
const description="ジムともは、友達と一緒にジム通いを続けられるフィットネスアプリ。LINEを使ってジム通いの状況を簡単に共有し、継続をサポートします。"
export const metadata = {
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
        image: '/images/twitter-ogp.png',
    },
    robots: 'index, follow',
    keywords: ['ジムとも', 'フィットネスアプリ', 'LINE連携', 'ジム', 'トレーニング', '健康'],
    canonical: url,
};

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex items-center justify-between px-4 py-4 bg-white">
                <div className="text-2xl font-bold text-[#FF8C00]">ジムとも</div>
                <nav className="hidden md:flex space-x-4">
                    <a href="#features" className="text-gray-600 hover:text-[#FF8C00]">
                        機能
                    </a>
                    <a href="#how-to-use" className="text-gray-600 hover:text-[#FF8C00]">
                        使い方
                    </a>
                    <a href="#benefits" className="text-gray-600 hover:text-[#FF8C00]">
                        メリット
                    </a>
                </nav>
            </header>

            <main className="flex-grow">
                <section className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            一緒に頑張る！ジム通いを共有するフィットネスアプリ
                        </h1>
                        <p className="text-xl mb-8">
                            LINEで今すぐ使える、ユーザー登録不要で簡単スタート！
                        </p>

                        <LineButton/>
                    </div>
                </section>

                <section id="features" className="py-20 px-4 bg-gray-50">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">主な機能</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<Calendar className="w-12 h-12 text-[#FF8C00]"/>}
                                title="ジム登録＆チェックイン"
                                description="通っているジムを簡単登録。ジムから200m以内でLINEからチェックイン。"
                            />
                            <FeatureCard
                                icon={<Users className="w-12 h-12 text-[#FF8C00]"/>}
                                title="グループ機能"
                                description="友達とグループを作成し、進捗を共有。お互いを応援し合おう！"
                            />
                            <FeatureCard
                                icon={<CheckCircle className="w-12 h-12 text-[#FF8C00]"/>}
                                title="目標設定＆記録"
                                description="週のジム通い目標と「覚悟の金額」を設定。トレーニング内容をテキストで記録。"
                            />
                        </div>
                    </div>
                </section>

                <section id="how-to-use" className="py-20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">使い方</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">1. LINEで友だち追加</h3>
                                <p>「ジムとも」を友だち追加し、すぐにスタート</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">2. ジム登録</h3>
                                <p>通っているジムを登録</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">3. グループ作成・参加</h3>
                                <p>友達を招待してグループを作成</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">4. 目標と覚悟の金額設定</h3>
                                <p>毎週の目標と達成できなかった場合の覚悟の金額を設定</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="benefits" className="py-20 px-4 bg-gray-50">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">メリット</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <BenefitCard
                                title="継続しやすい"
                                description="友達と一緒だからサボりにくい"
                            />
                            <BenefitCard
                                title="モチベーションアップ"
                                description="お互いを応援し合い、モチベーション維持"
                            />
                            <BenefitCard
                                title="簡単スタート"
                                description="アプリ不要、ユーザー登録不要でLINEからすぐに始められる"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4 bg-[#FF8C00] text-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">今すぐ始めよう！</h2>
                       <LineButton/>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8 px-4">
                    <div className="flex space-x-4 mt-4 md:mt-0 justify-center">
                        <a href="#" className="text-sm hover:underline">
                            プライバシーポリシー
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            利用規約
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            特定商取引法に基づく表記
                        </a>
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({icon, title, description}: {
    icon: ReactNode,
    title: string,
    description: string
}) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

function BenefitCard({title, description}: {
    title: string,
    description: string
}) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

function LineButton(){
    return (
        <a href="https://lin.ee/UeQYYKU"
           className={"bg-white text-[#FF8C00] hover:bg-gray-100 h-10 px-4 py-2 rounded-md inline-flex justify-center items-center"}>
                <span>
                             LINEで友達追加
                </span>
            <ArrowRight className="ml-1" size={20}/>
        </a>
    )
}