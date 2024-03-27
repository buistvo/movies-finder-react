import type { Meta, StoryObj } from '@storybook/react';
import { MovieTile } from '../components/MovieTile/MovieTile';
import { MOVIE_MOCK } from '../mocks/movie';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'MovieTile',
  component: MovieTile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialState: Story = {
  args: {
    movie: MOVIE_MOCK,
  },
  decorators: [
    (StoryComponent) => (
      <MemoryRouter>
        <StoryComponent />
      </MemoryRouter>
    ),
  ],
};
