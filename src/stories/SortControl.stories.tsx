import { SortControl } from '../components/SortControl/SortControl';
import type { Meta, StoryObj } from '@storybook/react';
import { SORT_OPTIONS } from '../constants/sort-options';

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
    sortList: SORT_OPTIONS,
    initialValue: SORT_OPTIONS[0].field,
  },
};
