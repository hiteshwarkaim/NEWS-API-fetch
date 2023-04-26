import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  articles = [
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "Beats Studio Buds+ Appear on Amazon: Transparent Design Option, Improved Noise Cancellation, and More",
      "description": "Apple's rumored Beats Studio Buds+ appear to have been listed on Amazon today, providing a closer look at new features and changes before they are officially announced. The earbuds are listed with a May 18 release date and a $169.95 price.\n\n\n\n\n\nNotably, the l…",
      "url": "https://www.macrumors.com/2023/04/25/beats-studio-buds-plus-amazon-listing/",
      "urlToImage": "https://images.macrumors.com/t/uGHu-K3gkLNSGDn7Cm9r9GcB6UA=/1600x/article-new/2023/04/Beats-Studio-Buds-Plus-Transparent.jpeg",
      "publishedAt": "2023-04-26T00:46:13Z",
      "content": "Apple's rumored Beats Studio Buds+ appear to have been listed on Amazon today, providing a closer look at new features and changes before they are officially announced. The earbuds are listed with a … [+877 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Trevor Mogg",
      "title": "Oops! Beat Studio Buds+ revealed in now-removed Amazon listing",
      "description": "Apple’s Beats Studio Buds+ will come in a rather striking transparent option, according to a listing on Amazon on Tuesday that’s now been removed.",
      "url": "https://www.digitaltrends.com/home-theater/beat-studio-buds-revealed-in-amazon-listing/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/04/Beats-Studio-Buds.jpeg?resize=1200%2C630&p=1",
      "publishedAt": "2023-04-26T03:50:14Z",
      "content": "Skip to main content\r\nAmazon\r\nApple’s Beats Studio Buds+ will come with improved features and a rather striking transparent option, according to a listing on Amazon on Tuesday that’s now been removed… [+1959 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "Here’s a first look at the 2023 Apple Watch Pride face and band",
      "description": "Every year, Apple introduces new watch faces and bands to celebrate Pride month. Although the company is yet to announce this year’s edition of Apple Watch Pride, we now have a first look at what it will look like.\n more…\nThe post Here’s a first look at the 2…",
      "url": "https://9to5mac.com/2023/04/25/first-look-2023-apple-watch-pride-face-and-band/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Watch-Pride-2023.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-04-26T00:45:44Z",
      "content": "Every year, Apple introduces new watch faces and bands to celebrate Pride month. Although the company is yet to announce this year’s edition of Apple Watch Pride, we now have a first look at what it … [+975 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Wesley Hilliard)",
      "title": "2023 Apple Watch Pride Edition face and band design discovered in code",
      "description": "Code sleuths shared still images of the upcoming Apple Watch Pride Edition watch face and band, discovered via a mistake on Apple's backend.Apple Watch Pride Edition 2023Pride month is every June in the United States, and Apple generally releases new Apple Wa…",
      "url": "https://appleinsider.com/articles/23/04/26/2023-apple-watch-pride-edition-face-and-band-design-discovered-in-code",
      "urlToImage": "https://photos5.appleinsider.com/gallery/54155-109109-Pride-2023-xl.jpg",
      "publishedAt": "2023-04-26T02:23:00Z",
      "content": "Apple Watch Pride Edition 2023\r\nCode sleuths shared still images of the upcoming Apple Watch Pride Edition watch face and band, discovered via a mistake on Apple's backend.\r\nPride month is every June… [+1359 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Michael Stroup)",
      "title": "Amazon's $999 iMac 24-inch deal is back, save $500 on the 8-core GPU spec",
      "description": "Amazon dropped prices on the pink 24-inch iMac with an M1 8-core GPU to only $999, a full $500 cheaper than through Apple directly. This price is the lowest we've seen on any iMac in the last 30 days, and stock will not last long.Apple's iMac in Pink is on sa…",
      "url": "https://appleinsider.com/articles/23/04/26/amazons-999-imac-24-inch-deal-is-back-save-500-on-the-8-core-gpu-spec",
      "urlToImage": "https://photos5.appleinsider.com/gallery/54145-109100-Sale---33-Off!-xl.jpg",
      "publishedAt": "2023-04-26T00:14:32Z",
      "content": "Apple's iMac in Pink is on sale for only $999.\r\nAmazon dropped prices on the pink 24-inch iMac with an M1 8-core GPU to only $999, a full $500 cheaper than through Apple directly. This price is the l… [+1751 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Wesley Hilliard)",
      "title": "Beats Studio Buds+ appear on Amazon with transparent case, available May 18",
      "description": "A listing for Beats Studio Buds+ has appeared on Amazon, and they have improved features and a new transparent option.Beats Studio Buds+Code found in iOS 16.4 revealed the existence of Beats Studio Buds+, later confirmed by an FCC filing. Even though the earb…",
      "url": "https://appleinsider.com/articles/23/04/26/beats-studio-buds-appear-on-amazon-with-transparent-case-available-may-18",
      "urlToImage": "https://photos5.appleinsider.com/gallery/54154-109107-Beats-Studio-Buds+-xl.jpg",
      "publishedAt": "2023-04-26T01:24:30Z",
      "content": "Beats Studio Buds+\r\nA listing for Beats Studio Buds+ has appeared on Amazon, and they have improved features and a new transparent option.\r\nCode found in iOS 16.4 revealed the existence of Beats Stud… [+1151 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theregister.com"
      },
      "author": "Laura Dobberstein",
      "title": "Chinese city of Changshu to issue salaries in digital yuan",
      "description": "Adoption has been slow, maybe because there are few places to use it\nCivil servants and other public sector workers in the eastern Chinese city of Changshu will be paid solely in digital yuan starting in May, marking the biggest push of the e-currency to date…",
      "url": "https://www.theregister.com/2023/04/26/changshu_digital_yuan/",
      "urlToImage": "https://regmedia.co.uk/2020/11/02/shutterstock_digital_yuan.jpg",
      "publishedAt": "2023-04-26T01:00:10Z",
      "content": "Civil servants and other public sector workers in the eastern Chinese city of Changshu will be paid solely in digital yuan starting in May, marking the biggest push of the e-currency to date.\r\nA docu… [+1846 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BGR"
      },
      "author": "Chris Smith",
      "title": "How to enable iPhone Voice Isolation and get amazing call quality",
      "description": "Apple introduced Voice Isolation support in the recent iOS 16.4 update, making the feature available for iPhone voice calls. You might have taken advantage of …\nThe post How to enable iPhone Voice Isolation and get amazing call quality appeared first on BGR.",
      "url": "https://bgr.com/tech/how-to-enable-iphone-voice-isolation-and-get-amazing-call-quality/",
      "urlToImage": "https://bgr.com/wp-content/uploads/2021/09/apple-iphone-13-7.jpg?quality=82&strip=all",
      "publishedAt": "2023-04-26T01:04:00Z",
      "content": "If you buy through links on BGR, we may receive an affiliate commission. Learn more.Apple introduced Voice Isolation support in the recent iOS 16.4 update, making the feature available for iPhone voi… [+2186 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ifanr.com"
      },
      "author": "方嘉文",
      "title": "早报 | iOS 17 或推出情绪追踪器 /ChatGPT 支持关闭聊天记录/微软浏览器向 Bing 泄露用户数据",
      "description": "- OnePlus 推出首款平板\n- 大疆发布 DJI Mavic 3 Pro\n- 腾讯发布机器人灵巧操作研究成果#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      "url": "https://www.ifanr.com/1545135",
      "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2023/04/640-9.png",
      "publishedAt": "2023-04-26T01:00:54Z",
      "content": "<ul><li>ChatGPT </li><li></li><li> Bing </li><li> AI </li><li> 30% </li><li>3M 6000 </li><li> Unity </li><li></li><li>iOS 17 </li><li>OnePlus </li><li> DJI Mavic 3 Pro</li><li></li><li> 13 2023</li><… [+1350 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Eurogamer.net"
      },
      "author": "Jessica Orr",
      "title": "Honkai: Star Rail review - more than Genshin Impact in space",
      "description": "It's a sign of how popular Genshin Impact has become that Honkai: Star Rail is discussed more like its sequel than the fourth entry in the Honkai series. Along with a complete tonal 180 from the 'Breath of the Wild clone' derison Genshin Impact drew at launch…",
      "url": "https://www.eurogamer.net/honkai-star-rail-review-more-than-genshin-impact-in-space",
      "urlToImage": "https://assetsio.reedpopcdn.com/Honkai-Star-Rail-review.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "publishedAt": "2023-04-26T02:00:00Z",
      "content": "Some subtle improvements to the grind and flexible turn-based tactics mean Honkai: Star Rail's off to a fine start.\r\nIt's a sign of how popular Genshin Impact has become that Honkai: Star Rail is dis… [+9959 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "newsfeedback@fool.com (The Daily Upside)",
      "title": "New UK Bill Penalizes Tech Giants For Annoying Consumers",
      "description": "If you've ever seen a big charge on your card statement for a trial subscription that you forgot to cancel, and thought \"This is criminal!\"...",
      "url": "https://www.fool.com/investing/2023/04/25/new-uk-bill-penalizes-tech-giants-for-annoying-con/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/729580/featured-daily-upside-image.jpg",
      "publishedAt": "2023-04-26T00:00:09Z",
      "content": "For more crisp and insightful business and economic news, subscribe to\r\nThe Daily Upside newsletter.\r\nIt's completely free and we guarantee you'll learn something new every day.\r\nIf you've ever seen … [+2730 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "jillg366",
      "title": "Adam Aron “Relaxed & Confident” On AMC’s Future; Unveils Branded AMC Entertainment Visa Card – CinemaCon",
      "description": "AMC Entertainment chief executive Adam Aron said a booming box office and sharp pivot to theatrical by studios and streamers makes him “as relaxed and confident about AMC future as I possibly can be.” Speaking with Deadline at CinemaCon in Las Vegas, Aron ind…",
      "url": "https://deadline.com/2023/04/adam-aron-amc-entertainment-cinemacon-1235337378/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2022/02/adam-aron.webp?w=660",
      "publishedAt": "2023-04-26T01:12:45Z",
      "content": "AMC Entertainment chief executive Adam Aron said a booming box office and sharp pivot to theatrical by studios and streamers makes him “as relaxed and confident about AMC future as I possibly can be.… [+3671 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Osxdaily.com"
      },
      "author": "Paul Horowitz",
      "title": "Third Betas of iOS 16.5, iPadOS 16.5, MacOS Ventura 13.4, Available for Testing",
      "description": "Apple has released new beta versions of system software to users enrolled in the beta testing programs. iOS 16.5 beta 3, iPadOS 16.5 beta 3, and MacOS Ventura 13.4 beta 3 are available now to users who are beta test participants. No major features are expecte…",
      "url": "https://osxdaily.com/2023/04/25/third-betas-of-ios-16-5-ipados-16-5-macos-ventura-13-4-available-for-testing/",
      "urlToImage": "https://cdn.osxdaily.com/wp-content/uploads/2022/07/public-beta-macos-ventura-ios-16-ipados-16.jpg",
      "publishedAt": "2023-04-26T02:37:48Z",
      "content": "Apple has released new beta versions of system software to users enrolled in the beta testing programs. iOS 16.5 beta 3, iPadOS 16.5 beta 3, and MacOS Ventura 13.4 beta 3 are available now to users w… [+1425 chars]"
    },
    {
      "source": {
        "id": "el-mundo",
        "name": "El Mundo"
      },
      "author": "Javier Attard, aurora molina",
      "title": "\"Es un peligro\": estas son las amenazas de la Inteligencia Artificial",
      "description": "¿Dónde están los límites de la Inteligencia Artificial? ¿Hasta qué punto es peligrosa? ¿Hará indistinguible la verdad? ¿Por qué tenemos miedo a los avances de la ciencia?...",
      "url": "https://www.elmundo.es/podcasts/el-mundo-al-dia/2023/04/26/644812d7fdddff52378b45a0.html",
      "urlToImage": "https://phantom-elmundo.unidadeditorial.es/8bcc34fbd9b12199081275d9e3c017eb/resize/1200/f/jpg/assets/multimedia/imagenes/2023/04/25/16824405955620.jpg",
      "publishedAt": "2023-04-26T00:16:32Z",
      "content": "<ul><li>Archivo Escucha todos los episodios </li></ul>¿Dónde están los límites de la Inteligencia Artificial? ¿Hasta qué punto es peligrosa? ¿Hará indistinguible la verdad? ¿Por qué tenemos miedo a l… [+729 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Olhardigital.com.br"
      },
      "author": "Wharrysson Lacerda",
      "title": "As Big Techs estão se recuperando?",
      "description": "Confira a anÃ¡lise de Arthur Igreja sobre o momento das Big Techs, na entrevista concedida a Marisa Silva, durante o Olhar Digital News",
      "url": "https://olhardigital.com.br/2023/04/26/pro/as-big-techs-estao-se-recuperando/",
      "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2023/04/big-techs.jpg",
      "publishedAt": "2023-04-26T03:02:26Z",
      "content": "As demissÃµes continuam. E talvez ainda tenhamos novas levas importantes pela frente. PorÃ©m, o cenÃ¡rio comeÃ§a a se transformar. Nesta semana, vÃ¡rias das chamadas Big Techs divulgam seus resultado… [+2018 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "decrypt.co",
      "title": "Bitcoin Whitepaper Removed from Apple Computers Following Belated Discovery",
      "description": "A digital copy of the original Bitcoin whitepaper that had been hidden on Macintosh computers for more than five years is not part of an upcoming operating system update from Apple, AppleInsider reported Tuesday. The late discovery of the PDF document went vi…",
      "url": "https://biztoc.com/x/c3f07834499cce54",
      "urlToImage": "https://c.biztoc.com/p/c3f07834499cce54/og.webp",
      "publishedAt": "2023-04-26T01:44:04Z",
      "content": "A digital copy of the original Bitcoin whitepaper that had been hidden on Macintosh computers for more than five years is not part of an upcoming operating system update from Apple, AppleInsider repo… [+301 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "theregister.com",
      "title": "Chinese city of Changshu to issue salaries in digital yuan",
      "description": "Civil servants and other public sector workers in the eastern Chinese city of Changshu will be paid solely in digital yuan starting in May, marking the biggest push of the e-currency to date. A document posted on a government website said the effort would pro…",
      "url": "https://biztoc.com/x/afde460737712181",
      "urlToImage": "https://c.biztoc.com/p/afde460737712181/og.webp",
      "publishedAt": "2023-04-26T01:12:08Z",
      "content": "Civil servants and other public sector workers in the eastern Chinese city of Changshu will be paid solely in digital yuan starting in May, marking the biggest push of the e-currency to date.A docume… [+314 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Juggly.cn"
      },
      "author": "juggly",
      "title": "OnePlus Padの価格と発売日が判明",
      "description": "最近の Android タブレットの話題の中で最も注目されている OnePlus Pad。その価格と発売日が公開されました。 今月 10 日の予約開始時に価格と発売日は公表されませんでしたが、米国での販売価格は $479 [...]",
      "url": "https://juggly.cn/archives/247801.html",
      "urlToImage": null,
      "publishedAt": "2023-04-26T02:49:50Z",
      "content": "Android OnePlus Pad\r\n 10 $479 63,000 Apple iPad 2022 10th Gen $449 $20 Galaxy Tab S8 \r\nOnePlus Pad 7:5 144Hz 11.61 Android Galaxy Tab S8 MediaTek Dimensity 9000 8GB LPDDR5X RAM Galaxy Tab S8 \r\n5 8 \r\n… [+39 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sspai.com"
      },
      "author": "少数派编辑部",
      "title": "派早报：特斯拉向其他品牌新能源车开放充电网络试点等",
      "description": "Edge 浏览器存在 URL 泄露问题，ChatGPT 允许用户关闭对话历史等。查看全文",
      "url": "https://sspai.com/post/79470",
      "urlToImage": "https://cdn.sspai.com/2023/4/26/article/77397f4f-0ce4-4164-faab-073fb5e75d86.png",
      "publishedAt": "2023-04-26T00:58:34Z",
      "content": "4 25 Tesla App \r\nEdge URL \r\nThe Verge Edge URL API Edge &gt; &gt; \r\nChatGPT \r\n4 25 OpenAI ChatGPT 30 ChatGPT \r\nOpenAI ChatGPT Business \r\n 105 4G \r\n 4 25 105 4G 105 4G 105 4G 1450 mAh 32GB 5.0 105 4G … [+201 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Skift"
      },
      "author": "Skift",
      "title": "Google Travel Helped Nudge Advertising and Search Revenue Into Positive Territory",
      "description": "Alphabet officials didn't mention ChatGPT, Bing or Microsoft during the company's first quarter earnings call. But like modern-day bards, they gave an impassioned defense about their abilities to meet the artificial intelligence challenge. -Dennis Schaal",
      "url": "https://skift.com/2023/04/25/google-travel-helped-nudge-advertising-and-search-revenue-into-positive-territory/",
      "urlToImage": "https://skift.com/wp-content/uploads/2023/04/Hotel-Caritas-Goma-the-Congo.jpg",
      "publishedAt": "2023-04-26T02:20:00Z",
      "content": "Google advertising, search and other revenue revenue grew 2 percent year over year in the first quarter, pushed upwards by increases in revenue from travel and retail ads.\r\n“In Google Advertising, Se… [+2499 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macotakara.jp"
      },
      "author": "danbo",
      "title": "Apple IDなしでiPhoneを初期化・リセットする最適な3策",
      "description": "iPhone\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\niPhoneを売ったり人にあげたりするとき、個人情報の流出を防ぐために、あらかじめ古いiPhoneを初期化する必要がありますが、ほとんどの人はiPhoneを購入した際にApple IDを作成し、その後基本的にApple IDを使わなくなる人が多いので、パスワードを忘れてしまうことがあります。\nそんなときでも安心しできるいくつかの解決策を紹介します。",
      "url": "https://www.macotakara.jp/software/entry-44670.html",
      "urlToImage": "https://www.macotakara.jp/archives/001/202304/89aff20c2e582c1c.png",
      "publishedAt": "2023-04-26T01:40:04Z",
      "content": "iPhone\r\niPhoneiPhoneiPhoneApple IDApple ID\r\niPhone\r\nAppleAppleiPhone\r\niPhone\r\niPhoneAPPAPPSMSWi-Fi iPhone\r\nApple ID\r\niPhoneAppleApple ID Apple ID \r\n1SafariiforgotApple ID\r\n2Apple ID\r\n3Apple ID\r\n4Appl… [+494 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AdExchanger"
      },
      "author": "AdExchanger",
      "title": "Epic Loses, But Takes A Bite Of The Apple; The “Very Large” Platforms",
      "description": "Here’s today’s AdExchanger.com news round-up… Want it by email? Sign up here. End Of An Epic Case Epic lost its appeal case against Apple, which it had accused of anticompetitive practices. \nThe post Epic Loses, But Takes A Bite Of The Apple; The “Very Large”…",
      "url": "http://www.adexchanger.com/ad-exchange-news/wednesday-26042023/",
      "urlToImage": "https://live-adexchanger.pantheonsite.io/wp-content/uploads/2015/10/thefickleuser.jpg",
      "publishedAt": "2023-04-26T04:03:34Z",
      "content": "Heres todays AdExchanger.com news round-up Want it by email? Sign up here.\r\nEnd Of An Epic Case\r\nEpic lost its appeal case against Apple, which it had accused of anticompetitive practices. \r\nHowever,… [+4371 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Just Jared"
      },
      "author": "Just Jared",
      "title": "Rebecca Ferguson Steps Out In A Suit For the 'Silo' Premiere in London with Tim Robbins",
      "description": "Rebecca Ferguson suits up for the premiere of her new show, Silo. The 39-year-old actress met up with Tim Robbins on the red carpet for the London premiere at Battersea Power Station on Tuesday (April 25). Rebecca and Tim were joined by co-stars Christian Och…",
      "url": "http://www.justjared.com/2023/04/25/rebecca-ferguson-steps-out-in-a-suit-for-the-silo-premiere-in-london-with-tim-robbins/",
      "urlToImage": "https://cdn.justjared.com/wp-content/uploads/headlines/2023/04/silo-prem.jpg",
      "publishedAt": "2023-04-26T01:06:37Z",
      "content": "Rebecca Ferguson suits up for the premiere of her new show, Silo.\r\nThe 39-year-old actress met up with Tim Robbins on the red carpet for the London premiere at Battersea Power Station on Tuesday (Apr… [+940 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Natalie.mu"
      },
      "author": "音楽ナタリー",
      "title": "アジカン後藤の音楽賞第6回大賞が決定",
      "description": "後藤正文（ASIAN KUNG-FU GENERATION）が主催する音楽賞「APPLE VINEGAR -Music Award- 2023」の大賞作品と特別賞6作品が決定した。",
      "url": "https://natalie.mu/music/news/522315",
      "urlToImage": "https://ogre.natalie.mu/media/news/music/2023/0210/avma_2023.jpg?imwidth=750&imdensity=1",
      "publishedAt": "2023-04-26T03:00:00Z",
      "content": "ASIAN KUNG-FU GENERATIONAPPLE VINEGAR -Music Award- 20236\r\nAPPLE VINEGAR -Music Award-2018612Kei MatsumaruThe Moon, Its Recollections Abstracted\r\nANORAK!ANORAK!\r\nIDB1\r\nLaura day romanceroman candles\r… [+279 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hvg.hu"
      },
      "author": "hvg@hvg.hu",
      "title": "Összedőlt a Tupper-vár, Elizabeth Holmes és a sajtburger - Mérlegen #1",
      "description": "Elindult a Mérlegen, a hvg.hu üzleti podcastja! Az első adásban Csatári Flóra Dóra és Dzindzisz Sztefan a McDonald's társadalomellenes támadását, a Tupperware-csődöt, Elizabeth Holmes csillagának leáldozását és a WizzAir teljesítményét veszik számba.",
      "url": "https://hvg.hu/kkv/20230426_Merlegen_1_Tupperware_McDonalds_Elizabeth_Holmes_Wizz_Air_podcast",
      "urlToImage": "https://api.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/c4421b15-9f40-41b8-8e63-48eb139f5bd8.jpg",
      "publishedAt": "2023-04-26T04:00:00Z",
      "content": "Elindult a Mérlegen, a hvg.hu üzleti podcastja! Az els adásban Csatári Flóra Dóra és Dzindzisz Sztefan a McDonald's társadalomellenes támadását, a Tupperware-csdöt, Elizabeth Holmes csillagának leáld… [+2690 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techviral.net"
      },
      "author": "Amarnath Chakraborty",
      "title": "How to Clear App Cache on iPhone Without Deleting Apps (5 Methods)",
      "description": "The App availability of the iPhone isn’t as huge as Android, but the Apple app store still has many useful and free apps. On regular usage, an iPhone user installs almost 20-30 apps. And as we use those apps on our iPhones, they create cache files that build …",
      "url": "https://techviral.net/clear-app-cache-iphone-without-deleting/",
      "urlToImage": "https://techviral.net/wp-content/uploads/2023/04/Clear-app-cache-iPhone-featured.jpg",
      "publishedAt": "2023-04-26T02:38:24Z",
      "content": "The App availability of the iPhone isnt as huge as Android, but the Apple app store still has many useful and free apps. On regular usage, an iPhone user installs almost 20-30 apps.\r\nAnd as we use th… [+6075 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DIE WELT"
      },
      "author": "Lena Zimmermann, Holger Zschäpitz",
      "title": "Jahrhundertchance Wärmewende und die beste KI-Aktie der Welt",
      "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Lena Zimmermann und Holger Zschäpitz über den Viessmann-Deal und die Investitionen rund um Künstliche Intelligenz.",
      "url": "https://www.welt.de/podcasts/alles-auf-aktien/article245004482/Alles-auf-Aktien-Viessmann-Carrier-Global-das-sind-die-Aktien-fuer-den-Milliardenmarkt-Waermepumpe.html",
      "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile244957744/8721351367-ci16x9-w1200/Lena-Zimmermann-Holger-Zschaepitz-CUE-DWO-Podcast-Teaser-AllesAufA.jpg",
      "publishedAt": "2023-04-26T03:02:15Z",
      "content": "Außerdem geht es um UBS, Commerzbank, UPS, Deutsche Post, Banco Santander, First Republic, Danaher, GE Healthcare, Spotify, Coco Cola, PepsiCo, Nestlé, GM, Tesla, Microsoft, Alphabet, Carrier Global,… [+308 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Sohee Kim",
      "title": "Chipmaker SK Hynix’s Losses Widen After Tech Slump Deepens",
      "description": "(Bloomberg) -- SK Hynix Inc. posted its second straight quarterly loss after revenue plummeted about 60%, but the company signaled the worst may be over from...",
      "url": "https://finance.yahoo.com/news/chipmaker-sk-hynix-losses-widen-000809917.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/WIGsZvbofUdWlXKKzFWAfw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/dd23baf5d546a3a0ec6276627fd08382",
      "publishedAt": "2023-04-26T00:08:09Z",
      "content": "(Bloomberg) -- SK Hynix Inc. posted its second straight quarterly loss after revenue plummeted about 60%, but the company signaled the worst may be over from the memory-chip industrys deepest downtur… [+4178 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "PR Newswire",
      "title": "Asia Pacific OTT TV and Video Market Forecasts Report, 2022, 2023 & 2028",
      "description": "The \"Asia Pacific OTT TV and Video Forecasts 2023\" report has been added to ResearchAndMarkets.com's offering.",
      "url": "https://finance.yahoo.com/news/asia-pacific-ott-tv-video-004500730.html",
      "urlToImage": "https://media.zenfs.com/en/prnewswire.com/e75ef6f3096d7cb6f5dd43ba82eca2fe",
      "publishedAt": "2023-04-26T00:45:00Z",
      "content": "DUBLIN, April 25, 2023 /PRNewswire/ -- The \"Asia Pacific OTT TV and Video Forecasts 2023\" report has been added to  ResearchAndMarkets.com's offering.\r\nResearch and Markets Logo\r\nAsia Pacific OTT TV … [+2911 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Bloomberg News",
      "title": "US Companies in China Grow More Pessimistic About Bilateral Ties",
      "description": "(Bloomberg) -- American companies in China are increasingly pessimistic about the relationship between Washington and Beijing as geopolitical tensions...",
      "url": "https://finance.yahoo.com/news/us-companies-china-grow-more-021721470.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/lPXlPxu2umYTeb8yuwDG6g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzI-/https://media.zenfs.com/en/bloomberg_markets_842/6303e8c278965cb363f376e5dbd49fdb",
      "publishedAt": "2023-04-26T02:17:21Z",
      "content": "(Bloomberg) -- American companies in China are increasingly pessimistic about the relationship between Washington and Beijing as geopolitical tensions escalate, even as they have a more favorable vie… [+3574 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Touchdown Wire",
      "title": "4 takeaways from the Jets’ pre-draft press conference",
      "description": "New York Jets GM Joe Douglas fielded questions ahead of the 2023 NFL draft. Here are four takeaways from the press conference.",
      "url": "https://touchdownwire.usatoday.com/lists/jets-pre-draft-press-conference-4-takeaways/",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/K.PlHV1hIChv7h8M4oeT0Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/touchdown_wire_usa_today_sports_articles_829/20c58b176c51528442a32fbdb44f5d39",
      "publishedAt": "2023-04-26T00:03:15Z",
      "content": "One of the ways to make a splash in the NFL draft is to do so the Monday of draft week.\r\nThat is precisely what the New York Jets did as they agreed to terms with the Green Bay Packers to send Aaron … [+3560 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Paul Tan's Automotive News"
      },
      "author": "Mick Chan",
      "title": "2024 W214 Mercedes-Benz E-Class – Mild-hybrids, PHEVs up to 115 km EV range; MBUX Superscreen",
      "description": "The latest generation of the Mercedes-Benz E-Class has made its debut, bringing the Stuttgart marque’s mid-sized sedan entry into its 10th generation and thus sustaining one of its most traditional models in light of proliferating SUVs and dedicated electric …",
      "url": "https://paultan.org/2023/04/26/2024-w214-mercedes-benz-e-class-mild-hybrids-phevs-up-to-115-km-ev-range-mbux-superscreen/",
      "urlToImage": "https://paultan.org/image/2023/04/W214-Mercedes-Benz-E-Class-12-1200x637.jpg",
      "publishedAt": "2023-04-26T03:46:55Z",
      "content": "The latest generation of the Mercedes-Benz E-Class has made its debut, bringing the Stuttgart marques mid-sized sedan entry into its 10th generation and thus sustaining one of its most traditional mo… [+50718 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Dgtle.com"
      },
      "author": "活得开心",
      "title": "iOS / iPadOS 17 将增强 Health 应用，引入情绪追踪器",
      "description": "彭博社的马克・古尔曼（Mark·Gurman）表示，苹果计划在 iOS / iPadOS 17 系统中，为 iPhone / iPad 用户引入几项和健康相关的新功能。其中最值得关注的一款新应用可以追踪用户的情绪。以下是有关马克·古尔曼报道的 iOS17 健康功能摘要：Health 应用新增管控近视等视力状况苹果计划进一步增强 Health 应用，引入视力状况相关的功能。苹果正在开发的 AR / VR 头显将包括以健康为中心的功能，例如一款冥想应用程序，可以引导用户进行平静的冥想。将 Health 应用程序引入 …",
      "url": "https://www.dgtle.com/news-1550341-14.html",
      "urlToImage": null,
      "publishedAt": "2023-04-26T02:37:33Z",
      "content": "Mark·Gurman iOS / iPadOS 17  iPhone / iPad \r\n· iOS17 \r\nHealth \r\n Health AR / VR \r\n Health iPad \r\n iPhone Health iOS / iPadOS 17 iPad\r\n iPad Health \r\nQuartz \r\n Quartz Apple Watch \r\n 2024"
    },
    {
      "source": {
        "id": null,
        "name": "Technews.tw"
      },
      "author": "邱 倢芯",
      "title": "蘋果擴大健康應用，今年首度登陸 iPad",
      "description": "對於健康保健應用相當重視的蘋果，有可能會隨著今年 iPadOS 17 的亮相，同步公布首個 iPad 版健康應用。據《彭博社》報導，這款 iPad 健康應用今年內還會增加追蹤情緒與管理視力狀況的新功能；且明年還會致力於推動由 AI 驅動的健康指導服務，以及追蹤情緒的新技術。 報導指出，蘋果計畫拓展現...",
      "url": "https://technews.tw/2023/04/26/health-apps-in-ipad/",
      "urlToImage": "https://img.technews.tw/wp-content/uploads/2023/02/22144258/Apple-heart-health-hero-e1677048185387.jpg",
      "publishedAt": "2023-04-26T02:32:12Z",
      "content": "iPadOS 17 iPad iPad AI \r\n iPadOS 17 iPad iPhone IPad \r\niPad Apple Watch \r\nQuartz AI Quartz Quartz AI Apple Watch \r\n Quartz iOS 17 iPadOS 17 Quartz SiriAI"
    },
    {
      "source": {
        "id": null,
        "name": "Technews.tw"
      },
      "author": "MoneyDJ",
      "title": "彼得林區：後悔錯過蘋果、輝達，應買轉機股、成長股",
      "description": "傳奇基金經理人彼得林區（Peter Lynch）指出，追逐熱門股或許並非最佳策略，他並透露很後悔自己錯過蘋果（Apple）、輝達（Nvidia）。 林區25日接受CNBC專訪時指出，他真希望自己沒錯過蘋果的爆炸性成長。「蘋果並不難理解。我是說，我當時究竟有多笨？」，蘋果「擁有良好的資產負債表。我應該...",
      "url": "https://finance.technews.tw/2023/04/26/lynch-says-focus-on-turnaround-stocks-growth-stocks/",
      "urlToImage": "https://img.technews.tw/wp-content/uploads/2019/07/09133508/shutterstock_538414811-e1562650534811.jpg",
      "publishedAt": "2023-04-26T03:00:19Z",
      "content": "© 2013-2023 TechNews Inc. All rights reserved. | | | |"
    },
    {
      "source": {
        "id": null,
        "name": "Technews.tw"
      },
      "author": "姚 惠茹",
      "title": "5 月報稅季倒數！六大銀行信用卡、兩大支付繳稅優惠一次看",
      "description": "5 月報稅季即將登場，今年維持法定申報期間 1 個月，從 5 月 1 日至 ５ 月 31 日為止，而受疫情衝擊繳稅困難的民眾，依紓困振興條例提供延期、分期繳稅措施，至於一般民眾則可以透過信用卡、支付繳稅，本篇整理各家銀行、支付提供的刷卡報稅優惠方案。 中國信託銀行 中國信託商業銀行推出「中信卡繳稅回...",
      "url": "https://finance.technews.tw/2023/04/26/credit-card-tax-return/",
      "urlToImage": "https://img.technews.tw/wp-content/uploads/2023/04/22171723/02-icash-Pay%E7%B7%9A%E4%B8%8A%E7%B9%B3%E7%B4%8D%E7%B6%9C%E6%89%80-%E5%9B%9E%E9%A5%8B100.jpg",
      "publishedAt": "2023-04-26T01:00:24Z",
      "content": "5 1 5 1 31 \r\n5 1 6 3 LINE Pay 0.2% 100 0.35% 12 0 \r\n 30 0.38% 0.5% Points 100 3,800 3,800 LINE POINTS 5,000 Points \r\n 100 1 2,000 20 16 2 1 2.45%\r\n5 1 6 3 111 3,000 12 0 CUBE \r\n 1.5 0.25% 100 0.35% 0… [+690 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Googlediscovery.com"
      },
      "author": "Renê Fraga",
      "title": "Apple finalmente descobre recurso antigo do Android: sideloading de aplicativos",
      "description": "Uma das maiores vantagens de ter um smartphone Android é a capacidade de fazer o sideloading de aplicativos, ou seja, instalar software manualmente no",
      "url": "https://googlediscovery.com/2023/04/25/apple-finalmente-descobre-recurso-antigo-do-android-sideloading-de-aplicativos/",
      "urlToImage": "https://i0.wp.com/googlediscovery.com/wp-content/uploads/pexels-photo-2825349.jpeg",
      "publishedAt": "2023-04-26T01:10:00Z",
      "content": "Uma das maiores vantagens de ter um smartphone Android é a capacidade de fazer o sideloading de aplicativos, ou seja, instalar software manualmente no dispositivo por meio de um arquivo .apk, sem pre… [+1378 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Celtics Wire",
      "title": "Trae Young dagger puts Boston on ice, Celtics drop Game 5 119-117",
      "description": "Atlanta outscored Boston 37-25 in the fourth quarter on Tuesday as the Celtics choked away a Game 5 victory and a chance to advance to the next round.",
      "url": "https://celticswire.usatoday.com/lists/trae-young-dagger-puts-boston-on-ice-celtics-drop-game-5-119-117/",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/HjY.qmCpXSMh8HVVw3HXIg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xMDM0/https://media.zenfs.com/en/celtics_wire_usa_today_sports_articles_699/db2bdf462464b07a840e1d1b0c8cfb0b",
      "publishedAt": "2023-04-26T02:26:20Z",
      "content": "The Atlanta Hawks overcame a 13-point Boston Celtics lead in Game 5, grabbing a 119-117 and sending the series back to Georgia. Boston will now need to wait until at least Thursday to punch their tic… [+3878 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "ktangalakislippert@insider.com (Katherine Tangalakis-Lippert)",
      "title": "Apple may want to use AI to change your diet, sleep routine, and mood, Bloomberg reports",
      "description": "Apple is currently developing an AI-powered health coach under the codename Quartz, set to be released next year, Bloomberg reported.",
      "url": "https://www.businessinsider.com/apple-quartz-ai-health-app-change-sleep-routine-diet-mood-2023-4",
      "urlToImage": "https://i.insider.com/644869f990523900196febe9?width=1200&format=jpeg",
      "publishedAt": "2023-04-26T03:28:24Z",
      "content": "The future of wellness is Artificial Intelligence, with an algorithmic coach making customized suggestions for when to exercise and sleep, what snacks to eat even how to improve your mood.\r\nAt least,… [+2157 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motor Authority"
      },
      "author": "news@motorauthority.com (Kirk Bell), Kirk Bell",
      "title": "2024 McLaren 750S improves on 720S with more power, less weight, more tech",
      "description": "McLaren is updating its supercar lineup. It started with the \"entry-level\" Artura, and now it extends to its top series production model, which gets the name 750S. The 2024 McLaren 750S replaces the 720S, the supercar maker announced on Wednesday, providing i…",
      "url": "https://www.motorauthority.com/news/1139364_2024-mclaren-750s-improves-on-720s-with-more-power-less-weight-more-tech",
      "urlToImage": "https://images.hgmsites.net/hug/subaru_100882899_h.jpg",
      "publishedAt": "2023-04-26T00:36:00Z",
      "content": "McLaren is updating its supercar lineup. It started with the \"entry-level\" Artura, and now it extends to its top series production model, which gets the name 750S.\r\nThe 2024 McLaren 750S replaces the… [+5226 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nextpit.com"
      },
      "author": "Jade Bryan",
      "title": "iOS 17 May Add Lyrics and Font Customization on iPhone's Lock Screen",
      "description": "Apple's iOS 17 is rumored to add font customization and show Apple Music lyrics on lock screen. When can you update your iPhone to iOS 17?(This is a preview - click here to read the entire entry.)",
      "url": "https://www.nextpit.com/apple-iphone-ios-17-feature-share-lock-screen-music-lyrics-font",
      "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/iOS_16_Test_3.jpg",
      "publishedAt": "2023-04-26T02:10:50Z",
      "content": "The fresh iOS 17 information comes from a tipster named Setsuna Digital who first accurately reported about the yellow iPhone 14 on China's Weibo earlier this year. On the same social media platform,… [+1699 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Smzdm.com"
      },
      "author": null,
      "title": "Apple 苹果 iPad Pro 2022款 11英寸平板电脑 256GB WLAN版 6268元包邮（满减）",
      "description": "Apple 苹果 iPad Pro 2022款 11英寸平板电脑 256GB WLAN版 6268元,什么值得买甄选出拼多多优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
      "url": "https://www.smzdm.com/p/78484035/",
      "urlToImage": "https://qny.smzdm.com/202304/24/644641a9ab6585654.jpg_d250.jpg",
      "publishedAt": "2023-04-26T01:53:09Z",
      "content": "2021iPad Pro2022Apple M2 8 10M115% 40%50%iPad Pro  3  ProRes 128GB256GB512GB8GB1TB16GB\r\n11 iPad Pro Liquid 600nit120Hz P3 1200ID\r\niPad Pro 202212001000ProRes HDR4\r\niPadOS 16APP\r\n2022 iPad Pro USB 4 4… [+69 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Appps.jp"
      },
      "author": "saki",
      "title": "iOS16で位置情報に基づく機能制限をiPhoneにひそかに追加！米メディアの調査結果",
      "description": "本日iOS16.5ベータ版が開発者へリリースされましたが、AppleがiPhoneのiOS16で位置情報に基づく機能制限をひそかに追加していたことがレポートされ、話題になっています。 AppleがiO…",
      "url": "https://www.appps.jp/376354/",
      "urlToImage": "https://www.appps.jp/wp-content/uploads/2022/07/cw.jpg",
      "publishedAt": "2023-04-26T01:10:17Z",
      "content": "iOS16.5AppleiPhoneiOS16\r\n9to5MaciOS16\r\n9to5MacApplecountrydiOS16.2GPSWi-FiSIM\r\n9to5Mac\r\nApple9to5MaciOS17\r\nAppleApple2024iOS17iPhone\r\ncountrydAppleiPhoneEU\r\n9to5MaccountrydiOS16.2\r\niPhone"
    },
    {
      "source": {
        "id": null,
        "name": "Caradisiac.com"
      },
      "author": "Cédric Pinatel",
      "title": "Nouvelle McLaren 750S (2023) : la dernière sans hybridation ?",
      "description": "Remplaçante de la 720S, la nouvelle McLaren 750S évite l’hybridation contrairement à sa rivale la Ferrari 296 GTB. Mais elle bat l’Italienne au registre des performances.",
      "url": "https://www.caradisiac.com/nouvelle-mclaren-750s-2023-la-derniere-sans-hybridation-202128.htm",
      "urlToImage": "https://images.caradisiac.com/images/2/1/2/8/202128/S1-nouvelle-mclaren-750s-2023-la-derniere-sans-hybridation-754374.jpg",
      "publishedAt": "2023-04-26T00:53:35Z",
      "content": "Dans la catégorie des super-sportives dexception, la McLaren 720S possédait une place spéciale. Arrivée en 2017 et remplaçant une 650S  déjà extrêmement véloce à lépoque, elle sest tout de suite impo… [+3120 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "mobiFlip.de"
      },
      "author": "Oliver Schwuchow",
      "title": "Amazon nennt alle Details zum neuen Apple-Kopfhörer von Beats",
      "description": "Ist es wirklich ein Zufall? Apple ist eigentlich sehr gut, wenn es um Geheimnisse geht, hat die neuen Beats Studios Buds+ aber selbst vor ein paar Tagen in iOS 16.4 versteckt und dann tauchten sie bei der FCC auf.",
      "url": "https://www.mobiflip.de/shortnews/amazon-apple-beats-studio-buds-plus-leak/",
      "urlToImage": "https://www.mobiflip.de/wp-content/uploads/2023/04/beats-studio-buds-plus-transparent.jpg",
      "publishedAt": "2023-04-26T03:50:24Z",
      "content": "Ist es wirklich ein Zufall? Apple ist eigentlich sehr gut, wenn es um Geheimnisse geht, hat die neuen Beats Studios Buds+ aber selbst vor ein paar Tagen in iOS 16.4 versteckt und dann tauchten sie be… [+1623 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "mobiFlip.de"
      },
      "author": "Giovanni Senioroce",
      "title": "Samsung: Immer mehr Smartphones erhalten das April-Sicherheitsupdate",
      "description": "Dass das südkoreanische Unternehmen Samsung großen Wert auf schnelle Software-Aktualisierungen legt, haben wir in der Vergangenheit mehrfach berichtet. Diese Entwicklung ist nicht nur bei den Flaggschiffen aus dem Hause Samsung […]",
      "url": "https://www.mobiflip.de/shortnews/samsung-immer-mehr-smartphones-erhalten-das-april-sicherheitsupdate/",
      "urlToImage": "https://www.mobiflip.de/wp-content/uploads/2023/02/samsung-galaxy-s23-ultra-hand.jpg",
      "publishedAt": "2023-04-26T04:00:26Z",
      "content": "Dass das südkoreanische Unternehmen Samsung großen Wert auf schnelle Software-Aktualisierungen legt, haben wir in der Vergangenheit mehrfach berichtet. Diese Entwicklung ist nicht nur bei den Flaggsc… [+1518 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Reason"
      },
      "author": "Irina Manta",
      "title": "[Irina Manta] \"Strangers on the Internet\" Podcast Episode 29: The Sex Robot in the Closet",
      "description": "International sex robots expert Dr. Kate Devlin tells all",
      "url": "https://reason.com/volokh/2023/04/25/strangers-on-the-internet-podcast-episode-29-the-sex-robot-in-the-closet/",
      "urlToImage": "https://d2eehagpk5cl65.cloudfront.net/img/q60/uploads/2023/04/IMG_2637-225x300.jpeg",
      "publishedAt": "2023-04-26T00:54:15Z",
      "content": "The twenty-ninth episode (Apple Podcasts link here and Spotify link here) of Strangers on the Internet with co-host and psychologist Michelle Lange has us chatting with international sex robots exper… [+747 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ferra.ru"
      },
      "author": "Булат Кармак",
      "title": "Прямо как на Android: Apple скоро разрешит установку приложений на iPhone в обход App Store в России",
      "description": "Минцифры России разработало законопроект, обязывающий производителей смартфонов разрешать установку приложений из сторонних маркетплейсов.",
      "url": "https://www.ferra.ru/news/mobile/pryamo-kak-na-android-apple-skoro-razreshit-ustanovku-prilozhenii-na-iphone-v-obkhod-app-store-v-rossii-25-04-2023.htm",
      "urlToImage": "https://www.ferra.ru/imgs/2023/04/25/18/5884957/54f28ea7c00c85622a168b96c7d986c3c7edfa70.jpeg",
      "publishedAt": "2023-04-26T03:01:00Z",
      "content": ", , Apple iPhone, App Store. , Android- .\r\n . , .\r\n .\r\n , Apple « », .. . , , .\r\n , .\r\n, App Store , iOS 17. , , ."
    },
    {
      "source": {
        "id": null,
        "name": "Ferra.ru"
      },
      "author": "Булат Кармак",
      "title": "Samsung Galaxy S24 будет таким же мощным, как компьютеры на Apple M2",
      "description": "В сети появились ещё одни результаты тестирования грядущего процессора Samsung — Exynos 2400. На этот раз это результаты тест в OpenCL.",
      "url": "https://www.ferra.ru/news/mobile/samsung-galaxy-s24-budet-takim-zhe-moshnym-kak-kompyutery-na-apple-m2-25-04-2023.htm",
      "urlToImage": "https://www.ferra.ru/imgs/2023/04/25/18/5884961/80505d10ce6d948d7a05461c1db6de3b24bf1a8f.webp",
      "publishedAt": "2023-04-26T03:07:00Z",
      "content": ", Samsung Apple M2, Mac .\r\n Exynos 2400. , OpenCL 26 829 1,756 .\r\n, Samung Galaxy S24. , Snapdragon 8 Gen 2 Galaxy S23."
    },
    {
      "source": {
        "id": null,
        "name": "Cointelegraph"
      },
      "author": "Cointelegraph By Brayden Lindrea",
      "title": "Apple's outside payments ban upheld as unlawful in likely win for NFTs and crypto",
      "description": "Apple’s forced use of its own system for in-app purchases was deemed to violate the law by a California appeals court which could be a win for crypto and NFT projects looking to add functionality to their iOS apps.",
      "url": "https://cointelegraph.com/news/apple-s-outside-payments-ban-upheld-as-unlawful-in-likely-win-for-nfts-and-crypto",
      "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-04/816b4a15-6a6a-44a2-b978-994ecc1c6d6c.jpg",
      "publishedAt": "2023-04-26T02:03:25Z",
      "content": "A California court ruled Apple violated state competition laws by barring app developers from using alternative in-app payment methods apart from its own that included a 30% commission.\r\nThe decision… [+3071 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cnblogs.com"
      },
      "author": "小kBlog",
      "title": "C语言跳转浏览器打开指定URL - 小kBlog",
      "description": "#include int main() { // 定义要打开的URL char* url = \"https://rjku.gitee.io/\"; // 调用系统命令以默认浏览器打开URL char command[100]; sprintf(command, \"open %s\"",
      "url": "https://www.cnblogs.com/xkboi/p/17354556.html",
      "urlToImage": null,
      "publishedAt": "2023-04-26T00:33:00Z",
      "content": "#include &lt;stdlib.h&gt;\r\nint main() {\r\n // URL\r\n char* url = \"https://rjku.gitee.io/\";\r\n// URL\r\n char command[100];\r\n sprintf(command, \"open %s\", url);\r\n system(command);\r\nreturn 0;\r\n}\r\nsprintf()UR… [+2655 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Sohee Kim",
      "title": "Chipmaker SK Hynix’s Losses Widen After Tech Slump Deepens",
      "description": "(Bloomberg) -- SK Hynix Inc. posted its second straight quarterly loss after revenue plummeted about 60%, but the company signaled the worst may be over from...",
      "url": "https://finance.yahoo.com/news/chipmaker-sk-hynix-losses-widen-000809927.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Bh52NbT8ES0JIX1VHGkaSg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/dd23baf5d546a3a0ec6276627fd08382",
      "publishedAt": "2023-04-26T00:08:09Z",
      "content": "(Bloomberg) -- SK Hynix Inc. posted its second straight quarterly loss after revenue plummeted about 60%, but the company signaled the worst may be over from the memory-chip industrys deepest downtur… [+4178 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Barks.jp"
      },
      "author": "BARKS",
      "title": "FANCYLABO、デビューシングル「Flash Light」配信開始＆MV・本人コメントも公開",
      "description": "韓国のプロデューサー／DJのNight Tempo、矢川葵、市川美織から成るFANCYLABOが、デビューシングル「Flash Light」を配信開始。同時にMVも公開した。MVには矢川と市川が登場し、青山通りや恵...",
      "url": "https://www.barks.jp/news/?id=1000233157#utm_source=feed_news&utm_medium=feed&utm_campaign=feed",
      "urlToImage": "https://img.barks.jp/img/article/1000233157/H/1200.jpg",
      "publishedAt": "2023-04-26T01:00:00Z",
      "content": "DJNight TempoFANCYLABOFlash LightMVMV80Flash Light\r\nNight Tempo\r\n5414Night TempoNight Tempo()2FANCYLABO\r\nFlash Light426()https://fancylabo.lnk.to/flashlightiTunes Storemora4/26()Apple MusicLINE MUSIC… [+165 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cinematoday.jp"
      },
      "author": "シネマトゥデイ",
      "title": "西島秀俊、ハリウッド大手エージェンシーと契約　トム・クルーズ、ブラピら所属",
      "description": "俳優の西島秀俊が、ハリウッド大手のタレントエージェンシー・CAA（クリエイティブ・アーティスツ・エージェンシー）と契約を結んだと、Varietyが独占で報じた。",
      "url": "https://www.cinematoday.jp/news/N0136530",
      "urlToImage": "https://img.cinematoday.jp/a/swccWFS7hxCx/_size_r1200x630/_v_1682476557/main.jpg",
      "publishedAt": "2023-04-26T02:35:57Z",
      "content": "2023426 1135\r\n4\r\nCAAVariety\r\nCAA\r\nA24 Apple TV+ / Sunny2023 76\r\nADVERTISEMENT"
    },
    {
      "source": {
        "id": null,
        "name": "Sweclockers.com"
      },
      "author": "Anders Lundberg",
      "title": "Iphone dominerar marknaden för renoverade telefoner",
      "description": "Apples globala marknadsandel bland nya mobiler ligger kring 25 procent, men för begagnade, renoverade telefoner är siffran dubbelt så hög.",
      "url": "https://www.sweclockers.com/nyhet/36249-iphone-dominerar-marknaden-for-renoverade-telefoner",
      "urlToImage": "https://www.sweclockers.com/artikel/36249/og-image",
      "publishedAt": "2023-04-26T03:34:00Z",
      "content": "Begagnatpriserna för Iphone har alltid varit betydligt högre än för Android-telefoner, även premiumtillverkare som Samsung. Det gäller såväl privatförsäljning som butiker som säljer renoverade telefo… [+1185 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Levelup.com"
      },
      "author": "Mardokeo Galván",
      "title": "Dueño de Epic reconoce derrota ante Apple y prepara el \"siguiente paso\" de su plan",
      "description": "Epic Games perdió la principal batalla contra Apple que comenzó en 2020 y hace unos días perdió de nueva cuenta, precisamente una apelación al veredicto original. En su momento, el líder de Epic Games no habló al respecto, pero ya reconoció la derrota y dejó …",
      "url": "https://www.levelup.com/noticias/734864/Dueno-de-Epic-reconoce-derrota-ante-Apple-y-prepara-el-siguiente-paso-de-su-plan",
      "urlToImage": "https://cl.buscafs.com/www.levelup.com/public/uploads/images/794304/794304_600x315.jpg",
      "publishedAt": "2023-04-26T02:57:00Z",
      "content": "Epic Games perdió la principal batalla contra Apple que comenzó en 2020 y hace unos días perdió de nueva cuenta, precisamente una apelación al veredicto original. En su momento, el líder de Epic Game… [+2414 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iphone-mania.jp"
      },
      "author": "lunatic",
      "title": "【2023年4月26日最新】iPhone14を安く買うには〜キャリア・Apple比較",
      "description": "新しいiPhoneを購入する！と決めたものの、どこでどのように買うのが一番トクなのか、悩む方も多いのではないでしょうか。\n \n本記事ではApple Store、大手4キャリアにおいてiPhone14を購入する場合、どこで購入したら一番安く買えるのかを調べた結果をまとめてみました。\nAppleで購入\nSIMフリー版を購入するなら一番安く買えるのはAppleオンラインストアまたはApple Storeです。\n \n「ペイディあと払いプランApple専用」を利用すると、新しいiPhone14シリーズの各モデルを、0％金利…",
      "url": "https://iphone-mania.jp/news-534064/",
      "urlToImage": "https://iphone-mania.jp/uploads/2023/04/26/b0793cb0d152892e9d11d2df09279289.png",
      "publishedAt": "2023-04-26T00:28:49Z",
      "content": "iPhoneApple Store4iPhone14Apple\r\nSIMAppleApple StoreAppleiPhone14036AppleiPhone142023426\r\n<table><tr><th></th><th></th><th>36</th></tr><tr><td>iPhone14</td><td>119,800</td><td>3,327/119,772</td></tr>… [+965 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iphone-mania.jp"
      },
      "author": "m7000",
      "title": "Mac App StoreでChatGPTの詐欺アプリが大量に発見される",
      "description": "Mac App Storeにおいて、OpenAIの人工知能（AI）チャットボット「ChatGPT」の詐欺アプリが大量に出回っていることが明らかとなりました。\nChatGPTを模倣した詐欺アプリが複数発見される\nセキュリティ研究者のアレックス・クレバー氏によると、30日間、Mac App Storeを注意深く監視した結果、ユーザーの誤解を招くOpenAIやChatGPTの名前やロゴを模倣した詐欺アプリが複数見つかったということです。また同氏は、一部の開発者がApp Storeに多数の重複するアプリをスパム送信してお…",
      "url": "https://iphone-mania.jp/news-534109/",
      "urlToImage": "https://iphone-mania.jp/uploads/2023/04/26/1f6849f4026eb9278bbd435c0cf359fb-e1682478641923.png",
      "publishedAt": "2023-04-26T03:28:55Z",
      "content": "Mac App StoreOpenAIAIChatGPTChatGPT\r\n30Mac App StoreOpenAIChatGPTApp StoreApp StoreMac App StoreOpenAIChatGPTOpenAIMacOS\r\nParallelWorldPixelsbay299%Katco\r\n ChatGPTChatGPTWebChatGPT Plus202,700ChatGPT… [+248 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNA"
      },
      "author": null,
      "title": "Sony brings Spider-Verse, Denzel Washington, Napoleon to CinemaCon",
      "description": "Sony has 23 theatrical releases set for 2023, including Bad Boys 4 and the Jennifer Lawrence R-rated comedy, No Hard Feelings.",
      "url": "https://cnalifestyle.channelnewsasia.com/entertainment/sony-cinemacon-spider-verse-bad-boys-4-napoleon-355261",
      "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--JOUrDCDp--/c_crop,h_562,w_1000,x_0,y_0/c_fill,g_auto,h_676,w_1200/f_auto,q_auto/v1/one-cms/core/2023_cinemacon_-_sony_pictures_presentation_78167.jpg?itok=WwGWgF1Q",
      "publishedAt": "2023-04-26T01:41:00Z",
      "content": "Sony chairman and CEO Tom Rothman did not hold back on Monday (Apr 24) on the opening night of CinemaCon in Las Vegas, reminding a crowd of theatre owners and exhibitors that Sony is and was the only… [+4230 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Mail"
      },
      "author": "Savanna Young",
      "title": "The Block 2023: Shelley Craft brings her daughter, 10, to the building site",
      "description": "It was Take Your Child to Work Day for The Block co-host Shelley Craft, 46, who brought her daughter to the set of the reality building show on Sunday.",
      "url": "https://www.dailymail.co.uk/tvshowbiz/article-12014181/The-Block-2023-Shelley-Craft-brings-daughter-10-building-site.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/04/26/02/70236771-0-image-a-40_1682473610137.jpg",
      "publishedAt": "2023-04-26T02:53:28Z",
      "content": "With school holidays in full swing, it was 'take your child to work day' on set of Channel Nine renovation show The Block on Sunday.\r\nCo-host Shelley Craft brought her youngest daughter Eadie, 10, to… [+2892 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Electrek"
      },
      "author": "Mikey G",
      "title": "Quick Charge Podcast: April 25, 2023",
      "description": "Listen to a recap of the top stories of the day from Electrek. Quick Charge is available now on Apple Podcasts, Spotify, TuneIn and our RSS feed for Overcast and other podcast players.\n\r\n\n more…\nThe post Quick Charge Podcast: April 25, 2023 appeared first on …",
      "url": "https://electrek.co/2023/04/25/quick-charge-podcast-april-25-2023/",
      "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/01/quick-charge-placeholder-lead-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2023-04-26T01:31:31Z",
      "content": "Listen to a recap of the top stories of the day from Electrek. Quick Charge is available now on Apple Podcasts, Spotify, TuneIn and our RSS feed for Overcast and other podcast players.\r\nNew episodes … [+636 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daemonology.net"
      },
      "author": null,
      "title": "Daily Hacker News for 2023-04-25",
      "description": "The 10 highest-rated articles on\nHacker News\non April 25, 2023 which have not appeared on any previous\nHacker News Daily\nare:\n<ul>\n<li>\nWays to shoot yourself in the foot with Postgres\n(comments)\n</li>\n<li>\nLAION, a high school teacher’s free image database, …",
      "url": "https://www.daemonology.net/hn-daily/2023-04-25.html",
      "urlToImage": null,
      "publishedAt": "2023-04-26T00:00:00Z",
      "content": "The 10 highest-rated articles on\r\nHacker News\r\non April 25, 2023 which have not appeared on any previous\r\nHacker News Daily\r\nare:"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Chris Welch",
      "title": "Amazon just spoiled the next Beats earbuds before Apple could even announce them",
      "description": "A retail listing for the upcoming Beats Studio Buds Plus was accidentally published by Amazon on Tuesday. The earbuds will offer more powerful noise cancellation and a better transparency mode than the original Studio Buds.",
      "url": "https://www.theverge.com/2023/4/25/23698496/beats-studio-buds-plus-features-price-amazon-leak",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/X7tt98ok08fSBQ81XJkoAcrettM=/0x0:2044x1315/1200x628/filters:focal(1022x658:1023x659)/cdn.vox-cdn.com/uploads/chorus_asset/file/24611290/Screenshot_20230425_213316_01.jpeg",
      "publishedAt": "2023-04-26T01:45:19Z",
      "content": "Amazon just spoiled the next Beats earbuds before Apple could even announce them\r\nAmazon just spoiled the next Beats earbuds before Apple could even announce them\r\n / According to the listing, the Be… [+2122 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applelinkage.com"
      },
      "author": "Al",
      "title": "「Apple 深圳万象城」4月28日（金）オープン",
      "description": "Apple Inc.が、中国に新しい直営店「Apple 深圳万象城」を4月28日（金）午前10時にオープンすると発表しています。 中国で55店舗目、広東省で4店舗目となるApple 深圳万象城は、深圳のショッピングモール … 続きを読む 「Apple 深圳万象城」4月28日（金）オープン →",
      "url": "https://www.applelinkage.com/2023/04/26/apple-mixc-shenzhen-opens-friday-april-28/",
      "urlToImage": null,
      "publishedAt": "2023-04-26T03:55:19Z",
      "content": "Beats Studio Buds +Amazon.com"
    },
    {
      "source": {
        "id": null,
        "name": "Applelinkage.com"
      },
      "author": "Al",
      "title": "「iOS 17」ではコントロールセンター、Apple Music、ロック画面などが変更",
      "description": "9to5Macが、「iOS 17」ではコントロールセンターや、Apple Music、ロック画面などに変更が加えられるようだと伝えています。 iPhone 14/Plusの新色イエローの事前情報を投稿したことがあるWei … 続きを読む 「iOS 17」ではコントロールセンター、Apple Music、ロック画面などが変更 →",
      "url": "https://www.applelinkage.com/2023/04/26/ios-17-control-ceenter-apple-music-lock-screen-and-more/",
      "urlToImage": null,
      "publishedAt": "2023-04-26T00:01:17Z",
      "content": "9to5MaciOS 17Apple Music\r\niPhone 14/PlusWeiboiOS 17UIAppApple MusicApple MusicUI//\r\nBloombergiOS 17iOS 16"
    },
    {
      "source": {
        "id": null,
        "name": "Applelinkage.com"
      },
      "author": "Al",
      "title": "「macOS 13.4」「iOS 16.5」「iPadOS 16.5」「watchOS 9.5」「tvOS 16.5」のベータ3公開",
      "description": "Apple Inc.が、「macOS 13.4 beta 3」（ビルド22F5049e）、「iOS 16.5 beta 3」（ビルド20F5050f）、「iPadOS 16.5 beta 3」（ビルド20F5050f）、 … 続きを読む 「macOS 13.4」「iOS 16.5」「iPadOS 16.5」「watchOS 9.5」「tvOS 16.5」のベータ3公開 →",
      "url": "https://www.applelinkage.com/2023/04/26/macos-13-4-ios-16-5-ipados-16-5-watchos-9-5-tvos-16-5-beta-3/",
      "urlToImage": null,
      "publishedAt": "2023-04-26T00:16:32Z",
      "content": "macOS 13.4iOS 16.5iPadOS 16.5watchOS 9.5tvOS 16.53"
    },
    {
      "source": {
        "id": null,
        "name": "Linux Adictos"
      },
      "author": "Darkcrizt",
      "title": "Opera One, el nuevo navegador de Opera ya fue liberado para pruebas",
      "description": "Opera dio a conocer el inicio de la fase de pruebas de su nuevo navegador web \"Opera One\", el cual posiciona como un navegador web moderno...",
      "url": "https://www.linuxadictos.com/opera-one-el-nuevo-navegador-de-opera-ya-fue-liberado-para-pruebas.html",
      "urlToImage": "https://www.linuxadictos.com/wp-content/uploads/Opera-One.jpg",
      "publishedAt": "2023-04-26T02:01:40Z",
      "content": "Opera One, es la nueva apuesta de Opera de un navegador web moderno\r\nOpera no deja de poner el dedo sobre la mesa en relación a la competencia de los navegadores web, aunque está más que claro que es… [+4007 chars]"
    },
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "Adam Holmes",
      "title": "Hobart AFL stadium set to be built, but opponents complain about 'rushed' planning",
      "description": "A funding announcement for Hobart's controversial stadium proposal is imminent, meaning Tasmania will get its long-awaited AFL team. But opponents are concerned planning for the redevelopment has been \"hasty\" and \"ill-considered\".",
      "url": "https://www.abc.net.au/news/2023-04-26/tas-afl-stadium-macquarie-point-set-to-get-approval/102266338",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/9b66b3be6bb2453387a7423ec77715fe?impolicy=wcms_crop_resize&cropH=2288&cropW=4068&xPos=346&yPos=124&width=862&height=485",
      "publishedAt": "2023-04-26T02:33:20Z",
      "content": "Prime Minister Anthony Albanese is set to announce the final $240 million needed for a stadium at Hobart's Macquarie Point, paving the way for the state to receive its own AFL licence.\r\nKey points:\r\n… [+7122 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yugatech.com"
      },
      "author": "Luis Miguel Millares",
      "title": "DJI Mavic 3 Pro now official",
      "description": "DJI has just announced its all-new DJI Mavic 3 Pro and DJI Mavic 3 Pro Cine drones today. Both the new Pro and Pro...\nThe post DJI Mavic 3 Pro now official appeared first on YugaTech | Philippines Tech News & Reviews.",
      "url": "https://www.yugatech.com/news/dji-mavic-3-pro-now-official/",
      "urlToImage": "https://www.yugatech.com/wp-content/uploads/2023/04/Mavic-3-Pro.png",
      "publishedAt": "2023-04-26T02:09:03Z",
      "content": "DJI has just announced its all-new DJI Mavic 3 Pro and DJI Mavic 3 Pro Cine drones today.\r\nBoth the new Pro and Pro Cine will have a 24mm 4/3 CMOS Hasselblad 20MP camera with adjustable apertures of … [+1135 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ithome.com"
      },
      "author": null,
      "title": "苹果更新 Win11 端 Apple Music 等 3 款预览版应用：支持多媒体按键、歌词显示",
      "description": "IT之家 4 月 26 日消息，苹果公司近日面向 Win11 用户，通过 Microsoft Store 平台更新了 Apple Music、Apple TV 和 Apple Devices 三款预览版应用，进一步淘汰 iTunes 应用。苹果并未在 Microsoft Store 应用页面提供更新日志，不过根据IT之家投稿，以及国外科技媒体 MacRumors 报道，Apple Music 新预览版原生支持多媒体按键，允许用户使用键盘上的播放 / 暂停等多媒体按键进行控制。Apple Music 新预览版另一项…",
      "url": "https://www.ithome.com/0/689/026.htm",
      "urlToImage": null,
      "publishedAt": "2023-04-26T01:28:08Z",
      "content": "IT 4 26 Win11 Microsoft Store Apple MusicApple TV Apple Devices iTunes \r\nMicrosoft Store IT MacRumors Apple Music / \r\nApple Music Bug Windows gsmtc OK \r\nApple Music \r\n Microsoft Store Apple MusicAppl… [+16 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ithome.com"
      },
      "author": null,
      "title": "报道称苹果未来几年 60% 的屏幕供应仍来自于三星和 LG 等韩企",
      "description": "IT之家 4 月 26 日消息，根据韩媒 The Korea Herald 报道，苹果虽然希望加大对产品设计的控制权，推进各种组件的自主研发，但在可预见的未来，依然会倚重韩国供应商，研发和量产设备屏幕。韩国信息通信技术振兴院（IITP）表示，苹果公司正在 iPhone 机型上测试和使用自主设计的芯片和屏幕，但这主要从战略层面出发，维持其市场主导地位。IITP 表示，在未来几年内，苹果 60% 的屏幕组件会从 Samsung Display 和 LG Display 等韩国屏幕供应商处采购。IITP 认为，苹果可能…",
      "url": "https://www.ithome.com/0/689/015.htm",
      "urlToImage": null,
      "publishedAt": "2023-04-26T00:22:47Z",
      "content": "IT 4 26 The Korea Herald \r\nIITP iPhone\r\nIITP 60% Samsung Display LG Display \r\nIITP microLED 2025 \r\nIT DSCC Ross Young Apple Watch microLED LG \r\nYoung LG Display microLED 2025 Apple Watch microLED \r\nY… [+40 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Arigato-ipod.com"
      },
      "author": "Ygn",
      "title": "【ニュース】Apple TV+でドラマ「テッド・ラッソ：破天荒コーチがゆく」シーズン3・第7話と、「ビッグ・ドア・プライズ〜人生の可能性、教えます」「シュミガドーン！」最新エピソードの配信開始",
      "description": "Apple TV+で、Apple Originals 3作品の最新エピソードが配信開始されています。 テッド・ラッソ：破天荒コーチがゆく シーズン3・エピソード7『僕らをつなぐもの』57分 次回（5月3日配信）：シーズン...\nThe post 【ニュース】Apple TV+でドラマ「テッド・ラッソ：破天荒コーチがゆく」シーズン3・第7話と、「ビッグ・ドア・プライズ〜人生の可能性、教えます」「シュミガドーン！」最新エピソードの配信開始 first appeared on アイアリ.",
      "url": "https://arigato-ipod.com/2023/04/apple-tv-plus-new-episode-230426.html",
      "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2023/04/230426appletvplusnewep.jpg",
      "publishedAt": "2023-04-26T01:04:15Z",
      "content": "Apple TV+で、Apple Originals 3作品の最新エピソードが配信開始されています。\nテッド・ラッソ：破天荒コーチがゆく\n\nシーズン3・エピソード7『僕らをつなぐもの』57分\n次回（5月3日配信）：シーズン3・エピソード8『それぞれのパリ』\nビッグ・ドア・プライズ〜人生の可能性、教えます\n\nエピソード7『ジョルジオ』32分\n次回（5月3日配信）：エピソード8『イジー』30分\nシュ… [+389 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Arigato-ipod.com"
      },
      "author": "Ygn",
      "title": "【ニュース】Apple Musicで落合健太郎「J-Pop Now Radio」第116回の配信開始。ちゃんみなが2度目のゲスト出演",
      "description": "Apple Musicでラジオ番組「J-Pop Now Radio with Kentaro Ochiai」のエピソード116が配信開始されています。 落合健太郎がホストを務める、J-Popを紹介するプログラムです。 6...\nThe post 【ニュース】Apple Musicで落合健太郎「J-Pop Now Radio」第116回の配信開始。ちゃんみなが2度目のゲスト出演 first appeared on アイアリ.",
      "url": "https://arigato-ipod.com/2023/04/apple-music-j-pop-now-radio-ep116.html",
      "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2023/04/230426jpopnowradio.jpg",
      "publishedAt": "2023-04-26T00:25:03Z",
      "content": "Apple Musicでラジオ番組「J-Pop Now Radio with Kentaro Ochiai」のエピソード116が配信開始されています。\n落合健太郎がホストを務める、J-Popを紹介するプログラムです。\n\n\n60分のオンデマンド番組です。\nエピソード116では、ちゃんみながゲスト出演しています。\n本日4月26日リリースのニューアルバム「Naked」についてインタビューされています。… [+502 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Arigato-ipod.com"
      },
      "author": "Ygn",
      "title": "【ニュース】Apple TVアプリでディズニー／ピクサー映画の期間限定セール。「バズ・ライトイヤー」など23作品が購入1,324円、レンタル204円",
      "description": "Apple TVアプリで「ディズニー／ピクサー：期間限定価格」セールが開催されています。 対象の映画作品が、購入が1,324円、レンタルが204円になっています。 「トイ・ストーリー」4部作や、「バズ・ライトイヤー」「私...\nThe post 【ニュース】Apple TVアプリでディズニー／ピクサー映画の期間限定セール。「バズ・ライトイヤー」など23作品が購入1,324円、レンタル204円 first appeared on アイアリ.",
      "url": "https://arigato-ipod.com/2023/04/apple-tv-app-disney-pixar-movie-sale-apr-2023.html",
      "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2023/04/230426disneypixarmoviesale.jpg",
      "publishedAt": "2023-04-26T03:01:10Z",
      "content": "Apple TVアプリで「ディズニー／ピクサー：期間限定価格」セールが開催されています。\n対象の映画作品が、購入が1,324円、レンタルが204円になっています。\n\n「トイ・ストーリー」4部作や、「バズ・ライトイヤー」「私ときどきレッサーパンダ」「ミラベルと魔法だらけの家」「ジャングル・クルーズ」など、以下の23作品が対象です。\n\n特集ページ：ディズニー／ピクサー：期間限定価格｜Apple TV… [+241 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Prtimes.jp"
      },
      "author": null,
      "title": "初心者向け｜iPod touchをバックアップする方法【2023年最新】",
      "description": "[iMobie Inc.]\niPodには音楽や写真、動画などの大切なデータがたくさん入っています。しかし、iPodは故障したり紛失したりする可能性があります。そうなったら、データを失ってしまうかもしれません。そこで、iPodのデータをパ...",
      "url": "https://prtimes.jp/main/html/rd/p/000000237.000011895.html",
      "urlToImage": "https://prtimes.jp/i/11895/237/ogp/d11895-237-4280409d9c32ad43d50d-2.png",
      "publishedAt": "2023-04-26T03:40:02Z",
      "content": "iPodiPodiPod\r\nAppleiTunesiPod\r\niTunesiPodUSBiTunesiPod\r\n1. \r\n2. iPhone\r\n3. \r\n4. iTunes\r\niTunes\r\niCloudiPod touchiPhoneiCloudiPod touchiPod touch\r\niPod touchiCloud\r\n1. iPod touchWi-Fi\r\n2. iPod touch\r\n… [+504 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Prtimes.jp"
      },
      "author": null,
      "title": "新たなインスピレーションを生み出す三眼カメラドローン「DJI MAVIC 3 PRO」と Mavic 3シリーズに対応した「DJI GOGGLES 2」の先行予約開始",
      "description": "[株式会社セキド]\n[画像1: https://prtimes.jp/i/16343/553/resize/d16343-553-c821544a32d08d3d4c28-0.jpg ]\n\n\n\n\nDJI Mavic 3 Pro - その瞳に、新たなインスピレーションを\n\nDJI Mavic 3シリーズに、イメージング性能をさらに進化...",
      "url": "https://prtimes.jp/main/html/rd/p/000000553.000016343.html",
      "urlToImage": "https://prtimes.jp/i/16343/553/ogp/d16343-553-c821544a32d08d3d4c28-0.jpg",
      "publishedAt": "2023-04-26T00:40:02Z",
      "content": "DJI Mavic 3 Mavic 3 Pro Mavic 3 Pro 33\r\nHasselblad2\r\nDJI Mavic 3 Prohttps://sekido-rc.com/?mode=grp&amp;gid=28533843\r\n133\r\n<table><tr><td>4/3CMOS Hasselblad</td><td>24 mm35 mmf/2.8f/1120 MP</td></tr>… [+1759 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iTnews"
      },
      "author": null,
      "title": "Xerox farewells famous PARC",
      "description": "Research centre donated to SRI International.",
      "url": "https://www.itnews.com.au/news/xerox-farewells-famous-parc-593672",
      "urlToImage": "https://i.nextmedia.com.au/News/Xerox_ALTO.jpg",
      "publishedAt": "2023-04-26T01:52:00Z",
      "content": "One of the most famous locations in technology, the Xerox Palo Alto Research Center (PARC), is to be handed to research institution SRI International.\r\nXerox PARC is famous for its foundational contr… [+1362 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iTnews"
      },
      "author": null,
      "title": "Britain to take on 'Big Tech' with new legal powers",
      "description": "Wants more competitive digital markets.",
      "url": "https://www.itnews.com.au/news/britain-to-take-on-big-tech-with-new-legal-powers-593667?utm_source=feed&utm_medium=rss&utm_campaign=iTnews+",
      "urlToImage": "https://i.nextmedia.com.au/News/tech_giants.jpg",
      "publishedAt": "2023-04-26T01:40:00Z",
      "content": "Britain said on Tuesday it would introduce a new law to rein in the power that big tech companies such as Google, Facebook and Amazon are able to wield to stifle competition in digital markets.\r\nThe … [+1567 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cdkitchen.com"
      },
      "author": null,
      "title": "Amaretto By Morning",
      "description": "This new twist on brunch cocktails will have you nixing the mimosas and screwdrivers.  The combination of peach, almond, and apple flavors is unique and refreshing.",
      "url": "https://www.cdkitchen.com/recipes/recs/218/amaretto-by-morning154879.shtml",
      "urlToImage": "https://cdn.cdkitchen.com/recipes/images/2016/06/125753-6480-mx.jpg",
      "publishedAt": "2023-04-26T04:08:03Z",
      "content": "About CDKitchenOnline since 1995, CDKitchen has grown into a large collection of delicious recipes created by home cooks and professional chefs from around the world. We are all about tasty treats, g… [+138 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SiliconANGLE News"
      },
      "author": "James Farrell",
      "title": "UK bill aims to tackle Big Tech’s dominance in digital markets",
      "description": "The U.K. announced today that its Digital Markets, Competition and Consumers Bill, is going to crack down on the dominance of some of the world’s leading tech companies. Despite mammoth efforts by Big Tech to stop the bill from going through, it seems right n…",
      "url": "https://siliconangle.com/2023/04/25/uk-bill-aims-tackle-big-techs-dominance-digital-markets/",
      "urlToImage": "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/04/nordwood-themes-q8U1YgBaRQk-unsplash.jpg",
      "publishedAt": "2023-04-26T01:29:31Z",
      "content": "The U.K. announced today that its Digital Markets, Competition and Consumers Bill will crack down on the dominance of some of the worlds leading tech companies.\r\nDespite mammoth efforts by big tech t… [+3112 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Luxuo.com"
      },
      "author": "Joseph Low",
      "title": "Top 10 Wealthiest Cities in the World 2023",
      "description": "The Big Apple, New York City takes home the top spot with the most number of millionaires at 340,000 in total.\nThe post Top 10 Wealthiest Cities in the World 2023 appeared first on LUXUO.",
      "url": "https://www.luxuo.com/business/top-10-wealthiest-cities-in-the-world-2023.html",
      "urlToImage": "https://www.luxuo.com/wp-content/uploads/2023/04/New-York-City@660x550.jpg",
      "publishedAt": "2023-04-26T01:00:00Z",
      "content": "The Big Apple, New York City takes home the top spot with the most number of millionaires at 340,000 in total.\r\nIn the fresh round of which city boasts the highest number of millionaires, New York Ci… [+2565 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Letemsvetemapplem.eu"
      },
      "author": "Jiří Filip",
      "title": "Zájem o AirTagy prudce roste. Důvod vás nepřekvapí",
      "description": "Je tomu skoro až k nevíře, ale od představení lokalizátoru AirTag uplynuly před pár dny již dva roky. Pokud si však myslíte, že kvůli jeho „stáří“ zájem o něj klesá, jste na omylu. Pravdou totiž je, že se jeho prodeje ve světě naopak začínají zvyšovat, přičem…",
      "url": "https://www.letemsvetemapplem.eu/2023/04/26/zajem-o-airtagy-prudce-roste-duvod-vas-neprekvapi/",
      "urlToImage": "https://www.letemsvetemapplem.eu/wp-content/uploads/2021/04/AirTag-FB.jpg",
      "publishedAt": "2023-04-26T04:00:55Z",
      "content": "Je tomu skoro a k nevíe, ale od pedstavení lokalizátoru AirTag uplynuly ped pár dny ji dva roky. Pokud si vak myslíte, e kvli jeho stáí zájem o nj klesá, jste na omylu. Pravdou toti je, e se jeho pro… [+938 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Softantenna.com"
      },
      "author": "softantenna",
      "title": "Apple、iOS 16.5、iPadOS 16.5、tvOS 16.5、watchOS 9.5、macOS Ventura 13.4の各beta 3を開発者向けに公開",
      "description": "Appleは本日、iOS 16.5、iPadOS 16.5、tvOS 16.5、watchOS 9.5、macOS Ventura 13.4の各beta 3を開発者向けに公開しました(MacRumors)。 Apple Developer",
      "url": "https://softantenna.com/blog/ios-16-5-beta-3/",
      "urlToImage": "https://softantenna.com/blog/wp-content/uploads/2023/04/s_20220607_111705-1.jpg",
      "publishedAt": "2023-04-26T00:47:55Z",
      "content": "AppleiOS 16.5iPadOS 16.5tvOS 16.5watchOS 9.5macOS Ventura 13.4beta 3(MacRumors)\r\nApple Developer ProgramApple Developer Center\r\n:\r\n<table><tr><th></th><th></th><th></th></tr><tr><td>iOS 16.5 beta 3</… [+400 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Famitsu.com"
      },
      "author": "famitsu_app",
      "title": "【プロセカ】ワンダーランズ×ショウタイム4th Single“ショウタイム・ルーラー/にっこり^^調査隊のテーマ”各種音楽配信サービスにて配信スタート！",
      "description": "ワンダーランズ×ショウタイムの4th Single発売！各種音楽配信サービスでの配信も開始に。",
      "url": "https://app.famitsu.com/20230426_2077331/",
      "urlToImage": "https://app.famitsu.com/wp-content/uploads/2023/04/54fffc1e1bb87f576d561b96adb7a895-143-506x254.jpg",
      "publishedAt": "2023-04-26T03:57:40Z",
      "content": "! feat.×4th Single/^^\r\niOS/Android&amp; ! feat.()2023426()×4th Single/^^\r\nKARENT×4th Single!\r\nKARENT:https://karent.jp/special/pjsekai\r\n&lt;&gt;2023426()\r\n&lt;&gt;:/^^:×:1.2.^^ver.\r\n&lt;&gt;iTunesAma… [+334 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Uol.com.br"
      },
      "author": "Beatriz Gomes;",
      "title": null,
      "description": "Um homem de 48 anos foi flagrado causando uma confusão em uma loja licenciada da Apple após não conseguir trocar um celular.O que aconteceu:O caso ocorreu na loja iPlace do Shopping Center Norte, na zona norte da capital paulista, na tarde do último sábad",
      "url": "https://noticias.uol.com.br/cotidiano/ultimas-noticias/2023/04/25/cliente-loja-apple.htm",
      "urlToImage": "https://conteudo.imguol.com.br/c/noticias/d5/2023/04/25/a-confusao-ocorreu-na-loja-iplace-do-shopping-center-norte-na-zona-norte-da-capital-paulista-1682471665007_v2_615x300.png",
      "publishedAt": "2023-04-26T01:50:43Z",
      "content": "Um homem de 48 anos foi flagrado causando uma confusão em uma loja licenciada da Apple após não conseguir trocar um celular.\r\nO que aconteceu:\r\nO caso ocorreu na loja iPlace do Shopping Center Norte,… [+1737 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Kbench.com"
      },
      "author": "sungod1994",
      "title": "드롭박스, 화면에 피드백 남기는 드롭박스 리플레이 서비스 출시",
      "description": "드롭박스(Dropbox)가 동영상, 이미지, 오디오 파일의 검토와 승인 작업에 소모되는 시간을 줄일 수 있는 협업툴 드롭박스 리플레이(Replay) 서비스를 글로벌 시장에 26일(PT 기준 25일 오전 6시) 출시한다고 밝혔다. 드롭박스 리플레이 사용 시, 동영상 프로젝트 작업 시간 중 많은 부분을 차지하는 피드백 과정을 짧고 직관적이게 만들 수 있다. 주요 기능인 라이브 검토는 공동 작업자가 서로 다른 공간에서 동시에 영상을 보며 해당 프레임에 마크업 또는 …",
      "url": "https://kbench.com/?q=node/243148",
      "urlToImage": "https://images.kbench.com/kbench/article/thumbnail/243148_thumb.jpg",
      "publishedAt": "2023-04-26T01:05:29Z",
      "content": "(Dropbox) , , (Replay) 26(PT 25 6) .\r\n \r\n, (Adobe Premiere Pro), (Blackmagic Design DaVinci Resolve), (LumaFusion), (WeVideo) , (Apple Final Cut Pro) ."
    },
    {
      "source": {
        "id": null,
        "name": "Lavozdegalicia.es"
      },
      "author": "César Rodríguez",
      "title": "¿Es verdad que los jóvenes ya no buscan en Google?",
      "description": "Más allá de los mitos sobre TikTok como referencia informativa, la inteligencia artificial fomenta una revolución en las búsquedas, cada vez más visuales. ¿Quién va por delante?",
      "url": "https://www.lavozdegalicia.es/noticia/reto-digital/2023/04/24/verdad-jovenes-buscan-google/00031682343175077520555.htm",
      "urlToImage": "https://www.lavozdegalicia.es/default/2023/04/24/00121682343062809670645/Foto/reu_20230326_144416777.jpg",
      "publishedAt": "2023-04-26T03:00:00Z",
      "content": "Google es sinnimo de bsqueda de informacin en internet. La compaa californiana ejerce un dominio abrumador en este mbito desde que cay la burbuja de las puntocom. Hace una eternidad. Cuando cambi el … [+7173 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Minatokobe.com"
      },
      "author": "酔いどれ",
      "title": "より長いバッテリー寿命、改良されたANC、そして新しい透明なデザインでBeats Studio Buds+が5月に発売開始",
      "description": "先月、9to5MacはiOS 16.4ベータアップデートで未発売の「Beats Studio Buds+」ヘッドフォンの画像を発見しました 最初の世代のBeats Studio Budsは2021年6月にリリースされ、これらは第二世代の後続機となるものでしょう そして、Beats Studio Buds+のリストがAmazonに掲載され、特徴や新しい透明なカラーなど、さらに詳細が明らかになりました Beats Studio Buds+は、ステムのないデザインと小さなプラスチックのケースを持つ既存のBeats St…",
      "url": "https://minatokobe.com/wp/apple/post-89279.html",
      "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/04/2023-04-26_11-46-25.jpg",
      "publishedAt": "2023-04-26T02:51:02Z",
      "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Minatokobe.com"
      },
      "author": "酔いどれ",
      "title": "プライバシーをもっと守りたい方必見! OpenAIがChatGPTユーザー向けに「履歴オフ」オプションを追加",
      "description": "ChatGPTのユーザーは、少しプライバシーが増したことを知って喜ぶかもしれません そして、OpenAIはチャットボットの履歴を「オフにする」オプションを追加したことを発表しました 履歴をオフにすると、会話は保存されず、以前のチャットはサイドバーに表示されなくなり、OpenAIはあなたの会話をさらにチャットボットのトレーニングに使用しません、これにより、Google Bardが現在どのように機能しているかに少し近づけられました ただし、ChatGPTのユーザーは履歴を再びオンにすることができますが、Bardのユー…",
      "url": "https://minatokobe.com/wp/ai/post-89269.html",
      "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/04/ChatGPT.jpg",
      "publishedAt": "2023-04-26T00:59:06Z",
      "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Minatokobe.com"
      },
      "author": "酔いどれ",
      "title": "TSMCの最新3nmチップ技術が、Appleの生産に問題を引き起こしているのか？",
      "description": "EE Timesによると、AppleのサプライヤーであるTSMCが、Appleの新しいデバイスの需要に対応するために、最新の3ナノメートルチップを生産することに苦労しているとのことです アナリストたちは、TSMCが新しいチップ技術の量産に影響を与えるツールと収量の問題を抱えていると考えています TSMCは、iPhone 15 Proモデルに使われると予想される3nm A17チップの製造に取り組んでおり、またMacシリーズの「M3」チップも3nmプロセスで構築されると予想されています Arete Researchの…",
      "url": "https://minatokobe.com/wp/apple/post-89261.html",
      "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/04/Apple-Silicon-M3.jpg",
      "publishedAt": "2023-04-26T00:03:33Z",
      "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Minatokobe.com"
      },
      "author": "酔いどれ",
      "title": "プライバシーが危険にさらされている！ Microsoft最新版のEdgeがあなたのブラウジングデータをBingに送信、自分を守る方法とは",
      "description": "Microsoftは長年にわたって疑問視されてきたユーザー追跡タクティクスについて批判を浴びていますが、それでも同社は引き続き多くのデータを収集し続けています 最新版のMicrosoft Edgeには、ユーザーが訪問するほぼすべてのサイトのフルURLをbingapis.comにリクエストする機能があることが最近Redditで指摘されました 「このURLに関する言及を検索しても、ほとんど結果が得られず、この機能に関する文書もありません、私が最初にこれを発見した人ではないはずですよね！」とhackermchackfa…",
      "url": "https://minatokobe.com/wp/it-information/post-89265.html",
      "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/04/2023-04-26_09-16-52.jpg",
      "publishedAt": "2023-04-26T00:33:28Z",
      "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Minatokobe.com"
      },
      "author": "酔いどれ",
      "title": "AIハッカーの脅威：AIによるパスワードクラックは非常に速い！どうやって身を守るか",
      "description": "新しい研究によると、AIがあなたのパスワードを破るのはどれくらい速いかというと、それは非常に速いということです AIがオンラインセキュリティに重大な影響を与える 現在のWeb上では、パスワードは常に最高のセキュリティ対策ではありません パスワードは作成や管理が困難であり、簡単に侵害される傾向があります、これは、ほとんどのパスワードが予測可能なパターンに従っており、またハッカーが解読することを学んだ一般的な単語の組み合わせを使用するためです Tech.coは、パスワード管理会社NordPasが、平均的な人がすべての…",
      "url": "https://minatokobe.com/wp/it-information/post-89275.html",
      "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2023/04/2023-04-26_11-13-48.jpg",
      "publishedAt": "2023-04-26T02:27:14Z",
      "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 14 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hollywood Life"
      },
      "author": "Sara Whitman",
      "title": "Kylie Jenner Stuns In Strapless Leotard Amid Rumored Timothee Chalamet Romance: Photos",
      "description": "Kylie Jenner shared some sultry snaps of herself in bed while promoting her newest Kylie Cosmetics lipstick shade. See the gorgeous pics here.",
      "url": "https://hollywoodlife.com/2023/04/25/kylie-jenner-sexy-photos-rumored-timothee-chalamet-romance/",
      "urlToImage": "https://hollywoodlife.com/wp-content/uploads/2023/04/Kylie-Jenner-Strapless-Black-Leotard-SS-ftr1.jpg",
      "publishedAt": "2023-04-26T00:22:46Z",
      "content": "View galleryImage Credit: David Fisher/Shutterstock\r\nKylie Jenner is drop-dead gorgeous in new a series of sexy pinup-inspired snapshots she shared to Instagram on April 25. As seen below, the 25-yea… [+2717 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "TechNode"
      },
      "author": "Steven Lee",
      "title": "苹果据报正在开发一款付费 AI 健康教练应用",
      "description": "据彭博社报道，苹果正在开发一款付费的人工智能健康教练，它可以帮助你改善锻炼、睡眠和饮食习惯。据称，这项代号为“Quartz”的服务将“使用 Apple Watch 中的人工智能和数据来提出建议并创建针对特定用户量身定制的辅导计划”。不过据说 Quartz 不会在今年发布，而是明年。",
      "url": "https://cn.technode.com/post/2023-04-26/apple-paid-ai-health-coach-health-app/",
      "urlToImage": "https://cn.technode.com/wp-content/blogs.dir/18/files/2023/04/apple_cover-1024x576-1.jpg",
      "publishedAt": "2023-04-26T01:47:01Z",
      "content": "Quartz Apple Watch Quartz \r\n iPadOS 17 iPad"
    },
    {
      "source": {
        "id": null,
        "name": "Hip-Hop Wired"
      },
      "author": "O Mazariego",
      "title": "Lloyd Banks “Invisible,” Bebe Rexha & Snoop Dogg “Satellite” & More | Daily Visuals 4.25.23",
      "description": "Check out the rest of today’s drops including work from Jackson Wang and Ciara, Kali Uchis, and more.\nThe post Lloyd Banks “Invisible,” Bebe Rexha & Snoop Dogg “Satellite” & More | Daily Visuals 4.25.23 appeared first on The Latest Hip-Hop News, Music and Med…",
      "url": "http://hiphopwired.com/1396827/lloyd-banks-invisible-bebe-rexha-snoop-dogg-satellite-more-daily-visuals-4-25-23/",
      "urlToImage": "https://hiphopwired.com/wp-content/uploads/sites/43/2023/04/16824672291651.jpg?quality=85&strip=all&w=560&crop=0,0,100,320px",
      "publishedAt": "2023-04-26T00:01:16Z",
      "content": "HipHopWired Featured Video\r\nSource: Johnny Nunez / Getty\r\nWith his next album, The Couse of The Inevitable 3 set to release sometime within the next few weeks, Lloyd Banks is going to be releasing so… [+900 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "ET Now",
      "title": "Why Sanjeev Prasad doesn’t expect manufacturing to be a big theme in the current market",
      "description": "Kotak Institutional Equities' Sanjeev Prasad believes there are currently few viable manufacturing plays, and little chance of interesting manufacturing companies getting listed in future. Prasad expects recovery in demand for consumer discretionary items in …",
      "url": "https://economictimes.indiatimes.com/markets/expert-view/why-sanjeev-prasad-doesnt-expect-manufacturing-to-be-a-big-theme-in-the-current-market/articleshow/99775221.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-99775349,width-1070,height-580,imgsize-17542,overlay-etmarkets/photo.jpg",
      "publishedAt": "2023-04-26T03:28:06Z",
      "content": "Sanjeev Prasad, MD &amp; Co- Head, Kotak Institutional Equities, says at this point of time, there are not many manufacturing plays which can play directly and even going forward, he does not see int… [+8005 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Pixnet.net"
      },
      "author": "王大師 (accrcw75)",
      "title": "用健保卡短期可領六千、長期可領牢飯；後者好處是免費",
      "description": "以下是集結幾個Dr. P、David BB等的健保卡QA，我做了簡單總結，供大家參考（註：內容純屬臆測，如有雷同，趕快禱告）     Dr. P  Q: 管電腦資料庫的人說，後台什麼都可以看，資料反正",
      "url": "https://accrcw75.pixnet.net/blog/post/70563315",
      "urlToImage": "https://thumbs.dreamstime.com/b/man-mask-qr-code-his-forehead-against-background-cloudy-sky-concept-topic-digital-prison-due-to-coronavirus-237092662.jpg",
      "publishedAt": "2023-04-26T02:43:56Z",
      "content": "Dr. PDavid BBQA\r\nDr. P \r\nQ: 6000ATM\r\nA: log60006000(clone)/Apple ID\r\nDavid BB \r\nQATM6000\r\nA\r\nPCR\r\n(\r\nATM6000IP\r\n509CBDC\r\nCBDC\r\nATMDNACBDC\r\nsocial score\r\n5G\r\nWO2020060606DSDS6000\r\n : https://p.ecpay.c… [+37 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Uxdesign.cc"
      },
      "author": "Filipe Nzongo",
      "title": "How can humans and intelligent computers work together?",
      "description": "In 1960, Joseph Carl Robnett Licklider, also known as Lick, published a groundbreaking paper titled “Man-Computer Symbiosis” in which he predicted that humans and computers would form a symbiotic…",
      "url": "https://uxdesign.cc/how-can-humans-and-intelligent-computers-work-together-d349328ce270",
      "urlToImage": "https://miro.medium.com/v2/resize:fit:1200/1*HZtDD47ScXe2uieIWmdySA.png",
      "publishedAt": "2023-04-26T04:14:31Z",
      "content": "Towards a Harmonious Partnership. Source: www.pymnts.com\r\nFirst, let me clarify that I understand the privileges that men have had and continue to have in the technology industry. The word Man was co… [+25818 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Drive.com.au"
      },
      "author": "Alex Misoyannis",
      "title": "2023 Nissan X-Trail ST-L e-Power hybrid joins the local line-up",
      "description": "The new Nissan X-Trail hybrid family SUV range has expanded with a model starting from less than $50,000 before on-road costs – but it is still $3000 to $6000 dearer than the petrol-only version.",
      "url": "https://www.drive.com.au/news/2023-nissan-x-trail-st-l-e-power-price/",
      "urlToImage": "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:good,w_1200/cms/uploads/agjyjri1v8iqvskpkadr",
      "publishedAt": "2023-04-26T03:53:06Z",
      "content": "Compared to the X-Trail Ti e-Power, the ST-L e-Power misses out on adaptive LED headlights, a 12.3-inch touchscreen with wireless Apple CarPlay, wired Android Auto and satellite navigation, 12.3-inch… [+216 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "businessinsider.com",
      "title": "Apple may want to use AI to change your diet, sleep routine, and mood, Bloomberg reports",
      "description": "Apple watches are displayed at an Apple store in Shanghai, China February 21, 2023. CFOTO/Future Publishing via Getty Images Apple is developing an AI-powered health coach under the codename Quartz, Bloomberg reported. It will use Apple Watch data to monitor …",
      "url": "https://biztoc.com/x/2844a4485904734b",
      "urlToImage": "https://c.biztoc.com/p/2844a4485904734b/og.webp",
      "publishedAt": "2023-04-26T03:56:05Z",
      "content": "Apple watches are displayed at an Apple store in Shanghai, China February 21, 2023.CFOTO/Future Publishing via Getty ImagesApple is developing an AI-powered health coach under the codename Quartz, Bl… [+291 chars]"
    }
  ];

constructor(){
    super();
    console.log("constructor");
    this.state={
        articles:this.articles,
        loading:false

    }
}

  render() {
    return (
      <>
            <div className="container">
              <h1 className='text-primary'>Top Headlines</h1>
              <div className="row">
              {this.state.articles.map((article)=>{
                return <div className="col">
                        <NewsItem key={article.url} title={article.title} description={article.description} imageUrl={article.urlToImage}/>
                    </div>
              })}
                  
              </div>
    </div> 
      </>
    )
  }
}
