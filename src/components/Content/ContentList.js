import React from 'react';

import ContentItem from './ContentItem';

class ContentList extends React.Component {
  componentDidMount() {
    // Here shoult be request for getting some articles
  }

  render() {
    const { getArticles, content } = this.props;
    return (
      <React.Fragment>
        <ul className="article__list">
          <ContentItem getArticles={getArticles} content={content} />
          <ContentItem getArticles={getArticles} content={content} />
          <ContentItem getArticles={getArticles} content={content} />
        </ul>
      </React.Fragment>
    );
  }
}

export default ContentList;
