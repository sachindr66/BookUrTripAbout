import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic'
    })
  ],
  build: {
    // Modern build target for better performance
    target: 'esnext',
    // Optimize build for better performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      },
      mangle: {
        safari10: true
      }
    },
    // Let Vite handle chunking automatically with smart defaults
    rollupOptions: {
      output: {
        // Optimize chunk naming for better caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Optimize asset handling
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    // Enable CSS minification
    cssMinify: true,
    // Report compressed size
    reportCompressedSize: true
  },
  // Optimize dev server
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    },
    // Enable CORS for development
    cors: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-icons/fa',
      'react-icons/gi',
      'react-icons/md',
      'react-icons/tb',
      'react-icons/ai',
      'react-icons/bi',
      'react-icons/bs',
      'react-icons/ci',
      'react-icons/di',
      'react-icons/fc',
      'react-icons/fi',
      'react-icons/go',
      'react-icons/gr',
      'react-icons/hi',
      'react-icons/hi2',
      'react-icons/im',
      'react-icons/io',
      'react-icons/io5',
      'react-icons/lia',
      'react-icons/lu',
      'react-icons/pi',
      'react-icons/ri',
      'react-icons/rx',
      'react-icons/si',
      'react-icons/sl',
      'react-icons/tfi',
      'react-icons/vsc'
    ],
    // Force optimization of these dependencies
    force: true
  },
  // Enable experimental features for better performance
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `/${filename}` }
      } else {
        return { relative: true }
      }
    }
  }
})