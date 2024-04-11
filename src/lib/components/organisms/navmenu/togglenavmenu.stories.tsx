import React from 'react'
import { NavMenuProps, ToggleNavMenu } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ToggleNavMenu> = {
  title: 'Organisms/ToggleNavMenu',
  component: ToggleNavMenu,
  parameters: {
    isFullscreen: true,
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ToggleNavMenu> = (args: NavMenuProps) => (
  <div style={{ maxWidth: 1200, width: '90%' }}>
    <ToggleNavMenu {...args}></ToggleNavMenu>
  </div>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  links: [
    { category: 'Category 1' },
    { link: <a href="#">Link 1</a> },
    { link: <a href="#">Link 2</a> },
    { link: <a href="#">Link 3</a> },
    { category: 'Category 2' },
    { link: <a href="#">Link 4</a> },
    { link: <a href="#">Link 5</a> },
    { link: <a href="#">Link 6</a> },
  ],
}

export const NoCategories = Template.bind({})
NoCategories.args = {
  links: [
    { link: <a href="#">Link 1</a> },
    { link: <a href="#">Link 2</a> },
    { link: <a href="#">Link 3</a> },
    { link: <a href="#">Link 4</a> },
    { link: <a href="#">Link 5</a> },
    { link: <a href="#">Link 6</a> },
  ],
}

export const CollapsibleCategories = Template.bind({})
CollapsibleCategories.args = {
  links: [
    { link: <a href="#">Link 1</a> },
    { link: <a href="#">Link 2</a> },
    { link: <a href="#">Link 3</a> },
    {
      title: <a href="#">CCat 1</a>,
      elements: [{ link: <a href="#">Link 4</a> }, { link: <a href="#">Link 5</a> }, { link: <a href="#">Link 6</a> }],
    },
  ],
}
