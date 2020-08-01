import React, { Component } from "react";
import "./PlayerPage.css";
import MusicStats from "../MusicStats/MusicStats";
export default class PlayerPage extends Component {
  render() {
    return (
      <div>
        <section className="player-page-section1">
          <div className="player-contents-holder">
            <div className="player-visual-holder"></div>
            <div className="song-title-and-artist-holder">
              <h5>
                goobina by olgy sokinato dematore dibino
                hdjhjddkndfndndvndknvknd jdjvndjnvjndjvdkkjd jbdvjnjdnvjdvjndjnv
              </h5>
            </div>
            <div className="player-control-holder">
              <span>
                <i className="fas fa-backward"></i>
              </span>
              <span>
                <i className="far fa-play-circle"></i>
              </span>
              <span>
                <i className="fas fa-forward"></i>
              </span>
              <span>
                <i className="fas fa-ellipsis-v"></i>
              </span>
            </div>
            <div className="player-stats-holder">
              <MusicStats />
            </div>

            <div className="player-description-holder"></div>
          </div>
        </section>
      </div>
    );
  }
}
