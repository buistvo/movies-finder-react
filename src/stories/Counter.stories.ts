import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from '../components/Counter/Counter';

const meta = {
  title: 'Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithProvidedCount: Story = {
  args: {
    initialCount: 42,
  },
};
