import React from "react";
import Lasers from "./Lasers";
import Greeting from "./Greeting";

import { User } from "./types";
import { Lists } from "./Lists";

export function LoggedOn(props: { user: User }) {
  return (
    <div>
      <Greeting user={props.user} />
      <Lasers />
      <Lists />
    </div>
  );
}
