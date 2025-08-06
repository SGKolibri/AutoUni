## Fase 1 – Planejamento, POC e Infraestrutura Inicial

**Duração estimada:** 1 mês

**Descrição:** Estabelecimento da base técnica do projeto, validação de hardware inicial e configuração do ecossistema MQTT e Home Assistant.

**Atividades:**

- [ ] Levantamento de requisitos técnicos (dispositivos, sensores, rede disponível)
- [ ] Estudo aprofundado de MQTT e funcionamento do ESP32 com sensores e relés
- [ ] Montagem de protótipo com 1 ESP32 controlando uma lâmpada via relé
- [ ] Integração de sensor de energia PZEM ou SCT-013 ao ESP32
- [ ] Instalação e configuração do Mosquitto MQTT Broker com autenticação
- [ ] Instalação e configuração inicial do Home Assistant
- [ ] Criação de automações locais simples no HA
- [ ] Setup inicial dos projetos NestJS e Angular com estrutura base

**Critérios de Aceite:**

- [ ] ESP32 funcionando e comunicando com o broker MQTT local
- [ ] Controle funcional de um dispositivo via MQTT
- [ ] Sensores de corrente/tensão integrados e publicando dados via MQTT
- [ ] Mosquitto configurado com autenticação e acessível por HA e ESP32
- [ ] HA operando com ao menos 1 automação local funcional (ex: ligar luz por horário)
- [ ] Backend NestJS e frontend Angular criados e rodando com estrutura básica de rotas e layout
