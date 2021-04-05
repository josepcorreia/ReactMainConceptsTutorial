import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
//render(<App />, rootElement);

render(<h1>Hello, world!</h1>, document.getElementById("root"));
