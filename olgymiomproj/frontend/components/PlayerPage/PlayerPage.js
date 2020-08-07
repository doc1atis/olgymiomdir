import React, { Component } from "react";
import { connect } from "react-redux";
import ReactHowler from "react-howler";
import {
  songIsPlaying,
  songIsPaused,
  songHasEnded,
  playSong,
} from "../../redux/actions/actionsOnSongs";
import PlayerControls from "../PlayerControls/PlayerControls";
class PlayerPage extends Component {
  position = 0;
  timerId = null;
  componentWillUnmount() {
    // destroy the sound when user switch page or refresh page
    this.player.howler.unload();
  }
  componentDidMount() {
    this.props.playSong();
    this.slider = document.getElementById("song-range");
    this.player.howler.once("load", () => {
      // set the slider max range once the sound is loaded
      this.slider.max = this.player.howler.duration(this.soundId);
    });
    this.player.howler.on("play", () => {
      this.player.howler.volume(1.0);
      this.position = this.player.seek();
      this.timerId = setInterval(() => {
        this.slider.value = this.position;
        this.position += 0.1;
      }, 0.1 * 1000);
    });
    this.player.howler.on("pause", () => {
      console.log("song pause");
      clearInterval(this.timerId);
    });
    // physical touch input only, not programatic input
    this.slider.oninput = (e) => {
      console.log("inputed olgy via program");
      // position the song where you want
      this.player.seek(e.target.value);
      // clear the previoous timer(stop slider)
      clearInterval(this.timerId);
      // restart the timer(restart slider)
      this.position = this.player.seek();
      // prevent noise when sliding
      this.player.howler.volume(0.0);
      this.timerId = setInterval(() => {
        // reset sound back to normal after sliding
        this.player.howler.volume(1.0);
        this.slider.value = this.position;
        this.position += 0.1;
      }, 0.1 * 1000);
      if (!this.props.isPlaying) {
        clearInterval(this.timerId);
      }
    };
  }
  startPlaying = (id) => {
    //  dispatch action to know when song start playing
    this.soundId = id;
    this.props.songIsPlaying();
  };
  songPause = (id) => {
    // dispacth action to know when song is pause
    this.props.songIsPaused();
  };
  songEnded = (id) => {
    // stop timer when song ends
    clearInterval(this.timerId);
    // dispactch action to tell about the end
    this.props.songHasEnded();
  };
  seekerBackward = () => {
    this.player.seek(0);
    this.slider.value = this.player.seek();
    clearInterval(this.timerId);
    this.player.play();
    if (!this.props.isPlaying) {
      console.log("okey");
    }
  };
  seekerForward = () => {
    this.player.seek(this.player.howler.duration(this.soundId));
    this.slider.value = this.player.seek();
    clearInterval(this.timerId);
  };

  render() {
    const display = () => {
      if (this.props.loaded) {
        return (
          <>
            <ReactHowler
              src={this.props.songUrl}
              playing={this.props.play}
              html5={true}
              onPlay={this.startPlaying}
              onPause={this.songPause}
              onEnd={this.songEnded}
              ref={(ref) => (this.player = ref)}
            />
            <PlayerControls
              seekerB={this.seekerBackward}
              seekerF={this.seekerForward}
            />
          </>
        );
      }
    };
    return <div>{display()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    play: state.songsReducer.play,
    songUrl: state.songsReducer.songUrl,
    loaded: state.songsReducer.loaded,
    isPlaying: state.songsReducer.isPlaying,
  };
};
export default connect(mapStateToProps, {
  songIsPlaying,
  songIsPaused,
  songHasEnded,
  playSong,
})(PlayerPage);
