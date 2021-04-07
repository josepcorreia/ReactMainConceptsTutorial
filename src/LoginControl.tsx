import "./styles.css";
import React from "react";
import { User } from "./types";
import { LoggedOn } from "./LoggedOn";
import { LoggedOff } from "./LoggedOff";

const user1 = {
  loggedIn: true,
  firstName: "Jose",
  lastName: "Correia",
  imageUrl:
    "https://cdn.icon-icons.com/icons2/1070/PNG/512/darth-vader_icon-icons.com_76959.png"
};

const userOff = {
  loggedIn: false,
  firstName: "",
  lastName: "",
  imageUrl: ""
};

function LoginButton(props: {
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props: {
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}) {
  return <button onClick={props.onClick}>Logout</button>;
}

export default class LoginControl extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return isLoggedIn ? (
      <div>
        <LogoutButton onClick={this.handleLogoutClick} />
        <LoggedOn user={user1} />
      </div>
    ) : (
      <div>
        <LoginButton onClick={this.handleLoginClick} />
        <LoggedOff user={userOff} />
      </div>
    );
  }
}
