import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../components/Dialog/Dialog';

const meta = {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialState: Story = {
  args: {
    title: 'Add movie',
    children: 'test',
  },
};
