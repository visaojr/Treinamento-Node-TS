# Treinamento NodeJS
Treinamento de NodeJS - Visão

## Instalando dependências:

- ```yarn init``` ou ```npm init``` (Este comando o conduz por uma sessão interativa para criar um arquivo package.json)
- ```yarn add reflect-metadata typeorm``` ou ```npm install reflect-metadata typeorm``` (Estas dependências são necessárias para criação das migrations)
- ```yarn add sqlite3``` ou ```npm install sqlite3``` (Dependência necessária para utilizar o tipo de banco de dados escolhido, no nosso caso, sqlite3)
- ```yarn add express``` ou ```npm install express``` (Express fornece métodos para especificar qual função é chamada quando chega requisição HTTP (GET, POST, SET, etc.)
- ```yarn add @types/express -D``` ou ```npm install @types/express -D``` (É preciso instalar a tipagem desenvolvida especificamente para o TypeScript)
- ```yarn add ts-node-dev -D``` ou ```npm install ts-node-dev -D``` (Serve para reiniciar automaticamente o servidor toda vez que alguma alteração no código for realizada)
- ```yarn add typescript -D``` ou ```npm install typescript -D``` (Necessário para usarmos as tipagens do TS)

## Rodando a aplicação

Caso queira testar o código que disponibilizamos é preciso instalar na sua máquina todas as dependências utilizadas no projeto, para isso use o comando:
```yarn``` ou ```npm install```

Para iniciar as migrations:
```yarn typeorm migration:run``` ou ```npm typeorm migration:run```

Caso as migrations não estiverem criadas, use:
```yarn typeorm migration:create -n "ColumnName"``` ou ```npm typeorm migration:create -n "ColumnName"```

Para iniciar o servidor:
```yarn dev``` ou ```npm dev```

# Leitura adicional:
* [Migrations](https://dev.to/wandealves/migrations-com-typeorm-no-nodejs-4i80)
* [Documentação TypeScript](https://www.typescriptlang.org/docs/)
* [Documentação NodeJS](https://nodejs.org/en/docs/)
* [Estrutura de Pastas](https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899)
