# Lista de tarefas

Esse simples projeto foi feito para testar como juntar diferentes aplicações em um ambiente, através do uso de Containers por meio do Docker, ou seja, apenas para aprender como utilizar essas tecnologias.

Um projeto simples para saber como integrar diversos Containers através do Docker compose.

## 1 - Sobre o projeto

O projeto consiste em três Containers:
    
1. FrontEnd - uma aplicação simples que utiliza React, criando visualmente a lista de tarefas, além de gerenciá-las, editar e excluir.
2. BackEnd - uma aplicação simples que utiliza Express para conectar os dados vindos do FrontEnd para o Banco de Dados.
3. Banco de Dados - no caso através do Docker compose é criado um Container com o Banco de Dados que no caso é o PostgreSQL.

## 2 - Iniciando o projeto

Para iniciar o projeto, basta usar o Docker compose para criar os três Containers e já começar a utilizar. Ou seja, verifique se possui o Docker instalado na sua máquina.

Antes de tudo cheque as variáveis de ambiente para certificar as portas onde os serviços estarão disponíveis.

No caso abra um terminal e vá ao diretório onde este projeto está salvo e certifique que o arquivo `compose.yaml` se encontra no diretório. Para criar é só utilizar o comando `docker compose up -d`.

## 3 - Aprendizados desse projeto

A maior lição tirada desse simples projeto, foi entender como o Docker funciona e como ele pode impactar os meus conhecimentos sobre infraestrutura, pois é uma tecnologia fantástica de se aprender e utilizar, me ensinando que toda a parte de infra é essencial para as aplicações que estamos desenvolvendo, e que existe um mundo muito maior que só a codificação de aplicativos.
