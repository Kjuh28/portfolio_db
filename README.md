# 🗄️ Backend Core — portfolio_db

Este repositório contém o código-fonte do ecossistema backend e gerenciamento de dados que servem de suporte para o meu portfólio pessoal (`kerleysousa.dev`). O principal objetivo deste serviço é expor endpoints performáticos e gerenciar a persistência de dados de forma assíncrona e escalável.

---

## 📋 Sobre o Projeto
O sistema foi desenvolvido utilizando o ambiente de execução **Node.js** com **TypeScript**, focado em uma arquitetura desacoplada e modular. A API gerencia dados dinâmicos do portfólio (como listagem de projetos e habilidades técnicas) interagindo diretamente com um banco de dados relacional, garantindo consistência, integridade e velocidade nas consultas.

## 🛠️ Stack Tecnológica Utilizada
* **Ambiente de Execução:** Node.js (v22.x) com suporte nativo/compilado a **TypeScript** 🚀
* **Framework Web:** Express (Roteamento robusto e arquitetura escalável)
* **Banco de Dados:** PostgreSQL (Banco de dados relacional robusto, ACID e altamente confiável)
* **ORM (Object-Relational Mapping):** Sequelize (Abstração de queries, gerenciamento de modelos relacionais e associações)
* **Infraestrutura & Deploy:** Vercel (@vercel/node para execução de funções serverless otimizadas)
* **Segurança & Variáveis:** CORS integrado para controle de acessos e Dotenv para gestão segura de credenciais

## ⚙️ Diferenciais Técnicos Aplicados
* **Arquitetura Typada (TypeScript):** Desenvolvimento robusto utilizando definições de tipos, reduzindo erros em tempo de compilação e garantindo maior manutenibilidade do código.
* **Mapeamento Objeto-Relacional Avançado:** Uso do Sequelize para gerenciar entidades e persistência de dados no PostgreSQL, eliminando a necessidade de SQL manual e abstraindo de forma elegante a lógica do banco relacional.
* **Arquitetura Serverless Pronta:** Configuração e acoplamento com o ecossistema da Vercel, permitindo que a API do portfólio escale de forma automática sob demanda através de rotas/funções Serverless de altíssima performance.
* **Padrão Controller Limpo:** Separação rígida de conceitos onde as rotas delegam requisições e respostas (`req`, `resp`) diretamente a métodos encapsulados em controladores especialistas (`ProjectController`).

---

## 🌐 Deploy & Como Consumir a API

O projeto encontra-se hospedado e configurado em ambiente Serverless na **Vercel**, integrado a um banco de dados relacional **PostgreSQL** produtivo (Neon.tech). 

Por questões de segurança e integridade das credenciais de produção, o ambiente local é restrito via variáveis de ambiente (`.env`). Para testar e validar os endpoints, utilize a URL base de produção:

**URL Base da API:** `https://portfolio-db-three.vercel.app/` 

### 🚀 Principais Endpoints

#### Projetos (`/api/projects`)
* `GET /api/projects` - Retorna a listagem completa de projetos cadastrados no portfólio.
* `GET /api/projects/:id` - Busca os detalhes de um projeto específico através do ID.
* `POST /api/projects` - Cadastro de novos projetos (Restrito/Protegido).

#### Habilidades (`/api/abilities`)
* `GET /api/abilities` - Retorna todas as competências técnicas e habilidades mapeadas.

---
