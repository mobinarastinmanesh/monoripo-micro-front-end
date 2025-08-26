/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => ({
  server: {
    host: true,
    port: 4201,
    open: true,
  },
  preview: {
    host: true,
    port: 4201,
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    commonjsOptions: {
      include: ['node_modules/**'],
    },
  },
  plugins: [
    react(),
    federation({
      name: 'app2',
      remotes: {
        app1: 'http://localhost:3000/dist/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
}));
