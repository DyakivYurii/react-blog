import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'reactstrap';

import { getArticles } from '../../actions/contentActions';

import ContentList from '../../components/Content/ContentList';

import '../../styles/content.css';
import '../../styles/button.css';

class Content extends React.PureComponent {
  render() {
    const { getArticles, content } = this.props;
    console.log(`Content =`, this.props.content);
    return (
      <Container>
        <section className="content">
          <ContentList getArticles={getArticles} content={content} />
          <button className="button button--dark button--content">
            More Articles
          </button>
        </section>
      </Container>
    );
  }
}

const mapStateToProps = ({ content }) => {
  return { content };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getArticles }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
