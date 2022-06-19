import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const cardColors = {
  cardColorGreen: '#85C6BA',
  cardColorBrown: '#C8B78D',
  cardColorPink: '#DFA3CB',
  cardColorPurple: '#A3A5DF',
  cardColorRed: '#F36060',
  cardColorYellow: '#E8F360',
}

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      btnColor: '#B2D6C4',
      ...DefaultTheme.colors,
      cardColors
    },
  },
  dark: {
    ...DarkTheme,
    btnColor: '#B2D6C4',
    colors: {
      ...DarkTheme.colors,
      cardColors
    },
  },
};