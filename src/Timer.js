import React, { Component } from "react";

class Timer extends Component {
  state = {
    clock: 0
  };

  Ticker = () => {
    this.setState({
      clock: new Date() - this.props.start
    });
  };

  componentDidMount() {
    this.timer = setInterval(this.Ticker, 1000);
  }

  render() {
    const { clock } = this.state;
    let clockVal = Math.round(clock / 1000);
    return (
      <div>
        <h2>You have been on this site since :</h2>
        <br />
        <h3>{clockVal}</h3>
        <p>Seconds</p>
      </div>
    );
  }
}

export default Timer;
