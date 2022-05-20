import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LayerCard } from './LayerCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LayerCard',
  component: LayerCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof LayerCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LayerCard> = (args) => <LayerCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Floodzone 3',
  selected: false,
  color: '#65E9D9',
  imgSrc: 'floodzone.png'
};
