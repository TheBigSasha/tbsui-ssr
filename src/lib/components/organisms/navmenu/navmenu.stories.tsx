import React from 'react'
import { NavMenu, NavMenuProps } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NavMenu> = {
  title: 'Organisms/NavMenu',
  component: NavMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NavMenu> = (args: NavMenuProps) => <NavMenu {...args}></NavMenu>

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
