# 🎓 AutoUni - Sistema de Gerenciamento Inteligente para Universidades

**AutoUni** é uma plataforma completa de gerenciamento predial desenvolvida especificamente para ambientes universitários. O sistema permite o controle e automação inteligente de diversos dispositivos distribuídos em múltiplos prédios, andares e salas, utilizando **Arduinos** e um **SBC centralizado** para criar uma infraestrutura universitária mais eficiente e conectada.

---

## ✨ Funcionalidades

- **Gerenciamento Hierárquico de Edifícios**  
  Organize e navegue facilmente pela estrutura de prédios, andares e salas

- **Controle de Dispositivos**  
  Monitore e controle diversos dispositivos inteligentes, incluindo:

  - Iluminação
  - Ar-condicionados
  - Fechaduras de segurança
  - Câmeras
  - Alto-falantes
  - Projetores
  - Sistemas HVAC
  - E muitos outros

- **Automação de Dispositivos**  
  Crie rotinas personalizadas para programar operações de dispositivos

- **Monitoramento de Salas**  
  Visualize o status de todos os dispositivos em cada sala de forma rápida

- **Gerenciamento de Cenas**  
  Configure e ative cenas predefinidas para salas ou eventos específicos

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM 7](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Lucide React](https://lucide.dev/)
- [Date-fns](https://date-fns.org/)

### Backend

- [Node.js](https://nodejs.org/) com TypeScript
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/) para documentação da API

---

## 📋 Estrutura do Projeto

O sistema é organizado em módulos que representam os principais componentes:

- **Prédios (Buildings)**: Representam os prédios no campus
- **Andares (Floors)**: Andares dentro dos prédios
- **Salas (Rooms)**: Ambientes como salas de aula e laboratórios
- **Dispositivos (Devices)**: Equipamentos como ar-condicionados, luzes, sensores, etc.
- **Automações (Automations)**: Regras para controle automático dos dispositivos

---

## 🔌 Hardware

- **Arduinos** para controle local de dispositivos
- **SBC** (single-board computer) como Raspberry Pi ou Orange Pi para centralização
- **Sensores diversos** (temperatura, movimento, luminosidade)
- **Relés** para controle de dispositivos elétricos

---

## 🚀 Como Começar

### ✅ Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Banco de dados PostgreSQL
- Arduino IDE (para programação dos dispositivos)

### 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/autouniversity.git
   cd autouniversity
   ```

2. Instale as dependências do frontend:

   ```bash
   cd frontend
   npm install
   ```

3. Instale as dependências do backend:

   ```bash
   cd ../backend
   npm install
   ```

4. Configure as variáveis de ambiente:

   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas credenciais de banco de dados
   ```

5. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

6. Inicie os servidores de desenvolvimento:

   No diretório `backend`:

   ```bash
   npm run dev
   ```

   Em outro terminal, no diretório `frontend`:

   ```bash
   npm run dev
   ```

---

## 📱 Estrutura da Aplicação

- **Visão Geral**: Navegação por prédios, andares e salas
- **Painel de Sala**: Controle de dispositivos e ativação de cenas em salas específicas
- **Página de Automação**: Criação e gerenciamento de rotinas automatizadas

---

## 🔌 Endpoints da API

A aplicação se comunica com uma API RESTful. Principais endpoints:

- **Prédios**: `/api/building/`
- **Andares**: `/api/floor/`
- **Salas**: `/api/room/`
- **Dispositivos**: `/api/device/`

> A documentação completa da API está disponível via Swagger no repositório do backend.

---

## 🔮 Melhorias Futuras

- Aplicativo móvel
- Otimização de energia baseada em IA
- Detecção de ocupação e análise preditiva
- Integração com sistemas de agendamento universitário
- Gerenciamento de acesso para estudantes
- Expansão para controle de laboratórios e salas especiais
