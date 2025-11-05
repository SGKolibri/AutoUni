# AutoUni Database Seeder

Sistema completo de seed para popular o banco de dados do AutoUni com dados iniciais de demonstração.

## 📁 Estrutura

```
prisma/
├── seed.ts                    # Script principal de seed
└── seeds/                     # Dados em JSON
    ├── users.json             # Usuários do sistema
    ├── buildings.json         # Prédios, andares e salas
    ├── devices.json           # Dispositivos IoT
    └── automations.json       # Automações agendadas
```

## 🚀 Como Executar

### Localmente (desenvolvimento)

```bash
# Executar seed manualmente
npx prisma db seed

# Ou via npm
npm run prisma db seed
```

### Docker (automático)

O seed é executado automaticamente durante o startup do container no `entrypoint.sh`:

```bash
./dev.sh rebuild  # Rebuilda e reinicia o container (seed é executado)
```

## 📊 Dados Incluídos

### 👥 Usuários (users.json)

**4 usuários padrão + 1 usuário root (via .env):**

| Email | Senha | Role | Descrição |
|-------|-------|------|-----------|
| `admin@autouni.edu.br` | `Admin@123` | ADMIN | Administrador do sistema |
| `coordenador@autouni.edu.br` | `Coord@123` | COORDINATOR | Coordenador |
| `tecnico@autouni.edu.br` | `Tech@123` | TECHNICIAN | Técnico |
| `viewer@autouni.edu.br` | `View@123` | VIEWER | Visualizador |
| **${ROOT_EMAIL}** | **${ROOT_PASSWORD}** | ADMIN | Root (via .env) |

> ⚠️ **IMPORTANTE**: Altere essas senhas em produção!

### 🏢 Estrutura de Prédios (buildings.json)

**3 Blocos completos:**

1. **Bloco A - Engenharia** (3 andares)
   - Térreo: 4 salas (A101-A104)
   - 1º Andar: 4 salas (A201-A204)
   - 2º Andar: 3 salas (A301-A303)

2. **Bloco B - Ciências Humanas** (2 andares)
   - Térreo: 3 salas (B101-B103)
   - 1º Andar: 3 salas (B201-B203)

3. **Bloco C - Administração** (2 andares)
   - Térreo: 3 salas (C101-C103)
   - 1º Andar: 3 salas (C201-C203)

**Total:** 3 prédios, 7 andares, 20 salas

### 🔌 Dispositivos IoT (devices.json)

**Dispositivos distribuídos pelas salas:**

- **Luzes LED**: Iluminação inteligente
- **Ar-Condicionado**: Climatização
- **Projetores**: Equipamentos audiovisuais
- **Sistema de Som**: Auditórios
- **Sensores**: Presença, temperatura, etc.
- **Fechaduras Inteligentes**: Controle de acesso

Cada dispositivo tem:
- Nome único
- Tipo (LIGHT, AC, PROJECTOR, SPEAKER, LOCK, SENSOR)
- Status inicial
- **MQTT Topic** para comunicação
- Metadata (potência, marca, modelo, etc.)

**Exemplo de MQTT Topics:**
- `devices/light-a101-main` - Lâmpada Sala A101
- `devices/ac-a103` - Ar-condicionado Lab A103
- `devices/sensor-presence-a103` - Sensor de presença

### ⚙️ Automações (automations.json)

**7 automações pré-configuradas:**

1. **Desligar luzes à noite** - `0 23 * * *` (23h diariamente)
2. **Ligar luzes manhã** - `0 7 * * 1-5` (7h dias úteis)
3. **Desligar AC fim de expediente** - `0 18 * * 1-5` (18h dias úteis)
4. **Modo econômico fim de semana** - `0 0 * * 6` (sábado 00h)
5. **Verificação de sensores** - `*/30 * * * *` (a cada 30 min)
6. **Shutdown de emergência** - MANUAL (acionamento manual)
7. **Reiniciar auditórios** - `0 0 * * 0` (domingo 00h)

### 📈 Leituras de Energia (gerado automaticamente)

O seed cria **50 leituras de exemplo** (últimas 24h):
- 10 dispositivos selecionados
- 5 leituras por dispositivo
- Intervalos de 4 horas
- Valores realistas com variação ±10%

## 🔧 Personalização

### Adicionar Novos Usuários

Edite `prisma/seeds/users.json`:

```json
{
  "email": "novousuario@autouni.edu.br",
  "name": "Nome Completo",
  "password": "SenhaSegura@123",
  "role": "ADMIN",
  "phone": "+55 11 98765-4321",
  "cpf": "123.456.789-00"
}
```

### Adicionar Novo Prédio

Edite `prisma/seeds/buildings.json`:

```json
{
  "name": "Bloco D - Nome",
  "description": "Descrição do prédio",
  "location": "Localização",
  "floors": [
    {
      "number": 1,
      "name": "Térreo",
      "rooms": [
        {
          "name": "Sala D101",
          "type": "CLASSROOM"
        }
      ]
    }
  ]
}
```

### Adicionar Dispositivos

Edite `prisma/seeds/devices.json`:

```json
{
  "roomName": "Sala D101",
  "devices": [
    {
      "name": "Dispositivo X",
      "type": "LIGHT",
      "status": "OFF",
      "mqttTopic": "devices/device-x-d101",
      "metadata": {
        "power": "50W",
        "brand": "Marca"
      }
    }
  ]
}
```

### Adicionar Automações

Edite `prisma/seeds/automations.json`:

```json
{
  "name": "Nova Automação",
  "description": "Descrição",
  "triggerType": "SCHEDULE",
  "cron": "0 12 * * *",
  "action": {
    "type": "mqtt",
    "topic": "devices/target/command",
    "payload": {
      "state": "ON"
    }
  },
  "enabled": true
}
```

## 🔐 Usuário Root

O usuário root é criado automaticamente usando variáveis de ambiente:

```bash
# .env
ROOT_EMAIL=admin@exemplo.com
ROOT_PASSWORD=SenhaForte@123
```

Se não definido, apenas os 4 usuários padrão serão criados.

## 📝 Logs do Seed

Durante a execução, você verá:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   AutoUni Database Seeder
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌱 Seeding users...
  ✓ User created: admin@autouni.edu.br (ADMIN)
  ✓ User created: coordenador@autouni.edu.br (COORDINATOR)
  ...
✅ 5 users seeded

🌱 Seeding buildings, floors, and rooms...
  ✓ Building: Bloco A - Engenharia
    ✓ Floor 1: Térreo
      ✓ Room: Sala A101 (CLASSROOM)
  ...
✅ Buildings structure seeded

...

📊 Database Statistics:
   Users: 5
   Buildings: 3
   Floors: 7
   Rooms: 20
   Devices: 25
   Automations: 7
   Energy Readings: 50
```

## ⚠️ Observações

1. **Idempotência**: O seed pode ser executado múltiplas vezes sem duplicar dados (usa `findFirst` + `create`)
2. **Senhas**: Todas as senhas são hashadas com bcrypt (10 rounds)
3. **Ordem**: A ordem de execução importa (usuários → prédios → dispositivos → automações → leituras)
4. **Validação**: O Prisma valida todos os dados antes de inserir

## 🧪 Testar Seed Localmente

```bash
# 1. Certifique-se que o banco está rodando
./dev.sh db-only

# 2. Execute migrations
npx prisma migrate dev

# 3. Execute seed
npx prisma db seed

# 4. Verifique dados
npx prisma studio
```

## 🐛 Troubleshooting

### Erro: "User already exists"
O seed detecta usuários existentes. Não duplica.

### Erro: "Room not found"
Verifique se o nome da sala em `devices.json` corresponde exatamente ao nome em `buildings.json`.

### Erro: "No admin user found"
O seed de automações precisa de pelo menos um usuário ADMIN. Execute o seed de usuários primeiro.

### Resetar tudo
```bash
# Apaga TODOS os dados e re-executa migrations
npx prisma migrate reset

# Ou via Docker
./dev.sh clean-all
./dev.sh start
```

## 📚 Recursos

- [Prisma Seeding](https://www.prisma.io/docs/guides/database/seed-database)
- [Cron Expression Generator](https://crontab.guru/)
- [MQTT Topics Best Practices](https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/)
