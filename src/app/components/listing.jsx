import React, { Component } from 'react';
import { getArticles } from '../services/articleService';

export default class Listing extends Component{

  componentDidMount() {
    getArticles()
      .subscribe(json => {
        console.log('hello world',json);
      }, error => {})
  }

  render() {
    return(
      <div>
        hello worlds
      </div>
    );
  }
}
