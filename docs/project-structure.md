# Project Structure

This document outlines the directory structure of the tbsui-ssr project.

```
/Users/sasha/Developer/tbsui-ssr/tbsui-ssr/
├───.eslintrc.js
├───.gitignore
├───.nvmrc
├───.prettierrc
├───CHANGELOG.md
├───eslint.config.js
├───LICENSE
├───package.json
├───pnpm-lock.yaml
├───README.md
├───tsconfig.json
├───Untitled
├───vite.config.ts
├───.git/...
├───.github/
│   └───workflows/
│       ├───release-please.yml
│       ├───run-tests.yml
│       └───storybook-deploy.yml
├───.husky/
│   ├───.gitignore
│   └───pre-commit
├───.storybook/
│   ├───main.ts
│   ├───preview.ts
│   └───vite.config.ts
├───.zed/
│   └───settings.json
└───src/
    ├───vite-env.d.ts
    └───lib/
        ├───index.ts
        ├───storybook-utils.ts
        ├───components/
        │   ├───index.ts
        │   ├───atoms/
        │   │   ├───index.ts
        │   │   └───at-button/
        │   │       ├───at-button.module.scss
        │   │       ├───at-button.module.scss?used.json
        │   │       ├───at-button.stories.tsx
        │   │       ├───at-button.test.tsx
        │   │       ├───AtButton.tsx
        │   │       └───index.ts
        │   ├───molecules/
        │   │   ├───index.ts
        │   │   └───popup-message/
        │   │       ├───index.ts
        │   │       ├───popup-message.module.scss
        │   │       ├───popup-message.module.scss?used.json
        │   │       ├───popup-message.stories.tsx
        │   │       ├───popup-message.test.tsx
        │   │       └───PopupMessage.tsx
        │   └───organisms/
        │       ├───index.ts
        │       ├───layers-view/
        │       │   ├───index.ts
        │       │   ├───layers-view.module.scss
        │       │   ├───layers-view.stories.tsx
        │       │   └───LayersView.tsx
        │       └───navmenu/
        │           ├───index.ts
        │           ├───navmenu.module.scss
        │           ├───navmenu.module.scss?used.json
        │           ├───NavMenu.tsx
        │           ├───ResponsiveNavMenu.mdx
        │           └───responsivenavmenu.stories.tsx
        └───styles/
            ├───responsive.module.scss
            └───variables/
                ├───default-variables.scss
                └───tailwind-compatible.scss
```

## Root Directory

*   `.eslintrc.js`, `eslint.config.js`: Configuration for ESLint, a static code analysis tool.
*   `.gitignore`: Specifies intentionally untracked files to ignore.
*   `.nvmrc`: Specifies the Node.js version to use for this project.
*   `.prettierrc`: Configuration for Prettier, a code formatter.
*   `CHANGELOG.md`: A log of changes to the project.
*   `LICENSE`: The project's license.
*   `package.json`: Contains metadata about the project and its dependencies.
*   `pnpm-lock.yaml`: The lockfile for the pnpm package manager.
*   `README.md`: The main README for the project.
*   `tsconfig.json`: The configuration file for the TypeScript compiler.
*   `vite.config.ts`: The configuration file for Vite, a build tool.

## `.github`

*   This directory contains GitHub-specific files, such as workflow definitions for GitHub Actions.

## `.husky`

*   This directory contains Git hooks, which are scripts that run automatically at certain points in the Git workflow.

## `.storybook`

*   This directory contains configuration files for Storybook, a tool for developing UI components in isolation.

## `.zed`

*   This directory contains settings for the Zed code editor.

## `src`

*   This is the main source code directory.
    *   `lib`: The main library code.
        *   `components`: Contains the React components, organized by Atomic Design principles (atoms, molecules, organisms).
        *   `styles`: Contains the global styles and variables.
