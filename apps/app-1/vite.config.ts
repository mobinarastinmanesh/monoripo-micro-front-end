import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isDev = mode === 'dev';

  return defineConfig({
    build: {
      target: 'esnext',
      modulePreload: false,
      minify: false,
      cssCodeSplit: false,
      commonjsOptions: {
        include: ['node_modules/**'],
      },
    },
    optimizeDeps: {
      include: ['tailwind-config'],
    },
    plugins: [
      react(),
      svgr(),
      federation({
        name: 'app1',
        filename: 'remoteEntry.js',
        exposes: {
          './Button': 'src/components/button/button.tsx',
          './Input': 'src/components/input/input.tsx',
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
      port: 3000,
      open: true,
      cors: true,
    },
    preview: {
      host: true,
      port: 3000,
    },
    define: {
      'import.meta.env.MODE': JSON.stringify(mode),
      'import.meta.env.DEV': isDev,
    },
  });
};
