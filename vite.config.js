import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],

  server:{
    host: '10.176.16.134',
    port: 5178
  }
})
