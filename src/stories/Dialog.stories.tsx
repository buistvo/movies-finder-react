import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../components/Dialog/Dialog';
import { MovieForm } from '../components/MovieForm/MovieForm';
import { Movie } from '../types/movie';
import { MOVIE_MOCK } from '../mocks/movie';
import {
  DialogContent,
  ConfirmButton,
} from '../components/Dialog/Dialog.styled';

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
        onSubmit={function (_: Movie): void {
          console.log('add');
        }}
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
        onSubmit={function (_: Movie): void {
          console.log('add');
        }}
      ></MovieForm>
    ),
  },
};

export const DeleteMovie: Story = {
  args: {
    title: 'DELETE MOVIE',
    children: (
      <DialogContent>
        <span>Are you sure you want to delete this movie?</span>
        <ConfirmButton>CONFIRM</ConfirmButton>
      </DialogContent>
    ),
  },
};
