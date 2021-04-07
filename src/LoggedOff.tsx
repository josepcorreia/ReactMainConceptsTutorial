import React from "react";
import { Greeting } from "./Welcome";

import { User } from "./types";

export function LoggedOff(props: { user: User }) {
  return <Greeting user={props.user} />;
}
