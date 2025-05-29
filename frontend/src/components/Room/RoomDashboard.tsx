import React from "react";
import { ArrowLeft } from "lucide-react";
import { Room, Scene, Device } from "../../types";
import DeviceCard from "../Device/DeviceCard";
import SceneCard from "./SceneCard";

interface RoomDashboardProps {
  room: Room;
  floorName: string;
  buildingName: string;
  scenes: Scene[];
  onBack: () => void;
  onToggleDevice: (
    deviceId: string,
    currentStatus: string
  ) => Promise<void> | void;
  onUpdateDeviceProperty: (
    deviceId: string,
    property: string,
    value: any
  ) => void;
  onActivateScene: (sceneId: string) => void;
}

const RoomDashboard: React.FC<RoomDashboardProps> = ({
  room,
  floorName,
  buildingName,
  scenes,
  onBack,
  onToggleDevice,
  onUpdateDeviceProperty,
  onActivateScene,
}) => {
  const groupedDevices: Record<string, Device[]> = (room.devices || []).reduce(
    (acc, dr) => {
      const device = dr.device;
      if (!device) return acc;

      const type = device.type || "unknown";
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(device);
      return acc;
    },
    {} as Record<string, Device[]>
  );

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
          <h2 className="text-xl font-semibold text-gray-900">{room.name}</h2>
          <p className="text-sm text-gray-500">
            {floorName}, {buildingName}
          </p>
        </div>
      </div>

      {scenes.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Cenas</h3>
          <div className="flex flex-wrap gap-3">
            {scenes.map((scene) => (
              <SceneCard
                key={scene.id}
                scene={scene}
                onActivate={onActivateScene}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Devices</h3>
        <div className="space-y-6">
          {Object.entries(groupedDevices).map(([type, devices]) => (
            <div key={type}>
              <h4 className="text-md font-medium text-gray-700 mb-3 capitalize">
                {type}s ({devices.length})
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {devices.map((device) => (
                  <DeviceCard
                    key={device.id}
                    device={device}
                    onToggle={(deviceId) => {
                      onToggleDevice(deviceId, device.status);
                    }}
                    onUpdateProperty={onUpdateDeviceProperty}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDashboard;
