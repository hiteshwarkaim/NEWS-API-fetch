import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {



  render() {
    return (
      <>
            <div className="container">
      <h1 className='text-primary'>Top Headlines</h1>
      <div className="row">
          <div className="col">
                <NewsItem title="myTitle" description="my description"/>
            </div>
      </div>
    </div> 
      </>
    )
  }
}
