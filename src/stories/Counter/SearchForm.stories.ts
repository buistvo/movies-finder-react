import type { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from '../../components/SearchForm/SearchForm';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'SearchForm',
  component: SearchForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const NoInitialValue: Story = {
  args: {},
};

export const WithInitialValue: Story = {
  args: { initialValue: 'Blade Runner 2049' },
};
