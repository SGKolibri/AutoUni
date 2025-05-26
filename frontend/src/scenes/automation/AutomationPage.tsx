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
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AddRoutineButton from "../../component/Inputs/AddRoutineButton";

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
    id: 1,
    name: "Modo Aula",
    description: "Liga projetor, ar condicionado e luzes principais",
    isActive: true,
    devices: ["Projetor", "Ar-Condicionado", "Iluminação Principal"],
    icon: LightbulbIcon,
  },
  {
    id: 1,
    name: "Modo Aula",
    description: "Liga projetor, ar condicionado e luzes principais",
    isActive: true,
    devices: ["Projetor", "Ar-Condicionado", "Iluminação Principal"],
    icon: LightbulbIcon,
  },
  {
    id: 1,
    name: "Modo Aula",
    description: "Liga projetor, ar condicionado e luzes principais",
    isActive: true,
    devices: ["Projetor", "Ar-Condicionado", "Iluminação Principal"],
    icon: LightbulbIcon,
  },
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
        </defs>{" "}
      </svg>      <div className="bg-teal-300 w-full h-full flex flex-col items-center rounded-lg shadow-md">
        {/* search input fixed at the top */}
        <div className="w-full p-4 flex items-center justify-center">
          <FormControl variant="outlined" fullWidth>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "2rem",
                backgroundColor: colors.primary[500],
              }}
            >
              <IconButton
                type="button"
                sx={{ p: 2 }}
                aria-label="search"
                onClick={() => console.log("Search clicked")}
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar Rotinas"
                inputProps={{ "aria-label": "search" }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </Paper>
          </FormControl>
        </div>

        {/* Content area with flex-grow to fill available space */}
        <div className="flex-grow w-full p-4 overflow-y-auto">
          <span className="">
            Não há rotinas cadastradas. Clique no botão abaixo para adicionar
            uma.
          </span>
        </div>

        
        <div className="w-full px-4 pb-4">
          <AddRoutineButton />
        </div>
      </div>
    </>
  );
}

export default AutomationPage;
