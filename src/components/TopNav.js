import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr, faFacebookF, faInstagram, faPinterest, faGooglePlus } from '@fortawesome/free-brands-svg-icons'


import { TopNav } from "../styled/Containers";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TopNav>
        <nav>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/dashboard">
            Dash
          </Link>
          <Link className="navLink" to="/about">
            About
          </Link>
          <Link className="navLink" to="/register">
            Register
          </Link>
        </nav>
        <socialmedialinks>
          <FontAwesomeIcon icon={faTwitter} size="4x"/>
          <FontAwesomeIcon icon={faFacebookF} size="4x"/>
          <FontAwesomeIcon icon={faTumblr} size="4x"/>
          <FontAwesomeIcon icon={faInstagram} size="4x"/>
          <FontAwesomeIcon icon={faGooglePlus} size="4x"/>
          <FontAwesomeIcon icon={faPinterest} size="4x"/>
        </socialmedialinks>
      </TopNav>
    );
  }
}

export default Nav;
