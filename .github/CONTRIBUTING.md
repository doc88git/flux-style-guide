# FLUX STYLE GUIDE - Guia de contribuição

Olá! Estamos realmente empolgados por você estar interessado em contribuir com o Flux Style Guide. Antes de enviar sua contribuição, reserve um momento e leia as seguintes diretrizes:

- [Código de Conduta](https://github.com/vuejs/vue/blob/dev/.github/CODE_OF_CONDUCT.md)
- [Diretrizes para novas Issues](#diretrizes-para-novas-issues)
- [Guia para Pull Request](#guia-para-pull-request)
- [Configurações de desenvolvimento](#configurações-de-desenvolvimento)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Diretrizes para novas Issues

- Sempre utilize os templates de issues para criar novas issues (feature e bugs).

## Guia para Pull Request

- A `master` branch é apenas um snapshot da ultima release estável. Todos os desenvolvimentos devem ser feitos em branches dedicadas. **Não envie PRs para a branch `master`.**

- Faça o checkout de uma branch de tópico relevante, ex. `dev`, e faça o merge de volta para a mesma branch.

- Trabalhe apenas no diretório `src` e **NÃO** inclua o diretório `dist` nos commits.

- Não há problema em ter vários commits pequenos enquanto você trabalha no PR - o GitHub vai fazer os squash antes do merge.

- Tenha certeza que todos os testes `npm test` passaram. (veja [development setup](#configurações-de-desenvolvimento))

- Se você está adicionando novas features:
  - Adicione casos de teste.
  - Forneça um motivo convincente para adicionar esse recurso. Idealmente, você deve abrir uma issue de sugestão primeiro e tê-lo aprovado antes de trabalhar nele

- Se você está adicionando novas bugfix:
  - Se você estiver resolvendo um problema especial, adicione `(fix #xxxx[,#xxxx])` (#xxxx é a id da issue) no título da sua PR para uma melhor release, comente, por ex. `atualizar entidades encoding/decoding (fix #3899)`.
  - Forneça uma descrição detalhada do bug no PR. preferencialmente em uma demonstraçao.
  - Adicione cobertura de teste apropriada, se aplicável.


## Configurações de desenvolvimento

Você precisará de [Node.js](http://nodejs.org) **version 8+**, [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (para executar Selenium server durante e2e testes) e [yarn](https://yarnpkg.com/en/docs/install).

After cloning the repo, run:

``` bash
$ yarn # install the dependencies of the project
```

### Committing Changes

As mensagens de commit devem seguir a [convenção de mensagem de commit](./COMMIT_CONVENTION.md) para que os registros de alterações possam ser gerados automaticamente. As mensagens de commit serão validadas automaticamente após o commit.

### Commonly used NPM scripts

``` bash
# watch and auto re-build
$ npm run dev

# watch and auto re-build in Storybook
$ npm run storybook

# build Eyes Storybook snapshot
$ npm run eyes

# watch and auto re-run unit tests
$ test:watch

# run the full test suite, including linting/type checking
$ npm test
```

There are some other scripts available in the `scripts` section of the `package.json` file.

The default test script will do the following: lint with ESLint -> type check with Flow -> unit tests with coverage -> e2e tests. **Please make sure to have this pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally.

## Estrutura do Projeto

- **`public`**: TODO - adicionar descrição
- **`src`**:  TODO - adicionar descrição
  - **`assets`**:  TODO - adicionar descrição
    - **`fonts`**:  TODO - adicionar descrição
    - **`images`**:  TODO - adicionar descrição
    - **`settings`**:  TODO - adicionar descrição
  - **`components`**:  TODO - adicionar descrição
  - **`directives`**:  TODO - adicionar descrição
  - **`locales`**:  TODO - adicionar descrição
  - **`mixins`**:  TODO - adicionar descrição
  - **`mocks`**:  TODO - adicionar descrição
  - **`plugins`**:  TODO - adicionar descrição
  - **`utils`**:  TODO - adicionar descrição

## Créditos

Time de desenvolvimento frontend da [Doc88](https://doc88.com.br)!
