import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite'
import sassDts from 'vite-plugin-sass-dts'
import { extname, relative, resolve } from 'path'
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
      dts({ include: ['lib'] }),
      // libInjectCss({
      //   entry: {
      //     index: 'src/lib/index.ts', // Don't forget the main entry!
      //     ...scanEntries(['src/lib']),
      //   },
      //   rollupOptions: {
      //     output: {
      //       assetFileNames: 'assets/[hash][extname]',
      //     },
      //   },
      // }),
    ],
    css: {
      modules: {
        generateScopedName: 'ts[hash:base64:4]',
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/lib/index.ts'),
        formats: ['es'],
      },
      rollupOptions: {
        external: [
          'react',
          'react/jsx-runtime',
          'react-dom',
          ...Object.keys(require('./package.json').dependencies || {}),
          ...Object.keys(require('./package.json').peerDependencies || {}),
          ...Object.keys(require('./package.json').devDependencies || {}),
        ],
        input: {
          ...Object.fromEntries(
            // https://rollupjs.org/configuration-options/#input
            glob.sync('src/**/index.{ts,tsx}').map((file) => [
              // 1. The name of the entry point
              // lib/nested/foo.js becomes nested/foo
              relative('src/lib', file.slice(0, file.length - extname(file).length)),
              // 2. The absolute path to the entry file
              // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
              fileURLToPath(new URL(file, import.meta.url)),
            ]),
          ),
          ...Object.fromEntries(
            glob.sync('src/**/{default-variables, tailwind-compatible}.scss').map((file) => [
              // 1. The name of the entry point
              // lib/nested/foo.js becomes nested/foo
              relative('src/lib', file.slice(0, file.length - extname(file).length)),
              // 2. The absolute path to the entry file
              // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
              fileURLToPath(new URL(file, import.meta.url)),
            ]),
          ),
        },

        output: {
          globals: {
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
          },
          assetFileNames: (assetInfo) => {
            const name = (assetInfo.name || '[hash]').replace(/(\.module.css)/, '.css')
            return `assets/${name}`
          },
          entryFileNames: '[name].js',
          preserveModules: true,
        },
      },
      cssMinify: 'lightningcss',
      cssCodeSplit: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  })
}
// https://vitejs.dev/config/
export default app
