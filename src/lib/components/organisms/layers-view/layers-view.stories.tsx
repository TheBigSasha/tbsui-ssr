import React from 'react'
import { LayersView, LayersViewProps } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LayersView> = {
  title: 'Organisms/LayersView',
  component: LayersView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

export default meta

const SampleLayer = ({ index }: { index: number }) => {
  return (
    <div
      style={{
        backgroundColor: `rgba(${Math.round(Math.random() * 254)}, ${Math.round(Math.random() * 254)}, ${Math.round(
          Math.random() * 254,
        )})`,
        width: '100%',
        height: '100%',
        opacity: 0.7,
        aspectRatio: 1,
      }}
    >
      <h1 style={{ color: 'white' }}>{index}</h1>
    </div>
  )
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof LayersView> = (args: LayersViewProps) => <LayersView {...args}></LayersView>

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  layers: Array(4)
    .fill(0)
    .map((_, index) => <SampleLayer index={index} />),
  isControllingLayerSizing: true,
}

export const EightCards = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EightCards.args = {
  layers: Array(8)
    .fill(0)
    .map((_, index) => <SampleLayer index={index} />),
  isControllingLayerSizing: true,
}
