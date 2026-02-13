import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use '.' instead of process.cwd() to prevent type errors with the Process interface
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    base: './', // Importante para o GitHub Pages (caminhos relativos)
    define: {
      // Injeta a variável de ambiente no código durante o build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    build: {
      outDir: 'dist',
    }
  };
});