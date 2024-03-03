import type { Meta, StoryObj } from '@storybook/react';
import { MovieTile } from '../components/MovieTile/MovieTile';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MovieTile',
  component: MovieTile,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof MovieTile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const InitialState: Story = {
  args: {
    movie: {
      imageUrl:
        'https://occ-0-3890-3467.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQuw64xfBV5j5DQJUoA49h-jGHMW7G6ZM8f7u7JdyB-yQ4lorrY9IVNJ80Ps-nKD397nLtRsaaQFYDTdrjB9DaTLxsQDbVj9gocoPO_2QY_BBZ07jh9ZRu0IVFhcqlTI7rPA5qWcUS4JRS-WHcpb7e4PMS05NhKJULA3_pEejFw3BW7c09YJ6hW9sKAq8dbbVyJOA6pm4fsN7A8d2izhJUdWZiNiTX8VGJbtO3mlOiNRY6gaqYQYRUu4ZbfoPTDXJz-udj_Qz2nbyDVMQPgNUGLARBINGg.webp?r=284',
      name: 'test',
      genreList: ['Drama', 'Comedy'],
      year: '2024',
    },
  },
};
