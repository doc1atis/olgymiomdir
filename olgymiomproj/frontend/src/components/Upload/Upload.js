import React, { Component } from "react";
import sendAuthorizedRed from "../../HELPERS/sendAuthorizedReq";
import API from "../../API/api";
import "./Upload.css";

export default class Upload extends Component {
  fileInputRef = React.createRef();

  handleFileChange = async (e) => {
    try {
      console.dir(e.target.files[0]);
      const formData = new FormData();
      formData.append("cover-image", e.target.files[0]);
      // dispatch an action to say uploading is true,uploaded is false
      const res = await API.post("/songs/upload", formData);
      // dispatch and action to say uploaded is true,uploading is false

      console.log(res);
    } catch (error) {
      console.log("olgy error uploading");
    }
  };
  render() {
    return (
      <div className="upload">
        <div className="upload-options">
          <button className="upload-options-button" type="button">
            <span className="options-icon">
              <i className="fas fa-arrow-alt-circle-up"></i>
            </span>
            <span className="options-text">upload a single</span>
          </button>
          <button className="upload-options-button" type="button">
            <span className="options-icon">
              <i className="fab fa-creative-commons-sampling-plus"></i>
            </span>
            <span className="options-text">upload an album</span>
          </button>
          <button
            className="upload-options-button my-uploads-button"
            type="button"
          >
            <span className="options-icon">
              <i className="fas fa-cubes"></i>
            </span>
            <span className="options-text my-uploads-text">my uploads</span>
          </button>
        </div>
        <form>
          <input
            onChange={this.handleFileChange}
            ref={this.fileInputRef}
            type="file"
          />
        </form>
        <img
          src="https://miom-bucket.s3.amazonaws.com/song/7a855718-3e4c-42ca-a3f5-ab7830665e57brownBook.jpg"
          alt="cover"
          style={{
            width: "60%",
            height: "200px",
            marginLeft: "15%",
            marginRight: "15%",
          }}
        />

        <audio
          controls
          src="https://miom-bucket.s3.amazonaws.com/song/6c09e75a-0581-4646-b975-ae6601e365eckite%20san%20blame.mp3"
        >
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  }
}
