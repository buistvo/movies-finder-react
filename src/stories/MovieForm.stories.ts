import type { Meta, StoryObj } from '@storybook/react';
import { MovieForm } from '../components/MovieForm/MovieForm';
import { GENRE_LIST_OPTIONS_MOCK } from '../mocks/genre-list';

const meta = {
  title: 'MovieForm',
  component: MovieForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MovieForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialState: Story = {
  args: {
    onSubmit(movie) {
      console.log('submit');
    },
    genreOptions: GENRE_LIST_OPTIONS_MOCK,
  },
};
