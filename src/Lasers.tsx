import "./styles.css";
import React from "react";
const urlOn =
  "https://super.abril.com.br/wp-content/uploads/2018/07/5217d63d98276813e8000f0f640px-laser.jpeg";
const urlOff =
  "https://www.lap-laser.com/fileadmin/_processed_/5/a/csm_lap-alignment-laser-red-and-green-lines-crosses-points_1504x752_fd58d02bee.jpg";

export default class Lasers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, laserImg: urlOff };

    // This binding is necessary to make `this` work in the callback
    //  This syntax ensures `this` is bound within handleClick -> <button onClick={() => this.handleClick()}>
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
    this.setState((state) => ({
      laserImg: state.isToggleOn ? urlOff : urlOn
    }));
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "Activate Lasers" : "Deactivate Lasers"}
          </button>
        </div>
        <img alt="gif" width="25%" height="25%" src={this.state.laserImg} />
      </div>
    );
  }
}
