import { Themes } from "../.";

const getPreference = (): MediaQueryList => {
  return (
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")) ||
    null
  );
};

export const getSystemTheme = () => {
  const preference = getPreference();
  return preference && preference.matches ? "dark" : "light";
};

export const onSystemThemeChange = (callback: (theme: Themes) => void) => {
  const preference = getPreference();
  const preferenceListener = (e: any) => callback(e.matches ? "dark" : "light");
  preference && preference.addListener(preferenceListener);
  return () => preference && preference.removeListener(preferenceListener);
};
