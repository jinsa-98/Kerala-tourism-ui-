import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    
  ],

  server:{
    host: '10.176.16.134',
    port: 5178
  }
})
