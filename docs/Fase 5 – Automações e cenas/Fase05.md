## Fase 5 – Automações e Cenas (Local e Central)

**Duração estimada:** 2 meses

**Descrição:** Controle de automações locais via HA e controle centralizado via backend, além de cenas personalizadas.

**Atividades:**

- [ ] Implementar modelo de automações e cenas no banco
- [ ] Permitir criação de cenas e regras via frontend
- [ ] Executar automações no backend baseadas em eventos e horários
- [ ] Criar e executar automações locais no HA
- [ ] Evitar conflito de execução entre backend e HA

**Critérios de Aceite:**

- [ ] Usuário pode criar automações e cenas via frontend
- [ ] Eventos MQTT acionam cenas ou automações no backend
- [ ] HA responde corretamente às automações locais programadas
- [ ] HA e backend operam em conjunto sem sobreposição
- [ ] Frontend permite ativar/desativar automações individualmente
