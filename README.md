# Sorteador de Números

Este projeto consiste em uma aplicação simples que permite sortear um número aleatório dentro de um intervalo definido pelo usuário. 

## Tecnologias Utilizadas

<img src = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">

## Funcionalidades
#### Entrada de Dados:
- O usuário pode inserir dois valores numéricos nos campos de entrada (#inputN1 e #inputN2), representando o intervalo desejado para o sorteio.

#### Sorteio de Números:
- Ao clicar no botão "SORTEAR," a aplicação realiza um sorteio aleatório dentro do intervalo definido pelos valores inseridos nos campos de entrada.
Validação de Entrada:

#### Validações:
- Antes de realizar o sorteio, a aplicação verifica se ambos os campos de entrada estão preenchidos. Caso algum deles esteja vazio, uma mensagem de aviso é exibida no elemento com o id #resultado, indicando ao usuário para inserir valores nos campos.

#### Lógica de Implementação utilizando JavaScript:
- A função check() é responsável por validar se os campos de entrada estão vazios. Caso algum deles esteja vazio, a execução é interrompida, e uma mensagem é exibida.
- A função getData() obtém os valores inseridos nos campos de entrada.
- A função sorteador(n1, n2) realiza o sorteio do número aleatório dentro do intervalo definido pelos valores obtidos.
- A função mostrarNumero(resultado) exibe o número sorteado no elemento com o id #resultado.

#### Utilização
- Acesse o link em seu navegador - [SORTEADOR](https://sorteado-numeros.netlify.app/).
- Insira os valores desejados nos campos de entrada.
- Clique no botão "SORTEAR" para gerar um número aleatório dentro do intervalo especificado.
- O número sorteado será exibido no elemento com o id #resultado.
