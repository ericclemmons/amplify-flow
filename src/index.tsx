import { h, render } from "preact";

import { Route, Router } from "./Router";
import { Workflow } from "./Workflow";
import "./index.css";

const root = document.createElement("div");
document.body.prepend(root);

render(
  <Router>
    {["issue", "issues", "pulls", "pull"].map((path) => (
      <Route key={path} path={path}>
        <Workflow />
      </Route>
    ))}
  </Router>,
  root
);
