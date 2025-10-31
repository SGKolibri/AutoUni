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
  Skeleton,
} from '@mui/material';
import {
  NavigateNext,
  MeetingRoom,
  BoltOutlined,
  DevicesOutlined,
  Person,
  Add,
} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import apiService from '@services/api';
import { Floor, RoomType } from '@types/index';
import EnergyChart from '@components/charts/EnergyChart';

const FloorDetailPage = () => {
  const { floorId } = useParams<{ floorId: string }>();
  const navigate = useNavigate();

  const { data: floor, isLoading } = useQuery({
    queryKey: ['floors', floorId],
    queryFn: async () => {
      const response = await apiService.get<Floor>(`/floors/${floorId}`);
      return response.data;
    },
    enabled: !!floorId,
  });

  const { data: building } = useQuery({
    queryKey: ['buildings', floor?.buildingId],
    queryFn: async () => {
      const response = await apiService.get(`/buildings/${floor?.buildingId}`);
      return response.data;
    },
    enabled: !!floor?.buildingId,
  });

  const { data: energyData } = useQuery({
    queryKey: ['floors', floorId, 'energy'],
    queryFn: async () => {
      const response = await apiService.get(`/floors/${floorId}/energy/recent`);
      return response.data;
    },
    enabled: !!floorId,
  });

  const handleRoomClick = (roomId: string) => {
    navigate(`/rooms/${roomId}`);
  };

  const handleAddRoom = () => {
    // TODO: Implementar modal de criação
    console.log('Add room to floor:', floorId);
  };

  const getRoomTypeLabel = (type: RoomType) => {
    const labels = {
      [RoomType.CLASSROOM]: 'Sala de Aula',
      [RoomType.LAB]: 'Laboratório',
      [RoomType.OFFICE]: 'Escritório',
      [RoomType.AUDITORIUM]: 'Auditório',
      [RoomType.LIBRARY]: 'Biblioteca',
      [RoomType.OTHER]: 'Outro',
    };
    return labels[type] || type;
  };

  const getRoomTypeColor = (type: RoomType): 'primary' | 'secondary' | 'info' | 'warning' | 'default' => {
    const colors = {
      [RoomType.CLASSROOM]: 'primary' as const,
      [RoomType.LAB]: 'secondary' as const,
      [RoomType.OFFICE]: 'info' as const,
      [RoomType.AUDITORIUM]: 'warning' as const,
      [RoomType.LIBRARY]: 'info' as const,
      [RoomType.OTHER]: 'default' as const,
    };
    return colors[type] || 'default';
  };

  if (isLoading) {
    return (
      <Box>
        <Skeleton width={300} height={40} sx={{ mb: 2 }} />
        <Skeleton width="100%" height={200} sx={{ mb: 3 }} />
      </Box>
    );
  }

  if (!floor) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h6">Andar não encontrado</Typography>
      </Box>
    );
  }

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
        <Link
          underline="hover"
          color="inherit"
          onClick={() => navigate(`/buildings/${floor.buildingId}`)}
          sx={{ cursor: 'pointer' }}
        >
          {building?.name || 'Prédio'}
        </Link>
        <Typography color="text.primary">{floor.name}</Typography>
      </Breadcrumbs>

      {/* Floor Info */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            {floor.name}
          </Typography>
          <Chip label={`${floor.number}º andar`} color="primary" sx={{ mb: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <MeetingRoom sx={{ fontSize: 32, color: 'info.main', mb: 1 }} />
                <Typography variant="h5" fontWeight={600}>
                  {floor.rooms?.length || 0}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Salas
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <DevicesOutlined sx={{ fontSize: 32, color: 'success.main', mb: 1 }} />
                <Typography variant="h5" fontWeight={600}>
                  {floor.activeDevices || 0}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Dispositivos Ativos
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <BoltOutlined sx={{ fontSize: 32, color: 'warning.main', mb: 1 }} />
                <Typography variant="h5" fontWeight={600}>
                  {floor.totalEnergy?.toFixed(2) || '0.00'}
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
          Consumo Energético do Andar (Últimas 24h)
        </Typography>
        <EnergyChart data={energyData} />
      </Paper>

      {/* Rooms Grid */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" fontWeight={600}>
          Salas
        </Typography>
        <Button variant="contained" startIcon={<MeetingRoom />} onClick={handleAddRoom}>
          Nova Sala
        </Button>
      </Box>

      {floor.rooms && floor.rooms.length === 0 ? (
        <Card sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            Nenhuma sala cadastrada neste andar
          </Typography>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {floor.rooms?.map((room) => (
            <Grid item xs={12} sm={6} md={4} key={room.id}>
              <Card
                sx={{
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardActionArea onClick={() => handleRoomClick(room.id)}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="h6" fontWeight={600}>
                        {room.name}
                      </Typography>
                      {room.occupied && (
                        <Chip
                          icon={<Person sx={{ fontSize: 16 }} />}
                          label="Ocupada"
                          size="small"
                          color="success"
                        />
                      )}
                    </Box>

                    <Chip
                      label={getRoomTypeLabel(room.type)}
                      size="small"
                      color={getRoomTypeColor(room.type)}
                      sx={{ mb: 2 }}
                    />

                    {room.capacity && (
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Capacidade: {room.capacity} pessoas
                      </Typography>
                    )}

                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip
                        icon={<DevicesOutlined sx={{ fontSize: 16 }} />}
                        label={`${room.devices?.length || 0} dispositivos`}
                        size="small"
                        variant="outlined"
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
                          {room.totalEnergy?.toFixed(2) || '0.00'} kWh
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

export default FloorDetailPage;