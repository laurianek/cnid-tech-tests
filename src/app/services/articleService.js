import 'whatwg-fetch'
import { Observable } from 'rx-lite';

function getArticles() {

  return Observable.fromPromise(
    fetch('/data/article.json')
      .then(response => response.json()))
    .retry(3);
}

module.exports = {
  getArticles
};
