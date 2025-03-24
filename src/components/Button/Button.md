# Componente Button

O componente `Button` é um botão reutilizável e estilizado utilizando `styled-components`. Ele permite personalização através de um objeto de configuração (`configObj`).

## Uso

```jsx
import {Button} from "./Button";

const App = () => {
  return (
    <Button
      onClick={() => alert("Botão clicado!")}
      configObj={{
        backgroundColor: "#28a745",
        fontColor: "#fff",
        width: "150px",
        height: "50px",
        fontSize: "1.2rem",
        hoverBackgroundColor: "#218838",
      }}
    >
      Clique Aqui
    </Button>
  );
};
```

## Props

### `children`

- **Descrição**: O conteúdo exibido dentro do botão.
- **Tipo**: `ReactNode`
- **Obrigatório**: Sim

### `onClick`

- **Descrição**: Função chamada ao clicar no botão.
- **Tipo**: `function`
- **Obrigatório**: Sim

### `configObj`

- **Descrição**: Objeto de configuração para personalizar o estilo do botão.
- **Tipo**: `object`
- **Obrigatório**: Não
- **Propriedades**:
  - `backgroundColor`: Cor de fundo do botão. _(Default: `#007bff`)_
  - `fontColor`: Cor do texto do botão. _(Default: `#fff`)_
  - `width`: Largura do botão. _(Default: `120px`)_
  - `height`: Altura do botão. _(Default: `40px`)_
  - `fontSize`: Tamanho da fonte do texto. _(Default: `1rem`)_
  - `hoverBackgroundColor`: Cor de fundo ao passar o mouse. _(Default: `#0056b3`)_

### `disabled`

- **Descrição**: Define se o botão está desabilitado.
- **Tipo**: `boolean`
- **Obrigatório**: Não
- **Default**: `false`

## Estilização

O botão é estilizado com as seguintes propriedades padrão:

- Cor de fundo: `#007bff`
- Cor do texto: `#fff`
- Largura: `120px`
- Altura: `40px`
- Tamanho da fonte: `1rem`
- Borda: Nenhuma
- Borda arredondada: `4px`
- Sombra: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))`
- Cursor: `pointer`

## Comportamento ao Hover

Ao passar o mouse sobre o botão, a cor de fundo muda para o valor definido em `hoverBackgroundColor` ou para o padrão `#0056b3`.

Se o botão estiver desabilitado, o cursor será alterado para `not-allowed` e o estilo será ajustado para refletir o estado desabilitado.

## Exemplo de Estilo Customizado

```jsx
<Button
  configObj={{
    backgroundColor: "#ff5733",
    fontColor: "#000",
    width: "200px",
    height: "60px",
    fontSize: "1.5rem",
    hoverBackgroundColor: "#c70039",
  }}
>
  Botão Customizado
</Button>
```
