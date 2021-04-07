import "./styles.css";
import React from "react";

import LoginControl from "./LoginControl";
import Clock from "./Clock";
import { User } from "./types";

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

function UserGreeting(props: { user: User }) {
  return <h1>Hello, {formatName(props.user)}!</h1>;
}

function GuestGreeting(props: { user: User }) {
  return <h1>Hello, Stranger. Please sign up.</h1>;
}

export function Greeting(props: { user: User }) {
  if (props && props.user && props.user.loggedIn) {
    return <UserGreeting user={props.user} />;
  }
  return <GuestGreeting user={props.user} />;
}

export default function Welcome() {
  return (
    <div>
      <LoginControl />
      <Clock />
    </div>
  );
}
