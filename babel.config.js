module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          test: './test',
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
