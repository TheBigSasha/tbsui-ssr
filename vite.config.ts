import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite'
import { name } from './package.json'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    css: {
      modules: {
        scopeBehaviour: 'local',
        hashPrefix: 'tbsui-ssr-r44fy4',
        localsConvention: 'camelCaseOnly',
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/lib/index.ts'),
        name,
        formats: ['es', 'umd'],
        fileName: (format) => `${name}.${format}.js`,
      },
      rollupOptions: {
        external: [
          'react',
          'react/jsx-runtime',
          'react-dom',
          'src/lib/styles/default-variables.scss',
          'default-variables.scss',
          'tailwind-compatible.scss',
        ],
        output: {
          globals: {
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  })
}
// https://vitejs.dev/config/
export default app
