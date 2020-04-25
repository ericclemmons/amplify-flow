import { useEffect, useState } from "preact/hooks";
import { useUserLogin } from "./useUserLogin";

const fromStorage = (query) => {
  const cached = window.sessionStorage.getItem(query);

  return cached ? JSON.parse(cached) : null;
};

export function useGitHubAPI(query: string) {
  const userLogin = useUserLogin();
  const [result, setResult] = useState(fromStorage(query));

  useEffect(() => {
    if (result) {
      return;
    }

    const apiUrl = new URL("https://api.github.com/search/issues");

    apiUrl.searchParams.set(
      "q",
      query.split("@me").join(userLogin).concat(" repo:aws-amplify/amplify-js")
    );

    fetch(apiUrl.href)
      .then((res) => res.json())
      .then((data) => {
        window.sessionStorage.setItem(query, JSON.stringify(data));

        setResult(fromStorage(query));
      });
  }, [query, result]);

  return [result];
}
