# AutoUni Frontend

Sistema de Gerenciamento Inteligente para Universidades - Interface Web

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF.svg)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.15-007FFF.svg)](https://mui.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Design System](#-design-system)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Deploy](#-deploy)
- [Testes](#-testes)
- [Troubleshooting](#-troubleshooting)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🚀 Sobre o Projeto

O **AutoUni** é uma plataforma web moderna e responsiva para gerenciamento inteligente de ambientes universitários. O sistema permite controlar e monitorar dispositivos IoT (ESP32), analisar consumo energético, criar automações e gerar relatórios detalhados, tudo através de uma interface intuitiva e em tempo real.

### Características Principais

- 🏢 **Gestão Hierárquica**: Prédios → Andares → Salas → Dispositivos
- ⚡ **Controle em Tempo Real**: WebSocket para updates instantâneos
- 📊 **Dashboards Interativos**: Gráficos e KPIs detalhados
- 🔌 **Controle de Dispositivos**: Toggle, dimmer, temperatura
- 📈 **Monitoramento Energético**: Consumo, custos e análises
- 🤖 **Automações**: Agendamentos e regras personalizadas
- 📄 **Relatórios**: PDF, CSV, XLSX com filtros avançados
- 📱 **PWA**: Instalável e funciona offline
- 🎨 **Design Moderno**: Material-UI com tema customizado

---

## ✨ Funcionalidades

### Autenticação e Segurança
- ✅ Login/Logout com JWT
- ✅ Refresh token automático
- ✅ Proteção de rotas por role
- ✅ Recuperação de senha
- ✅ Perfil do usuário

### Dashboard
- ✅ KPIs em tempo real (consumo, dispositivos, custos)
- ✅ Gráficos de consumo energético
- ✅ Lista de prédios com métricas
- ✅ Alertas e notificações

### Navegação Hierárquica
- ✅ Lista de prédios com cards visuais
- ✅ Detalhes do prédio com andares
- ✅ Detalhes do andar com salas
- ✅ Detalhes da sala com dispositivos
- ✅ Breadcrumbs e navegação intuitiva

### Controle de Dispositivos
- ✅ Tabela com todos os dispositivos (DataGrid)
- ✅ Toggle on/off individual e em massa
- ✅ Controle de intensidade (dimmer 0-100%)
- ✅ Controle de temperatura (AC 16-30°C)
- ✅ Status online/offline em tempo real
- ✅ Filtros e busca avançada
- ✅ Exportação de dados

### Monitoramento Energético
- ✅ Visualização por período (hoje, semana, mês, custom)
- ✅ Visualização por nível (geral, prédio, andar, sala)
- ✅ Gráficos interativos (linha, barras, pizza)
- ✅ KPIs: consumo total, custo, pico de demanda
- ✅ Distribuição por tipo de dispositivo
- ✅ Ranking de consumo
- ✅ Indicadores de tendência

### Automações
- ✅ CRUD completo de automações
- ✅ Agendamento por horário
- ✅ Condições personalizadas
- ✅ Ativação/desativação
- ✅ Execução manual
- ✅ Logs de execução

### Relatórios
- ✅ 4 tipos: Energia, Dispositivos, Uso de Salas, Incidentes
- ✅ Formatos: PDF, CSV, XLSX
- ✅ Filtros por período e localização
- ✅ Status de processamento
- ✅ Download automático

### Configurações
- ✅ Gerenciamento de usuários
- ✅ Configurações de notificações
- ✅ Configurações do sistema
- ✅ Thresholds e alertas

---

## 🛠️ Tecnologias

### Core
- **React 18.3** - Biblioteca UI
- **TypeScript 5.4** - Type safety
- **Vite 5.2** - Build tool ultra-rápido

### UI Framework
- **Material-UI 5.15** - Componentes prontos
- **Emotion** - CSS-in-JS
- **MUI DataGrid** - Tabelas avançadas
- **Recharts 2.12** - Gráficos interativos

### Estado e Data Fetching
- **Zustand 4.5** - Estado global leve
- **React Query 5.28** - Cache e sincronização
- **Axios 1.6** - Cliente HTTP

### Roteamento e Forms
- **React Router DOM 6.22** - Navegação SPA
- **React Hook Form 7.51** - Formulários performáticos
- **Zod 3.22** - Validação de schemas

### Real-time
- **Socket.io Client 4.7** - WebSocket

### Utilitários
- **date-fns 3.6** - Manipulação de datas
- **lodash-es 4.17** - Utilidades JS

### DevOps
- **ESLint** - Linting
- **Prettier** - Formatação
- **Vitest** - Testes unitários
- **Docker** - Containerização

---

## 📋 Pré-requisitos

- Node.js 18+ e npm
- Backend AutoUni rodando em `http://localhost:3001` (ou configurável)
- Mosquitto MQTT Broker (opcional, para integração completa)

---

## 🔧 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/autouni-frontend.git
cd autouni-frontend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

Edite o arquivo `.env`:
```env
VITE_API_URL=http://localhost:3001/api
VITE_WS_URL=http://localhost:3001
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

### 5. Acesse no navegador
```
http://localhost:3000
```

---

## ⚙️ Configuração

### Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `VITE_API_URL` | URL da API REST | `http://localhost:3001/api` |
| `VITE_WS_URL` | URL do WebSocket | `http://localhost:3001` |
| `VITE_ENV` | Ambiente | `development` |

### Configuração do Backend

O frontend espera que o backend esteja rodando com os seguintes endpoints:

#### Auth
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `GET /api/auth/me`

#### Devices
- `GET /api/devices`
- `POST /api/devices/:id/control`
- `POST /api/devices/bulk-control`

#### Energy
- `GET /api/energy/stats`
- `GET /api/energy/history`

#### Buildings/Floors/Rooms
- `GET /api/buildings`
- `GET /api/buildings/:id`
- `GET /api/floors/:id`
- `GET /api/rooms/:id`

---

## 📖 Uso

### Credenciais de Demonstração

```
E-mail: admin@autouni.com
Senha: admin123
```

### Fluxo Básico

1. **Login**: Acesse com as credenciais
2. **Dashboard**: Visualize métricas gerais
3. **Navegação**: Explore Prédios → Andares → Salas
4. **Controle**: Ligue/desligue dispositivos
5. **Energia**: Analise consumo e custos
6. **Automações**: Crie regras automatizadas
7. **Relatórios**: Gere relatórios personalizados

---

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens, fontes
├── components/
│   ├── common/         # Componentes reutilizáveis
│   ├── layout/         # Layout (AppBar, Sidebar)
│   ├── charts/         # Gráficos
│   └── forms/          # Componentes de formulário
├── features/
│   ├── auth/           # Autenticação
│   ├── dashboard/      # Dashboard
│   ├── buildings/      # Gestão de prédios
│   ├── devices/        # Controle de dispositivos
│   ├── energy/         # Monitoramento energético
│   ├── automations/    # Automações
│   ├── reports/        # Relatórios
│   └── settings/       # Configurações
├── hooks/              # Custom hooks
├── services/           # API clients
├── store/              # Zustand stores
├── types/              # TypeScript types
├── utils/              # Funções auxiliares
├── theme/              # Tema MUI
├── App.tsx
├── main.tsx
└── router.tsx
```

---

## 🎨 Design System

### Paleta de Cores

```css
/* Principais */
Primary:   #1976D2  /* Azul */
Secondary: #388E3C  /* Verde */
Success:   #4CAF50
Warning:   #FF9800
Error:     #D32F2F
Info:      #0288D1

/* Neutras */
Background: #FFFFFF
Paper:      #F5F5F5
Divider:    #E0E0E0
Text:       #212121 / #616161
```

### Tipografia

- **Fonte**: Roboto (Google Fonts)
- **Headings**: Medium/Bold
- **Body**: Regular
- **Tamanhos**: h1 (40px) até caption (12px)

### Espaçamento

- Base: 8px (MUI spacing)
- Cards: 24px padding
- Gaps: 16px

### Componentes

- Cards com hover effect e sombra sutil
- Botões Material Design com bordas arredondadas
- Gráficos coloridos e interativos
- Indicadores visuais claros (online/offline)
- Loading skeletons em todas as páginas

---

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor dev (port 3000)

# Build
npm run build        # Build de produção
npm run preview      # Preview do build

# Qualidade de Código
npm run lint         # ESLint
npm run format       # Prettier

# Testes
npm test            # Vitest
npm run test:ui     # UI do Vitest
npm run test:coverage # Cobertura
```

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Docker

```bash
docker build -t autouni-frontend .
docker run -p 3000:80 autouni-frontend
```

### Docker Compose

```bash
docker-compose up -d
```

Veja [DEPLOYMENT.md](DEPLOYMENT.md) para mais detalhes.

---

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Testes com UI
npm run test:ui

# Cobertura
npm run test:coverage
```

### Estrutura de Testes

```
src/
├── components/
│   └── __tests__/
├── hooks/
│   └── __tests__/
└── utils/
    └── __tests__/
```

---

## 🐛 Troubleshooting

### Erro ao conectar com backend

**Problema**: `Network Error` ou `Failed to fetch`

**Solução**:
1. Verifique se o backend está rodando
2. Confirme as URLs no `.env`
3. Verifique CORS no backend

### WebSocket não conecta

**Problema**: `WebSocket connection failed`

**Solução**:
1. Verifique se o servidor Socket.io está ativo
2. Confirme `VITE_WS_URL` no `.env`
3. Em produção, use `wss://` (não `ws://`)

### Build falha

**Problema**: `Build failed with errors`

**Solução**:
```bash
# Limpe cache
rm -rf node_modules package-lock.json
npm install

# Limpe cache do Vite
rm -rf dist .vite
npm run build
```

### CORS Error

**Problema**: `CORS policy blocked`

**Solução**:
Configure CORS no backend:
```typescript
// NestJS
app.enableCors({
  origin: 'http://localhost:3000',
  credentials: true,
});
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit: `git commit -m 'Add nova feature'`
4. Push: `git push origin feature/nova-feature`
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript strict mode
- Siga ESLint e Prettier
- Escreva testes para novas features
- Documente funções complexas
- Use conventional commits

---

## 📄 Licença

Este projeto é parte de um trabalho acadêmico.

---

## 👥 Autores

**Equipe AutoUni** - 2024

- [Seu Nome](https://github.com/seu-usuario)
- [Colaborador 1](https://github.com/colaborador1)
- [Colaborador 2](https://github.com/colaborador2)

---

## 📞 Suporte

- 📧 Email: autouni@example.com
- 💬 Issues: [GitHub Issues](https://github.com/seu-usuario/autouni-frontend/issues)
- 📚 Docs: [Documentação Completa](docs/)

---

## 🙏 Agradecimentos

- Material-UI pela excelente biblioteca de componentes
- React Query pela gestão de cache eficiente
- Recharts pelos gráficos incríveis
- Comunidade open-source

---

## 📊 Status do Projeto

- ✅ Frontend: 100% completo
- 🔄 Backend: Em desenvolvimento
- 🔄 Integração ESP32: Em desenvolvimento
- 📅 Previsão de conclusão: [Data]

---

**⭐ Se este projeto foi útil, dê uma estrela!**

---

## 📚 Documentação Adicional

- [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) - Estrutura detalhada
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guia completo de deploy
- [FINAL_SUMMARY.md](FINAL_SUMMARY.md) - Resumo final do projeto

---

<div align="center">
[⬆ Voltar ao topo](#autouni-frontend)

</div>
