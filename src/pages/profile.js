import React, { Component } from "react";

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="portfolio-wrapper">
        <h1>Your Portfolio</h1>
        {/* username from JS cookies */}
        <h2>Here you'll find your saved recipes, comment statuses</h2>

        <div className="recipe-wrapper">
          <h3>SAVED RECIPES</h3>
          {/* recipes render herer */}
        </div>
        <div className="comment-wrapper">
          <h3>COMMENTS</h3>
          {/* comments on recipes */}
        </div>
      </div>
    );
  }
}
