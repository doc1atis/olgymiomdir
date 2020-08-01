import React, { Component } from "react";
import "./MusicStats.css";
export default class MusicStats extends Component {
  render() {
    return (
      <div className="song-stats-component">
        <span>
          <i className="fas fa-headphones-alt"></i>
          <h6 className="stats-number-detail">200k</h6>
        </span>
        <span>
          <i className="fab fa-gratipay"></i>
          <h6 className="stats-number-detail">70k</h6>
        </span>
        <span>
          <i className="fas fa-heart-broken"></i>
          <h6 className="stats-number-detail">10k</h6>
        </span>
        <span>
          <i className="fas fa-arrow-circle-down"></i>
          <h6 className="stats-number-detail">40k</h6>
        </span>
      </div>
    );
  }
}
