import React from "react";
import { Floor } from "../../types";
import {
  ArrowLeft,
  Home as HomeIcon,
  Layers as LayersIcon,
} from "lucide-react";

interface FloorSelectorProps {
  floors: Floor[];
  buildingName: string;
  onBack: () => void;
  onSelectFloor: (floorId: string) => void;
}

const FloorSelector: React.FC<FloorSelectorProps> = ({
  floors,
  buildingName,
  onBack,
  onSelectFloor,
}) => {

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-12">
        <button
          onClick={onBack}
          className="mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {buildingName}
          </h2>
          <p className="text-sm text-gray-500">
            Selecione um andar para visualizar suas salas e dispositivos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {floors.map((floor) => (
          <div
            key={floor.id}
            onClick={() => onSelectFloor(floor.id)}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer border border-gray-100 group"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full mr-4 group-hover:bg-blue-100 transition-colors">
                <LayersIcon size={24} className="text-blue-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Andar {floor.number}
              </h3>
            </div>
            <div className="text-sm text-gray-500">
              {floor.rooms?.length}{" "}
              {floor.rooms?.length === 1 ? "sala" : "salas"}
              <span className="mx-1">•</span>
              {floor.rooms?.reduce(
                (count, room) => count + (room.devices?.length || 0),
                0
              )}{" "}
              dispositivos
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorSelector;
