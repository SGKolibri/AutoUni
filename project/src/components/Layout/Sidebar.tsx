import React from "react";
import { Building, Building2, Home as HomeIcon } from "lucide-react";
import { useHome } from "../../contexts/HomeContext";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { buildings, selectedBuilding, selectBuilding } = useHome();

  return (
    <aside
      className={`fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Prédios</h2>
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
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
