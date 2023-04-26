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
                return <div className="col" key={article.url}>
                        <NewsItem  title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url}/>
                    </div>
              })}
                  
              </div>
    </div> 
      </>
    )
  }
}
