import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Title } from "./LoginSignup";
import { loginUser } from "../../../ducks/userReducer";
import ReCAPTCHA from "react-google-recaptcha";

class Login extends Component {
  state = {
    bot: true,
    showPass: false,
    username: "",
    password: ""
  };
  onUserInput = e => {
    e.target.type === "checkbox"
      ? this.setState({ [e.target.name]: e.target.checked })
      : this.setState({ [e.target.name]: e.target.value });
  };
  onChange = e => {
    this.setState({ bot: false });
  };
  login = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.loginUser(this.state.username, this.state.password);
  };
  render() {
    console.log(this.state);
    let captcha = this.state.bot && (
      <ReCAPTCHA
        ref="recaptcha"
        sitekey="6Lcuel4UAAAAAL0n8SE-G-HSPbeecmqg3USxOnh-"
        onChange={this.onChange}
      />
    );
    return (
      <form onSubmit={() => this.login} className="login form">
        <h2>Login with Existing Account</h2>
        <div className="inputs">
          <p className="label">Username</p>
          <input type="text" name="username" onChange={this.onUserInput} />
          <p className="label">Password</p>
          <div id="passwordBox">
            <input
              id="password"
              type={this.state.showPass ? "text" : "password"}
              name="password"
              onChange={this.onUserInput}
            />
            <input
              id="showpass"
              value={this.state.showPass ? "Hide Password" : "Show Password"}
              type="button"
              onClick={() => this.setState({ showPass: !this.state.showPass })}
            />
          </div>
        </div>
        <div id="captchaContainer">{captcha}</div>
        <input
          type="button"
          onClick={() => (this.state.bot ? null : this.signUp)}
          className={this.state.bot ? "inactive" : "active"}
          value="Sign in"
        />
      </form>
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
  { loginUser }
)(Login);
