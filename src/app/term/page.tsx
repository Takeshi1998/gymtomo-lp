import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">利用規約</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold">本利用規約について</h2>
                            <p>この利用規約（以下，「本規約」といいます。）は，ジムトモ（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第1条（適用）</h2>
                            <p>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。当社が本サービスに関して当社ウェブサイトまたはLINE上で掲載するルール、ガイドライン等は、本規約の一部を構成します。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第2条（定義）</h2>
                            <ul className="list-disc pl-5">
                                <li><strong>本サービス</strong>とは、ユーザーがジムへの通勤状況を管理し、目標達成をサポートするためのLINE上のWebアプリを指します。</li>
                                <li><strong>本気モード</strong>とは、ユーザーが設定した目標を達成できなかった場合に、事前に設定した金額を引き落とす機能を指します。</li>
                                <li><strong>チェックイン</strong>とは、ユーザーがジムの近くにいる際に行う、ジムへの訪問を記録する行為を指します。</li>
                                <li><strong>目標</strong>とは、ユーザーが週にジムに通う回数として設定する数値を指します。</li>
                                <li><strong>登録情報</strong>とは、ユーザーが本サービスの利用登録時に提供する情報を指します。</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第3条（利用登録）</h2>
                            <p>本サービスの利用を希望する者は、本規約に同意の上、当社の定める方法で利用登録を行います。利用登録の申請者は、真実かつ正確な情報を提供しなければなりません。当社は、以下の事由に該当する場合、登録を拒否することがあります。</p>
                            <ul className="list-disc pl-5">
                                <li>過去に本規約に違反した者</li>
                                <li>その他、当社が登録を不適当と判断した場合</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第4条（サービスの提供）</h2>
                            <p>ユーザーは、本サービスを通じてジムの登録、チェックイン、目標の設定を行うことができます。ユーザーは、目標を達成できなかった場合、本気モードがオンになっているときに限り、事前に設定した金額が引き落とされることに同意します。</p>
                            <p>本気モードの解除は、即時には反映されず、解除申請の翌週から適用されます。解除が適用される前に目標を達成できなかった場合、ユーザーは引き落としに異議を申し立てないものとします。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第5条（料金および支払方法）</h2>
                            <p>本サービスの利用登録自体は無料です。特定の機能を利用する場合には、別途定める月額の利用料金が発生することがあります。ユーザーは本気モードによる引き落としを、事前に登録したクレジットカードから行うことに同意します。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第6条（ユーザーの責任）</h2>
                            <p>ユーザーは、目標設定や本気モードのオン・オフ等の管理を自己の責任で行うものとします。また、チェックイン操作を正確に行う責任を負います。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第7条（禁止事項）</h2>
                            <p>ユーザーは、以下の行為をしてはなりません。</p>
                            <ul className="list-disc pl-5">
                                <li>法令または公序良俗に反する行為</li>
                                <li>当社または第三者の権利・利益を侵害する行為</li>
                                <li>本サービスの運営を妨害する行為</li>
                                <li>不正な手段でチェックインを行う行為</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第8条（本サービスの停止・中断）</h2>
                            <p>当社は、以下の場合、ユーザーに事前に通知することなく本サービスの全部または一部を停止または中断することがあります。</p>
                            <ul className="list-disc pl-5">
                                <li>システムの保守・点検を行う場合</li>
                                <li>天災地変などの不可抗力により提供が困難な場合</li>
                            </ul>
                            <p>当社は、本サービスの停止・中断によりユーザーに生じた損害について、一切の責任を負いません。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第9条（免責事項）</h2>
                            <p>当社は、本サービスの提供に関して、明示または黙示の保証を行いません。ユーザーが本サービスを利用することにより被った損害について、当社は一切の責任を負いません。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第10条（サービス内容の変更等）</h2>
                            <p>当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第11条（利用規約の変更）</h2>
                            <p>当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。</p>
                            <ul className="list-disc pl-5">
                                <li>本規約の変更がユーザーの一般の利益に適合するとき。</li>
                                <li>本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。</li>
                            </ul>
                            <p>当社はユーザーに対し、事前に本規約の変更の旨及び変更後の規約内容、その効力発生時期を通知します。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第13条（通知または連絡）</h2>
                            <p>ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーからの届け出がない限り、現在登録されている連絡先を有効とみなし、当該連絡先へ通知または連絡を行います。これらは、発信時にユーザーへ到達したものとみなします。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第14条（権利義務の譲渡の禁止）</h2>
                            <p>ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold">第15条（準拠法・裁判管轄）</h2>
                            <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
                        </section>

                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TermsOfServicePage;
