## Fase 2 – Backend e Frontend: Módulo de Gerenciamento Hierárquico

**Duração estimada:** 2 meses

**Descrição:** Implementação do gerenciamento estrutural da universidade: prédios, andares, salas e dispositivos.

**Atividades:**

- [ ] Modelagem do banco de dados com entidades principais (users, buildings, floors, rooms, devices)
- [ ] Criação de endpoints RESTful no NestJS para CRUD completo
- [ ] Implementação de autenticação JWT e controle de acesso por perfil
- [ ] Criação de componentes Angular para visualização e cadastro
- [ ] Integração entre frontend e backend via HTTP

**Critérios de Aceite:**

- [ ] CRUD completo funcional para todas as entidades
- [ ] Token JWT emitido e validado no backend com rotas protegidas
- [ ] Usuário pode cadastrar hierarquia completa (prédio > andar > sala > dispositivo)
- [ ] Dados cadastrados são persistidos corretamente no PostgreSQL
- [ ] Interface limpa, responsiva e funcional para cada tela
