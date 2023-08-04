import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: './src',
      },
      { find: 'Assets', replacement: path.resolve(__dirname, './src/assets/') },
      {
        find: 'Components',
        replacement: path.resolve(__dirname, './src/components/'),
      },
      {
        find: 'Features',
        replacement: path.resolve(__dirname, './src/features/'),
      },
      { find: 'Hooks', replacement: path.resolve(__dirname, './src/hooks/') },
      {
        find: 'Layouts',
        replacement: path.resolve(__dirname, './src/layouts/'),
      },
      { find: 'Pages', replacement: path.resolve(__dirname, './src/pages/') },
      {
        find: 'Schemas',
        replacement: path.resolve(__dirname, './src/schemas/'),
      },
      { find: 'Store', replacement: path.resolve(__dirname, './src/store/') },
      { find: 'Types', replacement: path.resolve(__dirname, './src/types/') },
    ],
  },
  server: {
    port: 3000,
    open: true,
  },
});
