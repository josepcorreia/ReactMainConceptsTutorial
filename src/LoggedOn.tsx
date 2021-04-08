import React from "react";
import Lasers from "./Lasers";
import Greeting from "./Greeting";
import Reservation from "./Reservation";
import BoilingCalculator from "./BoilingCalculator/BoilingCalculator";
import { WelcomeDialog } from "./Composition/Containment";

import { User } from "./types";
import { Lists } from "./Lists";

function LogoutButton(props: {
  onLogoutClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}) {
  return <button onClick={props.onLogoutClick}>Logout</button>;
}

export function LoggedOn(props: {
  user: User;
  onLogoutClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}) {
  return (
    <div>
      <LogoutButton onLogoutClick={props.onLogoutClick} />
      <Greeting user={props.user} />
      <WelcomeDialog />
      <Lasers />
      <Reservation />
      <BoilingCalculator />
      <Lists />
    </div>
  );
}
