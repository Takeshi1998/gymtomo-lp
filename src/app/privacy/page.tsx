import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";

const PrivacyPolicy = () => {
    return (
        <Card className="max-w-4xl mx-auto mt-10">
            <CardHeader>
                <CardTitle className="text-xl font-bold">プライバシーポリシー</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p>
                    「ジムとも」（以下「当社」といいます）は、ユーザーの個人情報の重要性を認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）に基づき、以下のプライバシーポリシーに従い、適切な取り扱いおよび保護に努めます。
                </p>

                <h2 className="text-lg font-semibold">1. 個人情報の定義</h2>
                <p>
                    個人情報とは、生存する個人に関する情報で、アカウント名、Eメールアドレス、ジムへの通勤状況等により特定の個人を識別できる情報をいいます。
                </p>

                <h2 className="text-lg font-semibold">2. 個人情報の利用目的</h2>
                <p>当社は、取得した個人情報を、以下の目的で利用いたします。</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>サービスの提供および運営のため</li>
                    <li>ユーザーへのサービス向上およびご案内のため</li>
                    <li>利用者にとってより適した情報やコンテンツの提供を実現するため</li>
                    <li>サービス改善や新機能の開発を目的とした統計データの作成</li>
                    <li>広告配信の最適化や、関連するサービスのご案内のため</li>
                </ul>

                <h2 className="text-lg font-semibold">3. 情報提供について</h2>
                <p>
                    当社は、ユーザーが利用するジムの情報や位置情報を活用し、ユーザーに関連性のあるジム関連の情報や提案を行います。この情報は、ジム関連の広告やサービスの提供を最適化し、より利便性の高い体験を提供することを目的としています。
                </p>

                <h2 className="text-lg font-semibold">4. 第三者提供</h2>
                <p>当社は、以下の場合を除き、個人情報を第三者に提供しません。</p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>ユーザーの同意がある場合</li>
                    <li>業務を円滑に遂行するために必要な範囲内での情報提供の場合</li>
                </ul>

                <h2 className="text-lg font-semibold">5. Cookieの使用</h2>
                <p>
                    当社は、サービスの品質向上を目的として、Cookieや類似技術を使用することがあります。Cookieを無効にした場合、サービスの一部がご利用いただけないことがあります。
                </p>

                <h2 className="text-lg font-semibold">6. お問い合わせ</h2>
                <p>個人情報に関するお問い合わせは、当社サポートまでご連絡ください。</p>
            </CardContent>
            <CardFooter>
                <p>2024年10月5日制定</p>
            </CardFooter>
        </Card>
    );
};

export default PrivacyPolicy;
