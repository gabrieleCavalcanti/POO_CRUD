# 🛒 Loja POO EMS

Projeto de **CRUD de Produtos e Categorias** utilizando **POO (Programação Orientada a Objetos)** em **TypeScript**, **Express** e **MySQL**.

---

## ⚙️ Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📦 Instalação

1. Inicializar projeto Node.js:

```bash
npm init -y

npm install -D typescript ts-node @types/express @types/node nodemon

npm i express mysql2 dotenv

npx tsc --init
```

## Configuração do tsconfig.json:

```bash
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
```

## 📂 Estrutura do Projeto

```bash
Loja_poo_ems/
│
├─ src/
│  ├─ config/
│  │  └─ enum/          # Enumerador das variáveis do .env
│  ├─ models/            # Validação dos dados
│  ├─ services/          # Regras de negócio
│  ├─ controllers/       # Controladores do CRUD
│  ├─ routes/            # Rotas da API
│  └─ index.ts           # Arquivo principal
│
├─ .env                  # Variáveis de ambiente
├─ package.json
├─ tsconfig.json
└─ README.md

```

## 💡 Funcionalidades
### Categorias

* Criar categoria
* Listar categoria
* Listar todas categorias em ordem alfabética
* Consultar categoria por ID
* Consultar categoria por nome
* Atualizar categoria
* Excluir categoria - (Retorna mensagem se o registro não existir)

### CRUD completo com os seguintes campos:
- id
- nome
- ativo
- dataCad


## 💡 Funcionalidades:
### Produtos

* Criar produto
* Listar produtos
* Listar todas produtos em ordem alfabética
* Consultar produtos por ID
* Consultar produtos por nome
* Atualizar produto
* Excluir produto - (Retorna mensagem se o registro não existir)

### CRUD completo com os seguintes campos:
- id
- nome
- valor
- dataCad
- idCategoria



## 🚀 Scripts Úteis

### Rodar em modo de desenvolvimento com ts-node e nodemon:

npm run dev

### Compilar TypeScript:

npx tsc

### Rodar o projeto compilado:

node dist/index.js


## 🌱 Observações

Todas as regras de negócio estão dentro da pasta services.

Validações de dados estão em models.

Variáveis de ambiente devem ser configuradas no .env.

Estrutura pensada para facilitar futuras implementações de endpoints adicionais.