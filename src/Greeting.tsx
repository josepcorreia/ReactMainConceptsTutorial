import "./styles.css";
import React from "react";

import { User } from "./types";
import Clock from "./Clock";

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

function UserGreeting(props: { user: User }) {
  return <h1>Hello, {formatName(props.user)}!</h1>;
}

function GuestGreeting(props: { user: User }) {
  return <h1>Hello, Stranger. Please sign up.</h1>;
}

export default function Greeting(props: { user: User }) {
  const loggedOn = props && props.user && props.user.loggedIn;

  return (
    <div>
      {loggedOn ? (
        <UserGreeting user={props.user} />
      ) : (
        <GuestGreeting user={props.user} />
      )}
      <Clock />
    </div>
  );
}
