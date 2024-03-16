import type { Meta, StoryObj } from '@storybook/react';
import { GenreSelect } from '../components/GenreSelect/GenreSelect';
import { GENRE_LIST } from '../constants/genre-list-options';

const meta = {
  title: 'GenreSelect',
  component: GenreSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoInitialValue: Story = {
  args: {
    genreList: GENRE_LIST,
  },
};

export const WithInitialValue: Story = {
  args: {
    genreList: GENRE_LIST,
    initialSelectedGenre: 'COMEDY',
  },
};
