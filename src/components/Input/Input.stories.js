import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => (
  <Input size="small" placeholder="Small size"></Input>
);
export const Medium = () => (
  <Input size="medium" placeholder="Medium size"></Input>
);
export const Large = () => (
  <Input size="large" placeholder="Large size"></Input>
);

Small.storyName = 'Small input';