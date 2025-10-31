import { Box, Typography } from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface EnergyChartProps {
  data?: Array<{
    timestamp: string;
    power: number;
    energy: number;
  }>;
}

const EnergyChart = ({ data }: EnergyChartProps) => {
  if (!data || data.length === 0) {
    return (
      <Box
        sx={{
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Nenhum dado disponível
        </Typography>
      </Box>
    );
  }

  const chartData = data.map((item) => ({
    ...item,
    time: format(new Date(item.timestamp), 'HH:mm', { locale: ptBR }),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1976D2" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#1976D2" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
        <XAxis
          dataKey="time"
          tick={{ fontSize: 12 }}
          stroke="#616161"
        />
        <YAxis
          tick={{ fontSize: 12 }}
          stroke="#616161"
          label={{ value: 'Potência (W)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E0E0E0',
            borderRadius: 4,
          }}
          formatter={(value: number) => [`${value.toFixed(2)} W`, 'Potência']}
          labelFormatter={(label) => `Horário: ${label}`}
        />
        <Area
          type="monotone"
          dataKey="power"
          stroke="#1976D2"
          strokeWidth={2}
          fill="url(#colorPower)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default EnergyChart;