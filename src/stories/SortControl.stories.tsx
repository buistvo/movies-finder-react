import { SortControl } from '../components/SortControl/SortControl';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SortControl',
  component: SortControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SortControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialState: Story = {
  args: {
    sortList: ['Release Date', 'Title'],
  },
};
