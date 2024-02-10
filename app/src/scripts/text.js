

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
            step1:"Step1",
            text1:"Customers scan an NFC tag and order food through an online menu",
            step2:"Step2",
            text2:"Handle all their orders through your POS tablet screen",
            step3:"Step3",
            text3:"Your customers pay for their food, online or in-person",
        },
        NFCMobileMenu:{

        },
        AboutPOS:{
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
            button:"Buy Now *Starting from 299$"
        },
        BuyTablet:{

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
        TechCafe: "テックカフェ",
        pages: ['製品', '価格', 'ブログ'],
    },
    body: {
        Hero: {
            caption: "レストランでの注文と支払いを迅速化",
            subCaption: "お客様のレストラン体験を簡素化することで、より収益性の高いビジネスに。",
            button1: "デモを試す",
            button2: "お問い合わせ",
        },
        HowOurTechWork: {
            caption: "当社の技術の仕組み",
            step1: "ステップ1",
            text1: "顧客がNFCタグをスキャンして、オンラインメニューから食事を注文",
            step2: "ステップ2",
            text2: "POSタブレット画面を通じて、すべての注文を処理",
            step3: "ステップ3",
            text3: "顧客が食事代をオンラインまたは対面で支払う",
        },
        NFCMobileMenu: {},
        AboutPOS: {
            carousel: [
                ["注文詳細", "顧客の詳細な注文情報に即座にアクセス。正確なサービスで期待を超える"],
                ["テーブルレイアウト", "テーブルの注文を見逃すことはありません。色でテーブルの状態を示し、レストランのようなレイアウトにカスタマイズ"],
                ["注文の編集が容易", "ミスは起こりますが、当システムでは簡単に修正可能。迅速な更新で完璧な食事体験を保証"],
                ["ダイナミックセールスとインサイト", "売上と収益のメトリクスツールで不公平な利点を得る。数字以上のもの、あなたのレストランの繁栄の秘密"]
            ],
        },
        DontHaveTable: {
            text1: "タブレットをお持ちでない？",
            text2: "私たちが対応します",
            button: "今すぐ購入 *299ドルから"
        },
        BuyTablet: {},
        ContactUs: {
            text1: "レストランオーナーですか？今日私たちに参加しましょう！",
            text2: "お問い合わせいただくためのフォームに記入してください",
            label1: "名*",
            label2: "姓*",
            label3: "メール*",
            label4: "電話番号*",
            label5: "レストラン名*",
            label6: "郵便番号*",
            button1: "デモを取得",
        }
    }
}

module.exports = { ENGLISH, JAPANESE};
