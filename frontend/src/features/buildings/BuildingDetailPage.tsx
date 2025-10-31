import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Breadcrumbs,
  Link,
  Chip,
  Paper,
  IconButton,
  Skeleton,
} from '@mui/material';
import {
  NavigateNext,
  Layers,
  MeetingRoom,
  Edit,
  Delete,
  BoltOutlined,
  DevicesOutlined,
} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import apiService from '@services/api';
import { Building } from '@types/index';
import EnergyChart from '@components/charts/EnergyChart';

const BuildingDetailPage = () => {
  const { buildingId } = useParams<{ buildingId: string }>();
  const navigate = useNavigate();

  const { data: building, isLoading } = useQuery({
    queryKey: ['buildings', buildingId],
    queryFn: async () => {
      const response = await apiService.get<Building>(`/buildings/${buildingId}`);
      return response.data;
    },
    enabled: !!buildingId,
  });

  const { data: energyData } = useQuery({
    queryKey: ['buildings', buildingId, 'energy'],
    queryFn: async () => {
      const response = await apiService.get(`/buildings/${buildingId}/energy/recent`);
      return response.data;
    },
    enabled: !!buildingId,
  });

  const handleFloorClick = (floorId: string) => {
    navigate(`/floors/${floorId}`);
  };

  if (isLoading) {
    return (
      <Box>
        <Skeleton width={200} height={40} sx={{ mb: 2 }} />
        <Skeleton width="100%" height={200} sx={{ mb: 3 }} />
        <Grid container spacing={3}>
          {[1, 2, 3].map((i) => (
            <Grid item xs={12} md={4} key={i}>
              <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (!building) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6">Prédio não encontrado</Typography>
      </Box>
    );
  }

  const totalRooms = building.floors?.reduce((acc, floor) => acc + (floor.rooms?.length || 0), 0) || 0;

  return (
    <Box>
      {/* Breadcrumbs */}
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 3 }}>
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate('/buildings')}
          sx={{ cursor: 'pointer' }}
        >
          Prédios
        </Link>
        <Typography color="text.primary">{building.name}</Typography>
      </Breadcrumbs>

      {/* Building Info Card */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  backgroundColor: 'primary.main',
                }}
              >
                <Layers sx={{ fontSize: 40, color: 'white' }} />
              </Box>
              <Box>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                  {building.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {building.location}
                </Typography>
                {building.description && (
                  <Typography variant="body2" color="text.secondary">
                    {building.description}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small">
                <Edit />
              </IconButton>
              <IconButton size="small" color="error">
                <Delete />
              </IconButton>
            </Box>
          </Box>

          {/* Stats */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <Layers sx={{ fontSize: 32, color: 'primary.main', mb: 1 }} />
                <Typography variant="h5" fontWeight={600}>
                  {building.floors?.length || 0}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Andares
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <MeetingRoom sx={{ fontSize: 32, color: 'info.main', mb: 1 }} />
                <Typography variant="h5" fontWeight={600}>
                  {totalRooms}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Salas
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <DevicesOutlined sx={{ fontSize: 32, color: 'success.main', mb: 1 }} />
                <Typography variant="h5" fontWeight={600}>
                  {building.activeDevices || 0}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Dispositivos Ativos
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <BoltOutlined sx={{ fontSize: 32, color: 'warning.main', mb: 1 }} />
                <Typography variant="h5" fontWeight={600}>
                  {building.totalEnergy?.toFixed(2) || '0.00'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  kWh Consumidos
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Energy Chart */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Consumo Energético do Prédio (Últimas 24h)
        </Typography>
        <EnergyChart data={energyData} />
      </Paper>

      {/* Floors Grid */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Andares
      </Typography>

      {building.floors && building.floors.length === 0 ? (
        <Card sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            Nenhum andar cadastrado neste prédio
          </Typography>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {building.floors?.map((floor) => (
            <Grid item xs={12} sm={6} md={4} key={floor.id}>
              <Card
                sx={{
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardActionArea onClick={() => handleFloorClick(floor.id)}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="h5" fontWeight={600}>
                        {floor.name}
                      </Typography>
                      <Chip
                        label={`${floor.number}º andar`}
                        size="small"
                        color="primary"
                      />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip
                        icon={<MeetingRoom sx={{ fontSize: 16 }} />}
                        label={`${floor.rooms?.length || 0} salas`}
                        size="small"
                        variant="outlined"
                      />
                      <Chip
                        icon={<DevicesOutlined sx={{ fontSize: 16 }} />}
                        label={`${floor.activeDevices || 0} ativos`}
                        size="small"
                        variant="outlined"
                        color="success"
                      />
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        p: 1.5,
                        backgroundColor: '#F5F5F5',
                        borderRadius: 1,
                      }}
                    >
                      <BoltOutlined sx={{ fontSize: 20, color: 'warning.main' }} />
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Consumo
                        </Typography>
                        <Typography variant="body2" fontWeight={600}>
                          {floor.totalEnergy?.toFixed(2) || '0.00'} kWh
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default BuildingDetailPage;