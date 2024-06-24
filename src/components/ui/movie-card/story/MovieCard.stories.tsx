import { Meta, Story } from "@storybook/react"
import { MovieCard, MovieCardProps } from "../MediaCard"

const meta: Meta<typeof MovieCard> = {
  title: "example/components/custom/MovieCard",
  component: MovieCard,
  parameters: {
    layout: "fullscreen"
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}>
        <Story />
      </div>
    )
  ]
}

export default meta

const Template: Story<MovieCardProps> = (args) => <MovieCard {...args} />

export const Default = Template
Default.args = {}
