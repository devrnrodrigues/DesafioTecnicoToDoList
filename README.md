# To-Do List Application · Fullstack Challenge

Aplicação Fullstack de gerenciamento de tarefas (To-Do List) desenvolvida como solução para o desafio técnico de estágio.

O projeto conta com:

- API REST com autenticação JWT
- Persistência de dados com PostgreSQL
- Frontend SPA moderno
- Gerenciamento híbrido de estado (Online + Modo Visitante)

---

# Diferenciais Implementados

O projeto cobre todos os diferenciais propostos no desafio:

- Autenticação completa com JWT e senhas criptografadas (bcrypt)
- Modo visitante híbrido utilizando fallback automático para localStorage
- Validação de dados com Zod
- Testes automatizados com Jest e Supertest
- Documentação interativa com Swagger UI
- Filtros de listagem
- Visualização em modo calendário
- Arquitetura organizada e escalável
- Tratamento global de erros
- Responsividade

---

# Tecnologias Utilizadas

## Frontend

- React 19 + TypeScript
- Vite 8
- React Router DOM 7
- Styled Components 6
- Axios
- Lucide React
- React Icons
- React Toastify
- React Hot Toast

## Backend

- Node.js
- Express 5
- Prisma ORM
- Supabase (PostgreSQL)
- JWT
- Bcrypt
- Zod
- Swagger UI
- Swagger JSDoc

## Testes

- Jest
- Supertest
- TS-Jest

## Ambiente de Desenvolvimento

- TS-Node-Dev
- Hot Reload

---

# Estrutura do Projeto

```txt
├── backend/
│   ├── src/
│   │   ├── controllers/   # Lógica de controle das rotas
│   │   ├── middlewares/   # JWT, autenticação e tratamento de erros
│   │   ├── routes/        # Endpoints da API
│   │   ├── services/      # Regras de negócio e integração com Prisma
│   │   ├── schemas/       # Validações com Zod
│   │   ├── docs/          # Configuração Swagger e documentação
│   │   ├── errors/        # Classes e handlers de erro
│   │   └── server.ts      # Inicialização do servidor
│   │
│   ├── tests/
│   │   ├── auth/          # Testes de autenticação
│   │   └── tasks/         # Testes das rotas de tarefas
│   │
│   └── prisma/            # Schema e migrações do banco
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── services/      # Integração com API
│   │   ├── styles/        # Styled Components
│   │   ├── types/         # Tipagens globais e interfaces
│   │   └── App.tsx        # Rotas e Providers
```

---

# API Endpoints

## Autenticação — `/auth`

### Registrar usuário

```http
POST /auth/register
```

Cria uma nova conta de usuário.

---

### Login

```http
POST /auth/login
```

Autentica o usuário e retorna um token JWT.

---

# Tarefas — `/tasks`

Todas as rotas requerem:

```txt
Authorization: Bearer <token>
```

---

### Listar tarefas

```http
GET /tasks
```

Retorna todas as tarefas do usuário autenticado.

---

### Criar tarefa

```http
POST /tasks
```

Cria uma nova tarefa.

---

### Atualizar tarefa

```http
PUT /tasks/:id
```

Atualiza dados ou status de conclusão da tarefa.

---

### Excluir tarefa

```http
DELETE /tasks/:id
```

Remove permanentemente uma tarefa.

---

# Swagger

Com o backend rodando localmente, a documentação pode ser acessada em:

```txt
http://localhost:3333/api-docs
```

---

# Como Rodar o Projeto Localmente

# Pré-requisitos

- Node.js v18+
- npm ou yarn
- Conta no Supabase com projeto criado

---

# Configurando o Backend

## 1. Acesse a pasta

```txt
cd backend
```

---

## 2. Instale as dependências

```txt
npm install
```

---

## 3. Configure o `.env`

Crie um arquivo `.env` na raiz da pasta `backend`:

```env
DATABASE_URL="postgresql://postgres:[SUA_SENHA]@[SEU_HOST_SUPABASE].supabase.co:5432/postgres?schema=public"

JWT_SECRET="sua_chave_secreta"

PORT=3333
```

---

## 4. Execute as migrations

```txt
npx prisma migrate dev --name init
```

---

## 5. Inicie o servidor

```txt
npm run dev
```

O backend estará disponível em:

```txt
http://localhost:3333
```

---

# Rodando os Testes do Backend

```txt
npm run test
```

Modo watch:

```txt
npm run test:watch
```

---

# Configurando o Frontend

## 1. Acesse a pasta

```txt
cd frontend
```

---

## 2. Instale as dependências

```txt
npm install
```

---

## 3. Configure a URL da API

Verifique se o arquivo:

```txt
src/services/api.ts
```

está apontando para:

```txt
http://localhost:3333
```

---

## 4. Execute o projeto

```txt
npm run dev
```

O frontend estará disponível em:

```txt
http://localhost:5173
```

---

# Deploy

## Frontend
- Vercel

## Backend
- Render

## Banco de Dados
- Supabase PostgreSQL

---

# Links de Produção

## Frontend

```txt
https://desafiotodolist.vercel.app/
```

## Backend

```txt
https://todolist-5dm7.onrender.com/
```

---

# Arquitetura e Decisões Técnicas

- Arquitetura modular e escalável
- Separação clara de responsabilidades
- JWT Stateless Authentication
- Prisma ORM para produtividade e tipagem
- Fallback híbrido para experiência sem login
- Axios interceptors para injeção automática de token
- Validação centralizada com Zod
- Styled Components para componentização visual

---

# Melhorias Futuras

- Paginação
- Dark Mode
- Dockerização
- CI/CD

---

# Autor

Desenvolvido como solução para o desafio técnico Fullstack.
