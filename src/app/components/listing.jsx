import React, { Component } from 'react';
import { getArticles } from '../services/articleService';
import ListingArticle from './listingArticle';

export default class Listing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    getArticles()
      .subscribe(articles => {
        console.log(articles);
        this.setState({ articles });
      },
        error => {});
  }

  render() {
    const articles = this.state.articles.map(article => {
      return (
        <ListingArticle key={article.id} {...article}/>
      );
    });
    return(
      <div className="row">
        {articles}
      </div>
    );
  }
}
