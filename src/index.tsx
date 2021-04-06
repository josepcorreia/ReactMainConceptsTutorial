import { render } from "react-dom";

import { User } from "./types";

//import App from "./App";

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

function Welcome(props: { user: User }) {
  if (props && props.user) {
    return <h1>Hello, {formatName(props.user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user1 = { firstName: "Jose", lastName: "Correia" };
const user2 = { firstName: "Pablo", lastName: "Aimar" };
const user3 = { firstName: "Jonas", lastName: "10" };

function getElements() {
  return (
    <div>
      <div>
        <Welcome user={user1} />
        <Welcome user={user2} />
        <Welcome user={user3} />
      </div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      {/* //<img alt="gif" width="15%" height="15%" src={user.imageUrl} /> */}
    </div>
  );
}

function tick() {
  const element = getElements();

  const rootElement = document.getElementById("root");
  //render(<App />, rootElement);

  render(element, rootElement);
}

setInterval(tick, 1000);
