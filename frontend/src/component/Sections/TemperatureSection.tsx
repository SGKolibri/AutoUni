import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

const temperatureDetails = [
  { title: "Umidade do ar", value: "50,0%" },
  { title: "Pressão do ar", value: "898.1hPa" },
  { title: "Velocidade do vento", value: "4.1m/s" },
  { title: "PM2.5 ao ar livre", value: "Ótimo" },
];

function TemperatureSection() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
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
      <div className="w-full mb-4">
        <Accordion
          disableGutters
          elevation={2}
          sx={{
            borderRadius: "12px !important",
            overflow: "hidden",
            "&:before": {
              display: "none",
            },
            "& .MuiPaper-root": {
              borderRadius: "12px",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              borderRadius: "12px",
              "& .MuiAccordionSummary-content": {
                margin: "12px 0",
              },
            }}
          >
            <div className="w-full flex justify-between items-center py-3">
              <div className="flex items-center">
                <DeviceThermostatIcon
                  sx={{
                    fontSize: "1.3rem",
                    color:
                      theme.palette.mode === "dark"
                        ? "#f0f0f0"
                        : colors.grey[400],
                  }}
                />
                <span
                  className="font-semibold text-lg ml-1"
                  style={{
                    color:
                      theme.palette.mode === "dark"
                        ? "#dad7d6"
                        : colors.grey[400],
                  }}
                >
                  Temperatura: 29°C
                </span>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="w-full flex flex-col items-start justify-center">
              {temperatureDetails.map((detail, index) => (
                <div
                  key={index}
                  className="w-full flex justify-between items-center p-2 border-gray-200"
                >
                  <span
                    className="text-sm font-normal"
                    style={{
                      color:
                        theme.palette.mode === "dark"
                          ? colors.grey[100]
                          : colors.grey[500],
                    }}
                  >
                    {detail.title}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color:
                        theme.palette.mode === "dark"
                          ? colors.grey[100]
                          : colors.grey[500],
                    }}
                  >
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default TemperatureSection;
