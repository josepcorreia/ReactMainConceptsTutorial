import React from "react";
import Lasers from "./Lasers";
import { Greeting } from "./Welcome";

import { User } from "./types";

export function LoggedOn(props: { user: User }) {
  return (
    <div>
      <Greeting user={props.user} />
      <Lasers />
    </div>
  );
}
