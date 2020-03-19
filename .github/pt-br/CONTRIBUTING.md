# FLUX STYLE GUIDE - Guia de contribuição

Olá! Estamos realmente empolgados por você estar interessado em contribuir com o Flux Style Guide. Antes de enviar sua contribuição, reserve um momento e leia as seguintes diretrizes:

- [Código de Conduta](CODE_OF_CONDUCT.md)
- [Diretrizes para novas Issues](#diretrizes-para-novas-issues)
- [Guia para Pull Request](#guia-para-pull-request)
- [Configurações de desenvolvimento](#configurações-de-desenvolvimento)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Diretrizes para novas Issues

- Sempre utilize os templates de issues para criar novas issues (feature e bugs).

## Guia para Pull Request

- A `master` branch é apenas um snapshot da ultima release estável. Todos os desenvolvimentos devem ser feitos em branches dedicadas. **Não envie PRs para a branch `master`.**

- Faça o checkout de uma branch de tópico relevante, ex. `dev`, e faça o merge de volta para a mesma branch.

- Tenha certeza que todos os testes `npm test` passaram. (veja [Configurações de desenvolvimento](#configurações-de-desenvolvimento))

- Idealmente, antes do desenvolvimento, abra uma issue de sugestão de funcionalidade, melhoria ou correção.

- Adicione cobertura de teste apropriada, se aplicável


## Configurações de desenvolvimento

- [Node.js](http://nodejs.org) **(versão 8 ou superior)**
- [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/index.html) (execução Selenium server durante e2e testes).

After cloning the repo, run:

``` bash
$ yarn # install the dependencies of the project
```

### Committing Changes

As mensagens de commit devem seguir a [Convenção sobre mensagens Git Commit](./COMMIT_CONVENTION.md) para que os registros de alterações possam ser gerados automaticamente. As mensagens de commit serão validadas automaticamente após o commit.

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

Há outros scripts disponíveis na sessão `scripts` do arquivo `package.json`.

O script de teste padrão fará o seguinte: lint com ESLint -> verificação de tipo com Flow -> testes de unidade com cobertura -> testes e2e. **Certifique-se de que esta aprovação seja aprovada com êxito antes de enviar um PR.** Embora os mesmos testes sejam executados no seu servidor de CI, é melhor fazê-lo funcionar localmente.

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
