# Systech Components

Uma biblioteca de componentes reutilizáveis e funções úteis para acelerar o desenvolvimento de aplicações React. Este projeto foi criado para facilitar a criação de interfaces consistentes e reutilizáveis, além de fornecer hooks e utilitários que são frequentemente utilizados em projetos.

## Recursos

- **Componentes Reutilizáveis**: Botões, inputs e outros componentes estilizados com `styled-components`.
- **Hooks Customizados**: Funções úteis como `useApi` para facilitar requisições HTTP.
- **Compatibilidade**: Suporte para múltiplas versões do React.
- **Estilização Moderna**: Integração com `styled-components` para personalização fácil.

## Dependências Suportadas

- React: ^17.0.0, ^18.0.0, ^19.0.0
- React DOM: ^17.0.0, ^18.0.0, ^19.0.0
- styled-components: ^5.0.0
- react-icons: ^4.0.0
- axios: ^0.21.0

## Instalação

Para instalar a biblioteca, execute o seguinte comando:

```bash
npm install systechcomponents
```

Ou, se estiver usando Yarn:

```bash
yarn add systechcomponents
```

## Uso

### Exemplo de Componente: Button

```jsx
import React from "react";
import {Button} from "systechcomponents";

const App = () => <Button onClick={() => alert("Clique!")}>Clique Aqui</Button>;

export default App;
```

### Exemplo de Hook: useApi

```jsx
import {useApi} from "systechcomponents";

export default function Home() {
  const {data, loading, error} = useApi(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados: {error.message}</p>;

  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

### Passos para Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona minha feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
