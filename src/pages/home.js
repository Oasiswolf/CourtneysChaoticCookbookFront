import React, { Component } from "react";

import SingleRecipe from "../recipes/random-recipe";
export default class Home extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="content-wrapper">
          <SingleRecipe />
        </div>
      </div>
    );
  }
}
