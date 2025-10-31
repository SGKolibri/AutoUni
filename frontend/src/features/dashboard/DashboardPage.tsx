import { Grid, Box, Typography, Paper } from '@mui/material';
import {
  BoltOutlined,
  DevicesOutlined,
  WarningAmberOutlined,
  TrendingUpOutlined,
} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import apiService from '@services/api';
import { useWebSocket } from '@hooks/useWebSocket';
import KPICard from '@components/common/KPICard';
import EnergyChart from '@components/charts/EnergyChart';
import DeviceStatusChart from '@components/charts/DeviceStatusChart';
import BuildingsList from './components/BuildingsList';

const DashboardPage = () => {
  // Inicializa WebSocket para atualizações em tempo real
  useWebSocket();

  // Fetch dashboard stats
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: async () => {
      const response = await apiService.get('/dashboard/stats');
      return response.data;
    },
    refetchInterval: 30000, // Refetch a cada 30s
  });

  // Fetch energy data
  const { data: energyData } = useQuery({
    queryKey: ['dashboard', 'energy'],
    queryFn: async () => {
      const response = await apiService.get('/dashboard/energy/recent');
      return response.data;
    },
    refetchInterval: 60000, // Refetch a cada 1min
  });

  return (
    <Box>
      {/* Page Title */}
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Visão geral do sistema
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="Consumo Total"
            value={stats?.totalEnergy ? `${stats.totalEnergy.toFixed(2)} kWh` : '0 kWh'}
            icon={<BoltOutlined />}
            color="primary"
            trend={stats?.energyTrend}
            loading={statsLoading}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="Dispositivos Ativos"
            value={stats?.activeDevices || 0}
            subtitle={`de ${stats?.totalDevices || 0} dispositivos`}
            icon={<DevicesOutlined />}
            color="success"
            loading={statsLoading}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="Custo Estimado"
            value={stats?.estimatedCost ? `R$ ${stats.estimatedCost.toFixed(2)}` : 'R$ 0,00'}
            subtitle="este mês"
            icon={<TrendingUpOutlined />}
            color="info"
            trend={stats?.costTrend}
            loading={statsLoading}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <KPICard
            title="Alertas Ativos"
            value={stats?.activeAlerts || 0}
            icon={<WarningAmberOutlined />}
            color="warning"
            loading={statsLoading}
          />
        </Grid>
      </Grid>

      {/* Charts Row */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Consumo Energético (Últimas 24h)
            </Typography>
            <EnergyChart data={energyData} />
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Status dos Dispositivos
            </Typography>
            <DeviceStatusChart stats={stats} />
          </Paper>
        </Grid>
      </Grid>

      {/* Buildings List */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Prédios
        </Typography>
        <BuildingsList />
      </Paper>
    </Box>
  );
};

export default DashboardPage;