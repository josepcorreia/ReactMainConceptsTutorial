import "./styles.css";
import React from "react";

export default class Reservation extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      isGoing: false,
      numberOfGuests: 0,
      flavor: "grapefruit",
      text: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleInputChange(event: { target: any }) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ flavor: e.target.value });
  }

  handleTextChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    alert(
      "Your favorite flavor is: " +
        this.state.flavor +
        " IsGoind:" +
        this.state.isGoing
    );
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <hr />
        <h2> Reservation </h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Pick your favorite flavor:
            <select value={this.state.flavor} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <br />
          <label>
            Obs:
            <textarea
              value={this.state.text}
              onChange={this.handleTextChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <hr />
      </div>
    );
  }
}
