import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 7,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];

  constructor() {
    super();
    console.log("constructor");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
    };
  }

  //it is run after render
  async componentDidMount() {
    //a synch function can wait inside its body till some promise become resolve
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71b90f466e9746ac821cd8d22f56f6d1&page=1&pageSize={this.props.pageSize}`;
    this.setState({ loading: true }); //spinner when data is loading=true
    let data = await fetch(url); //it returns promise
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false, //spinner disapper when loading=false
    });
    // console.log(parsedData);
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=71b90f466e9746ac821cd8d22f56f6d1&page=${
      this.state.page - 1
    }&pageSize={this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url); //it returns promise
    let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNext = async () => {
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=71b90f466e9746ac821cd8d22f56f6d1&page=${
      this.state.page + 1
    }&pageSize={this.props.pageSize}`;
    // console.log(this.state.page);
    this.setState({ loading: true });
    let data = await fetch(url); //it returns promise
    let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-primary">Top Headlines</h1>
          {/*show spinner cpmponent only when loading=true */}
          {this.state.loading && <Spinner />}
          <div className="row">
            {/*if loading=false then show articles and vice-versa */}
            {!this.state.loading &&
              this.state.articles.map((article) => {
                return (
                  <div className="col gy-5" key={article.url}>
                    <NewsItem
                      title={article.title}
                      description={article.description}
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
