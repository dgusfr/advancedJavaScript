# Exercícios Avançados em JavaScript

Este repositório contém uma série de exercícios resolvidos em JavaScript, abrangendo conceitos Avançados da linguagem.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/js.png" alt="Logo JS" width="100"/>
  </div>
</div>

## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## Descrição:

**Assyn/Await**

- **1.js**: Escreva uma função chamada fetchData que faz uma solicitação HTTP para uma determinada URL (Escolha uma API aberta) e retorna uma Promise que resolve com os dados recebidos.

- **2.js**: Crie uma sequência de promessas onde cada uma depende do resultado da anterior. Por exemplo, faça três solicitações HTTP sequenciais e exiba os resultados.

- **3.js**: Escreva uma função chamada fetchDataWithErrorHandling que faz uma solicitação HTTP e retorna uma Promise. Se a solicitação for bem-sucedida, a Promise deve resolver com os dados recebidos. Se ocorrer um erro, a Promise deve ser rejeitada com uma mensagem de erro.

- **4.js**: Crie uma função chamada fetchMultipleData que aceita uma matriz de URLs e retorna uma Promise que resolve com um array de todos os dados recebidos de todas as URLs.

**API´s**

- **1.js**: Escreva uma função chamada fetchRandomJoke que faz uma solicitação HTTP para um serviço de piadas aleatórias e retorna uma Promise que resolve com uma piada aleatória.

- **2.js**: Crie uma função chamada parseUserData que aceita os dados brutos de um usuário em formato JSON e retorna um objeto JavaScript com as informações do usuário formatadas.

- **3.js**: Implemente uma função chamada filterUsersByCountry que recebe uma lista de usuários em formato JSON e um país como argumentos, e retorna um array com os usuários que são do país especificado.

- **4.js**: Escreva uma função chamada handleApiError que aceita uma função de solicitação HTTP e um número máximo de tentativas como argumentos, e tenta fazer a solicitação HTTP até atingir o número máximo de tentativas, lidando com erros de forma adequada.

- **5.js**: Crie uma função chamada fetchProtectedData que faz uma solicitação HTTP para uma API protegida por autenticação e retorna os dados protegidos.

**Estrutura de Dados**

- **1.js**: Implemente uma classe JavaScript para representar uma árvore binária de busca. Inclua métodos para inserir, pesquisar e remover elementos da árvore.

- **2.js**: Crie uma classe JavaScript para representar um grafo não direcionado. Inclua métodos para adicionar vértices, adicionar arestas e verificar a existência de uma conexão entre dois vértices.

- **3.js**: Escreva uma classe JavaScript para representar um conjunto. Inclua métodos para adicionar elementos, remover elementos e verificar se um elemento está presente no conjunto.

- **4.js**: Implemente uma função chamada depthFirstSearch que aceita um grafo e um vértice inicial como argumentos e retorna uma lista de vértices visitados durante uma busca em profundidade a partir do vértice inicial.

- **5.js**: Escreva uma função chamada breadthFirstSearch que aceita um grafo e um vértice inicial como argumentos e retorna uma lista de vértices visitados durante uma busca em largura a partir do vértice inicial.

## Funcionalidades:

- Cada arquivo aborda um exercício específico.
- Soluções simples e explicativas.

## Como Usar:

1. Clone o repositório
2. Navegue até o diretório: `cd nome-do-repositorio`
3. Execute cada programa com o seu HTML correspondente no Browser desejado.
   Caso o mesmo não possua um HTML correspondente basta rodar o comando 'node arquivo.js'
   Recomendo fortemente a utilização da extensão para VSCODE: lIVE Server

## Estrutura do Projeto:

- **Assync/Await**

  - 1.js
  - ...
  - 4.js

- **API´s**

  - 1.js
  - ...
  - 5.js

- **DataStructures**
  - 1.js
  - ...
  - 5.js

## Autor

Desenvolvido por Diego Franco.
