import React from "react";
import {Input} from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = () => <Input placeholder="Digite seu nome..." />;

export const WithLabel = () => (
  <Input label="Nome" placeholder="Digite seu nome..." />
);

export const Password = () => (
  <Input type="password" placeholder="Digite sua senha..." />
);

export const Disabled = () => (
  <Input disabled placeholder="Campo desabilitado" />
);
