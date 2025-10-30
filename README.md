# AutoUni - Sistema de Gerenciamento Inteligente para Universidades

**AutoUni** é uma plataforma de gerenciamento predial inteligente voltada para ambientes universitários.
O sistema propõe o controle e automação de dispositivos distribuídos por salas, andares e prédios de uma universidade, com foco em eficiência energética, escalabilidade e visualização hierárquica dos ambientes.

---

## Visão Geral

AutoUni integra dispositivos físicos baseados em **ESP32** instalados em cada sala, que se comunicam com um **broker MQTT (Mosquitto)**.
A automação e coleta de dados pode ser gerenciada parcialmente via **Home Assistant** como middleware local, mas a lógica central do sistema é implementada por um **backend próprio em NestJS**, com **frontend em React + Vite + Material UI (MUI)** para interface administrativa e visualização dos dados.

---

## Objetivos do Projeto

* Gerenciar hierarquicamente prédios, andares, salas e dispositivos.
* Controlar dispositivos como iluminação, ar-condicionado, projetores e alto-falantes.
* Automatizar rotinas de uso de ambientes com base em horários ou eventos.
* Medir o consumo energético de cada dispositivo por tempo de uso, corrente e tensão.
* Visualizar dados agregados por sala, andar e prédio.
* Fornecer uma interface moderna, responsiva e segura.
* Possibilitar futuras extensões como reconhecimento de presença, controle de acesso, etc.

---

## Tecnologias Utilizadas

### IoT (Dispositivos)

* **ESP32** (um por sala)
* **Sensores de energia**: SCT-013, PZEM-004T
* Relés, sensores IR, etc.

### Comunicação

* **Mosquitto MQTT Broker**
* Tópicos customizados por sala/dispositivo

### Backend

* **NestJS**
* Integração com MQTT (via pacote oficial ou microserviço dedicado)
* Banco de dados: **PostgreSQL**
* Cálculo energético, automações, API REST e WebSocket

### Automação Local

* **Home Assistant**

  * Controle direto de dispositivos MQTT
  * Automação de rotinas básicas locais
  * Dashboard técnico alternativo

### Frontend

* **React** com **Vite** e **Material UI (MUI)**
* Linguagem: **TypeScript**
* **React Query** para cache e sincronização de dados
* **Axios** para comunicação com API REST
* **Socket.io-client** para atualizações em tempo real
* **Zustand** para estado global leve
* Interface responsiva e acessível
* Build rápido e modular (Vite)

---

## Funcionalidades

### Fase 1 – Funcionalidades de Alta Viabilidade Técnica

* Gerenciamento hierárquico de prédios, andares e salas
* Controle de iluminação via relés conectados ao ESP32
* Automação de rotinas programadas
* Monitoramento energético via sensores de corrente e tensão

### Fase 2 – Funcionalidades de Viabilidade Média

* Controle de ar-condicionados via infravermelho
* Controle de fechaduras (travas elétricas)
* Controle de alto-falantes e projetores
* Integração com sistemas HVAC básicos

### Fase 3 – Funcionalidades Futuras (Baixa Viabilidade Inicial)

* Integração com câmeras IP
* Reconhecimento de presença
* Reservas automatizadas de salas

---

## Arquitetura do Sistema

### Resumida

```plaintext
Usuário → React + Vite (Frontend) ←→ NestJS (Backend) ←→ PostgreSQL
                                          ↓
                                  MQTT Client (NestJS)
                                          ↓
ESP32 ←→ MQTT (Mosquitto) ←→ Home Assistant (opcional)
   ↓
Relés, sensores (PZEM, SCT-013), dispositivos IR
```

### Detalhada

```plaintext
+-----------------------------------------------------------------+
|                           Usuário Final                         |
|                (Administração, TI, Coordenação)                 |
+----------------------+--------------------+---------------------+
                                 |                    
                        +--------v--------+  
                        |  Frontend Web   |   
                        | React + Vite +  |   
                        | Material UI     |   
                        +-----------------+   
                                 |
                                 | REST/WebSocket
          +----------------------+---------------------------+
          |                    Backend NestJS                |
          |             (AutoUni Business Core)              |
          |  - Autenticação e permissões                     |
          |  - Gerenciamento de usuários, salas, prédios     |
          |  - APIs REST para frontend                       |
          |  - Integração com MQTT (via lib ou microservice) |
          |  - Agendamento e automações específicas          |
          |  - Cálculo energético, geração de relatórios     |
          |  - WebSocket para atualizações em tempo real     |
          +----------------------+---------------------------+
                                 |
                                 | REST/MQTT/WebSocket
          +----------------------+---------------------------+
          |                 Home Assistant                   |
          |  - Controle direto dos dispositivos via MQTT     |
          |  - Rotinas básicas e automações locais           |
          |  - Coleta de dados temporária                    |
          |  - Interface técnica alternativa para testes     |
          +----------------------+---------------------------+
                                 |
                                 | MQTT
                         +-------v--------+
                         |   Mosquitto    | ←→ [ HA + NestJS se inscrevem]
                         |   MQTT Broker  |
                         +-------+--------+
                                 |
                          +------+------+
                          |   ESP32s    |
                          |  (um por    |
                          |   sala)     |
                          +------+------+
                                 |
                     +-----------+-----------+
                     |  Relés, sensores, etc |
                     |  (Iluminação, PZEM,   |
                     |   SCT-013, IR, etc)   |
                     +----------------------+
          
                                 ↧
                 Banco de Dados PostgreSQL (Compartilhado por NestJS)
                 - Tabelas: usuários, dispositivos, sensores, consumo, salas, andares, prédios, logs
```

---

## Camadas

| Camada          | Tecnologia                       | Responsabilidades                                   |
| --------------- | -------------------------------- | --------------------------------------------------- |
| IoT             | ESP32 + Sensores                 | Leitura e controle local de dispositivos            |
| Broker MQTT     | Mosquitto                        | Comunicação assíncrona entre dispositivos e sistema |
| Automação Local | Home Assistant                   | Controle básico, coleta de dados e prototipagem     |
| Backend         | NestJS + MQTT + PostgreSQL       | Lógica de negócio, APIs, autenticação, relatórios   |
| Banco de Dados  | PostgreSQL                       | Armazenamento de entidades e dados energéticos      |
| Frontend        | React + Vite + Material UI (MUI) | Interface administrativa e visualização hierárquica |

---

## Tópicos MQTT Sugeridos

| Finalidade          | Tópico                       | Exemplo de Payload              |
| ------------------- | ---------------------------- | ------------------------------- |
| Status da luz       | `autouni/sala201/luz1/state` | `{"status": "on"}`              |
| Comando para AC     | `autouni/sala201/ac1/set`    | `{"power": "off"}`              |
| Dados de energia    | `autouni/sala201/pzem/data`  | `{"voltage":220,"current":2.1}` |
| Ping do dispositivo | `autouni/sala201/ping`       | `{"uptime": 31200}`             |

---

## Banco de Dados (Entidades principais)

* `users`: autenticação e permissões de acesso
* `buildings`: dados dos prédios (nome, localização)
* `floors`: referência ao prédio, número do andar
* `rooms`: referência ao andar, número da sala
* `devices`: tipo de dispositivo, localização, status
* `energy_logs`: leituras de consumo energético por tempo
* `automations`: regras de automação baseadas em eventos ou horários
* `scenes`: configurações predefinidas para salas/eventos

---

## Diferenciais do Projeto

* Controle hierárquico de ambientes: prédios, andares e salas
* Cálculo energético por dispositivo e localização
* Backend escalável com NestJS e PostgreSQL
* Integração direta com Home Assistant e MQTT
* Interface moderna com React + Vite + Material UI
* Atualizações em tempo real com WebSocket
* Modularidade para facilitar manutenção e extensões futuras

---

## Futuras Extensões (Analisar viabilidade)

* Reconhecimento de presença via BLE, RFID ou Wi-Fi
* Interface mobile (PWA ou app nativo Android via React Native)
* Sistema de reservas e uso inteligente de salas
* Integração com sensores ambientais (temperatura, CO₂)
* Exportação de relatórios em PDF e CSV
* Alertas automáticos para consumo elevado ou falhas
* Integração com sistemas acadêmicos e administrativos
* Comercialização como produto SaaS ou solução on-premise

---
