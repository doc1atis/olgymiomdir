import React, { Component } from "react";
import "./SongCard.css";
export default class SongCard extends Component {
  render() {
    return (
      <div className="trending-card-holder">
        <div className="trending-card"></div>
        <div className="trending-card-bottom-stats">
          <h5>{this.props.title}</h5>
          <span className="trend-listen-number">
            <i className="fas fa-headphones-alt"></i>
            <h6>{this.props.streamNumbers}</h6>
          </span>
        </div>
      </div>
    );
  }
}
