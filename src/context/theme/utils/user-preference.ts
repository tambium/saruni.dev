import { ThemeModes } from "@saruni-ui/theme";
import { isBrowser } from "../../../utils/global";

const getPreference = (): MediaQueryList => {
  if (!isBrowser) return null;

  return (
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")) ||
    null
  );
};

export const getSystemMode = () => {
  const preference = getPreference();
  return preference && preference.matches ? "dark" : "light";
};

export const onSystemModeChange = (callback: (mode: ThemeModes) => void) => {
  const preference = getPreference();
  const preferenceListener = (e: any) => callback(e.matches ? "dark" : "light");
  preference && preference.addListener(preferenceListener);
  return () => preference && preference.removeListener(preferenceListener);
};
