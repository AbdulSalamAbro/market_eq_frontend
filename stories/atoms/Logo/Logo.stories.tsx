import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from '.'

const meta: Meta<typeof Logo> = {
  title: 'atoms/Logo',
  component: Logo,
}

export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  render: () => (
    <div className="bg-slate-950 p-5">
      <Logo />
    </div>
  ),
}
