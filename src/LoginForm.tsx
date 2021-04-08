import React from "react";

export default function LoginForm(props: {
  onUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPassChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUserSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={props.onUserSubmit}>
      <div>
        <label>
          UserName:
          <input type="text" onChange={props.onUserNameChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" onChange={props.onPassChange} />
        </label>
      </div>
      <input type="submit" value="LogIn" />
    </form>
  );
}
