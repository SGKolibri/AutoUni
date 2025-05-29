import React from "react";
import {
  Home as HomeIcon,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";
import { useHome } from "../../contexts/HomeContext";

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

  return (
    <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 h-16 border-b border-gray-200 flex items-center justify-between px-4 z-10">
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
          <HomeIcon size={20} className="text-blue-500 mr-2" />
          <span className="font-semibold text-gray-900">AutoUni</span>
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
      <div className="w-12"></div> {/* Empty space for balance */}
    </header>
  );
};

export default Header;
