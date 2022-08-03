import React from 'react';
import { Story } from '@storybook/react';
import Main from '.';

interface Args {
  title: string;
  description: string;
}

const Template: Story<Args> = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
};

export default {
  title: 'Main',
  component: Main
};
