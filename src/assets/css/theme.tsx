export interface themeProps {
  theme: {
    colors: {
      purpleDarken: string;
      purpleDark: string;
      purple: string;
      purpleLight: string;
      purpleLighten: string;
      white: string;
    };
    shadows: {
      primary: string;
    };
  };
}

export const theme = {
  colors: {
    purpleDarken: '#05001A',
    purpleDark: '#313044',
    purple: '#605D74',
    purpleLight: '#928FA7',
    purpleLighten: '#C7C4DE',
    white: '#eee'
  },
  shadows: {
    primary: '0 5px 5px rgba(0, 0, 0, 0.25)'
  }
};
