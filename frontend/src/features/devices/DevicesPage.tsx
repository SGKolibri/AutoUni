import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  Button,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Alert,
} from '@mui/material';
import {
  Search,
  FilterList,
  PowerSettingsNew,
  PowerOff,
  Refresh,
  FileDownload,
} from '@mui/icons-material';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '@services/api';
import { Device, DeviceStatus, DeviceType } from '@types/index';
import { useDeviceStore } from '@store/deviceStore';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DevicesPage = () => {
  const queryClient = useQueryClient();
  const wsConnected = useDeviceStore((state) => state.wsConnected);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);
  const [statusFilter, setStatusFilter] = useState<DeviceStatus | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<DeviceType | 'all'>('all');
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);

  const { data: devices, isLoading, refetch } = useQuery({
    queryKey: ['devices', statusFilter, typeFilter],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.append('status', statusFilter);
      if (typeFilter !== 'all') params.append('type', typeFilter);
      
      const response = await apiService.get<Device[]>(`/devices?${params.toString()}`);
      return response.data;
    },
  });

  const bulkControlMutation = useMutation({
    mutationFn: async ({ deviceIds, command }: { deviceIds: string[]; command: string }) => {
      const response = await apiService.post('/devices/bulk-control', { deviceIds, command });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['devices'] });
      setSelectionModel([]);
    },
  });

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Dispositivo',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'type',
      headerName: 'Tipo',
      width: 150,
      renderCell: (params) => {
        const typeLabels: Record<DeviceType, string> = {
          [DeviceType.LIGHT]: 'Iluminação',
          [DeviceType.AC]: 'Ar Condicionado',
          [DeviceType.PROJECTOR]: 'Projetor',
          [DeviceType.SPEAKER]: 'Alto-falante',
          [DeviceType.SENSOR]: 'Sensor',
          [DeviceType.LOCK]: 'Trava',
          [DeviceType.OTHER]: 'Outro',
        };
        return typeLabels[params.value as DeviceType] || params.value;
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => {
        const colors: Record<DeviceStatus, 'success' | 'default' | 'warning' | 'error'> = {
          [DeviceStatus.ON]: 'success',
          [DeviceStatus.OFF]: 'default',
          [DeviceStatus.STANDBY]: 'warning',
          [DeviceStatus.ERROR]: 'error',
        };
        return (
          <Chip
            label={params.value}
            size="small"
            color={colors[params.value as DeviceStatus]}
          />
        );
      },
    },
    {
      field: 'online',
      headerName: 'Conexão',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value ? 'Online' : 'Offline'}
          size="small"
          color={params.value ? 'success' : 'error'}
          variant="outlined"
        />
      ),
    },
    {
      field: 'roomId',
      headerName: 'Sala',
      width: 150,
      renderCell: () => 'Sala 201', // TODO: buscar nome da sala
    },
    {
      field: 'powerRating',
      headerName: 'Potência',
      width: 120,
      renderCell: (params) => params.value ? `${params.value}W` : '-',
    },
    {
      field: 'lastSeen',
      headerName: 'Última Atualização',
      width: 180,
      renderCell: (params) =>
        format(new Date(params.value), "dd/MM/yyyy HH:mm", { locale: ptBR }),
    },
  ];

  const filteredDevices = devices?.filter(device =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const handleBulkOn = () => {
    bulkControlMutation.mutate({
      deviceIds: selectionModel as string[],
      command: 'on',
    });
  };

  const handleBulkOff = () => {
    bulkControlMutation.mutate({
      deviceIds: selectionModel as string[],
      command: 'off',
    });
  };

  const handleExport = () => {
    // TODO: Implementar exportação CSV
    console.log('Export devices');
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Dispositivos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {devices?.length || 0} dispositivos cadastrados
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={() => refetch()}
          >
            Atualizar
          </Button>
          <Button
            variant="outlined"
            startIcon={<FileDownload />}
            onClick={handleExport}
          >
            Exportar
          </Button>
        </Box>
      </Box>

      {/* Connection Status */}
      {!wsConnected && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          Conexão WebSocket desconectada. Os status dos dispositivos podem não estar atualizados em tempo real.
        </Alert>
      )}

      {/* Filters & Search */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <TextField
            placeholder="Buscar dispositivos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            sx={{ flexGrow: 1, minWidth: 250 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="outlined"
            startIcon={<FilterList />}
            onClick={(e) => setFilterAnchor(e.currentTarget)}
          >
            Filtros
          </Button>

          <Menu
            anchorEl={filterAnchor}
            open={Boolean(filterAnchor)}
            onClose={() => setFilterAnchor(null)}
          >
            <MenuItem disabled>
              <Typography variant="caption" fontWeight={600}>
                Status
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => { setStatusFilter('all'); setFilterAnchor(null); }}>
              Todos
            </MenuItem>
            <MenuItem onClick={() => { setStatusFilter(DeviceStatus.ON); setFilterAnchor(null); }}>
              Ligados
            </MenuItem>
            <MenuItem onClick={() => { setStatusFilter(DeviceStatus.OFF); setFilterAnchor(null); }}>
              Desligados
            </MenuItem>
            <MenuItem onClick={() => { setStatusFilter(DeviceStatus.STANDBY); setFilterAnchor(null); }}>
              Standby
            </MenuItem>
          </Menu>

          {/* Active Filters */}
          {statusFilter !== 'all' && (
            <Chip
              label={`Status: ${statusFilter}`}
              onDelete={() => setStatusFilter('all')}
              size="small"
            />
          )}
          {typeFilter !== 'all' && (
            <Chip
              label={`Tipo: ${typeFilter}`}
              onDelete={() => setTypeFilter('all')}
              size="small"
            />
          )}
        </Box>
      </Paper>

      {/* Bulk Actions */}
      {selectionModel.length > 0 && (
        <Paper sx={{ p: 2, mb: 3, backgroundColor: 'primary.main', color: 'white' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body1" fontWeight={600}>
              {selectionModel.length} dispositivo(s) selecionado(s)
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="contained"
                color="inherit"
                startIcon={<PowerSettingsNew />}
                onClick={handleBulkOn}
                disabled={bulkControlMutation.isPending}
              >
                Ligar Todos
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<PowerOff />}
                onClick={handleBulkOff}
                disabled={bulkControlMutation.isPending}
              >
                Desligar Todos
              </Button>
            </Box>
          </Box>
        </Paper>
      )}

      {/* Data Grid */}
      <Paper sx={{ height: 600 }}>
        <DataGrid
          rows={filteredDevices}
          columns={columns}
          loading={isLoading}
          checkboxSelection
          disableRowSelectionOnClick
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelection) => setSelectionModel(newSelection)}
          pageSizeOptions={[10, 25, 50, 100]}
          initialState={{
            pagination: { paginationModel: { pageSize: 25 } },
          }}
          sx={{
            border: 'none',
            '& .MuiDataGrid-cell:focus': {
              outline: 'none',
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default DevicesPage;