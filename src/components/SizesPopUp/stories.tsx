import { Story, Meta } from '@storybook/react/types-6-0'
import SizesPopUp, { Props } from '.'

export default {
  title: 'SizesPopUp',
  component: SizesPopUp
} as Meta

export const Default: Story<Props> = (args) => <SizesPopUp {...args} />
