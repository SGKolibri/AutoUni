import { Card, CardContent, Box, Typography, Skeleton } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactElement;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  trend?: {
    value: number;
    isPositive: boolean;
  };
  loading?: boolean;
}

const KPICard = ({ title, value, subtitle, icon, color, trend, loading }: KPICardProps) => {
  const colorMap = {
    primary: '#1976D2',
    secondary: '#388E3C',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#D32F2F',
    info: '#0288D1',
  };

  if (loading) {
    return (
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
            <Skeleton variant="circular" width={48} height={48} />
            <Box sx={{ ml: 2, flexGrow: 1 }}>
              <Skeleton width="60%" height={20} />
              <Skeleton width="80%" height={32} sx={{ mt: 1 }} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        height: '100%',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            
            <Typography variant="h4" fontWeight={700} sx={{ mb: 0.5 }}>
              {value}
            </Typography>

            {subtitle && (
              <Typography variant="caption" color="text.secondary">
                {subtitle}
              </Typography>
            )}

            {trend && (
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                {trend.isPositive ? (
                  <TrendingUp sx={{ fontSize: 18, color: '#4CAF50', mr: 0.5 }} />
                ) : (
                  <TrendingDown sx={{ fontSize: 18, color: '#D32F2F', mr: 0.5 }} />
                )}
                <Typography
                  variant="caption"
                  sx={{
                    color: trend.isPositive ? '#4CAF50' : '#D32F2F',
                    fontWeight: 600,
                  }}
                >
                  {Math.abs(trend.value).toFixed(1)}%
                </Typography>
              </Box>
            )}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 56,
              height: 56,
              borderRadius: 2,
              backgroundColor: colorMap[color] + '15',
              color: colorMap[color],
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default KPICard;