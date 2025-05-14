import { useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext, tokens } from "../../theme";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  IconButton,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import ComputerIcon from "@mui/icons-material/Computer";
import RouterIcon from "@mui/icons-material/Router";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SpeakerIcon from "@mui/icons-material/Speaker";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const devicesList = [
  { id: 1, name: "Projetor", status: "offline", icon: VideocamIcon },
  {
    id: 2,
    name: "Servidor",
    status: "online",
    icon: ComputerIcon,
  },
  { id: 3, name: "Roteador Wi-Fi", status: "online", icon: RouterIcon },
  {
    id: 4,
    name: "Iluminação Principal",
    status: "online",
    icon: LightbulbIcon,
  },
  { id: 5, name: "Ar-Condicionado", status: "offline", icon: AcUnitIcon },
  { id: 6, name: "Sistema de Som", status: "online", icon: SpeakerIcon },
  {
    id: 7,
    name: "Iluminação Secundária",
    status: "online",
    icon: LightbulbIcon,
  },
  { id: 8, name: "Câmera de Segurança", status: "offline", icon: VideocamIcon },
  { id: 9, name: "Sistema de Alarme", status: "online", icon: RouterIcon },
];
function DevicesSection() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [devices, setDevices] = useState(devicesList);

  const toggleDeviceStatus = (id: number) => {
    setDevices(
      devices.map((device) =>
        device.id === id
          ? {
              ...device,
              status: device.status === "online" ? "offline" : "online",
            }
          : device
      )
    );
  };

  return (
    <>
      <div className="w-full flex flex-col items-start justify-center">
        {/* Add devices */}
        <div className="w-full flex items-center">
          <span
            className="text-lg font-normal"
            style={{
              color:
                theme.palette.mode === "dark" ? "#dad7d6" : colors.grey[400],
            }}
          >
            Dispositivos
          </span>
          <IconButton>
            <AddCircleOutlineIcon
              style={{ fill: "url(#activeGradient)", fontSize: "1.5rem" }}
            />
          </IconButton>
        </div>

        {/* Devices list */}
        <List className="w-full">
          {devices.map((device) => (
            <ListItem
              key={device.id}
              sx={{
                mb: 2,
                borderRadius: "12px",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.03)",
                "&:hover":
                  device.status === "online"
                    ? {
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "rgba(255, 255, 255, 0.08)"
                            : "rgba(0, 0, 0, 0.05)",
                        cursor: "pointer",
                      }
                    : {
                        cursor: "default",
                      },
              }}
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => toggleDeviceStatus(device.id)}
                  size="small"
                >
                  <PowerSettingsNewIcon
                    style={
                      device.status === "online"
                        ? { fill: "url(#activeGradient)" }
                        : {
                            color:
                              theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.3)"
                                : "rgba(0,0,0,0.3)",
                          }
                    }
                    sx={{ fontSize: "1.5rem" }}
                  />
                </IconButton>
              }
            >
              <ListItemIcon>
                <device.icon
                  sx={{
                    color:
                      device.status !== "online"
                        ? theme.palette.mode !== "dark"
                          ? "#dad7d6"
                          : colors.grey[500]
                        : colors.grey[400],
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={device.name}
                secondary={
                  <Chip
                    label={device.status === "online" ? "Online" : "Offline"}
                    size="small"
                    sx={{
                      backgroundColor:
                        device.status === "online"
                          ? "rgba(87, 199, 133, 0.1)"
                          : "rgba(255, 99, 71, 0.1)",
                      color: device.status === "online" ? "#57C785" : "#ff6347",
                      height: "20px",
                      fontSize: "0.7rem",
                    }}
                  />
                }
                primaryTypographyProps={{
                  style: {
                    fontWeight: 500,
                    color:
                      device.status !== "online"
                        ? theme.palette.mode !== "dark"
                          ? "#dad7d6"
                          : colors.grey[500]
                        : colors.grey[400],
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default DevicesSection;
