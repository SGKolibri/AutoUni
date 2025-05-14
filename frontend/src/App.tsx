import type { Theme } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Hero from "./scenes/hero/Hero";
import HomePage from "./scenes/home/HomePage";
import AutomationPage from "./scenes/automation/AutomationPage";
import SettingsPage from "./scenes/settings/SettingsPage";

function App() {
  const [theme, colorMode] = useMode() as [
    Theme,
    { toggleColorMode: () => void }
  ];

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Hero component acts as a layout wrapper with Navbar and Footer */}
            <Route path="/" element={<Hero />}>
              {/* Child routes that render inside Hero */}
              <Route index element={<HomePage />} />
              <Route path="routines" element={<AutomationPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
