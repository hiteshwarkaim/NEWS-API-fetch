import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  articles = [
    
    
  ];

constructor(){
    super();
    console.log("constructor");
    this.state={
        articles:this.articles,
        loading:false

    }
}

//it is run after render
async componentDidMount(){
  let url="https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=71b90f466e9746ac821cd8d22f56f6d1";
  let data = await fetch(url);
  let parsedData=await data.json();
  this.setState({articles:parsedData.articles})
  console.log(data);
}


  render() {
    return (
      <>
            <div className="container">
              <h1 className='text-primary'>Top Headlines</h1>
              <div className="row">
              {this.state.articles.map((article)=>{
                return <div className="col" key={article.url}>
                        <NewsItem  title={article.title.slice(0,45)} description={article.description.slice(0,88)} imageUrl={article.urlToImage} newsUrl={article.url}/>
                    </div>
              })}
                  
              </div>
    </div> 
      </>
    )
  }
}
