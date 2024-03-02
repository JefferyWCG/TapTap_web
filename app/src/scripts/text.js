
//test
const ENGLISH={
    language:"ENGLISH",
    header:{
        TechCafe:"TapTap",
        pages:[],//'Products', 'Pricing', 'Blog'
    },
    body:{
        Hero:{
            caption:"Fast order and pay for restaurants",
            subCaption:"Become more profitable by simplifying the restaurant experience for your customers.",
            button1:"Try the Demo",
            button2:"Contact us",
        },
        HowOurTechWork:{
            caption:"How TapTap Works",
            step1:"Step 1",
            text1:"Customers scan an NFC tag and order food through an online menu",
            step2:"Step 2",
            text2:"Handle all their orders through your POS tablet screen",
            step3:"Step 3",
            text3:"Your customers pay for their food, online or in-person",
        },
        NFCMobileMenu:{
            caption:"TapTap Mobile Ordering",
            detail:["With just one tap, customers can order food through your online menu. With our NFC technology, you’ll never have to worry about outsiders messing with your orders.",
            "Your customers won’t waste time downloading apps (they already have enough). It’s all on their browser.",
            "Group dining has never been easier. No more complex calculations. Friends can easily split the bill evenly or pay for their items. Effortlessly navigate through our meal with utmost ease. "
            ],
            animation:["Fast & Safe","No App, All Web", "Custom Pay"]

        },
        AboutPOS:{
            caption:"POS System",
            subCaption:"Our smart register is always upgrading, here’s what we have so far",
            carousel:[
                ["Order Details",
                "Access customer's comprehensive order details instantly. Serve with precision and exceed expectations"
                ],
                ["Table Layout",
                "You’ll never miss a table’s order with our colors indicating table status. Customize the layout to look like your restaurant"
                ],
                [ "Edit Order with Ease",
                   "Mistakes happen, but with our system, they’re easy to fix. Quickly update to ensure a flawless dining experience"
                ],[
                    "Dynamic Sales and Insights",
                    "Gain an unfair advantage with our Sales and Revenue metrics tool. It’s not just numbers; it’s the secret behind your restaurant’s prosperity"
                ]
            ],
        },
        DontHaveTable:{
            text1:"Don't Have A Tablet?",
            text2:"We got you covered",
            tableSpec:"Tablet Specs",
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
    language:"JAPANESE",
    header: {
        TechCafe: "TapTap",
        pages: [],//'製品', '企業情報', 'ブログ'
    },
    body: {
        Hero: {
            caption: "飲食店のための注文と支払いシステム",
            subCaption: "無駄のない飲食店経営で収益を向上",
            button1: "申し込む",
            button2: "お問い合わせ",
        },
        HowOurTechWork: {
            caption: "TapTapの機能",
            step1: "ステップ 1",
            text1: "テーブルに設置されたNFCタグにスマホをかざすとメニューが表示され注文することができます。",
            step2: "ステップ 2",
            text2: "飲食店は全てのメニューや注文をタブレット上のPOSシステムから簡単に管理する事ができます。",
            step3: "ステップ 3",
            text3: "飲食店員の介入なしにスマホから安全に支払いを行うことができます。",
        },
        NFCMobileMenu: {
            caption: "モバイルオーダー&ペイ",
            detail: [
                "多言語に対応したメニューにより、海外からのお客様への対応が可能です。",
                "お客様はスマートフォンにアプリを追加する必要はありません。全てのサービスはウェブ上で利用可能です。",
                "TapTapを利用することで、安全かつ容易に割り勘を行ったり、個々が注文した品目のみを支払うことができます。"
            ],
            animation: ["外国語対応", "全てがウェブ上", "簡単に割り勘"]
        },
        AboutPOS: {
            caption:"POSシステム",
            subCaption:"最先端の注文管理システムで、飲食店の効率を向上",
            carousel: [
                ["カスタマイズ", "飲食店の各テーブルの配置をPOSシステムに反映させます。これにより、店内の状況をリアルタイムで確認でき、運営の効率化を図れます。"],
                ["注文詳細", "注文詳細に即座にアクセスでき、顧客の特別なリクエストや食事の好みを理解することができます。これにより、正確にサービスを提供し期待を超える飲食店体験を実現します。"],
                ["簡単に注文の編集", "注文に誤りがあった際にも、簡単に注文内容を修正できます。これにより、お客様と飲食店の双方にとってストレスフリーな体験を実現します。"],
                ["売上と収益の洞察", "当社提供の売上及び収益分析ツールを活用することで、店舗の運営を効率的に分析し、売上と収益性の可視化を実現します。"]
            ],
        },
        DontHaveTable: {
            text1: "タブレットがない方へ",
            text2:"タブレットの販売も行っております。",
            tableSpec:"タブレットについて",
            button: "今すぐ購入 *2万9800円から",
            row1: ["価格", "サイズ", "ブランド", "ストレージ", "ネットワーク"],
            row2: ["2万9800円", "25.9 cm", "Apple", "64 GB", "WiFi"]
        },
        BuyTablet: {

        },
        ContactUs: {
            text1: "飲食店の方へ",
            text2: "このフォームに記入をしていただき、弊社から案内のご連絡をさせていただきます",
            label1: "姓*",
            label2: "名*",
            label3: "メールアドレス*",
            label4: "電話番号*",
            label5: "店名*",
            label6: "郵便番号*",
            button1: "送信する",
        }
    }
}
module.exports = { ENGLISH, JAPANESE};
