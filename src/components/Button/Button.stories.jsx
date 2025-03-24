import React from "react";
import {Button} from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
  onClick: () => alert("Botão clicado!"),
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  onClick: () => alert("Enviado!"),
};
