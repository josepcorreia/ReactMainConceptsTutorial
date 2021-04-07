import "./styles.css";
import React from "react";
import { User } from "./types";
import Clock from "./Clock";
import Lasers from "./Lasers";

const user = { firstName: "Jose", lastName: "Correia" };

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

function Welcome(props: { user: User }) {
  if (props && props.user) {
    return <h1>Hello, {formatName(props.user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function TestActionLink() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    alert("The link was clicked.");
  }
  /* Another difference is that you cannot return false to prevent default behavior in React.
   * You must call preventDefault explicitly.
   */
  return (
    <div>
      <h2>
        {" "}
        <a href="#" onClick={handleClick}>
          Test Link
        </a>
      </h2>
    </div>
  );
}

class LoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}

export default function App() {
  return (
    <div>
      <Welcome user={user} />
      <Clock />
      <TestActionLink />
      <Lasers />
    </div>
  );
}
