const baseTheme = {
  fonts: {
    family: {
      ui:
        "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    },
    size: {
      tiny: 12,
      micro: 13,
      small: 14,
      subtitle: 16,
      body: 16,
      dek: 22,
      section: 20,
      title: 28,
    },
  },
  colors: {
    brand: "#D44F3E",
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: "#FFF",
    surface: "#E0E6EB",
    text: "#2D3146",
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: "#001628",
    surface: "#003055",
    text: "#E0E6EB",
  },
};
