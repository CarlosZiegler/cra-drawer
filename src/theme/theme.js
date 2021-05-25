const Colors = {
  white: '#fff',
  black: '#000',
  primary: {
    lighter: '#d3e5ff',
    light: '#3291ff',
    medium: '#0070f3',
    dark: '#0761d1',
  },
  success: {
    lighter: '#E4FFCA',
    light: '#66EE50',
    medium: '#18AB00',
    dark: '#0D6000',
  },
  error: {
    lighter: '#f7d4d6',
    light: '#ff1a1a',
    medium: '#ee0000',
    dark: '#c50000',
  },
  warning: {
    lighter: '#ffefcf',
    light: '#f7b955',
    medium: '#f5a623',
    dark: '#ab570a',
  },
  violet: {
    lighter: '#e3d7fc',
    light: '#8a63d2',
    medium: '#7928ca',
    dark: '#4c2889',
  },
  cyan: {
    lighter: '#aaffec',
    light: '#79ffe1',
    medium: '#50e3c2',
    dark: '#29bc9b',
  },
  highlight: {
    purple: '#f81ce5',
    magenta: '#eb367f',
    pink: '#ff0080',
  },
  grayscale: {
    accents1: '#fafafa',
    accents2: '#eaeaea',
    accents3: '#999999',
    accents4: '#888888',
    accents5: '#666666',
    accents6: '#444444',
    accents7: '#333333',
    accents8: '#111111',
  },
};

const screenSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktopL: `(min-width: ${screenSize.desktop})`,
};

export const theme = {
  colors: {
    ...Colors,
  },
  device: {
    ...device,
  },
};
