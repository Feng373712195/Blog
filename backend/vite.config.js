import { defineConfig } from 'vite'
const styleImport = require('vite-plugin-style-import').default
const path = require('path')


export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8080,
    host: true,
  },
  plugins: [
    {
      libraryName: 'antd',
      esModule: true,
      resolveStyle: (name) => {
        return `antd/es/${name}/style/index`
      },
    }
  ]
})
