import { Meta, Story } from '@storybook/react';
import { MovieCard } from '../MovieCard';

const meta: Meta<typeof MovieCard> = {
  title: 'example/components/custom/MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: Story<MovieCardProps> = (args) => <MovieCard {...args} />;

export const Default = Template;
Default.args = {
};
