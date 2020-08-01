import React, { Component } from "react";
import "./SongDetailCard.css";
export default class SongDetailCard extends Component {
  render() {
    return (
      <div className="song-detail-root">
        <div className="song-cover"></div>
        <div className="song-stats-holder">
          <div className="song-stats-top">
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
          </div>
          <div className="song-stats-bottom">
            <h5 className="song-stats-title">
              Gooba by troy selika dematore silman demat sekle late domi trezo
              kache
            </h5>
            <span className="song-detail-dots">
              <i className="fas fa-ellipsis-h"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
