import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';

/**
 * Trick to use Vite server.open option on macOS
 * @see https://github.com/facebook/create-react-app/pull/1690#issuecomment-283518768
 */
process.env.BROWSER = 'open';

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      name: 'VAR_TOOL_NAME',
      formats: ['umd', 'es'],
      fileName: 'VAR_TOOL_NAME'
    },
  },

  server: {
    port: 3300,
    open: true,
  },

  plugins: [
    cssInjectedByJsPlugin(),
  ]
}