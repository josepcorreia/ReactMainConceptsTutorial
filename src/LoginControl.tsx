import "./styles.css";
import React from "react";
import { LoggedOn } from "./LoggedOn";
import { LoggedOff } from "./LoggedOff";

const userOff = {
  loggedIn: false,
  firstName: "",
  lastName: "",
  imageUrl: ""
};

export default class LoginControl extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.state = {
      isLoggedIn: false,
      user: userOff,
      username: "",
      password: ""
    };
  }

  handleLoginClick(e: React.FormEvent<HTMLFormElement>) {
    this.setState({ isLoggedIn: true });

    var user = {
      loggedIn: true,
      firstName: this.state.username,
      lastName: "",
      imageUrl:
        "https://cdn.icon-icons.com/icons2/1070/PNG/512/darth-vader_icon-icons.com_76959.png"
    };
    this.setState({ user: user });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
    this.setState({ user: userOff });
  }

  handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: e.target.value });
  }
  handlePassChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ password: e.target.value });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const user = this.state.user;

    return isLoggedIn ? (
      <LoggedOn user={user} onLogoutClick={this.handleLogoutClick} />
    ) : (
      <LoggedOff
        onUserNameChange={this.handleUsernameChange}
        onPassChange={this.handlePassChange}
        onUserSubmit={this.handleLoginClick}
      />
    );
  }
}
