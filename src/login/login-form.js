import React, { Component } from "react";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

export default class LoginForm extends Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: "",
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  refreshPage() {
    window.location.reload();
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.username === "" || this.state.password === "") {
      this.setState({ error: "Please fill out all fields" });
    } else {
      this.setState({
        error: "",
      });
      fetch("http://127.0.0.1:5000/user/verification", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          if (data === "User NOT verified") {
            this.setState({ error: "Invalid username or password" });
          } else {
            this.props.handleSetUser(data);
            Cookies.set("username", this.state.username);
            this.setState({
              error: "suss",
            });
            alert("Sign In successful");
            this.props.history.push("/");
          }
        })
        .catch((error) => {
          console.log("Error logging in", error);
          this.setState({
            loading: false,
            error: "An error occurred. Please try again later.",
          });
        });
    }
  }

  render() {
    return (
      <div className="login-form-wrapper">
        <div className="login-title">Login!</div>
        <form
          className="login-form"
          action="submit"
          onSubmit={this.handleSubmit}
        >
          <div className="username">
            Username:
            <input
              className="username-input"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="password">
            Password:
            <input
              className="password-input"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button className="signin-button">Sign In</button>
        </form>
        <NavLink exact to="/create-login">
          <button>Create Account</button>
        </NavLink>
      </div>
    );
  }
}
