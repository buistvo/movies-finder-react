import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../components/Dialog/Dialog';
import { MovieForm } from '../components/MovieForm/MovieForm';
import { Movie } from '../types/movie';
import { GENRE_LIST_OPTIONS_MOCK } from '../mocks/genre-list';
import { MOVIE_MOCK } from '../mocks/movie';
import { ConfirmButton, DeleteForm } from '../App.styled';

const meta = {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StringAsChildren: Story = {
  args: {
    title: 'Dialog',
    children: 'Hello from dialog!',
  },
};

export const AddMovie: Story = {
  args: {
    title: 'ADD MOVIE',
    children: (
      <MovieForm
        onSubmit={function (movie: Movie): void {
          console.log('add');
        }}
        genreOptions={GENRE_LIST_OPTIONS_MOCK}
      ></MovieForm>
    ),
  },
};

export const EditMovie: Story = {
  args: {
    title: 'EDIT MOVIE',
    children: (
      <MovieForm
        movie={MOVIE_MOCK}
        onSubmit={function (movie: Movie): void {
          console.log('add');
        }}
        genreOptions={GENRE_LIST_OPTIONS_MOCK}
      ></MovieForm>
    ),
  },
};

export const DeleteMovie: Story = {
  args: {
    title: 'DELETE MOVIE',
    children: 'Are you sure you want to delete this movie',
    onConfirm: () => console.log('delete'),
  },
};
