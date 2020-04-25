import { h } from "preact";

type Props = {
  href: "issues" | "pulls";
  query?: string;
  tooltip?: string;
};

export function Button({ children, href, query = null, tooltip = null }) {
  const url = new URL(href, document.baseURI);

  if (query) {
    url.searchParams.set("q", query);
  }

  const isActive = url.href === window.location.href;

  return (
    <a
      aria-label={tooltip}
      class={[
        "btn BtnGroup-item btn-sm",
        tooltip ? "tooltipped tooltipped-s" : null,
        isActive ? "btn-outline" : null,
      ]
        .filter(Boolean)
        .join(" ")}
      href={url.href}
      type="button"
    >
      {children}
    </a>
  );
}
