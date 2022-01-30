import { Story, Meta } from '@storybook/react';
import { Storybook, StorybookProps } from './storybook';


export default {
  component: Storybook,
  title: 'Storybook 2',
  argTypes: { handleClick: { action: "handleClick" } },
} as Meta;

const Template: Story<StorybookProps> = (args) => <Storybook {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};

export const Danger = Template.bind({});
Danger.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};
