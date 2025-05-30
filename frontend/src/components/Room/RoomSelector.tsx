import React from "react";
import { Room } from "../../types";
import {
  ArrowLeft,
  Twitch as Kitchen,
  Bath,
  Bed,
  Sofa,
  Power as DesktopTower,
  MonitorPlay,
} from "lucide-react";

interface RoomSelectorProps {
  rooms: Room[];
  floorName: string;
  buildingName: string;
  onBack: () => void;
  onSelectRoom: (roomId: string) => void;
}

const RoomSelector: React.FC<RoomSelectorProps> = ({
  rooms,
  floorName,
  buildingName,
  onBack,
  onSelectRoom,
}) => {
  // Get the icon based on room name
  const getRoomIcon = (roomName: string) => {
    console.log("Room Name:", roomName);
    const name = roomName.toLowerCase();
    if (name.includes("kitchen"))
      return <Kitchen size={24} className="text-blue-500" />;
    if (name.includes("bathroom") || name.includes("bath"))
      return <Bath size={24} className="text-blue-500" />;
    if (name.includes("bedroom") || name.includes("master"))
      return <Bed size={24} className="text-blue-500" />;
    if (name.includes("living"))
      return <Sofa size={24} className="text-blue-500" />;
    if (name.includes("office") || name.includes("conference"))
      return <DesktopTower size={24} className="text-blue-500" />;
    if (name.includes("theater") || name.includes("media"))
      return <MonitorPlay size={24} className="text-blue-500" />;
    return <Sofa size={24} className="text-blue-500" />;
  };

  return (
    <div>
      <div className="mb-6 flex items-center">
        <button
          onClick={onBack}
          className="mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{floorName}</h2>
          <p className="text-sm text-gray-500">{buildingName}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            onClick={() => onSelectRoom(room.id)}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer border border-gray-100 group"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full mr-4 group-hover:bg-blue-100 transition-colors">
                {getRoomIcon(room.name)}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{room.name}</h3>
            </div>
            <div className="text-sm text-gray-500">
              {room.devices?.length}{" "}
              {room.devices?.length === 1 ? "dispositivo" : "dispositivos"}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {(room.devices?.length || 0) > 0 && (
                <div className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                  {
                    room.devices?.filter(
                      (deviceRoom) => deviceRoom.device?.status === "on"
                    ).length
                  }{" "}
                  ativos
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelector;
