import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="content-wrapper">
          <div className="rendom-recipe">recipe goes here</div>
          <div className="rendom-recipe">recipe goes here</div>
          <div className="rendom-recipe">recipe goes here</div>
        </div>
      </div>
    );
  }
}
