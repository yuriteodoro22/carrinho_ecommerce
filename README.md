# Projeto de E-commerce

Este projeto é um aplicativo de e-commerce desenvolvido com **React**, que permite aos usuários navegar por produtos, visualizar detalhes de itens, adicioná-los ao carrinho e realizar o checkout.

## Funcionalidades

- **Home:** Exibe uma lista de produtos obtidos via API.
- **Descrição do Produto:** Mostra detalhes específicos de um produto selecionado.
- **Carrinho:** Permite adicionar e remover itens do carrinho, além de calcular o subtotal e total.
- **Tratamento de Erros:** Apresenta uma página amigável para rotas inexistentes.

## Tecnologias Utilizadas

- **React** com React Router Dom
- **TypeScript**
- **Axios** para requisições HTTP
- **Context API** para gerenciamento de estado
- **Toast (react-hot-toast)** para feedback visual
- **TailwindCSS** para estilização
- **Vite** como ferramenta de build

## Estrutura do Projeto

- **App.tsx:** Configuração das rotas principais da aplicação.
- **CartContext.tsx:** Gerencia o estado global do carrinho e suas operações (adicionar, remover, calcular totais).
- **Home:** Página inicial, exibe produtos da API e permite adicioná-los ao carrinho.
- **Description:** Página de detalhes de um produto específico.
- **Cart:** Página do carrinho com controle de quantidade e visualização do subtotal e total.
- **Error:** Página de erro para rotas inexistentes.
- **api.ts:** Configuração do Axios para comunicação com a API.

## Requisitos

- **Node.js** (v16 ou superior)
- **NPM** ou **Yarn**
- **json-server** (para a API fake)

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie a API fake com o json-server:
   ```bash
   json-server --watch db.json
   ```

5. Execute a aplicação:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. Acesse no navegador:
   ```
   http://localhost:5173
   ```

## Estrutura de Diretórios

```plaintext
src/
├── Components/
│   └── layout.tsx
├── context/
│   └── CartContext.tsx
├── pages/
│   ├── home.tsx
│   ├── description.tsx
│   ├── cart.tsx
│   └── error.tsx
├── services/
│   └── api.ts
├── App.tsx
├── main.tsx
└── tsconfig.json
```


---

**Desenvolvido por Yuri Teodoro**
