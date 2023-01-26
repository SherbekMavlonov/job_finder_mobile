module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.json',
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
          ],
          alias: {
            '@components': './src/components',
            '@navigation': './src/navigation',
            '@typings': './src/typings',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@assets': './src/assets',
            '@features': './src/features',
            '@services': './src/services',
          },
        },
      ],
    ],
  };
};
