import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import PATH from '../../constans/path';
import { signUp } from '../../actions/authActions';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      firstName: '',
      secondName: ''
    };
  }

  handleChange = () => (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = () => (event) => {
    event.preventDefault();
    console.log(this.props);
    this.props.signUp({ ...this.state });
  };

  render() {
    return (
      <Container>
        <Row>
          <h2>Sign Up</h2>
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
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange()}
              className=""
            />
            <input
              type="text"
              name="secondName"
              value={this.state.secondName}
              onChange={this.handleChange()}
              className=""
            />
            <button type="submit" className="">
              Sign Up
            </button>
          </form>
          <p>
            Already has had an account? <Link to={PATH.SIGN_IN}>Sing Un</Link>
          </p>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signUp }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
