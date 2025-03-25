
## AutoUni

  

### Finalidade Principal:

Um sistema inteligente e escalável para automatizar o controle de equipamentos (luzes, ar-condicionados, projetores, TVs, computadores) em salas de aula, laboratórios, bibliotecas e outros espaços acadêmicos, visando:

**Eficiência energética** (redução de custos e desperdício).

**Conforto** (temperatura e iluminação ideais).

**Segurança** (monitoramento de ocupação e atividades suspeitas).

**Gestão inteligente** (integração com agendamentos e dados em tempo real).

  

---

  

### **Funcionalidades Básicas:**

1. **Controle automatizado de equipamentos:**

- Ligar/desligar luzes, ar-condicionados e projetores baseado em sensores (presença, luminosidade, temperatura).

- Uso de **módulos relé** (para dispositivos na tomada) e **infravermelho (IR)** (para aparelhos com controle remoto).

  

2. **Monitoramento em tempo real:**

- Sensores de ocupação, consumo de energia e condições ambientais (umidade, CO₂).

- Alertas para manutenção ou uso indevido.

  

3. **Interface de controle:**

- Aplicativo móvel e painel web para ajustes manuais e relatórios.

  

4. **Comunicação entre dispositivos:**

- **Arduinos/ESP32** (nos equipamentos) + **Raspberry Pi/Orange Pi** (central de controle).

- Protocolos como **MQTT** ou **Wi-Fi** para troca de dados.

  

---

### **Ampliação das Funcionalidades de Software**  

Para tornar o projeto mais completo e útil, o software do sistema deve incluir **visualização de dados, análises e relatórios**. Isso transforma dados brutos em informações acionáveis para a faculdade.  

---

### **Funcionalidades avançadas de Software:**  

#### **1. Dashboard centralizado**  
- **Funcionalidade:**  
  - Interface web (ou app) que exibe **status em tempo real** de todas as salas (equipamentos ligados, consumo de energia, temperatura, ocupação).  
  - Mapa interativo da faculdade com cores indicando salas ocupadas/livres.  
- **Tecnologias sugeridas:**  
  - **Front-end:** React.js (para dashboards dinâmicos).  
  - **Back-end:** Node.js (API REST) ou Python (Django/FastAPI).  
  - **Banco de dados:** PostgreSQL (para dados estruturados) ou InfluxDB (para séries temporais, sensores).  

#### **2. Gráficos e relatórios personalizáveis**  
- **Funcionalidade:**  
  - Gráficos de linha, barras e pizza para visualizar:  
    - Consumo de energia por sala/semana/mês.  
    - Horários de pico de uso de equipamentos.  
    - Economia gerada pela automação (ex.: "Sala 205 reduziu 30% no gasto com ar-condicionado").  
  - Exportar relatórios em **PDF, CSV ou Excel** para a administração.  
- **Ferramentas:**  
  - **Gráficos:** Chart.js, D3.js ou Plotly.  
  - **Relatórios automatizados:** Gerar via Python (Pandas + Matplotlib) ou JasperReports.  

#### **3. Alertas e Notificações**  
- **Funcionalidade:**  
  - Enviar alertas por **e-mail, SMS ou app** quando:  
    - Um equipamento apresenta falha (ex.: projetor não responde).  
    - Consumo de energia está acima do esperado.  
    - Sala fica ocupada além do horário agendado.  
  - Exemplo: *"Alerta: Ar-condicionado na Sala 304 está ligado há 5 horas sem detecção de movimento."*  
- **Como implementar:**  
  - Serviços como **Twilio (SMS)**, Nodemailer (e-mails) ou Firebase Cloud Messaging (notificações push).  

#### **4. API para integração com outros sistemas**  
- **Funcionalidade:**  
  - Permitir que outros sistemas da faculdade (ex.: sistema de matrículas, segurança) acessem dados da automação.  
  - Exemplo: O sistema de segurança pode verificar se todas as salas estão vazias antes de ativar o alarme.  
- **Tecnologias:**  
  - REST API (FastAPI/Flask) ou GraphQL.  

#### **5. Autenticação e permissões**  
- **Funcionalidade:**  
  - Níveis de acesso diferenciados:  
    - **Administradores:** Ajustam regras de automação e veem todos os dados.  
    - **Professores:** Controlam apenas as salas onde dão aula.  
    - **Alunos:** Veem apenas salas disponíveis.  
  - Login via **RFID, senha ou autenticação facial** (em versões futuras).  
- **Ferramentas:**  
  - Firebase Authentication ou OAuth2.  

---

### **Exemplo de Fluxo de Dados:**  
1. **Coleta:** Sensores (Arduino/ESP32) enviam dados para o Raspberry Pi via MQTT.  
2. **Processamento:** Raspberry Pi armazena dados no banco de dados (ex.: InfluxDB).  
3. **Visualização:** Dashboard (React) consome os dados via API e exibe gráficos em tempo real.  
4. **Ações:** Usuário recebe alertas ou controla equipamentos via app.  

---

### **Tecnologias para o Software:**  
| Função               | Tecnologias                                                                 |  
|----------------------|-----------------------------------------------------------------------------|  
| **Front-end**        | React.js, Flutter (para app móvel)                                  |  
| **Back-end**         | Node.js, Python (FastAPI/Django), Raspberry Pi OS                           |  
| **Banco de Dados**   | PostgreSQL (dados gerais), InfluxDB (sensores), SQLite (prototipagem)       |  
| **Comunicação**      | MQTT (dispositivos IoT), REST/GraphQL (API)                                 |  
| **Visualização**     | Chart.js, D3.js, Grafana (para dashboards profissionais)                   |  
| **Autenticação**     | Firebase Auth, OAuth2                                                       |  

---

### **Implementação:**  
1. **Criar um MVP (Mínimo Produto Viável):**  
   - Desenvolva um dashboard simples que mostre dados de **uma única sala** (ex.: temperatura e status das luzes).  
   - Use **SQLite + Python** para prototipagem rápida.  

2. **Adicionar funcionalidades gradualmente:**  
   - Primeiro: Gráficos básicos (Chart.js).  
   - Depois: Alertas por e-mail (Nodemailer).  
   - Por último: Controle por voz (Dialogflow).  

3. **Testar com usuários reais:**  
   - Peça feedback de professores e funcionários para ajustar a interface.  

---

### **Porque essas funcionalidades são importantes:**  
- **Tomada de decisão:** A faculdade pode usar os dados para reduzir custos e melhorar alocações de salas.  
- **Engajamento:** Professores e alunos adotam mais rápido um sistema fácil de usar.  
- **Futuro:** Dados históricos podem ser usados para **machine learning** (ex.: prever demanda por salas).  

---
  

### **Ideias para Aprofundar o Projeto:**  

#### **1. Integração com Calendários (Google Calendar, Outlook)**

- **Funcionalidade:**

- Preparar automaticamente a sala antes de uma aula/reunião (ligar projetor, ajustar temperatura).

- Evitar conflitos de agendamento.

- **Implementação:**

- API do Google Calendar + scripts no Raspberry Pi.

  

#### **2. Sustentabilidade**

- **Funcionalidade:**

- Medir e otimizar o consumo de energia por sala.

- Sugerir horários de menor custo energético (ex.: desligar equipamentos em salas vazias).

- Integrar painéis solares ou sistemas de armazenamento de energia.

- **Ferramentas:**

- Sensores de energia (ex.: PZEM-004T) + dashboard de analytics.

  

#### **3. Análise de dados preditiva**

- **Funcionalidade:**

- Usar machine learning para prever ocupação de salas e ajustar equipamentos antecipadamente.

- Identificar padrões de desperdício (ex.: "O ar-condicionado da sala 12 fica ligado sem uso às 18h").

- **Tecnologias:**

- Python (Pandas, Scikit-learn) + banco de dados (SQLite, InfluxDB).

  

#### **4. Outros ambientes**

- **Ginásio/Academia:**

- Controle de iluminação e ventilação baseado em horários de treino.

- **Biblioteca:**

- Sistemas de autoatendimento (ex.: estações de estudo com iluminação ajustável).

  

---

