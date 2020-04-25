import { useEffect } from "preact/hooks";

export function useUserLogin() {
  const userLoginMeta = document.querySelector("meta[name=user-login]");
  const userLogin =
    userLoginMeta instanceof HTMLMetaElement ? userLoginMeta.content : null;

  useEffect(() => {
    if (!userLogin) {
      window.location.href =
        "/login?return_to=%2Faws-amplify%2Famplify-js%2Fissues";
    }
  }, [userLogin]);

  return userLogin;
}
