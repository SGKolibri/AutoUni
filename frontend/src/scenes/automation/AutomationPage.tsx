import { useState, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext, tokens } from "../../theme";
import {
  Box,
  InputBase,
  Paper,
  IconButton,
  Card,
  CardContent,
  Typography,
  Switch,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AddRoutineButton from "../../component/AddRoutineButton";

// Sample routines
const initialRoutines = [
  {
    id: 1,
    name: "Modo Aula",
    description: "Liga projetor, ar condicionado e luzes principais",
    isActive: true,
    devices: ["Projetor", "Ar-Condicionado", "Iluminação Principal"],
    icon: LightbulbIcon,
  },
  {
    id: 2,
    name: "Modo Conferência",
    description: "Liga sistema de som, câmeras e luzes secundárias",
    isActive: false,
    devices: ["Sistema de Som", "Câmera de Segurança", "Iluminação Secundária"],
    icon: AcUnitIcon,
  },
  {
    id: 3,
    name: "Desligar Tudo",
    description: "Desliga todos os dispositivos da sala",
    isActive: false,
    devices: ["Todos os dispositivos"],
    icon: PowerSettingsNewIcon,
  },
];

function AutomationPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [routines, setRoutines] = useState(initialRoutines);
  const [searchText, setSearchText] = useState("");

  // Toggle routine active state
  const toggleRoutine = (id: number) => {
    setRoutines(
      routines.map((routine) =>
        routine.id === id
          ? { ...routine, isActive: !routine.isActive }
          : routine
      )
    );
  };

  // Filter routines based on search
  const filteredRoutines = routines.filter((routine) =>
    routine.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient
            id="activeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(42, 123, 155, 1)" />
            <stop offset="50%" stopColor="rgba(87, 199, 133, 1)" />
            <stop offset="100%" stopColor="rgba(237, 221, 83, 1)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col items-center justify-between min-h-[calc(100vh-12rem)] py-2 ">
        <div
          className="w-full mb-8 sticky z-10"
          style={{
            top: "4.75rem",
            position: "sticky",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(18, 18, 18, 0.5)"
                : "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "0.5rem",
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderRadius: "2rem",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.03)",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="search">
              <SearchIcon
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.7)"
                      : "rgba(0, 0, 0, 0.5)",
                }}
              />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar rotinas..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Paper>
        </div>
        <div className="w-full flex-1 mb-4 overflow-y-auto">
          {/* Your routines cards remain the same */}

          {/* Routines Cards */}
          {filteredRoutines.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
                textAlign: "center",
                color:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography variant="body1">
                Nenhuma rotina encontrada.
              </Typography>
            </Box>
          ) : (
            filteredRoutines.map((routine) => (
              <Card
                key={routine.id}
                sx={{
                  mb: 3,
                  borderRadius: "16px",
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.03)",
                  overflow: "hidden",
                }}
              >
                <CardContent
                  sx={{
                    p: 2,
                    "&:last-child": { pb: 2 },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        mr: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        backgroundColor: routine.isActive
                          ? "rgba(87, 199, 133, 0.1)"
                          : theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <routine.icon
                        style={
                          routine.isActive
                            ? { fill: "url(#activeGradient)" }
                            : {
                                color:
                                  theme.palette.mode === "dark"
                                    ? "rgba(255,255,255,0.3)"
                                    : "rgba(0,0,0,0.3)",
                              }
                        }
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          color: routine.isActive
                            ? theme.palette.mode === "dark"
                              ? "#fff"
                              : colors.grey[400]
                            : theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.5)"
                            : "rgba(0,0,0,0.5)",
                        }}
                      >
                        {routine.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.75rem",
                          color:
                            theme.palette.mode === "dark"
                              ? "rgba(255,255,255,0.5)"
                              : "rgba(0,0,0,0.5)",
                        }}
                      >
                        {routine.devices.join(", ")}
                      </Typography>
                    </Box>
                  </Box>
                  <Switch
                    checked={routine.isActive}
                    onChange={() => toggleRoutine(routine.id)}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#57C785",
                        "& + .MuiSwitch-track": {
                          backgroundColor: "#57C785",
                        },
                      },
                    }}
                  />
                </CardContent>
              </Card>
            ))
          )}
        </div>
        <AddRoutineButton />
      </div>
    </>
  );
}

export default AutomationPage;
