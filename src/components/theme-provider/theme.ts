const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    brand: '#D44F3E',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE',
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#001933',
    brand: '#D44F3E',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#D44F3E',
  },
};
