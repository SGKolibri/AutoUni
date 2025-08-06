# Roadmap de Desenvolvimento — AutoUni

**Duração estimada: 15 meses**  
**Total de Fases: 7**  
**Ciclo: iterativo, incremental, com testes contínuos**

---

## Fase 1 – Planejamento, POC e Infraestrutura Inicial  
**Duração estimada:** 1 mês

| Atividade                              | Descrição                                                                 |
|----------------------------------------|---------------------------------------------------------------------------|
| Levantamento de requisitos técnicos    | Confirmar dispositivos, sensores, rede da faculdade                       |
| Estudo aprofundado de MQTT e ESP32     | Foco em comunicação com Mosquitto                                         |
| Montagem de protótipo com 1 ESP32      | Acender lâmpada com relé via MQTT + monitoramento simples com PZEM        |
| Configuração do broker Mosquitto       | Em ambiente local com autenticação básica                                 |
| Instalação e configuração do Home Assistant | Instalar HA em VM ou Raspberry, conectar ao Mosquitto                    |
| Criação de automações locais básicas no HA | Ex.: ligar luz em horário fixo, monitorar sensor de porta               |
| Setup inicial do projeto NestJS        | Configuração do monorepo, dependências, base REST e conexão DB            |
| Setup inicial do projeto Angular       | Estrutura do frontend com Angular Material                                |

**Resultado esperado:**

- Infraestrutura base pronta, Home Assistant integrado, e primeiro dispositivo controlado remotamente via MQTT.

---

## Fase 2 – Backend e Frontend: Módulo de Gerenciamento Hierárquico  
**Duração estimada:** 2 meses

| Atividade                                 | Descrição                                                     |
|-------------------------------------------|---------------------------------------------------------------|
| Modelagem do banco de dados               | Entidades: usuários, prédios, andares, salas, dispositivos    |
| Desenvolvimento de APIs REST              | CRUD completo para prédios, andares, salas e dispositivos     |
| Implementação da autenticação (JWT)       | Login, logout, perfis de acesso                               |
| Desenvolvimento do painel Angular         | Listagem e cadastro de estrutura predial                      |
| Integração frontend-backend               | Angular → NestJS APIs                                         |

**Resultado esperado:**

- Sistema básico funcionando com interface para cadastrar e navegar por prédios, andares e salas.

---

## Fase 3 – Integração MQTT com Backend, Frontend e Home Assistant  
**Duração estimada:** 2 meses

| Atividade                                         | Descrição                                                         |
|---------------------------------------------------|-------------------------------------------------------------------|
| Subsistema MQTT no NestJS                         | Cliente MQTT para monitorar e controlar tópicos                   |
| Integração ESP32 → MQTT → NestJS                  | Backend recebendo estados e armazenando no banco                  |
| Integração NestJS → MQTT → ESP32                  | Backend enviando comandos e o ESP32 executando                    |
| Integração Home Assistant ↔ Mosquitto             | HA subscreve e publica comandos nos mesmos tópicos MQTT           |
| Validação do controle local via HA Lovelace       | Verificar que HA controla dispositivos e exibe status corretamente|
| Criação de dashboard em tempo real (WebSocket)    | Visualizar status dos dispositivos por sala                       |

**Resultado esperado:**

- Painel em tempo real no Angular e Lovelace, com controle redundante pelo Home Assistant e pelo NestJS.

---

## Fase 4 – Cálculo Energético e Monitoramento  
**Duração estimada:** 2 meses

| Atividade                                | Descrição                                                       |
|------------------------------------------|-----------------------------------------------------------------|
| Integração com sensores PZEM / SCT-013   | ESP32 enviando dados de corrente/tensão via MQTT               |
| Armazenamento de logs energéticos        | `energy_logs` em PostgreSQL                                    |
| Cálculo automático por dispositivo/sala  | Consumo acumulado, por período, por tipo                       |
| Dashboard Angular com gráficos           | Exibição gráfica de consumo por localização                    |
| Geração de relatórios                    | Relatórios simples (ex: consumo mensal por sala)               |

**Resultado esperado:**

- Sistema funcional de monitoramento e visualização de consumo energético por sala/dispositivo.

---

## Fase 5 – Automações e Cenas (Local e Central)  
**Duração estimada:** 2 meses

| Atividade                                      | Descrição                                                         |
|------------------------------------------------|-------------------------------------------------------------------|
| Criação de automações locais via Home Assistant| Rotinas simples baseadas em tempo ou sensores no HA               |
| Criação de automações centrais via NestJS      | Regras avançadas e centralizadas, disparo via backend             |
| Criação de cenas                               | Cenas configuráveis por usuários/admins (HA e NestJS)            |
| Interface Angular para automações              | Formulários, ativação e edição                                   |
| Sincronização de automações HA ↔ NestJS        | Garantir que lógica local e central não conflitem                |

**Resultado esperado:**

- Funcionalidade de automação funcionando em duas camadas: local (HA) e central (NestJS), com interface unificada.

---

## Fase 6 – Funcionalidades Secundárias e Testes em Campo  
**Duração estimada:** 3 meses

| Atividade                                          | Descrição                                                         |
|----------------------------------------------------|-------------------------------------------------------------------|
| Integração com dispositivos IR (AC, projetores)    | Controle via ESP32 + sensor IR                                   |
| Integração com travas elétricas e alto-falantes    | Controle via relés ou GPIO                                       |
| Protótipo em ambiente real (salas piloto)          | Instalação em 1-2 salas reais                                     |
| Testes de estabilidade e consumo                   | Avaliar performance e confiabilidade em campo                    |
| Comparação HA vs NestJS como controladores         | Medir latência, falhas e fallback                                 |
| Avaliação de fallback do painel HA em caso de falha do backend | Testar redundância e continuidade de serviço   |
| Refino da interface e UX                           | Ajustes baseados no uso prático                                   |

**Resultado esperado:**

- Testes em campo com todos os módulos principais, validação de redundância HA/NestJS e refinamento UX.

---

## Fase 7 – Documentação Final, Validação e Entrega  
**Duração estimada:** 3 meses

| Atividade                                | Descrição                                                       |
|------------------------------------------|-----------------------------------------------------------------|
| Documentação técnica do sistema          | Backend, frontend, IoT, protocolos, banco de dados              |
| Gerar documentação Swagger/OpenAPI       | APIs NestJS                                                   |
| Escrita do TCC (monografia)              | Metodologia, resultados, análise comparativa                    |
| Preparação da apresentação final         | Slides, vídeos, demonstração                                    |
| Revisão geral e hardening                | Testes finais, correção de bugs                                 |
| Deploy em servidor (Docker, VPS, etc.)   | Versão para avaliação externa                                   |

**Resultado esperado:**

- Projeto finalizado, documentado, funcionando e pronto para apresentação e avaliação.

---

## Resumo do Cronograma

| Fase                           | Duração estimada |
|--------------------------------|------------------|
| Fase 1 – POC e infraestrutura  | 1 mês            |
| Fase 2 – Hierarquia e estrutura| 2 meses          |
| Fase 3 – Integração MQTT & HA  | 2 meses          |
| Fase 4 – Cálculo energético    | 2 meses          |
| Fase 5 – Automações e cenas    | 2 meses          |
| Fase 6 – Func. secundárias     | 3 meses          |
| Fase 7 – Documentação e entrega| 3 meses          |
| **Total**                      | **15 meses**     |
