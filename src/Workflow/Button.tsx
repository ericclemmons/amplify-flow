import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useUserLogin } from "../hooks/useUserLogin";

type Props = {
  href: "issues" | "pulls";
  query?: string;
  tooltip?: string;
};

export function Button({ children, href, query = null, tooltip = null }) {
  const userLogin = useUserLogin();
  const [count, setCount] = useState(null);
  const buttonUrl = new URL(href, document.baseURI);

  if (query) {
    buttonUrl.searchParams.set("q", query);
  }

  const isActive = buttonUrl.href === window.location.href;

  useEffect(() => {
    const apiUrl = new URL("https://api.github.com/search/issues");

    apiUrl.searchParams.set(
      "q",
      query.split("@me").join(userLogin).concat(" repo:aws-amplify/amplify-js")
    );

    fetch(apiUrl.href)
      .then((res) => res.json())
      .then((data) => setCount(data.total_count));
  }, [buttonUrl.href]);

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
      {Number.isInteger(count) && (
        <span class="Counter Counter--gray-light">{count}</span>
      )}
    </a>
  );
}
