import React, { useContext } from "react";
import {
  Home as HomeIcon,
  Menu as MenuIcon,
  X as CloseIcon,
  Sun,
  Moon,
} from "lucide-react";
import { useHome } from "../../contexts/HomeContext";
import { useMediaQuery, useTheme } from "@mui/material";
import { ColorModeContext } from "../../theme";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const { selectedBuilding, selectedFloor, selectedRoom, resetSelection } =
    useHome();

  const handleHomeClick = () => {
    resetSelection();
  };

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDarkMode = theme.palette.mode === "dark";

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 h-16 border-b border-gray-200 flex items-center justify-between px-1 md:px-10 z-10">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="md:hidden mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <CloseIcon size={20} className="text-gray-700" />
          ) : (
            <MenuIcon size={20} className="text-gray-700" />
          )}
        </button>

        <button
          onClick={handleHomeClick}
          className="flex items-center p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <HomeIcon
            size={`${isMobile ? 20 : 24}`}
            className="text-blue-500 mr-2"
          />
          <span className="text-lg md:text-2xl text-gray-900">Auto</span>
          <span className="text-lg md:text-2xl font-semibold text-gray-900">
            Uni
          </span>
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center">
          {selectedBuilding && (
            <div className="flex items-center text-sm md:text-md">
              <span className="text-gray-600">{selectedBuilding.name}</span>
              {selectedFloor && (
                <>
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-600">{selectedFloor.number}</span>
                </>
              )}
              {selectedRoom && (
                <>
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-600">{selectedRoom.name}</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* <div className="flex items-center">
        <button
          onClick={colorMode.toggleColorMode}
          className={`p-2 rounded-full ${
            isDarkMode
              ? "bg-gray-800 text-yellow-300"
              : "bg-gray-100 text-gray-700"
          } transition-all`}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div> */}
      <div className="w-12"></div>
    </header>
  );
};

export default Header;
