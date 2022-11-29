import path from 'path';

export default ({ command }) => {
  if (command === 'build') return {
    build: {
      rollupOptions: {
        input: {
          VAR_TOOL_NAME: path.resolve(__dirname, 'src/index.ts'),
        },

        output: {
          name: 'VAR_TOOL_NAME',
          format: 'umd',
          dir: 'dist',
          entryFileNames: '[name].js',
        },

        preserveEntrySignatures: 'strict',
      },
    },
  };

  return {
    server: {
      port: '3300'
    }
  };
}