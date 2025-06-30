const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
  
const config = getDefaultConfig(__dirname);
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'react-dom': require.resolve('react-native'), // Alias react-dom to react-native
};
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs', 'cjs'];
  
module.exports = withNativeWind(config, { input: './global.css' });