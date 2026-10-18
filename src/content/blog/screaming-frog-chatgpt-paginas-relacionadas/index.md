---
title: 'Como usar Screaming Frog + ChatGPT para mapear páginas relacionadas em escala'
description: 'Descubra como usar o Screaming Frog e o ChatGPT para mapear milhares de páginas relacionadas em segundos. Aprenda sobre embeddings e a similaridade do cosseno.'
pubDate: 2024-08-11
heroImage: '../../../assets/uploads/blog/screaming-frog-chatgpt-paginas-relacionadas-cover.png'
heroImageAlt: 'Como usar Screaming Frog + ChatGPT para mapear páginas relacionadas em escala'
---

Você gostaria de mapear milhares de páginas relacionadas em segundos? Neste artigo, vou te mostrar como. Você não precisa saber como programar - os LLMs escrevem todo o código em Python. Tudo o que você precisa é de um pouco de criatividade e paciência para testar até que o código funcione - ou usar o meu código que já funciona.

Você pode usar essa ferramenta para encontrar produtos relacionados, adicionar links internos, encontrar artigos sobre o mesmo tema, marcar páginas, etc. Qualquer tipo de análise/saída que leia o conteúdo e liste URLs pode ser feita rapidamente.

Segue o passo a passo com template no final do post. Leia tudo porque você ainda precisa coletar alguns dados.

## O que são embeddings?

Quando o Screaming Frog lançou a versão 20 e permitiu a conexão com a OpenAI, eles também incluíram um modelo de prompt que permite extrair embeddings de uma página. Eu não tinha ideia do que isso significava e ignorei completamente até ler o artigo do Mike King chamado [“SEO Use Cases for Vectorizing the Web with Screaming Frog”](https://ipullrank.com/vector-embeddings-is-all-you-need).

![Artigo do Mike King sobre vetorização da web com o Screaming Frog](../../../assets/uploads/blog/screaming-frog-chatgpt-paginas-relacionadas-inline-1.png)

O artigo dele é bem técnico e profundo, demorei algumas leituras para entender o que estava acontecendo até perceber que havia uma medalha de ouro na minha frente.

Em resumo, o embedding vetorial é uma técnica de Natural Language Processing (NLP) ou Processamento de Linguagem (tradução livre), que captura o significado e a relação entre essas palavras. O Screaming Frog te dá um export de URLs e um monte de números muito longos - os embeddings vetoriais.

Segundo o [Google](https://developers.google.com/machine-learning/crash-course/embeddings/video-lecture):

> Os embeddings facilitam o aprendizado de máquina em grandes entradas, como vetores esparsos que representam palavras. Idealmente, um embedding captura parte da semântica da entrada colocando entradas semanticamente semelhantes próximas umas das outras no espaço de embeddings. Um embedding pode ser aprendido e reutilizado em vários modelos.

Todas as palavras são transformadas em números e comparadas entre si para ver o universo ao redor delas. Então, não estamos apenas comparando algumas palavras-chave, mas sim a proximidade de todo o conteúdo entre uma página e outra. Tenho certeza de que existem explicações mais detalhadas e precisas, mas essa é a forma como simplifiquei na minha cabeça.

## Como encontrar a similaridade do cosseno?

Lendo o artigo do Mike, também aprendi sobre a similaridade do cosseno (cosine similarity). É uma forma de comparar cada grupo de vetores (todos os vetores em uma URL) com outro grupo de vetores, encontrando assim quais são os mais próximos entre si. Pegando uma definição emprestada do mesmo artigo:

> Podemos vetorizar uma lista de páginas e compará-las com a página-alvo usando a similaridade do cosseno para determinar sua relevância.

Eu parafraseei um pouco porque o exemplo dele era sobre link building, mas a ideia é a mesma: combinar páginas que são semelhantes entre si, cobrindo o mesmo tema geral.

## Usando Screaming Frog + OpenAI para extrair embeddings

Eu me considero "ok" em SEO técnico (e atualmente trabalho principalmente como SEO técnico) e, apesar de muitas tentativas, todo o "código" que consigo escrever é HTML e CSS. Eu me viro com muitas tarefas técnicas de SEO, sei como ler muitas coisas técnicas, mas não consigo programar propriamente. Entretanto, eu sei o suficiente para criar esta ferramenta em Python.

Usei o Screaming Frog e a API do OpenAI (apenas $5 em créditos é suficiente para milhares de páginas) para obter os embeddings de milhares de páginas. No Screaming Frog, vá em Personalized JavaScript > Add from Library > Extrair Embeddings. Tudo o que você precisa fazer no Screaming Frog é encontrar o prompt na biblioteca e colocar sua chave de API.

Depois que o rastreamento estiver concluído, você obterá uma planilha com uma lista de URLs + embeddings (um monte de números muito longos). Exporte o CSV.

## Usando LLMs para criar um script em Python

Em seguida, fui ao ChatGPT e pedi que me desse um código Python que me permitisse mapear [X] páginas relacionadas assim que eu fornecesse uma planilha com URLs + Embeddings. Meu prompt também pedia para importar o módulo de similaridade do cosseno mencionado anteriormente.

Já faz algumas semanas e, infelizmente, costumo usar o ChatGPT sem histórico salvo (para evitar que meus prompts sejam usados para treinamento), então não tenho o prompt exato, mas consegui colar o código (que salvei) e gerar um prompt reverso.

![Código do ChatGPT para o script de páginas relacionadas](../../../assets/uploads/blog/screaming-frog-chatgpt-paginas-relacionadas-inline-2.png)

Uma coisa que aprendi sobre Python depois de assistir a alguns tutoriais de Python do Jean-Christoph Chouinard é que você pode usar o Google Colab, que é basicamente Python no seu navegador, sem precisar instalar nada. O código é executado em uma máquina virtual nos servidores do Google e muitas coisas já vêm pré-instaladas.

O código não funcionou imediatamente, então tive que ir e voltar entre o ChatGPT e o Gemini. Este último está disponível diretamente no Google Colab e pode ler seu código e sugerir correções. Após algumas tentativas, os LLMs corrigiram meu código.

Todo o código veio diretamente dos LLMs. Vi o resultado final e ele funciona para minhas necessidades, então estou satisfeito com os resultados.

## Conclusões e Script

A esta altura, você deve estar esperando só encontrar o script: [AQUI ESTÁ](https://colab.research.google.com/drive/16YuDGr3V0j_YahMZ0QXa4ckJ-uUHBrWf?usp=sharing)!

A ferramenta pedirá que você faça upload do seu arquivo CSV (aquele do Screaming Frog). A planilha deve ter dois cabeçalhos:

- URL
- Embeddings

Depois que processar os dados, ele baixará automaticamente outro CSV com os resultados em duas colunas:

- Page Source
- Related Pages

Os resultados foram bons o suficiente para minhas necessidades. Claro, você ainda precisa revisar a saída e fazer ajustes para evitar falhas massivas, mas este é um rascunho de trabalho sólido - e eu resolvi semanas de trabalho manual em um dia!

Esse post foi inicialmente escrito em inglês e muita gente veio pedir ajuda. Alguns erros comuns:

- Sua planilha não pode ter células vazias em nenhuma coluna
- Ajuste o número de páginas relacionadas em `top_n=[5]`
- Remova exports com imagens e outros elementos que não sejam HTML
- Limite mais ou menos em 2000 URLs por vez. Se der erro, diminua um pouco mais
