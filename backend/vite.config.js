import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

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
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            console.log(name , 'name')
            return `antd/es/${name}/style/index`
          }
        }
      ]
    })
  ]
})
