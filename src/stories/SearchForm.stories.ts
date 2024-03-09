import type { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from '../components/SearchForm/SearchForm';

const meta = {
  title: 'SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoInitialValue: Story = {
  args: {},
};

export const WithInitialValue: Story = {
  args: { initialValue: 'Blade Runner 2049' },
};
