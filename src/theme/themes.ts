import type { PrismTheme } from "prism-react-renderer";

const baseTheme = {
  fonts: {
    family: {
      ui:
        "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      mono:
        "'IBM Plex Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
    size: {
      tiny: 12,
      micro: 13,
      small: 14,
      body: 16,
      subtitle: 18,
      dek: 22,
      section: 20,
      title: 28,
      supertitle: 42,
    },
  },
  colors: {
    white: "#FFF",
    brand: "#CC2A48",
    brandSubdued: "#B72B44",
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: "#FFF",
    surface: "#F7F7F7",
    text: "#2D3146",
    textSubtle: "#687386",
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: "#1D1B1C",
    surface: "#262425",
    surfaceSubdued: "#242222",
    text: "#E0E6EB",
    textSubtle: "#A3ACBA",
  },
};

export const codeTheme: PrismTheme = {
  plain: {
    color: "#d6deeb",
    backgroundColor: darkTheme.colors.surface,
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "#A4CDFE",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#a4cdfe",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#86DABA",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
  ],
};
