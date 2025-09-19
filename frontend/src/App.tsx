import { useState, useEffect } from "react";
import { HomeProvider } from "./contexts/HomeContext";
import Layout from "./components/Layout/Layout";
import HomeView from "./components/Home/HomeView";
import AutomationView from "./components/Automation/AutomationView";
import { 
  ThemeProvider, 
  CssBaseline, 
  Snackbar, 
  Alert,
  AlertTitle,
  Box
} from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [currentView, setCurrentView] = useState<"home" | "automation">("home");
  const [theme, colorMode] = useMode();
  const [showOfflineAlert, setShowOfflineAlert] = useState(true);

  useEffect(() => {
    // Quando o modo escuro estiver ativo, adicione a classe 'dark' ao elemento html
    const isDarkMode = theme.palette.mode === "dark";
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme.palette.mode]);

  const handleCloseOfflineAlert = () => {
    setShowOfflineAlert(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeProvider>
          <Layout currentView={currentView} onViewChange={setCurrentView}>
            {currentView === "home" ? <HomeView /> : <AutomationView />}
          </Layout>
          
          {/* Snackbar para notificação de modo offline/demo */}
          <Snackbar
            open={showOfflineAlert}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={{ mt: 8 }}
          >
            <Alert
              severity="info"
              variant="filled"
              onClose={handleCloseOfflineAlert}
              sx={{
                minWidth: 400,
                '& .MuiAlert-message': {
                  width: '100%'
                }
              }}
            >
              <AlertTitle>
                <Box display="flex" alignItems="center" gap={1}>
                  📡 Modo Demo/Offline
                </Box>
              </AlertTitle>
              Esta é uma versão demonstrativa funcionando com dados simulados. 
              Nenhuma alteração será salva permanentemente.
            </Alert>
          </Snackbar>
        </HomeProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
