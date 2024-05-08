# Tech Challenge - Grupo 11

O projecto do Tech Challenge foi desenvolvido baseado no aprendizado das aulas.

Rm349615 - Alexandre Montesino da Costa Campos
Rm349108 - Renato Gagliard Sabo
Rm349612 - Ricardo Amaral Jara
Rm350424 - Rodrigo Barboza Gonçalves


Links do Projeto

Miro - DDD 

https://miro.com/app/board/uXjVMJ0Oe-Y=/

Projeto em Node.js com Mongo dockerizado

https://github.com/rodsbg/TechChallenge-lanchonete.git

As instruções de execução encontram-se no README.md


## Recursos

- node.js
- Swagger
- express
- mongodb

## Pré-requisitos

- Docker-compose (https://docs.docker.com/engine/install/)
- npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- 
comentário Alexandre - executar como administrador do powershell
1- Set-ExecutionPolicy Bypass -Scope Process -Force
2 - [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

choco install nodejs

## Instalação

1. Clone o repositório
   git clone https://github.com/rodsbg/TechChallenge-lanchonete.git
2. Navegar até a pasta onde o projeto foi salvo
3. Entrar na pasta lanchonete
4. executar: npm install express mongoose mongo body-parser swagger-ui-express swagger-jsdoc
5. docker-compose up -d --build
6. acessar: http://localhost:3000/api-docs
7. Abrirá o swagger exibindo as APIs e nele é possível executar os testes para validação, as instruções aparecem no Swagger
8. Os exemplos estão dentro do swagger: pré preenchido.


