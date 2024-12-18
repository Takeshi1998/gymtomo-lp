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
    <div className="flex flex-col items-center">
        <Image src={imageSrc} alt={altText} width={imageSize?.width ?? 167} height={imageSize?.height ?? 197}/>
        <Text as={"h2"} bold size={"xl"} className="mt-3 mb-1 flex flex-col">{title}</Text>
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
    <div className="flex flex-col items-center mb-12">
        <Image src={imageSrc} alt={altText} width={167} height={194}/>
        <h3 className="text-xl font-bold">STEP{stepNumber}</h3>
        <p className="mt-2">{description}</p>
    </div>
);

// Footerコンポーネント
const Footer: React.FC = () => (
    <footer className="bg-white px-4 py-6 border-t border-gray-200">
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
            <div className={"mb-3"}>
                <Header/>
            </div>

            <section className="flex flex-col items-center text-center pt-1">
                <Text size={"xxl"} className={"mt-2"} bold>
                    嘘がつけない<br/>
                    筋トレ共有アプリ
                </Text>
                <Text className="mt-2 mx-10">
                    公式LINEからワンクリックで記録
                </Text>
                <div className="mt-6 w-[160px]">
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
                <div className="relative w-full aspect-[886/792] mt-9">
                    <Image src="/images/lp/home.jpg" alt="ジムトモのスクリーンショット" fill className="object-cover"/>
                </div>
            </section>

            <section>
                <div className={"bg-[#FF8C00] text-white py-16 mt-20 text-left px-6"}>
                    <div>
                        <Text size="xxl" bold>
                            {`”友達の頑張りが、あなたの継続力に”`}
                        </Text>
                    </div>

                    <div className={"mt-6"}>
                        <Text bold size={"lg"}>
                            友達と一緒ならジムに行けるけど、<br/>一人ではついサボってしまう。<br/>
                            週の目標を設定し、友だちと進捗共有する。<br/>
                            ジムトモを使えば、離れていても一緒に切磋琢磨できます。
                        </Text>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-12">
                <div className="mx-auto">
                    <h2 className="text-2xl font-bold text-center tracking-wide" id="how-to-use">
                        3つの特徴
                    </h2>
                    <FeatureItem
                        imageSrc="/images/lp/checkin.jpg"
                        altText="ジム通いの記録"
                        title={
                            <>
                                <span>嘘の記録を防止</span>
                            </>
                        }
                        description={<Text className="mt-1 text-left mb-12">ジムの近くにいないとチェックインできないので、ジムに行っていないのに行ったと嘘の記録をすることはできません。</Text>}
                        imageSize={{width: 240, height: 240}}
                    />
                    <FeatureItem
                        imageSrc="/images/lp/friend.jpg"
                        altText="記録一覧画面"
                        imageSize={{width: 230, height: 230}}
                        title={
                            <>
                                <span>ジム記録をLINEで共有</span>
                            </>
                        }
                        description={<Text className="mt-1 text-left mb-12">週間レポートを日曜日の朝にLINEでお届け！<br/>友達とグループを作成することで、お互いの記録が共有されます。</Text>}
                    />
                    <FeatureItem
                        imageSrc="/images/lp/money.jpg"
                        altText="覚悟の金額"
                        title={
                            <>
                                <span>覚悟の金額で</span>
                                <span>本気度をアップ</span>
                            </>
                        }
                        imageSize={{width: 210, height: 141}}
                        description={<Text
                            className="mt-1 text-left">目標を達成できなかった場合に、自分で設定した金額が課金されます。友達と一緒に覚悟を決めて、確実にジム通いを継続しましょう。(未設定も可)</Text>}
                    />
                </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gray-50 py-20">
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
