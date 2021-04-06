import "./styles.css";
import React from "react";
import { User } from "./types";
import Clock from "./Clock";

const user = { firstName: "Jose", lastName: "Correia" };

export default function App() {
  return (
    <div>
      <Welcome user={user} />
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

function Welcome(props: { user: User }) {
  if (props && props.user) {
    return <h1>Hello, {formatName(props.user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
