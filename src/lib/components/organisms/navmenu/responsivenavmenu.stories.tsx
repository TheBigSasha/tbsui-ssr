import React from 'react'
import {
  NeoNavMenuProps,
  ResponsiveNavMenu,
  NAVMENU_HEADER_ITEM_CLASS_EXPANDED,
  NAVMENU_HEADER_ITEM_CLASS_COLLAPSED,
  NAVMENU_HEADER_SHRINK_ITEM_CLASS,
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
  <div style={{ width: '100vw', position: 'fixed', top: 0, left: 0 }}>
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
    { link: <a href="#">Dynamic item goes</a> },
    { link: <a href="#">From size xl</a> },
    { link: <a href="#">To size sm</a> },
    { link: <a href="#">When the header </a> },
    { link: <a href="#">Switches between</a> },
    { link: <a href="#">Small & Large modes</a> },
  ],
  scrollCollapsed: true,
  fillScreen: 'never',
  scrollCollapse: 'card',
  headerItem: (
    <>
      <p style={{ margin: 'auto', display: 'flex', flexDirection: 'column', color: 'red' }}>
        <div className={NAVMENU_HEADER_SHRINK_ITEM_CLASS} style={{ margin: 0, display: 'inline-block' }}>
          <p style={{ margin: 0 }}>Dynamic</p>
        </div>
        <p style={{ margin: 0 }}>Header</p>
        <div />
      </p>
    </>
  ),
  headerItemPosition: 'left',
}

export const ScrollCollapsed = Template.bind({})
ScrollCollapsed.args = {
  links: [
    { link: <a href="#">Link 1</a> },
    { link: <a href="#">Link 2</a> },
    { link: <a href="#">Link 3</a> },
    { link: <a href="#">Link 4</a> },
    { link: <a href="#">Link 5</a> },
    { link: <a href="#">Link 6</a> },
  ],
  scrollCollapsed: false,
  scrollCollapse: 'card',
  headerItem: (
    <>
      <p style={{ margin: 'auto', fontSize: '100%', color: 'red' }}>
        <p className={NAVMENU_HEADER_ITEM_CLASS_EXPANDED}>Expanded</p>
        Header
        <div />
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
