

const ENGLISH={
    header:{
        TechCafe:"TechCafe",
        pages:['Products', 'Pricing', 'Blog'],
    },
    body:{
        Hero:{
            caption:"Fast order and pay for restaurants",
            subCaption:"Become more profitable by simplifying the restaurant experience for your customers.",
            button1:"Try the Demo",
            button2:"Contact us",
        },
        HowOurTechWork:{
            caption:"How Our Tech Works",
            step1:"Step 1",
            text1:"Customers scan an NFC tag and order food through an online menu",
            step2:"Step 2",
            text2:"Handle all their orders through your POS tablet screen",
            step3:"Step 3",
            text3:"Your customers pay for their food, online or in-person",
        },
        NFCMobileMenu:{
            caption:"NFC Mobile Menu",
            detail:["With just one tap, customers can order food through your online menu. With our NFC technology, you’ll never have to worry about outsiders messing with your orders.",
            "Your customers won’t waste time downloading apps (they already have enough). It’s all on their browser.",
            "Group dining has never been easier. No more complex calculations. Friends can easily split the bill evenly or pay for their items. Effortlessly navigate through our meal with utmost ease. "
            ],
            animation:["Fast & Safe","No App, All Web", "Custom Pay"]

        },
        AboutPOS:{
            caption:"POS System",
            subCaption:"Our smart register is still in the making, here’s what we have so far",
            carousel:[
                ["Order Details",
                "Access customer's comprehensive order details instantly. Serve with precision and exceed expectations"
                ],
                ["Table layout",
                "You’ll never miss a table’s order with our colors indicating table status. Customize the layout to look like your restaurant"
                ],
                [ "Edit order with Ease",
                   "Mistakes happen, but with our system, they’re easy to fix. Quickly update to ensure a flawless dining experience"
                ],[
                    "Dynamic Sales and insights",
                    "Gain an unfair advantage with our Sales and Revenue metrics tool. It’s not just numbers; it’s the secret behind your restaurant’s prosperity"
                ]
            ],
        },
        DontHaveTable:{
            text1:"Don't Have A Tablet?",
            text2:"We got you covered",
            button:"Buy Now *Starting from 299$",
            row1:["Price","Size","Brand","Internal Storage","Network Type"],
            row2:["$299","25.9 cm","Apple","64 GB","WiFi"]
        },
        ContactUs:{
            text1:"Are You A Restaurant Owner? Join Us Today!",
            text2:"Fill Out This Form To Get In Contact With Us",
            label1:"First name*",
            label2:"Last name*",
            label3:"Email*",
            label4:"Phone number*",
            label5:"Restaurant name*",
            label6:"Postal code*",
            button1:"Get a Demo",
        }
    }
}

const JAPANESE = {
    header: {
        TechCafe: "TechCafe",
        pages: ['製品', '価格', 'ブログ'],
    },
    body: {
        Hero: {
            caption: "レストランの迅速な注文と支払い",
            subCaption: "顧客のレストラン体験を簡素化することで、より収益性を高めます。",
            button1: "デモを試す",
            button2: "お問い合わせ",
        },
        HowOurTechWork: {
            caption: "私たちの技術の仕組み",
            step1: "ステップ 1",
            text1: "顧客がNFCタグをスキャンして、オンラインメニューから食べ物を注文する",
            step2: "ステップ 2",
            text2: "POSタブレット画面を通じて、すべての注文を処理する",
            step3: "ステップ 3",
            text3: "顧客が食べ物の支払いをオンラインまたは対面で行う",
        },
        NFCMobileMenu: {
            caption: "NFCモバイルメニュー",
            detail: [
                "たった一回のタップで、顧客はオンラインメニューを通じて食べ物を注文できます。当社のNFC技術を使用すれば、注文を外部の人にいじられる心配はありません。",
                "顧客はアプリをダウンロードする時間を無駄にしません（彼らはすでに十分に持っています）。すべてが彼らのブラウザ上にあります。",
                "グループでの食事がこれまでになく簡単になりました。もう複雑な計算は必要ありません。友達が簡単に勘定を均等に分けたり、自分のアイテムを支払ったりできます。最大限の簡単さで私たちの食事を楽しむことができます。"
            ],
            animation: ["高速＆安全", "アプリなし、すべてウェブ", "カスタムペイ"]
        },
        AboutPOS: {
            caption:"POS System",
            subCaption:"Our smart register is still in the making, here’s what we have so far",
            carousel: [
                ["注文詳細", "顧客の詳細な注文情報に即座にアクセス。精度を持って提供し、期待を超える"],
                ["テーブルレイアウト", "色でテーブルのステータスを示すことで、テーブルの注文を見逃すことはありません。レストランに似せたレイアウトをカスタマイズする"],
                ["注文の簡単な編集", "ミスは発生しますが、当社のシステムでは簡単に修正できます。完璧な食事体験を確実にするために迅速に更新する"],
                ["ダイナミックセールスとインサイト", "セールスおよび収益メトリクスツールを使って不公平なアドバンテージを獲得します。それは単なる数字ではなく、あなたのレストランの繁栄の秘密です"]
            ],
        },
        DontHaveTable: {
            text1: "タブレットを持っていない？",
            text2: "私たちが対応します",
            button: "今すぐ購入 *299ドルから",
            row1: ["価格", "サイズ", "ブランド", "内部ストレージ", "ネットワークタイプ"],
            row2: ["$299", "25.9 cm", "Apple", "64 GB", "WiFi"]
        },
        BuyTablet: {

        },
        ContactUs: {
            text1: "レストランのオーナーですか？今日私たちに参加してください！",
            text2: "このフォームに記入して、私たちと連絡を取ってください",
            label1: "名前*",
            label2: "苗字*",
            label3: "メール*",
            label4: "電話番号*",
            label5: "レストラン名*",
            label6: "郵便番号*",
            button1: "デモを取得する",
        }
    }
}
module.exports = { ENGLISH, JAPANESE};
