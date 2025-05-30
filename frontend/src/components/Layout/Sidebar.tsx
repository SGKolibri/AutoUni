import React from "react";
import { Building, Building2, Home as HomeIcon, Timer } from "lucide-react";
import { useHome } from "../../contexts/HomeContext";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

interface SidebarProps {
  isOpen: boolean;
  currentView: "home" | "automation";
  onViewChange: (view: "home" | "automation") => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  currentView,
  onViewChange,
}) => {
  // const { buildings, selectedBuilding, selectBuilding } = useHome();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <aside
      className={`fixed top-16 left-0 bottom-0 w-64  border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
      style={{
        backgroundColor: colors.primary[400],
      }}
    >
      <div className="p-4">
        <div className="mb-8">
          <h2
            className="text-sm font-semibold  uppercase tracking-wider mb-4"
            style={{ color: colors.grey[400] }}
          >
            Menu
          </h2>
          <div className="space-y-2">
            <button
              onClick={() => onViewChange("home")}
              className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                currentView === "home"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <HomeIcon size={20} className="mr-3" />
              <span>Home</span>
            </button>
            <button
              onClick={() => onViewChange("automation")}
              className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                currentView === "automation"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Timer size={20} className="mr-3" />
              <span>Rotinas</span>
            </button>
          </div>
        </div>
        {/* 
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Buildings
        </h2>
        <div className="space-y-2">
          {buildings.map((building) => (
            <button
              key={building.id}
              onClick={() => selectBuilding(building.id)}
              className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                selectedBuilding?.id === building.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {building.name === "Home" ? (
                <HomeIcon size={20} className="mr-3" />
              ) : building.name === "Office" ? (
                <Building2 size={20} className="mr-3" />
              ) : (
                <Building size={20} className="mr-3" />
              )}
              <span>{building.name}</span>
            </button>
          ))}
        </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;
