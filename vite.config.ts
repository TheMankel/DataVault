import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'Assets', replacement: path.resolve(__dirname, './src/assets/') },
      {
        find: 'Components',
        replacement: path.resolve(__dirname, './src/components/'),
      },
      {
        find: 'Features',
        replacement: path.resolve(__dirname, './src/features/'),
      },
      {
        find: 'Helpers',
        replacement: path.resolve(__dirname, './src/helpers/'),
      },
      { find: 'Hooks', replacement: path.resolve(__dirname, './src/hooks/') },
      {
        find: 'Layouts',
        replacement: path.resolve(__dirname, './src/layouts/'),
      },
      { find: 'Mock', replacement: path.resolve(__dirname, './src/mock/') },
      { find: 'Pages', replacement: path.resolve(__dirname, './src/pages/') },
      {
        find: 'Schemas',
        replacement: path.resolve(__dirname, './src/schemas/'),
      },
      { find: 'Store', replacement: path.resolve(__dirname, './src/store/') },
      { find: 'Theme', replacement: path.resolve(__dirname, './src/theme/') },
      { find: 'Types', replacement: path.resolve(__dirname, './src/types/') },
    ],
  },
  server: {
    port: 3000,
    open: true,
  },
});
