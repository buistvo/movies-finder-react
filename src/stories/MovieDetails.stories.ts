import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import type { Meta, StoryObj } from '@storybook/react';

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
    movie: {
      // imageUrl:
      //   'https://occ-0-3890-3467.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQuw64xfBV5j5DQJUoA49h-jGHMW7G6ZM8f7u7JdyB-yQ4lorrY9IVNJ80Ps-nKD397nLtRsaaQFYDTdrjB9DaTLxsQDbVj9gocoPO_2QY_BBZ07jh9ZRu0IVFhcqlTI7rPA5qWcUS4JRS-WHcpb7e4PMS05NhKJULA3_pEejFw3BW7c09YJ6hW9sKAq8dbbVyJOA6pm4fsN7A8d2izhJUdWZiNiTX8VGJbtO3mlOiNRY6gaqYQYRUu4ZbfoPTDXJz-udj_Qz2nbyDVMQPgNUGLARBINGg.webp?r=284',
      name: 'Code 8',
      imageUrl: '/images/code-8.webp',
      genreList: ['Action', 'Drama'],
      year: '2024',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      rating: 3.5,
      duration: '2h 34m',
    },
  },
};
