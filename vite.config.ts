import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite'
import { name } from './package.json'
import sassDts from 'vite-plugin-sass-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
      sassDts(),
      libInjectCss(),
    ],
    css: {
      modules: {
        scopeBehaviour: 'local',
        hashPrefix: 'tbsui-ssr',
      },
    },
    build: {
      sourcemap: false,
      cssCodeSplit: true,
      lib: {
        entry: {
          index: path.resolve(__dirname, 'src/lib/index.ts'),
          styles: path.resolve(__dirname, 'src/lib/styles/index.ts'),
        },
        name,
        formats: ['es'],
        fileName: (format) => `${name}.${format}.js`,
      },
      rollupOptions: {
        input: Object.fromEntries(
          glob.sync('src/lib/**/index.{ts,tsx}').map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
        ),
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
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
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
