import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuthStore } from "@store/authStore";
import router from "./router";
import apiService from "./services/api";
import { User } from "./types";
import theme from "./theme/theme";

// Configuração do React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  const setUser = useAuthStore((state) => state.setUser);
  const setTokens = useAuthStore((state) => state.setTokens);

  // Verifica se há token armazenado e restaura a sessão
  useEffect(() => {
    const restoreSession = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        try {
          // Busca dados do usuário atual
          const response = await apiService.get<User>("/auth/me");
          setUser(response.data)
          setTokens({ accessToken, refreshToken });
        } catch {
          // Token inválido, limpa storage
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setUser(null);
          setTokens(null);
        }
      } else {
        setUser(null);
      }
    };

    restoreSession();
  }, [setUser, setTokens]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
