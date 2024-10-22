import Image from "next/image";
import React from "react";

// Headerコンポーネント
const Header: React.FC = () => (
    <header className="flex items-center justify-between pt-4 bg-white">
        <Image src="/images/logo.svg" alt="ジムトモのロゴ" width={120} height={26} className="w-[100px] h-[22px]"/>
    </header>
);

// FeatureItemコンポーネント
type FeatureItemProps = {
    imageSrc: string;
    imageSize?: { width: number; height: number };
    altText: string;
    title: React.ReactNode;
    description: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({imageSrc, altText, title, description,imageSize}) => (
    <div className="flex flex-col items-center mb-8">
        <Image src={imageSrc} alt={altText} width={imageSize?.width??167} height={imageSize?.height??197}/>
        <h2 className="text-xl font-bold mt-4 flex flex-col">{title}</h2>
        <p className="mt-2 text-center">{description}</p>
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
        <div className="bg-white max-w-screen-sm text-center mx-auto">
            <div className={"mb-5"}>
                <Header/>
            </div>

            <section className="flex flex-col items-center text-center pt-1">
                <h1 className="text-2xl font-bold mt-6 tracking-wide">
                    ジム通いをシェアする
                    <br/>
                    フィットネスアプリ
                </h1>
                <p className="mt-4 mx-10">
                    ジムトモは仲間と目標を共有し、互いに刺激を支え合えるフィットネスアプリです。
                </p>
                <div className="relative w-full aspect-[335/308] mt-9">
                    <Image src="/images/lp/top.png" alt="ジムトモのスクリーンショット" fill className="object-cover"/>
                </div>
                <div className="mt-10 w-full px-3">
                    <p className={"mb-1 text-sm"}>\ LINEの友達追加で今すぐ始める /</p>
                    <a
                        href="https://lin.ee/43ViCSa"
                        className="block w-full bg-green-500 hover:bg-green-600 rounded-lg py-3 text-center"
                    >
                        <div className="flex justify-center items-center space-x-1">
                            <img src={"/images/lp/line-button.svg"} alt="LINE 友達追加ボタン" className="h-6"/>
                            <span className="text-white font-bold">友だち追加</span>
                        </div>
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 px-12">
                <div className="mx-auto">
                    <FeatureItem
                        imageSrc="/images/lp/friend.png"
                        altText="記録一覧画面"
                        title={
                            <>
                                <div className="flex items-center">
                                    <img src="/images/lp/dumbbell.svg" alt="ダンベル" className="w-9 h-9"/>
                                    <span>LINEで友達のジム通いを<br/></span>
                                </div>
                                <span>共有できる</span>
                            </>
                        }
                        description="友達のジム通い状況をアプリ内で確認し、LINEでもメッセージで通知します。"
                    />
                    <FeatureItem
                        imageSrc="/images/lp/checkin.png"
                        altText="ジム通いの記録"
                        title={
                            <>
                                <div className="flex items-center">
                                    <img src="/images/lp/dumbbell.svg" alt="ダンベル" className="w-9 h-9"/>
                                    <span>LINEから1秒で<br/></span>
                                </div>
                                <span>ジム通いを記録できる</span>
                            </>
                        }
                        description="通っているジムを事前に登録し、位置情報を元にLINEから1秒でジム通いが記録できます。"
                    />
                    <FeatureItem
                        imageSrc="/images/lp/money.svg"
                        altText="覚悟の金額"
                        title={
                            <>
                                <div className="flex items-center">
                                    <img src="/images/lp/dumbbell.svg" alt="ダンベル" className="w-9 h-9"/>
                                    <span>覚悟の金額を設定できる</span>
                                </div>
                            </>
                        }
                        imageSize={{width: 100, height: 121}}
                        description="ジム通いをサボった際に課金される金額を設定できます。覚悟を決めて継続力にアップに繋げましょう。"
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
                              description="LINEで友だち追加します"/>
                    <StepItem
                        stepNumber="2"
                        imageSrc="/images/lp/checkin.png"
                        altText="ユーザー登録方法"
                        description="トーク画面にてチェックインボタンを押します"
                    />
                    <StepItem
                        stepNumber="3"
                        imageSrc="/images/lp/setting.png"
                        altText="目標設定"
                        description="アプリで目標設定します"
                    />
                    <StepItem stepNumber="4" imageSrc="/images/lp/line-checkin.png" altText="記録画面"
                              description="公式LINEからジム通いを記録します"/>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
