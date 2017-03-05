import React, { Component } from 'react';
import { Link } from 'react-router'

export default function ListingArticle(props) {
  function handleAClick(e) {
    e.preventDefault();
  }

  return(
    <article className="listing-article col-12 col-sm-6" href="#to-article" onClick={handleAClick}>
      <Link to={`/article/${props.id}`}>
        <img src={props.cover} alt="props.title" className="img-fluid"/>
        <h3 className="listing-article__title">{props.title}</h3>
      </Link>
    </article>
  );
}
