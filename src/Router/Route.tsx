import { h } from "preact";
import { FunctionComponent } from "preact/compat";

export type RouteProps = {
  path: string;
};

export const Route: FunctionComponent<RouteProps> = ({ children }) => {
  return <div>{children}</div>;
};
