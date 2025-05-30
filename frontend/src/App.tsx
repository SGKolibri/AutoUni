import { useState, useEffect } from "react";
import { HomeProvider } from "./contexts/HomeContext";
import Layout from "./components/Layout/Layout";
import HomeView from "./components/Home/HomeView";
import AutomationView from "./components/Automation/AutomationView";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [currentView, setCurrentView] = useState<"home" | "automation">("home");
  const [theme, colorMode] = useMode();

  useEffect(() => {
    // Quando o modo escuro estiver ativo, adicione a classe 'dark' ao elemento html
    const isDarkMode = theme.palette.mode === "dark";
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme.palette.mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeProvider>
          <Layout currentView={currentView} onViewChange={setCurrentView}>
            {currentView === "home" ? <HomeView /> : <AutomationView />}
          </Layout>
        </HomeProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
