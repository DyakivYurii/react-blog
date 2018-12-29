import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import PATH from '../../constans/path';
import { signIn } from '../../actions/authActions';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = () => (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = () => (event) => {
    event.preventDefault();
    console.log(this.props);
    this.props.signIn({ ...this.state });
  };

  render() {
    console.log(`This is state`, this.state);

    return (
      <Container>
        <Row>
          <h2>Sign In</h2>
          <form className="" onSubmit={this.handleFormSubmit()}>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange()}
              className=""
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange()}
              className=""
            />
            <button type="submit" className="">
              Sign In
            </button>
          </form>
          <p>
            Do not have an account? <Link to={PATH.SIGN_UP}>Sing Un</Link>
          </p>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signIn }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
