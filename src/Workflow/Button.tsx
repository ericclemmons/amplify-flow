import { h } from "preact";
import { useGitHubAPI } from "../hooks/useGitHubAPI";

type Props = {
  href: "issues" | "pulls";
  query: string;
  tooltip?: string;
};

export function Button({ children, href, query, tooltip = null }) {
  const [result] = useGitHubAPI(query);

  const buttonUrl = new URL(href, document.baseURI);
  buttonUrl.searchParams.set("q", query);

  const isActive = buttonUrl.href === window.location.href;

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
      href={buttonUrl.href}
      type="button"
    >
      {children}{" "}
      {result ? (
        <span class="Counter Counter--gray-light">{result.total_count}</span>
      ) : null}
    </a>
  );
}
