import { render } from "react-dom";

import { User } from "./types";

//import App from "./App";

function formatName(user: User) {
  return user.firstName + " " + user.lastName;
}

function getElements(user: User) {
  if (user) {
    return (
      <div>
        <h1>Hello, {formatName(user)}!</h1>;
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <img alt="gif" width="15%" height="15%" src={user.imageUrl}/>
      </div>
    );
  }
  return <h1>Hello, Stranger.</h1>;
}

function tick() {
  const element = getElements({
    firstName: "Jose",
    lastName: "Correia",
    imageUrl: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_views_of_the_sun5/22136942-2-eng-GB/Solar_Orbiter_s_first_views_of_the_Sun_pillars.gif"
  });
  
  const rootElement = document.getElementById("root");
  //render(<App />, rootElement);
  
  render(element, rootElement);
}

setInterval(tick, 1000);
