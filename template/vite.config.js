import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      name: 'VAR_TOOL_NAME',
      formats: ['umd'],
      fileName: () => 'VAR_TOOL_NAME.js'
    },
  },

  server: {
    port: '3300'
  },

  plugins: [
    cssInjectedByJsPlugin(),
  ]
}