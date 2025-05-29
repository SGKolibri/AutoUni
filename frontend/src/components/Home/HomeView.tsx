import React from "react";
import { useHome } from "../../contexts/HomeContext";
import BuildingSelector from "../Building/BuildingSelector";
import FloorSelector from "../Floor/FloorSelector";
import RoomSelector from "../Room/RoomSelector";
import RoomDashboard from "../Room/RoomDashboard";

const HomeView: React.FC = () => {
  const {
    buildings,
    selectedBuilding,
    selectedFloor,
    selectedRoom,
    scenes,
    isLoading,
    error,
    selectBuilding,
    selectFloor,
    selectRoom,
    toggleDevice,
    updateDeviceProperty,
    activateScene,
    resetSelection,
  } = useHome();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  // If we have a selected room, show the room dashboard
  if (selectedRoom && selectedFloor && selectedBuilding) {
    return (
      <RoomDashboard
        room={selectedRoom}
        floorName={`Andar ${selectedFloor.number}`}
        buildingName={selectedBuilding.name}
        scenes={scenes}
        onBack={() => selectFloor(selectedFloor.id)}
        onToggleDevice={(deviceId: string) => {
          const device = selectedRoom.devices?.find(
            (d) => d.deviceId === deviceId
          )?.device;
          if (device) {
            toggleDevice(deviceId, device.status);
          }
        }}
        onUpdateDeviceProperty={updateDeviceProperty}
        onActivateScene={activateScene}
      />
    );
  }

  // If we have a selected floor, show the room selector
  if (selectedFloor && selectedBuilding) {
    return (
      <RoomSelector
        rooms={selectedFloor.rooms || []} // Ensure rooms is defined
        floorName={`Andar ${selectedFloor.number}`}
        buildingName={selectedBuilding.name}
        onBack={() => selectBuilding(selectedBuilding.id)}
        onSelectRoom={selectRoom}
      />
    );
  }

  // If we have a selected building, show the floor selector
  if (selectedBuilding) {
    return (
      <FloorSelector
        floors={selectedBuilding.floors || []} // fallback to empty array if undefined
        buildingName={selectedBuilding.name}
        onBack={resetSelection}
        onSelectFloor={selectFloor}
      />
    );
  }

  // By default, show the building selector
  return (
    <BuildingSelector buildings={buildings} onSelectBuilding={selectBuilding} />
  );
};

export default HomeView;
