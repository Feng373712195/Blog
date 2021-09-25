import { defineConfig } from 'vite'
const path = require('path')

console.log('come back')

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8080,
    host: true,
  },
})
