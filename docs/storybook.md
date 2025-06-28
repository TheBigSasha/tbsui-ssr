# Storybook

This document describes how to use Storybook in the tbsui-ssr project.

## What is Storybook?

Storybook is a tool for developing UI components in isolation. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

## How to run Storybook

To run Storybook, run the following command:

```bash
pnpm storybook
```

This will start the Storybook development server and open it in your browser.

## How to write stories

Stories are defined in `.stories.tsx` files. Each story represents a single state of a component.

Here is an example of a story for the `AtButton` component:

```tsx
import type { Meta, StoryObj } from '@storybook/react';

import { AtButton } from './AtButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/AtButton',
  component: AtButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof AtButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
```
