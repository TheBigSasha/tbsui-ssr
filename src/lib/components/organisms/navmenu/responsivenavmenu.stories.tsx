import React from 'react'
import {
  NeoNavMenuProps,
  ResponsiveNavMenu,
  NAVMENU_HEADER_ITEM_CLASS_EXPANDED,
  NAVMENU_HEADER_ITEM_CLASS_COLLAPSED,
} from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ResponsiveNavMenu> = {
  title: 'Organisms/ResponsiveNavMenu',
  component: ResponsiveNavMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ResponsiveNavMenu> = (args: NeoNavMenuProps) => (
  <div style={{ width: '100vw' }}>
    <ResponsiveNavMenu {...args}></ResponsiveNavMenu>
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
  headerItem: <a href="#">Header Item</a>,
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
  headerItem: (
    <>
      <p style={{ margin: 'auto', fontSize: '100%' }}>
        <p className={NAVMENU_HEADER_ITEM_CLASS_EXPANDED}>Expanded</p>
        Header
        <span className={NAVMENU_HEADER_ITEM_CLASS_COLLAPSED}> Collapsed</span>
      </p>
    </>
  ),
  headerItemPosition: 'left',
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
