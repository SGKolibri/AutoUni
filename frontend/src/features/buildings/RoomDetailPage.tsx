import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
  Chip,
  Paper,
  Switch,
  Slider,
  Divider,
  Alert,
} from '@mui/material';
import {
  NavigateNext,
  MeetingRoom,
  BoltOutlined,
  DevicesOutlined,
  LightbulbOutlined,
  AcUnitOutlined,
  SlideshowOutlined,
  VolumeUpOutlined,
  SensorsOutlined,
  PowerSettingsNew,
  Refresh,
} from '@mui/icons-material';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '@services/api';
import { Room, Device, DeviceType, DeviceStatus } from '@types/index';
import { useDeviceStore } from '@store/deviceStore';
import EnergyChart from '@components/charts/EnergyChart';

const RoomDetailPage = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const updateDevice = useDeviceStore((state) => state.updateDevice);
  const wsConnected = useDeviceStore((state) => state.wsConnected);

  const { data: room, isLoading } = useQuery({
    queryKey: ['rooms', roomId],
    queryFn: async () => {
      const response = await apiService.get<Room>(`/rooms/${roomId}`);
      return response.data;
    },
    enabled: !!roomId,
  });

  const { data: energyData } = useQuery({
    queryKey: ['rooms', roomId, 'energy'],
    queryFn: async () => {
      const response = await apiService.get(`/rooms/${roomId}/energy/recent`);
      return response.data;
    },
    enabled: !!roomId,
  });

  const deviceControlMutation = useMutation({
    mutationFn: async ({ deviceId, command, value }: { deviceId: string; command: string; value?: any }) => {
      const response = await apiService.post(`/devices/${deviceId}/control`, { command, value });
      return response.data;
    },
    onSuccess: (data, variables) => {
      // Atualiza store local
      updateDevice(variables.deviceId, { status: data.status });
      // Invalida queries relacionadas
      queryClient.invalidateQueries({ queryKey: ['rooms', roomId] });
    },
  });

  const getDeviceIcon = (type: DeviceType) => {
    const icons = {
      [DeviceType.LIGHT]: <LightbulbOutlined />,
      [DeviceType.AC]: <AcUnitOutlined />,
      [DeviceType.PROJECTOR]: <SlideshowOutlined />,
      [DeviceType.SPEAKER]: <VolumeUpOutlined />,
      [DeviceType.SENSOR]: <SensorsOutlined />,
      [DeviceType.LOCK]: <PowerSettingsNew />,
      [DeviceType.OTHER]: <DevicesOutlined />,
    };
    return icons[type] || <DevicesOutlined />;
  };

  const getDeviceTypeLabel = (type: DeviceType) => {
    const labels = {
      [DeviceType.LIGHT]: 'Iluminação',
      [DeviceType.AC]: 'Ar Condicionado',
      [DeviceType.PROJECTOR]: 'Projetor',
      [DeviceType.SPEAKER]: 'Alto-falante',
      [DeviceType.SENSOR]: 'Sensor',
      [DeviceType.LOCK]: 'Trava',
      [DeviceType.OTHER]: 'Outro',
    };
    return labels[type] || type;
  };

  const handleDeviceToggle = (device: Device) => {
    const newStatus = device.status === DeviceStatus.ON ? DeviceStatus.OFF : DeviceStatus.ON;
    deviceControlMutation.mutate({
      deviceId: device.id,
      command: 'toggle',
      value: newStatus,
    });
  };

  const handleIntensityChange = (device: Device, value: number) => {
    deviceControlMutation.mutate({
      deviceId: device.id,
      command: 'setIntensity',
      value,
    });
  };

  const handleTemperatureChange = (device: Device, value: number) => {
    deviceControlMutation.mutate({
      deviceId: device.id,
      command: 'setTemperature',
      value,
    });
  };

  const handleRefreshRoom = () => {
    queryClient.invalidateQueries({ queryKey: ['rooms', roomId] });
  };

  const handleTurnOffAll = () => {
    if (!room?.devices) return;
    
    const deviceIds = room.devices
      .filter(d => d.status === DeviceStatus.ON)
      .map(d => d.id);
    
    if (deviceIds.length === 0) {
      alert('Não há dispositivos ligados');
      return;
    }

    if (confirm(`Desligar ${deviceIds.length} dispositivo(s)?`)) {
      // Bulk control
      apiService.post('/devices/bulk-control', {
        deviceIds,
        command: 'off',
      }).then(() => {
        queryClient.invalidateQueries({ queryKey: ['rooms', roomId] });
      });
    }
  };

  if (isLoading || !room) {
    return <Box sx={{ p: 3 }}>Carregando...</Box>;
  }

  return (
    <Box>
      {/* Breadcrumbs */}
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 3 }}>
        <Link underline="hover" color="inherit" onClick={() => navigate('/buildings')} sx={{ cursor: 'pointer' }}>
          Prédios
        </Link>
        <Typography color="text.primary">{room.name}</Typography>
      </Breadcrumbs>

      {/* Connection Status */}
      {!wsConnected && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          Conexão WebSocket desconectada. Os controles podem não funcionar em tempo real.
        </Alert>
      )}

      {/* Room Info */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                {room.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip label={`Sala ${room.number}`} color="primary" />
                {room.occupied && <Chip label="Ocupada" color="success" />}
              </Box>
              {room.capacity && (
                <Typography variant="body2" color="text.secondary">
                  Capacidade: {room.capacity} pessoas
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
                height: 80,
                borderRadius: 2,
                backgroundColor: 'info.main',
              }}
            >
              <MeetingRoom sx={{ fontSize: 40, color: 'white' }} />
            </Box>
          </Box>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6} sm={4}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <DevicesOutlined sx={{ fontSize: 28, color: 'success.main', mb: 1 }} />
                <Typography variant="h6" fontWeight={600}>
                  {room.devices?.length || 0}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Dispositivos
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <BoltOutlined sx={{ fontSize: 28, color: 'warning.main', mb: 1 }} />
                <Typography variant="h6" fontWeight={600}>
                  {room.totalEnergy?.toFixed(2) || '0.00'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  kWh Consumidos
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                <PowerSettingsNew sx={{ fontSize: 28, color: 'info.main', mb: 1 }} />
                <Typography variant="h6" fontWeight={600}>
                  {room.devices?.filter(d => d.status === DeviceStatus.ON).length || 0}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Dispositivos Ativos
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Energy Chart */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Consumo Energético da Sala (Últimas 24h)
        </Typography>
        <EnergyChart data={energyData} />
      </Paper>

      {/* Devices Control */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" fontWeight={600}>
          Dispositivos
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" startIcon={<Refresh />} onClick={handleRefreshRoom}>
            Atualizar
          </Button>
          <Button 
            variant="outlined" 
            color="error" 
            startIcon={<PowerSettingsNew />}
            onClick={handleTurnOffAll}
          >
            Desligar Todos
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {room.devices?.map((device) => (
          <Grid item xs={12} md={6} key={device.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: 1,
                        backgroundColor: device.status === DeviceStatus.ON ? 'success.main' : '#E0E0E0',
                        color: device.status === DeviceStatus.ON ? 'white' : '#616161',
                      }}
                    >
                      {getDeviceIcon(device.type)}
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {device.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {getDeviceTypeLabel(device.type)}
                      </Typography>
                    </Box>
                  </Box>
                  <Switch
                    checked={device.status === DeviceStatus.ON}
                    onChange={() => handleDeviceToggle(device)}
                    disabled={!device.online || deviceControlMutation.isPending}
                  />
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Status Chips */}
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  <Chip
                    label={device.online ? 'Online' : 'Offline'}
                    size="small"
                    color={device.online ? 'success' : 'error'}
                  />
                  <Chip
                    label={device.status}
                    size="small"
                    variant="outlined"
                  />
                </Box>

                {/* Intensity Control (for lights) */}
                {device.type === DeviceType.LIGHT && device.status === DeviceStatus.ON && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" gutterBottom>
                      Intensidade: {device.intensity || 100}%
                    </Typography>
                    <Slider
                      value={device.intensity || 100}
                      onChange={(_, value) => handleIntensityChange(device, value as number)}
                      disabled={!device.online}
                      min={0}
                      max={100}
                      valueLabelDisplay="auto"
                    />
                  </Box>
                )}

                {/* Temperature Control (for AC) */}
                {device.type === DeviceType.AC && device.status === DeviceStatus.ON && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" gutterBottom>
                      Temperatura: {device.temperature || 24}°C
                    </Typography>
                    <Slider
                      value={device.temperature || 24}
                      onChange={(_, value) => handleTemperatureChange(device, value as number)}
                      disabled={!device.online}
                      min={16}
                      max={30}
                      valueLabelDisplay="auto"
                      marks
                    />
                  </Box>
                )}

                {/* Power Info */}
                {device.powerRating && (
                  <Box sx={{ mt: 2, p: 1.5, backgroundColor: '#F5F5F5', borderRadius: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      Potência nominal: {device.powerRating}W
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}

        {(!room.devices || room.devices.length === 0) && (
          <Grid item xs={12}>
            <Card sx={{ p: 4, textAlign: 'center' }}>
              <DevicesOutlined sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
              <Typography variant="body1" color="text.secondary">
                Nenhum dispositivo cadastrado nesta sala
              </Typography>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default RoomDetailPage;