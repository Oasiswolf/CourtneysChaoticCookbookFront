import React, { Component } from "react";

export default class DetailCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: this.props
    };
  }

  render() {
    return (
      <div className="detail-card">
        <div className="name">{this.props.name}</div>
        <div className="image-container">
          <img src={this.props.image} alt="image" />
        </div>
        <div className="tags">{this.props.tags}</div>
        <div className="instructions">{this.props.instructions}</div>
        <div className="servings">{this.props.servings}</div>
        <div className="instructions">{this.props.instructions}</div>
        <div className="time">{this.props.time}</div>
      </div>
    );
  }
}
