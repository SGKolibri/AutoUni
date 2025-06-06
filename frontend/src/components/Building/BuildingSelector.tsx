import React, { useEffect } from "react";
import { Building, Floor } from "../../types";
import {
  Building as BuildingIcon,
  Building2,
  Home as HomeIcon,
} from "lucide-react";

interface BuildingSelectorProps {
  buildings: Building[];
  onSelectBuilding: (buildingId: string) => void;
}

const BuildingSelector: React.FC<BuildingSelectorProps> = ({
  buildings,
  onSelectBuilding,
}) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo ao AutoUni
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Controle todos os dispositivos conectados em vários locais a partir de
          um único painel central.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Blocos</h2>
        <p className="text-gray-600">
          Selectione um bloco para visualizar e controlar os dispositivos
          conectados.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {buildings.map((building) => (
          <div
            key={building.id}
            onClick={() => onSelectBuilding(building.id)}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                {building.name === "Home" ? (
                  <HomeIcon size={24} className="text-blue-500" />
                ) : building.name === "Office" ? (
                  <Building2 size={24} className="text-blue-500" />
                ) : (
                  <BuildingIcon size={24} className="text-blue-500" />
                )}
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {building.name}
              </h3>
            </div>
            <div className="text-sm text-gray-500">
              {building.floors?.length}{" "}
              {building.floors?.length === 1 ? "andar" : "andares"}
              <span className="mx-1">•</span>
              {building.floors?.reduce(
                (count, floor) => count + (floor.rooms?.length || 0),
                0
              ) || 0}{" "}
              salas
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingSelector;
