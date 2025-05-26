import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext, tokens } from "../../theme";
import TemperatureSection from "../../component/Sections/TemperatureSection";
import DevicesSection from "../../component/Sections/DevicesSection";

function HomePage() {
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
      <div className="flex flex-col items-center justify-center py-4 tracking-wide pb-20">
        <TemperatureSection />
        {/* Devices section*/}
        <DevicesSection />
      </div>
    </>
  );
}

export default HomePage;
