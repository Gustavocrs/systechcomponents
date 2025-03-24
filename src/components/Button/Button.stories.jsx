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
  configObj: {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  onClick: () => {},
  Disabled: true,
  configObj: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    color: "rgba(0, 0, 0, 0.34)",
    cursor: "not-allowed",
  },
};
