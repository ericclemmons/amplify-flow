import { h, render } from "preact";

import { App } from "./App";
import "./index.css";

const root = document.createElement("nav");

// document.head.appendChild(tailwind);
document.querySelector("main").prepend(root);

render(<App />, root);
