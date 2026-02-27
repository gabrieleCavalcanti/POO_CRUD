SERA UM CRUD aplicando POO

O que foi instalado:

npm init -y
npm install -D typescript ts-node @types/express @types/node nodemon
npm i express mysql2 dotenv

-- create tsconfig.json
npx tsc --init

{
  "compilerOptions": {
    "target": "ES2023",
    "module": "CommonJS",
    "moduleResolution": "node",
    "lib": ["ES2023"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["node", "express"],
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src"]
}




config/enum

enumerador das variaveis do .env


models - validação

services - regras de negocio


Projeto: LOja_poo_ems

Implementar:

1 DELETE, informar se o registro não existir
2 CONSULTA POR ID
3 CONSULTA POR NOME DA CATEGORIA
4 CONSULTA PARA EXIBIR AS CATEGORIAS EM ORDEM ALFABETICA
5 CRUD COMPLETO PARA PRODUTOS COM TODOS RECURSOS DE CATEGORIAS


ID
NOME
VALOR
DATACAD
IDCATEGORIA
