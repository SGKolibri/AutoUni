# Roadmap de Desenvolvimento — AutoUni

**Duração estimada: 15 meses**  
**Total de Fases: 7**  
**Ciclo: iterativo, incremental, com testes contínuos**

---

## Fase 1 – Planejamento, POC e Infraestrutura Inicial
**Duração estimada: 1 mês**

| Atividade                              | Descrição                                                                 |
|----------------------------------------|---------------------------------------------------------------------------|
| Levantamento de requisitos técnicos    | Confirmar dispositivos, sensores, rede da faculdade                       |
| Estudo aprofundado de MQTT e ESP32     | Foco em comunicação com Mosquitto                                         |
| Montagem de protótipo com 1 ESP32      | Acender lâmpada com relé via MQTT + monitoramento simples com PZEM       |
| Configuração do broker Mosquitto       | Em ambiente local com autenticação básica                                |
| Setup inicial do projeto NestJS        | Configuração do monorepo, dependências, base REST e conexão DB           |
| Setup inicial do projeto Angular       | Estrutura do frontend com Angular Material                               |

---

## Fase 2 – Backend e Frontend: Módulo de Gerenciamento Hierárquico
**Duração estimada: 2 meses**

| Atividade                                 | Descrição                                                     |
|-------------------------------------------|---------------------------------------------------------------|
| Modelagem do banco de dados               | Entidades: usuários, prédios, andares, salas, dispositivos    |
| Desenvolvimento de APIs REST              | CRUD completo para prédios, andares, salas e dispositivos     |
| Implementação da autenticação (JWT)       | Login, logout, perfis de acesso                               |
| Desenvolvimento do painel Angular         | Listagem e cadastro de estrutura predial                      |
| Integração frontend-backend               | Angular → NestJS APIs                                         |

---

## Fase 3 – Integração MQTT com Backend e Frontend
**Duração estimada: 2 meses**

| Atividade                                    | Descrição                                                      |
|----------------------------------------------|----------------------------------------------------------------|
| Subsistema MQTT no NestJS                    | Cliente MQTT para monitorar e controlar tópicos                |
| Integração ESP32 → MQTT → NestJS             | Backend recebendo estados e armazenando no banco               |
| Integração NestJS → MQTT → ESP32             | Backend enviando comandos e o ESP32 executando                 |
| Criação de dashboard em tempo real (WebSocket)| Visualizar status dos dispositivos por sala                    |

---

## Fase 4 – Cálculo Energético e Monitoramento
**Duração estimada: 2 meses**

| Atividade                                | Descrição                                                       |
|------------------------------------------|-----------------------------------------------------------------|
| Integração com sensores PZEM / SCT-013   | ESP32 enviando dados de corrente/tensão via MQTT               |
| Armazenamento de logs energéticos        | `energy_logs` em PostgreSQL                                    |
| Cálculo automático por dispositivo/sala  | Consumo acumulado, por período, por tipo                       |
| Dashboard Angular com gráficos           | Exibição gráfica de consumo por localização                    |
| Geração de relatórios                    | Relatórios simples (ex: consumo mensal por sala)               |

---

## Fase 5 – Automação e Cenas
**Duração estimada: 2 meses**

| Atividade                                | Descrição                                                       |
|------------------------------------------|-----------------------------------------------------------------|
| Criação de automações via backend        | Baseadas em horários, dias, eventos MQTT                        |
| Criação de cenas                         | Cenas configuráveis por usuários/admins                         |
| Interface Angular para automações        | Formulários, ativação e edição                                 |
| Execução das automações (NestJS ou HA)   | Processamento de regras e envio de comandos MQTT               |

---

## Fase 6 – Funcionalidades secundárias e testes em campo
**Duração estimada: 3 meses**

| Atividade                                        | Descrição                                                       |
|--------------------------------------------------|-----------------------------------------------------------------|
| Integração com dispositivos IR (AC, projetores)  | Controle via ESP32 + sensor IR                                 |
| Integração com travas elétricas e alto-falantes  | Controle via relés ou GPIO                                     |
| Protótipo em ambiente real (salas reais)         | Instalação em 1-2 salas piloto                                  |
| Testes de estabilidade e consumo                 | Avaliação do sistema em tempo real                             |
| Refino da interface e UX                         | Ajustes baseados no uso prático                                |

---

## Fase 7 – Documentação Final, Validação e Entrega
**Duração estimada: 3 meses**

| Atividade                                | Descrição                                                       |
|------------------------------------------|-----------------------------------------------------------------|
| Documentação técnica do sistema          | Backend, frontend, IoT, protocolos, banco de dados              |
| Escrita do TCC (monografia)              | Metodologia, resultados, análise comparativa                   |
| Preparação da apresentação final         | Slides, vídeos, demonstração                                   |
| Revisão geral e hardening                | Testes finais, correção de bugs                                |
| Deploy em servidor (Docker, VPS, etc)    | Versão para avaliação externa                                  |

---

## Resumo do Cronograma

| Fase                           | Duração estimada |
|--------------------------------|------------------|
| Fase 1 – POC e infraestrutura  | 1 mês            |
| Fase 2 – Hierarquia e estrutura| 2 meses          |
| Fase 3 – Integração MQTT       | 2 meses          |
| Fase 4 – Cálculo energético    | 2 meses          |
| Fase 5 – Automações e cenas    | 2 meses          |
| Fase 6 – Func. secundárias     | 3 meses          |
| Fase 7 – Documentação e entrega| 3 meses          |
| **Total**                      | **15 meses**     |
