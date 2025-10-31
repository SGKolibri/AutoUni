import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Dashboard,
  Business,
  Devices,
  BoltOutlined,
  AutoMode,
  Assessment,
  Settings,
} from '@mui/icons-material';
import { useUIStore } from '@store/uiStore';

interface SidebarProps {
  drawerWidth: number;
}

interface NavItem {
  title: string;
  path: string;
  icon: React.ReactElement;
  divider?: boolean;
}

const navItems: NavItem[] = [
  { title: 'Dashboard', path: '/', icon: <Dashboard /> },
  { title: 'Prédios', path: '/buildings', icon: <Business /> },
  { title: 'Dispositivos', path: '/devices', icon: <Devices /> },
  { title: 'Energia', path: '/energy', icon: <BoltOutlined />, divider: true },
  { title: 'Automações', path: '/automations', icon: <AutoMode /> },
  { title: 'Relatórios', path: '/reports', icon: <Assessment />, divider: true },
  { title: 'Configurações', path: '/settings', icon: <Settings /> },
];

const Sidebar = ({ drawerWidth }: SidebarProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);
  const setSidebarOpen = useUIStore((state) => state.setSidebarOpen);

  const handleNavigate = (path: string) => {
    navigate(path);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ mt: 8 }}>
      <List>
        {navItems.map((item) => (
          <Box key={item.path}>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => handleNavigate(item.path)}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main + '15',
                    borderRight: `3px solid ${theme.palette.primary.main}`,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main + '25',
                    },
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname === item.path
                      ? theme.palette.primary.main
                      : 'inherit',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
            {item.divider && <Divider sx={{ my: 1 }} />}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        /* Desktop Drawer */
        <Drawer
          variant="persistent"
          open={sidebarOpen}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;