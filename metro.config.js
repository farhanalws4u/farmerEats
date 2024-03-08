const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

const assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg');
const sourceExts = [...defaultConfig.resolver.sourceExts, 'svg'];

module.exports = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts,
    sourceExts,
  },
});
