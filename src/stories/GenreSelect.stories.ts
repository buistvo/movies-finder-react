import type { Meta, StoryObj } from '@storybook/react';
import { GenreSelect } from '../components/GenreSelect/GenreSelect';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'GenreSelect',
  component: GenreSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof GenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const NoInitialValue: Story = {
  args: {
    genreList: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
  },
};

export const WithInitialValue: Story = {
  args: {
    genreList: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
    initialSelectedGenre: 'COMEDY',
  },
};
