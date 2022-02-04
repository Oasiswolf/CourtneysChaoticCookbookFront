import React, { Component } from "react";
import { withRouter } from "react-router";

import { NavLink } from "react-router-dom";

import Logo from "../images/Logo.png";
export default function (props) {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route}>{linkText}</NavLink>
      </div>
    );
  };
  return (
    <div className="navbar">
      <div className="main-bar">
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links-wrapper">
          <div className="nav-link-wrapper">
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
          {props.checkLoginStatus === "LOGGED_IN"
            ? dynamicLink("/profile", "Profile")
            : null}
        </div>
      </div>
      <div className="login-wrapper">
        <NavLink exact to="/login-form">
          <button className="loginout-buttons">Sign in</button>
        </NavLink>
        <NavLink exact to="/">
          <button className="loginout-buttons" onClick={props.handleLogOut}>
            Sign out
          </button>
        </NavLink>
      </div>
    </div>
  );
}
