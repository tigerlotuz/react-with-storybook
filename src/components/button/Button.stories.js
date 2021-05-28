import React from "react";
import Button from "./Button";
import Center from '../Center/Center'

export default {
  title: "Form/Button",
  component: Button,
  decorators: [story => <Center>{story()}</Center>], //center kan annars wrappas direkt runt varje button story nedan
  args: {
    children: "Button", //  OBS! Args på denna componentnivå kan bli överskrien av args på storynivå
  },
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  //   children: "Primary Args",
};
//  OBS! Args i denna storynivå skriver över args på componentnivå, se line 7
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long Primary Args'
};
export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  //   children: "Secondary Args",
};
