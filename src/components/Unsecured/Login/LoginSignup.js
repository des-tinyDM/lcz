import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../../styled/Containers";

import { connect } from "react-redux";
import { registerUser } from "../../../ducks/userReducer";
import ReCAPTCHA from "react-google-recaptcha";

import Signup from "./Signup";
import Login from "./Login";
import TermsOfService from "./TermsOfService";

class LoginSignup extends React.Component {
  constructor() {
    super();
    this.state = {
      show: 0
    };
  }

  render() {
    console.log(this.props);
    return (
      <PageContainer>
        <FormContainer>
          <LoginNavContainer>
            <button
              className={this.state.show === 0 ? "active" : null}
              onClick={e => {
                e.preventDefault();
                this.setState({ show: 0 });
              }}
            >
              Login
            </button>
            <button
              className={this.state.show === 1 ? "active" : null}
              onClick={e => {
                e.preventDefault();
                this.setState({ show: 1 });
              }}
            >
              Register
            </button>
            <button
              className={this.state.show === 2 ? "active" : null}
              onClick={e => {
                e.preventDefault();
                this.setState({ show: 2 });
              }}
            >
              TOS
            </button>
          </LoginNavContainer>

          {this.state.show === 0 ? (
            <Login />
          ) : this.state.show === 1 ? (
            <Signup />
          ) : (
            <TermsOfService show={this.state.show} />
          )}
        </FormContainer>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(LoginSignup);

export const FormContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 80vh;
  min-width: 300px;
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};

  & .form {
    margin: 0% 10%;
    height: 80%;
    width: 80%;

    & h2 {
      font-size: 4rem;
      background-color: ${props => props.theme.secondaryColor};
      color: ${props => props.theme.primaryColor};
    }
    & .label {
      font-size: 2rem;
    }
    & #captchaContainer > div > div > div {
      width: 100% !important;
      display: flex;
      justify-content: center;

      & body > div.rc-anchor.rc-anchor-normal.rc-anchor-light {
        width: 600px !important;
      }
    }

    & .inputs {
      height: 50%;
    }
    & input {
      height: 5vh;
      /* border-radius: 4px;s */
      width: 70%;
    }
  }
`;

export const LoginNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  & button {
    flex-basis: 1;
    flex-shrink: 1;
    width: 100%;
    background: none;
    border: none;
    padding: 2vh 0;
    outline: none;

    &.active {
      border-bottom: 1px solid ${props => props.theme.borderColor};
    }
  }
`;

export const Button = styled.button`
  font-size: 3rem;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  width: 80%;
  height: 14vh;
  margin: 2vh auto;
`;

export const Input = styled.input`
  height: 5vh;
  width: 80%;
  font-size: 1.45rem;
  border: 1px solid ${props => props.theme.borderColor};
`;
