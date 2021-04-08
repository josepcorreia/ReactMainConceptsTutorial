import React from "react";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import { User } from "./types";

export function LoggedOff(props: {
  user: User;
  onUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPassChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUserSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div>
      <LoginForm
        onUserNameChange={props.onUserNameChange}
        onPassChange={props.onPassChange}
        onUserSubmit={props.onUserSubmit}
      />
      <Greeting user={props.user} />
    </div>
  );
}
