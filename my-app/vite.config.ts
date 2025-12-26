import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: '',
  css: {
    preprocessorOptions:{
        less: {
          math: 'always',
          relativeUrls: true,
          javascriptEnabled: true,
          additionalData: `@import url("src/index.less");`
        }
  }
  }
})
