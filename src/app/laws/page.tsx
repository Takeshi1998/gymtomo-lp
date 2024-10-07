import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">特定商取引法に基づく表記</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h2 className="font-semibold">事業者の氏名</h2>
            <p>伊藤武</p>
          </div>
          <div>
            <h2 className="font-semibold">住所</h2>
            <p>メールアドレスあてにお問い合わせを頂きましたら速やかに開示いたします</p>
          </div>
          <div>
            <h2 className="font-semibold">電話番号</h2>
            <p>メールアドレスあてにお問い合わせを頂きましたら速やかに開示いたします。</p>
          </div>
          <div>
            <h2 className="font-semibold">メールアドレス</h2>
            <p>take.apetamu@gmail.com</p>
          </div>
          <div>
            <h2 className="font-semibold">サービスの対価</h2>
            <p>各商品・サービス毎に記載</p>
          </div>
          <div>
            <h2 className="font-semibold">対価以外に必要となる費用</h2>
            <p>なし</p>
          </div>
          <div>
            <h2 className="font-semibold">代金の支払時期</h2>
            <p>サービスの利用規約に定める</p>
          </div>
          <div>
            <h2 className="font-semibold">支払方法</h2>
            <p>クレジット決済</p>
          </div>
          <div>
            <h2 className="font-semibold">サービス提供の時期</h2>
            <p>サービスの登録後直ちに</p>
          </div>
          <div>
            <h2 className="font-semibold">返品・キャンセルに関する特約</h2>
            <p>
              本アプリで提供するサービスについては、決済手続き完了後のキャンセルをお受けいたしません。なお、サービスに瑕疵がある場合は、利用規約の定めに従って対応します。
            </p>
          </div>
          <div>
            <h2 className="font-semibold">その他</h2>
            <p>
              その他特別な販売条件または提供条件がある商品またはサービスについては、それぞれの購入ページにおいて条件を表示します。
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
