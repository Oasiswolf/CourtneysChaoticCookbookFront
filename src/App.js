import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import logo from "./logo.svg";
import "./styles/App.css";

import NavagationBar from "./navigation/navbar";
import Home from "./pages/home";
import LoginForm from "./login/login-form";
import CreateLogin from "./login/create-login";
import Profile from "./pages/profile";
import RecipeCreatePage from "./pages/recipe-create-page";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: true,
      error: "",
      loggedInStatus: "NOT_LOGGED_IN",
    };

    this.handleSetUser = this.handleSetUser.bind(this);
    this.handleSetError = this.handleSetError.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  componentDidMount() {
    if (Cookies.get("username")) {
      fetch(`http://127.0.0.1:5000/user/get/${Cookies.get("username")}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            user: data,
            loading: false,
            loggedInStatus: "LOGGED_IN",
          });
        })
        .catch((error) => {
          console.log("Error getting user data", error);
          this.setState({
            error: "An error occurred... Please try again later.",
          });
        });
    } else {
      this.setState({ loading: false });
    }
  }

  handleSetUser(userData) {
    this.setState({
      user: userData,
    });
  }

  handleSetError(errorData) {
    this.setState({ error: errorData });
  }
  handleLogOut() {
    Cookies.remove("username");
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
    alert("You have logged out!");
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavagationBar handleLogOut={this.handleLogOut} />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/login-form" element={<LoginForm />} />
              <Route path="/create-login" element={<CreateLogin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/recipe/add" element={<RecipeCreatePage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
