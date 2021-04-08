import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

export default function TemperatureInput(props: {
  onTemperatureChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  scale: string;
  temperature: string;
}) {
  const temperature = props.temperature;
  const scale = props.scale;
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={props.onTemperatureChange} />
    </fieldset>
  );
}
