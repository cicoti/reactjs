import React, { Component } from "react";
import FormatarData from "./FormatarData";

/*
function FormatarData(props) {
  return <h3>{props.data.toLocaleTimeString()}.</h3>;
}
*/


class OlaMundo extends Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Olá Mundo!</h1>
        Agora são:{(new FormatarData()).formata(this.state.date)}
      </div>
    )
  }

}

export default OlaMundo;