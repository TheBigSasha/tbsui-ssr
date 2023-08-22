import React from 'react'
import { PopupMessageProps, PopupMessage } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof PopupMessage> = {
  title: 'Molecules/PopupMessage',
  component: PopupMessage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    variant: {
      options: ['INFO', 'WARNING', 'ERROR', 'SUCCESS'],
      control: {
        type: 'select',
        label: {
          INFO: 'INFO',
          WARNING: 'WARNING',
          ERROR: 'ERROR',
          SUCCESS: 'SUCCESS',
        },
      },
    },
    delay: { options: [0, 1, 5, 10], control: { type: 'select' }, defaultValue: 1 },
  },
}

export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PopupMessage> = (args: PopupMessageProps) => (
  <PopupMessage {...args}>
    <p className={'font-sans m-0'}>Popup message body goes here lorem ipsum dolor sit amet.</p>
  </PopupMessage>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Info',
  variant: 'INFO',
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'Warning',
  variant: 'WARNING',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Error',
  variant: 'ERROR',
}

export const Success = Template.bind({})
Success.args = {
  label: 'Success',
  variant: 'SUCCESS',
}
