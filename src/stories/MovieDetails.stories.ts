import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import type { Meta, StoryObj } from '@storybook/react';
import { MOVIE_MOCK } from '../mocks/movie';

const meta = {
  title: 'MovieDetails',
  component: MovieDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialState: Story = {
  args: {
    movie: MOVIE_MOCK,
  },
};
