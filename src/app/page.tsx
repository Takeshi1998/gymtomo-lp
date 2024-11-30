import Image from "next/image";
import React, {ReactNode} from "react";
import {Text} from "@/components/ui/Text";

// Headerコンポーネント
const Header: React.FC = () => (
    <header className="flex items-center justify-between pt-4 bg-white">
        <img src="/images/logo.svg" alt="ジムトモのロゴ" width={120} height={26} className="w-[100px] h-[22px]"/>
    </header>
);

// FeatureItemコンポーネント
type FeatureItemProps = {
    imageSrc: string;
    imageSize?: { width: number; height: number };
    altText: string;
    title: React.ReactNode;
    description: ReactNode;
};

const FeatureItem: React.FC<FeatureItemProps> = ({imageSrc, altText, title, description, imageSize}) => (
    <div className="flex flex-col items-center mb-8">
        <Image src={imageSrc} alt={altText} width={imageSize?.width ?? 167} height={imageSize?.height ?? 197}/>
        <Text as={"h2"} bold size={"xl"} className="mt-4 flex flex-col">{title}</Text>
        {description}
    </div>
);

// StepItemコンポーネント
type StepItemProps = {
    stepNumber: string;
    imageSrc: string;
    altText: string;
    description: string;
};

const StepItem: React.FC<StepItemProps> = ({stepNumber, imageSrc, altText, description}) => (
    <div className="flex flex-col items-center mb-8">
        <Image src={imageSrc} alt={altText} width={167} height={194}/>
        <h3 className="text-xl font-bold mt-4">STEP{stepNumber}</h3>
        <p className="mt-2">{description}</p>
    </div>
);

// Footerコンポーネント
const Footer: React.FC = () => (
    <footer className="bg-white px-3 py-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
            <ul className="flex flex-col space-y-6 items-start w-full">
                {[
                    {href: "/term", label: "利用規約"},
                    {href: "/privacy", label: "プライバシーポリシー"},
                    {href: "/laws", label: "特定商取引法に基づく表記"},
                ].map((item) => (
                    <li key={item.href} className="w-full">
                        <a href={item.href} className="flex justify-between items-center w-full">
                            <span>{item.label}</span>
                            <Image src="/images/lp/arrow-right.svg" alt="矢印" width={22} height={22}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
);

// メインコンポーネント
export default function HomePage() {
    return (
        <div className="bg-white max-w-[500px] text-center mx-auto">
            <div className={"mb-5"}>
                <Header/>
            </div>

            <section className="flex flex-col items-center text-center pt-1">
                <Text size={"2xl"} bold className="mt-4">
                    LINEで簡単！
                    <br/>
                    友達とジム通いをシェア
                </Text>
                <Text className="mt-4 mx-10">
                    公式LINEからワンクリックで記録
                </Text>
                <div className="relative w-full aspect-[886/792] mt-9">
                    <Image src="/images/lp/home.jpg" alt="ジムトモのスクリーンショット" fill className="object-cover"/>
                </div>
                <div className="mt-10 w-full px-3">
                    <Text size={"sm"} className={"mb-1"}>\ LINEの友達追加で今すぐ始める /</Text>
                    <a
                        href="https://lin.ee/43ViCSa"
                        className="block w-full bg-green-500 hover:bg-green-600 rounded-lg py-3 text-center"
                        rel="nofollow"
                    >
                        <div className="flex justify-center items-center space-x-1">
                            <img src={"/images/lp/line-button.svg"} alt="LINE 友達追加ボタン" className="h-6"/>
                            <span className="text-white font-bold">友だち追加</span>
                        </div>
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-9 px-12">
                <div className="mx-auto">
                    <FeatureItem
                        imageSrc="/images/lp/friend.jpg"
                        altText="記録一覧画面"
                        imageSize={{width: 190, height: 190}}
                        title={
                            <>
                                <div className="flex items-center">
                                    <img src="/images/lp/dumbbell.svg" alt="ダンベル" className="w-9 h-9"/>
                                    <span>ジム通いをLINEで共有</span>
                                </div>
                            </>
                        }
                        description={<Text className="mt-2 text-left">週間レポートを毎週日曜の朝にLINEでお届け！<br/>友達とグループを作成することで、お互いの記録が共有されます。</Text>}
                    />
                    <FeatureItem
                        imageSrc="/images/lp/checkin.jpg"
                        altText="ジム通いの記録"
                        title={
                            <>
                                <div className="flex items-center">
                                    <img src="/images/lp/dumbbell.svg" alt="ダンベル" className="w-9 h-9"/>
                                    <span>公式ラインから</span>
                                </div>
                                <span>ワンクリックで記録</span>
                            </>
                        }
                        description={<Text className="mt-2 text-left">事前に通っているジムを登録し、LINEからワンクリックで記録できます。<br/>ジムから離れている場合は記録できないため、偽りのチェックインを防止。</Text>}
                        imageSize={{width: 200, height: 200}}
                    />
                    <FeatureItem
                        imageSrc="/images/lp/money.jpg"
                        altText="覚悟の金額"
                        title={
                            <>
                                <div className="flex items-center">
                                    <img src="/images/lp/dumbbell.svg" alt="ダンベル" className="w-9 h-9"/>
                                    <span>覚悟の金額で</span>
                                </div>
                                <span>本気度をさらにアップ</span>
                            </>
                        }
                        imageSize={{width: 200, height: 134}}
                        description={<Text
                            className="mt-2 text-left">目標を達成できなかった場合に、自分で設定した金額が課金されます。友達と一緒に覚悟を決めて、確実にジム通いを継続しましょう。</Text>}
                    />
                </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto w-[200px]">
                    <h2 className="text-2xl font-bold text-center mb-8 tracking-wide" id="how-to-use">
                        ご利用までの流れ
                    </h2>
                    <StepItem stepNumber="1" imageSrc="/images/lp/add-friend.png" altText="LINE友達追加"
                              description="LINEで友だち追加"/>
                    <StepItem
                        stepNumber="2"
                        imageSrc="/images/lp/setting.png"
                        altText="目標設定"
                        description="アプリで目標設定"
                    />
                    <StepItem stepNumber="3" imageSrc="/images/lp/line-checkin.png" altText="記録画面"
                              description="公式LINEからチェックイン"/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
