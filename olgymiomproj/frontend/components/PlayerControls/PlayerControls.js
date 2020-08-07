import React, { Component } from "react";
import "./PlayerControls.css";
import { connect } from "react-redux";
import { playSong, pauseSong } from "../../redux/actions/actionsOnSongs";
import PlayerCover from "../PlayerCover/PlayerCover";
class PlayerControls extends Component {
  render() {
    return (
      <div id="player-controls">
        <PlayerCover />
        <div className="slider-container">
          <input
            type="range"
            defaultValue="0"
            min="0"
            step="0.1"
            className="slider"
            id="song-range"
          />
        </div>
        <div id="mid-control">
          <span
            className="control-button motion-button"
            onClick={this.props.seekerB}
          >
            <i className="fas fa-step-backward"></i>
          </span>
          {!this.props.isPlaying && !this.props.isPaused ? (
            "spinner"
          ) : this.props.isPaused ? (
            <span onClick={this.props.playSong} className="control-button">
              <i className="fas fa-play-circle"></i>
            </span>
          ) : (
            <span onClick={this.props.pauseSong} className="control-button">
              <i className="fas fa-pause-circle"></i>
            </span>
          )}
          <span
            className="control-button motion-button"
            onClick={this.props.seekerF}
          >
            <i className="fas fa-step-forward"></i>
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isPlaying: state.songsReducer.isPlaying,
    isPaused: state.songsReducer.isPaused,
  };
};
export default connect(mapStateToProps, { playSong, pauseSong })(
  PlayerControls
);
