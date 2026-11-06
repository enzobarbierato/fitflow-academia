# FitFlow - Academia

Projeto simples da primeira fase da Aula 1 do TaskFlow, adaptado ao tema Academia.

## Executar

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

## Verificar os tipos

```bash
npm run verificar
```

## Versionamento com Git

O ZIP já inclui o repositório Git e um primeiro commit da fase 1. Consulte com:

```bash
git log --oneline
```

Para publicar no seu GitHub, crie um repositório vazio, configure seu usuário Git e conecte o endereço do repositório:

```bash
git config user.name "SEU NOME"
git config user.email "SEU EMAIL"
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Requisitos atendidos

- Nome do sistema, versão e data no topo.
- `type` para status e nível do treino.
- `interface Treino` com `readonly`, propriedade opcional, data e array `string[]`.
- `NovoTreino` usando `Omit`.
- Seis treinos no array de objetos (`dados.ts`).
- Renderização dos seis treinos com `for...of`.
- Cores por nível e etiqueta de status; treinos feitos apagados.
- Painel com total de treinos e quantidade de planejados (`for`).
- Aviso com o próximo treino planejado (`while`).
- `.gitignore` ignorando `node_modules/`.
