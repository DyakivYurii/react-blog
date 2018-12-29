import React from 'react';

const ContentArticleMores = ({ getArticles, content }) => {
  return (
    <React.Fragment>
      <button
        type="button"
        className="button button--white"
        onClick={() => getArticles(content.listOfArticles, 4)}
      >
        More info
      </button>
    </React.Fragment>
  );
};

export default ContentArticleMores;
