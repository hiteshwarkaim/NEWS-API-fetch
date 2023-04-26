import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];

  constructor() {
    super();
    console.log("constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  //it is run after render
  async componentDidMount() {
    //a synch function can wait inside its body till some promise become resolve
    let url =
      "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=71b90f466e9746ac821cd8d22f56f6d1";
    let data = await fetch(url); //it returns promise
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    // console.log(parsedData);
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=71b90f466e9746ac821cd8d22f56f6d1&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url); //it returns promise
    let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNext = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=71b90f466e9746ac821cd8d22f56f6d1&page=${
      this.state.page + 1
    }`;
    console.log(this.state.page);
    let data = await fetch(url); //it returns promise
    let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-primary">Top Headlines</h1>
          <div className="row">
            {this.state.articles.map((article) => {
              return (
                <div className="col gy-5" key={article.url}>
                  <NewsItem
                    title={article.title.slice(0, 45)}
                    description={article.description.slice(0, 88)}
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevious}
            disabled={this.state.page <= 1}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
