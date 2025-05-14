import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

const Links = [
  { name: "Ambientes", link: "/", icon: HomeWorkOutlinedIcon },
  { name: "Rotinas", link: "/routines", icon: SettingsIcon },
  { name: "Menu", link: "/settings", icon: MenuOutlinedIcon },
];

function Footer() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();
  const handleClick = (link: string) => {
    return navigate(link);
  };

  // if the current page is the same as the link, set the color to activeGradient, if not, set it to grey
  // linear-gradient(214deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)

  const activeGradient = `linear-gradient(214deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)`;

  const activeStyle = {
    background: activeGradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  const inactiveStyle = {
    color: theme.palette.mode === "dark" ? colors.grey[500] : colors.grey[700],
  };

  const isActiveStyle = (link: string) => {
    return window.location.pathname === link ? activeStyle : inactiveStyle;
  };

  const getIconStyle = (link: string) => {
    if (window.location.pathname === link) {
      return {
        fontSize: "2rem",
        color: "transparent", // Keep transparent to see the gradient
      };
    } else {
      return {
        color:
          theme.palette.mode === "dark" ? colors.grey[500] : colors.grey[900],
        fontSize: "2rem",
      };
    }
  };

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

      <footer
        className="flex justify-between items-center p-4 fixed bottom-0 left-0 right-0 z-10 bg-transparent tracking-wide rounded-t-2xl"
        style={{
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%)`,
          backdropFilter: "blur(10px)",
        }}
      >
        {Links.map((link) => (
          <div
            key={link.name}
            className="flex-1 flex justify-center items-center width-full"
          >
            <button
              className="w-fit flex flex-col items-center"
              key={link.name}
              onClick={() => handleClick(link.link)}
            >
              {window.location.pathname === link.link ? (
                // Active icon with gradient
                <link.icon
                  sx={{
                    fontSize: "2rem",
                    color: "transparent", // Show gradient, not icon color
                  }}
                  style={{ fill: "url(#activeGradient)" }}
                />
              ) : (
                // Inactive icon
                <link.icon
                  sx={{
                    fontSize: "2rem",
                    color:
                      theme.palette.mode === "dark"
                        ? colors.grey[500]
                        : colors.grey[700],
                  }}
                />
              )}
              <span
                className="text-sm text-center font-light"
                style={isActiveStyle(link.link)}
              >
                {link.name}
              </span>
            </button>
          </div>
        ))}
      </footer>
    </>
  );
}

export default Footer;
