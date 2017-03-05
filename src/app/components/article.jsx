import React, { Component } from 'react';
import { getArticles } from '../services/articleService';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: undefined
    };

    this.getBody = this.getBody.bind(this);
  }

  componentDidMount() {
    getArticles()
      .map(articles => articles
        .filter(article => article.id === Number(this.props.params.id))[0])
      .subscribe(article => {
          console.log('hey here', article, this.props.params);
          this.setState({ article });
        },
        error => {});
  }

  getBody(article) {
    return article.body.map((text, i) => {
      const key = `${article.id}-${i}`;
      switch(text.type) {
        case 'h2':
          return <h2 className="article__body-heading" key={key}>{text.body}</h2>;
        case 'pull_quote':
          return <blockquote className="article__body-quote blockquote" key={key}>{text.body}</blockquote>;
        case 'plaintext':
        default:
          return <p className="article__body-text" key={key}>{text.body}</p>
      }
    })
  }

  render() {
    const { article } = this.state;
    if (!article) {
      return <div>Loading…</div>
    }
    return(
      <article className="article">
        <img src={article.cover} alt="props.title" className="article__img img-fluid"/>
        <h1 className="article__title">{article.title}</h1>
        {this.getBody(article)}
      </article>
    );
  }

}
