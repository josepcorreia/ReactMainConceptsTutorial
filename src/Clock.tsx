import "./styles.css";
import React from "react";

function FormattedDate(props: { date: Date }) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default class Clock extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
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
    return <FormattedDate date={this.state.date} />;
  }
}
