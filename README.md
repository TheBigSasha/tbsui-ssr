# TBSUI SSR

A library of components which can all be shipped with zero javascript using NextJS. For more complex components, including reactive animations, checkout [tbsui](https://www.npmjs.com/package/tbsui).

## [What this library won't do](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive)

- Add interactivity and event listeners (onClick(), onChange(), etc)
- Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)
- Use browser-only APIs
- Use custom hooks that depend on state, effects, or browser-only APIs

## Customization

Override [default scss variables](https://github.com/TheBigSasha/tbsui-ssr/blob/main/src/lib/styles/variables/default-variables.scss) to style the library! If you want to use default values, import `default-values.scss`

## Installation

```bash
pnpm i tbsui-ssr
```

## Features

- Zero client side JS -- these components are css only
- 100% NextJS 13 Compatible
- ⚛️ [React 18](https://reactjs.org/)
- 📚 [Storybook 7](https://storybook.js.org/) - Components preview
- 🖌️ SCSS Modules
- ⏩ [Vite](https://vitejs.dev/) - Run and build the project blazingly fast!
- ⚡ [Vitest](https://vitest.dev/) - Components Unit Testing
- 📐 [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Formatting and Linting
- 🌟 [Typescript](https://www.typescriptlang.org/)
- 🐶 [Husky](https://typicode.github.io/husky) & [Lint Staged](https://www.npmjs.com/package/lint-staged) - Pre-commit Hooks
- ⏰ [Release Please](https://github.com/googleapis/release-please) — Generate the changelog with the release-please workflow
- 👷 [Github Actions](https://github.com/features/actions) — Releasing versions to NPM
- Initial components setup using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## Using the library in a React frontend app (NextJS)

- Install the library running `pnpm i tbsui-ssr`
- In your root layout / `_app.tsx`, import the stylesheets as follows:

```typescript
/*
You must specify css variables to theme this library, and provide a `tailwind-compatible.scss` file which defines tailwind-style values (or use the `default-variables.css` file from tbsui-ssr/dist/assets).
*/
import 'tbsui-ssr/dist/assets/default-variables.css' // Use defaults or specify your own compatible variables based on `default-variables.scss` and `tailwind-compatible.scss`

import 'tbsui-ssr/dist/assets/popup-message.css' // and or the stylesheets for whatever components you wish to use
```

- Then, wherever you like, use the components as follows:

```tsx
import { PopupMessage } from 'tbsui-ssr'

const MyComponent = () => {
  return <PopupMessage message="Hello World!" type="success" position="top-right" duration={5000} />
}
```

## Author

[Alexander Aleshchenko](https://sasharesume.com)

## License

[MIT](LICENSE)

```

```
