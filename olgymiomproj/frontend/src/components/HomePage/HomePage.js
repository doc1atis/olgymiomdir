import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomePage.css";
import SongCard from "../SongCard/SongCard";
import SongDetailCard from "../SongDetailCard/SongDetailCard";
import PlayerPage from "../PlayerPage/PlayerPage";
class HomePage extends Component {
  trendRef = React.createRef();
  holderRef = React.createRef();
  handleScrollLeft = () => {
    this.trendRef.current.scrollLeft += 350;
  };
  handleScrollRight = () => {
    this.trendRef.current.scrollLeft += -350;
  };
  render() {
    return (
      <div>
        {/* <PlayerPage /> */}
        <section id="section1">
          <h1 id="home-title">music influences our mood</h1>
          <h4>trending today</h4>
          <div ref={this.trendRef} className="trending-cards-container">
            <SongCard title="joanna by olgy" streamNumbers="500k" />
            <SongCard title="new song by akon" streamNumbers="100k" />
            <SongCard title="Believe in me by Olgy" streamNumbers="300k" />
            <SongCard title="I like you by Cardi B" streamNumbers="600k" />
            <SongCard title="On my way by Olgy" streamNumbers="900k" />
            <SongCard title="Watch me moving  by Ajayi" streamNumbers="800k" />
            <SongCard title="Keep moving by Dael" streamNumbers="200k" />
            <SongCard title="All I want Is You by Jenny" streamNumbers="300k" />
            <SongCard title="Call Me Back by Horlane" streamNumbers="900k" />
            <SongCard title="yersterday by gooba" streamNumbers="1B" />
          </div>
        </section>

        <section id="section2">
          <h4 className="section-name">recommended</h4>
          <SongDetailCard />
          <SongDetailCard />
          <SongDetailCard />
          <SongDetailCard />
          <SongDetailCard />
        </section>
        <section id="section3"></section>
      </div>
    );
  }
}

export default connect(null, {})(HomePage);
