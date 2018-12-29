import React from 'react';

import ContentArticleTitle from './Article/ContentArticleTitle';
import ContentArticleAuthor from './Article/ContentArticleAuthor';
import ContentArticleDescription from './Article/ContentArticleDescription';
import ContentArticleMores from './Article/ContentArticleMores';

const ContentItem = ({ getArticles, content }) => {
  return (
    <React.Fragment>
      <li className="article__item" key="someKey">
        <ContentArticleTitle />
        <ContentArticleAuthor />
        <ContentArticleDescription />
        <ContentArticleMores getArticles={getArticles} content={content} />
      </li>
    </React.Fragment>
  );
};

export default ContentItem;
