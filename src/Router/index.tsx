import { h, VNode } from "preact";
import { Children, createPortal } from "preact/compat";

import { Route, RouteProps } from "./Route";

export { Route, RouteProps };

export function Router({ children }) {
  const [, org, repo, path] = window.location.pathname.split("/");

  return (
    <div>
      {Children.map(children, (child: VNode<RouteProps>, i) => {
        if (child.props.path !== path) {
          return null;
        }

        return child;
      })}
    </div>
  );
}
