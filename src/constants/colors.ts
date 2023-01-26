export enum ColorToken {}

export enum ColorTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Colors = {
  [colorToken in ColorToken]: {
    [colorScheme in ColorTheme]: string;
  };
};

export const colors: Colors = {};
