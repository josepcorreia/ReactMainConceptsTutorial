import React from "react";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature: string, convert: (num: number) => number) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props: { celsius: number }) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default class BoilingCalculator extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(event: React.ChangeEvent<HTMLInputElement>) {
    var temperature = event.target.value;
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(event: React.ChangeEvent<HTMLInputElement>) {
    var temperature = event.target.value;
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <h2> BoilingCalculator </h2>
        <TemperatureInput
          scale={"c"}
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale={"f"}
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
