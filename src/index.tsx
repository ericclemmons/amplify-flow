import { h, render } from "preact";

import "./index.css";

const root = document.createElement("nav");

// document.head.appendChild(tailwind);
document.querySelector("main").prepend(root);

render(
  <h1 class="bg-gray-dark mb-3 p-2 px-4-fluid text-white">Howdy there</h1>,
  root
);
