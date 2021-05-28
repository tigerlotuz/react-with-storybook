import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
  title: "Form/Button",
  component: Button,
  //center nedan kan annars wrappas direkt runt varje button story
  decorators: [(story) => <Center>{story()}</Center>],
  // args: {
  //   children: "Button", //  OBS! Args på denna componentnivå kan bli överskrien av args på storynivå
  // },
  argTypes: {
    variant: { control: "text" },
    backgroundColor: { control: "color" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
  args: {
    onClick: () => console.log("Button clicked", process.env.STORYBOOK_THEME),
  },
};

// export const Primary = () => <Button variant="primary">Primary</Button>;
// export const Secondary = () => <Button variant="secondary">Secondary</Button>;
// export const Success = () => <Button variant="success">Success</Button>;
// export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;
//  OBS! Args i denna storynivå skriver över args på componentnivå, se line 10
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};
export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Success",
};
export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "Danger",
};
export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};
export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};
export const Log = () => (
  <Button
    backgroundColor="purple"
    onClick={() => console.log("Button clicked", process.env.STORYBOOK_THEME)}
  >
    Log
  </Button>
);
