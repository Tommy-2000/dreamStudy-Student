import fs from 'fs';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { sources } from 'webpack';

const newConfiguration = {
  ...currentConfiguration,
  plugins: [
    ...currentConfiguration.plugins,
    // 1. Ensure wasm file availability
    new (class CopySkiaPlugin {
      apply(compiler) {
        compiler.hooks.thisCompilation.tap('AddSkiaPlugin', compilation => {
          compilation.hooks.processAssets.tapPromise(
            {
              name: 'copy-skia',
              stage:
                compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL
            },
            async () => {
              const src =
                require.resolve('canvaskit-wasm/bin/full/canvaskit.wasm');
              if (!compilation.getAsset(src)) {
                compilation.emitAsset(
                  '/canvaskit.wasm',
                  new sources.RawSource(await fs.promises.readFile(src))
                );
              }
            }
          );
        });
      }
    })(),
    // 2. Polyfill fs and path modules

    new NodePolyfillPlugin()
  ],
  alias: {
    ...currentConfiguration.alias,
    // 3. Suppress reanimated module warning
    // This assumes Reanimated is installed, if not you can use false.
    'react-native-reanimated/package.json':
      require.resolve('react-native-reanimated/package.json'),
    'react-native-reanimated': require.resolve('react-native-reanimated'),
    'react-native/Libraries/Image/AssetRegistry': false
  }
};
