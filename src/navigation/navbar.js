import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default function (props) {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };
  return (
    <div className="navbar">
      <div className="logo-wrapper">logo</div>
      <div className="links-wrapper">
        <div className="nav-link-wrapper">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/profile", "Profile")
          : null}
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
