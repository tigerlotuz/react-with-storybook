import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
      variantColor: {control : 'text'},
      children: {control : 'text'}
  }
};
//stories
// export const Success = () => <Button variantColor='green'>Success</Button>
// export const Danger = () => <Button variantColor='red'>Danger</Button>

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    variantColor: 'green',
    children: 'Success'
}
export const Danger = Template.bind({})
Danger.args = {
    variantColor: 'red',
    children: 'Danger'
}