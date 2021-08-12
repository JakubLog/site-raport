export interface themeProps {
  theme: {
    colors: {
      purpleDarken: string;
      purpleDark: string;
      purple: string;
      purpleLight: string;
      purpleLighten: string;
      white: string;
      error: string;
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
    white: '#eee',
    error: 'hsl(0, 90%, 55%)'
  },
  shadows: {
    primary: '0 5px 5px rgba(0, 0, 0, 0.25)'
  }
};
