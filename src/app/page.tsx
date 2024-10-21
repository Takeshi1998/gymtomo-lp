import Image from "next/image";

export default function HomePage() {
    return (
        <div className="bg-white max-w-sm mx-auto">
            <header className="flex items-center justify-between px-4 pt-4 bg-white">
                <img
                    src="/images/logo.svg"
                    alt="ジムトモのロゴ"
                    width={120}
                    height={26}
                    className="w-[100px] h-[22px]"
                />
            </header>

            <section className="flex flex-col items-center text-center pt-1 px-6">
                <h1 className="text-2xl font-bold mt-6" >ジム通いをシェアする<br/>フィットネスアプリ</h1>
                <p className="text-gray-500 mt-4">
                    ジムトモは仲間と目標を共有し、互いに刺激を支え合えるスタイリッシュなフィットネスアプリです。
                </p>
                <div className="max-w-md mx-auto">
                    <Image src="/images/lp/top.jpg" alt="ジムトモのスクリーンショット" width={335} height={308}/>
                </div>
                <div className="mt-8">
                    <p>\ LINEの友達追加で今すぐ始める /</p>
                    <a href="https://lin.ee/43ViCSa">
                        <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                                                          alt="友だち追加" height="36"/></a>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center mb-8" id="features">
                        <img src={"/images/lp/friend.svg"} alt="記録一覧画面" width={167} height={197}/>
                        <h2 className="text-lg font-bold mt-4">LINEで友達のジム通いを共有できる</h2>
                        <p className="text-gray-500 mt-2 text-center">
                            友達のジム通い状況をアプリ内で確認し、LINEでもメッセージを送ることができます。
                        </p>
                    </div>
                    <div className="flex flex-col items-center mb-8">
                        <img src={"/images/lp/checkin.svg"} alt="ジム通いの記録" width={167} height={199}/>
                        <h2 className="text-lg font-bold mt-4">LINEで簡単にジム通い記録できる</h2>
                        <p className="text-gray-500 mt-2 text-center">
                            通っているジムを手軽に登録し、位置情報を元にLINEから簡単にジム通いが記録できます。
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={"/images/lp/money.svg"} alt="覚悟の金額" width={167} height={202}/>
                        <h2 className="text-lg font-bold mt-4">覚悟の金額を設定できる</h2>
                        <p className="text-gray-500 mt-2 text-center">
                            ジムをサボった際に課金される金額を設定できます。覚悟を決めて継続力にアップに繋げましょう。
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Use Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8" id="how-to-use">ご利用までの流れ</h2>
                    <div className="flex flex-col items-center mb-8">
                        <img src={"/images/lp/add-friend.svg"} alt="LINE友達追加" width={167} height={194}/>
                        <h3 className="text-lg font-bold mt-4">STEP1</h3>
                        <p className="text-gray-500 mt-2">LINEで友だち追加します</p>
                    </div>
                    <div className="flex flex-col items-center mb-8">
                        <img src={"/images/lp/checkin.svg"} alt="ユーザー登録方法" width={167} height={199}/>
                        <h3 className="text-lg font-bold mt-4">STEP2</h3>
                        <p className="text-gray-500 mt-2">トーク画面でチェックインボタンを押します</p>
                    </div>
                    <div className="flex flex-col items-center mb-8">
                        <img src={"/images/lp/add-friend.svg"} alt="目標設定" width={167} height={181}/>
                        <h3 className="text-lg font-bold mt-4">STEP3</h3>
                        <p className="text-gray-500 mt-2">アプリで目標設定します</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={"/images/lp/line-checkin.svg"} alt="記録画面" width={167} height={199}/>
                        <h3 className="text-lg font-bold mt-4">STEP4</h3>
                        <p className="text-gray-500 mt-2">LINEからジム通いを記録します</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-white py-4 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4">
                    <ul className="flex flex-col space-y-2 items-center">
                        <li><a href="/term" className="text-gray-500">利用規約</a></li>
                        <li><a href="/privacy" className="text-gray-500">プライバシーポリシー</a></li>
                        <li><a href="laws" className="text-gray-500">特定商取引法に基づく表記</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}