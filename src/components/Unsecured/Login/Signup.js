import React, { Component } from "react";
import styled from "styled-components";
import { Form, Title, Button, Input } from "./LoginSignup";
import { connect } from "react-redux";
import { registerUser } from "../../../ducks/userReducer";
import ReCAPTCHA from "react-google-recaptcha";

class Signup extends Component {
  state = {
    bot: true,
    showPass: false,
    username: "",
    email: "",
    password: ""
  };
  signUp = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.registerUser(
      this.state.username,
      this.state.email,
      this.state.password
    );
  };

  onUserInput = e => {
    e.target.type === "checkbox"
      ? this.setState({ [e.target.name]: e.target.checked })
      : this.setState({ [e.target.name]: e.target.value });
  };

  onChange = e => {
    this.setState({ bot: false });
  };

  render() {
    let captcha = this.state.bot && (
      <ReCAPTCHA
        ref="recaptcha"
        sitekey="6Lcuel4UAAAAAL0n8SE-G-HSPbeecmqg3USxOnh-"
        onChange={this.onChange}
      />
    );
    return (
      <form onSubmit={() => this.signUp}>
        <h2>Create a New Account</h2>
        <div className="inputs">
          <p class="label">Username</p>
          <input type="text" name="username" onChange={this.onUserInput} />
          <p class="label">Email</p>
          <input type="email" name="email" onChange={this.onUserInput} />
          <p class="label">Password</p>
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
        <div>
          <checkbox name />
        </div>
        <button
          onClick={() => (this.state.bot ? null : this.signUp)}
          className={this.state.bot ? "inactive" : "active"}
        >
          Sign up
        </button>
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
  { registerUser }
)(Signup);
