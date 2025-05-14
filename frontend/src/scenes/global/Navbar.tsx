import { useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { IconButton, Box, Collapse } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ColorModeContext, tokens } from "../../theme";
import HomeIcon from "@mui/icons-material/Home";

const activeGradient = `linear-gradient(214deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)`;

function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <nav
        className="flex flex-col justify-end items-center fixed top-0 left-0 right-0 z-10 rounded-b-lg"
        style={{
          background: activeGradient,
        }}
      >
        <div className="w-full flex justify-between items-center">
          <div className="w-full flex justify-start items-center p-4">
            <div>
              <HomeIcon sx={{ color: "#fff", fontSize: "2rem" }} />
            </div>
            {/* the environment select (Bloco A-F, Sala 101-310) */}
          </div>
          <div className="w-full flex justify-end items-center p-4">
            <IconButton onClick={handleExpandClick}>
              {expanded ? (
                <ExpandLessIcon sx={{ color: "#fff", fontSize: "1.75rem" }} />
              ) : (
                <ExpandMoreIcon sx={{ color: "#fff", fontSize: "1.75rem" }} />
              )}
            </IconButton>
          </div>
        </div>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box
            sx={{
              p: 4,
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <LightModeOutlinedIcon
                  sx={{ color: "#fff", fontSize: "1.5rem" }}
                />
              ) : (
                <DarkModeOutlinedIcon
                  sx={{ color: "#fff", fontSize: "1.5rem" }}
                />
              )}
            </IconButton>
          </Box>
        </Collapse>
      </nav>
    </>
  );
}

export default Navbar;
