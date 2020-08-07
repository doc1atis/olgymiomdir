import React, { Component } from "react";
import "./HomePage.css";
import { connect } from "react-redux";
import { loadSong } from "../../redux/actions/actionsOnSongs";
class HomePage extends Component {
  handlePlay = (songUrl) => () => {
    this.props.loadSong(songUrl);
  };
  render() {
    return (
      <div>
        <div id="landing-pic"></div>
        <button
          onClick={this.handlePlay(
            "https://olgybucket.s3.amazonaws.com/media/sale.mp3"
          )}
        >
          Song
        </button>
      </div>
    );
  }
}
export default connect(null, { loadSong })(HomePage);
