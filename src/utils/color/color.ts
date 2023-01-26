import {Appearance, ColorSchemeName} from 'react-native';

import {colors, ColorTheme, ColorToken} from '../../constants/colors';

export const isValidColorScheme = (
  scheme: ColorSchemeName,
): scheme is ColorTheme => {
  if (scheme) {
    return Object.keys(ColorTheme).includes(scheme.toUpperCase());
  }
  return false;
};

export const getDynamicColor = (colorToken: ColorToken): string => {
  const colorScheme = Appearance.getColorScheme();
  if (isValidColorScheme(colorScheme)) {
    return colors[colorToken][colorScheme];
  }
  return colors[colorToken].light;
};
