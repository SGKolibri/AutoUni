## AutoUni

### Finalidade Principal:
Um sistema inteligente e escalável para automatizar o controle de equipamentos em ambientes acadêmicos, visando:

🔋 **Eficiência energética** (redução de custos e desperdício)  
🌡️ **Conforto** (temperatura e iluminação ideais)  
🔒 **Segurança** (monitoramento de ocupação)  
📊 **Gestão inteligente** (dados em tempo real + agendamentos)

---

### **Funcionalidades Básicas:**

1. **Controle automatizado de equipamentos**
   - Ligar/desligar luzes, ar-condicionados e projetores via:
     - Módulos **relé** (dispositivos na tomada)  
     - **Infravermelho (IR)** (controle remoto)

2. **Monitoramento em tempo real**
   - Sensores de: ocupação, energia, umidade/CO₂  
   - Alertas para manutenção ou uso indevido

3. **Interface de controle**
   - Aplicativo móvel + painel web  
   - Controle manual e relatórios

4. **Comunicação entre dispositivos**
   - **ESP32/Arduino** (equipamentos) ↔ **RPi/Orange Pi** (central)  
   - Protocolos: MQTT/Wi-Fi


---

### **Ampliação das funcionalidades de Software**  

Para tornar o projeto mais completo e útil, o software do sistema deve incluir **visualização de dados, análises e relatórios**. Isso transforma dados brutos em informações acionáveis para a faculdade.  

---


### **Funcionalidades Avançadas de Software**  

#### **1. Dashboard centralizado**  
- Mapa interativo com status das salas (energia, temperatura, ocupação)  
- **Tecnologias:** React.js (front), Node.js/Python (back), PostgreSQL/InfluxDB  

#### **2. Gráficos & Relatórios**  
- Visualização de:  
  - Consumo energético por sala/período  
  - Picos de uso de equipamentos  
- Exporte em PDF/CSV  

#### **3. Alertas inteligentes**  
- Notificações por e-mail/SMS/app sobre:  
  - Falhas em equipamentos  
  - Consumo anormal de energia  
  - Ocupação irregular  

#### **4. API de integração**  
- Conecte com outros sistemas (matrículas, segurança)  
- Ex: Verificar salas vazias antes de ativar alarmes  

#### **5. Autenticação multi-nível**  
- Acessos diferenciados para:  
  - Administradores (controle total)  
  - Professores (salas de aula)  
  - Alunos (consulta)  

---

### **Ideias para Evolução**  

#### **1. Integração com Calendários**  
- Pré-configura salas automaticamente para aulas/reuniões  

#### **2. Sustentabilidade**  
- Painéis solares + análise de eficiência energética  

#### **3. Análise Preditiva**  
- Machine Learning para prever demanda de salas  

#### **4. Outros Ambientes**  
- Ginásios: controle de iluminação por horários  
- Bibliotecas: estações de estudo automáticas  

---

### **🛠️ Implementação:**  
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


### **🖥️ Tecnologias para o Software:**  
| Função               | Tecnologias                                                                 |  
|----------------------|-----------------------------------------------------------------------------|  
| **Front-end**        | React.js, Flutter (para app móvel)                                          |  
| **Back-end**         | Node.js, Python (FastAPI/Django), Raspberry Pi OS                           |  
| **Banco de Dados**   | PostgreSQL (dados gerais), InfluxDB (sensores), SQLite (prototipagem)       |  
| **IoT**      | MQTT (dispositivos IoT), REST/GraphQL (API)                                 |  
| **Visualização**     | Chart.js, D3.js, Grafana (para dashboards profissionais)                    |  
| **Autenticação**     | Firebase Auth, OAuth2                                                       |


---


### **💡 Por Que Importa?**  
- **Tomada de decisão:** Redução de custos operacionais  
- **Experiência:** Melhor conforto para alunos/professores  
- **Futuro:** Dados habilitam machine learning e automações mais inteligentes  
