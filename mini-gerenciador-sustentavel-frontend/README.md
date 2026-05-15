# Mini Gerenciador Sustentavel - Frontend

Aplicacao frontend em Angular para cadastro e listagem de itens, com foco em um fluxo simples de gerenciamento sustentavel.

## Visao Geral

O projeto possui uma tela unica com:

- formulario para cadastrar item (nome, quantidade e categoria)
- tabela para listar os itens salvos
- integracao HTTP com API backend para buscar e salvar dados

## Funcionalidades Atuais

- listar itens ao carregar a pagina
- cadastrar novo item
- atualizar lista em tela apos salvar
- interface baseada em Bootstrap 5

## Stack Tecnologica

- Angular 21 (standalone components)
- TypeScript
- RxJS
- Bootstrap 5.3
- Vitest (testes unitarios)

## Estrutura do Projeto

```text
src/
	app/
		components/item/
			item.ts        # componente principal da tela
			item.html      # formulario e tabela
			item.css
		models/
			item.ts        # interface do item
		services/
			item.service.ts # acesso HTTP a API
```

## API Esperada

O frontend esta configurado para consumir:

```text
http://localhost:8080/api/itens
```

Metodos utilizados:

- `GET /api/itens` para listar itens
- `POST /api/itens` para salvar item

Exemplo de payload:

```json
{
	"nome": "Sabao Biodegradavel",
	"quantidade": 2,
	"categoria": "Limpeza"
}
```

## Como Executar

1. Instale as dependencias:

```bash
npm install
```

2. Suba o frontend:

```bash
npm start
```

3. Acesse no navegador:

```text
http://localhost:4200
```

## Scripts Disponiveis

- `npm start`: inicia servidor de desenvolvimento
- `npm run build`: gera build de producao
- `npm test`: executa testes unitarios
- `npm run watch`: build em modo watch

## Analise Rapida do Codigo

Pontos positivos:

- boa separacao entre componente, servico e modelo
- uso de tipagem com interface `Item`
- fluxo de leitura e escrita com `HttpClient` e `Observable`

Pontos de atencao:

- URL da API esta fixa no codigo (`item.service.ts`), ideal mover para arquivo de ambiente
- validacao do formulario ainda minima (apenas nome obrigatorio)
- tratamento de erro pode evoluir para feedback visual ao usuario
- `ChangeDetectorRef.detectChanges()` pode ser evitado em cenarios simples se o fluxo estiver dentro do ciclo padrao do Angular

## Proximos Passos Sugeridos

- criar `environments` para URL da API por ambiente
- adicionar validacoes de formulario (campos obrigatorios e quantidade minima)
- exibir mensagens de sucesso/erro na UI
- incluir testes para componente e servico

## Licenca

Uso educacional e pessoal.
