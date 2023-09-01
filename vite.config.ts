import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite'
import { name } from './package.json'
import sassDts from 'vite-plugin-sass-dts'

//TOOD: https://rollupjs.org/configuration-options/ see glob section for input so we can split up the components and styles into individual js and css files

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
      sassDts(),
    ],
    css: {
      modules: {
        scopeBehaviour: 'local',
        hashPrefix: 'tbsui-ssr',
        localsConvention: 'camelCaseOnly',
      },
    },
    build: {
      sourcemap: false,
      cssCodeSplit: true,
      lib: {
        entry: {
          index: path.resolve(__dirname, 'src/lib/index.ts'),
          styles: path.resolve(__dirname, 'src/lib/styles/index.ts'),
          components: path.resolve(__dirname, 'src/lib/components/index.ts'),
        },
        name,
        formats: ['es'],
        fileName: (format) => `${name}.${format}.js`,
      },
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'src/lib/index.ts'),
          styles: path.resolve(__dirname, 'src/lib/styles/index.ts'),
          components: path.resolve(__dirname, 'src/lib/components/index.ts'),
        },
        external: [
          'react',
          'react/jsx-runtime',
          'react-dom',
          ...Object.keys(require('./package.json').dependencies || {}),
          ...Object.keys(require('./package.json').peerDependencies || {}),
          ...Object.keys(require('./package.json').devDependencies || {}),
        ],
        output: {
          globals: {
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
          },
        },
      },
      cssMinify: 'lightningcss',
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  })
}
// https://vitejs.dev/config/
export default app
