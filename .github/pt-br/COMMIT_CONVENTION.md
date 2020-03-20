## Convenção sobre mensagens Git Commit

## Template File

```
VERBO - Título do commit

# Link da tarefa no Jira. A história já explica por si. 
# Altere o CODIGO-TASK pelo código da tarega no jira.
Task: 
https://comerc.atlassian.net/browse/CODIGO-TASK

# O que foi feito nesta alteração? Resumidamente, explique.
O que foi feito:
- 

# ## Manual Doc88 do commit ##
# 
# OBSERVAÇÃO IMPORTANTE: Evite ser prolixo.
#
# Linha de assunto, verbos em maiúsculas:
#
#   ADICIONA = CRIAR um recurso.
#   REMOVE = EXCLUIR um recurso.
#   IMPACTA = Alteração deve ser apenas para upgrade ou downgrade de versões das dependências e infra.
#   DOCUMENTA = Uma alteração que deve ser apenas sobre documentação.
#   ALTERA = Uma mudança que deve ser apenas uma refatoração ou melhoria.
#
# Para a linha do assunto:
#   * 50 caracteres no máximo.
#
# Para o corpo do commit:
#   * Use quantas linhas precisar.
#   * 72 caracteres no máximo por linha.
#
# ## Utilização ##
#
# Coloque o template em um diretório do seu computador:
#
#     ~/.doc88_commit_template.txt
#
# Configure o git para usar o arquivo de template:
#
#     git config --global commit.template ~/.doc88_commit_template.txt
#
```

## Git Configuration

Crete the file `~/.doc88_commit_template.txt`

To tell Git to use the template file globally

```bash
`git config --global commit.template ~/.doc88_commit_template.txt`
```

## Links and Documentation

- [Customizing Git - Git Configuration](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)
- [Better Commit Messages with a .gitmessage Template](https://thoughtbot.com/blog/better-commit-messages-with-a-gitmessage-template)