import React, { useState } from "react";
import { Device, DeviceType } from "../../types";
import {
  Lightbulb,
  Thermometer,
  Lock,
  Camera,
  Speaker,
  Blinds,
  Fan,
  Power,
  Printer,
  Router,
  HardDrive,
  AirVent,
  Projector,
  Monitor,
  Scan,
  ChevronDown,
} from "lucide-react";

interface DeviceCardProps {
  device: Device;
  onToggle: (deviceId: string, newStatus: string) => void;
  onUpdateProperty: (deviceId: string, property: string, value: any) => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({
  device,
  onToggle,
  onUpdateProperty,
}) => {
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const getDeviceIcon = () => {
    console.log("Device Type:", device.type);
    switch (device.type as string) {
      case "LIGHT":
        return (
          <Lightbulb
            size={24}
            className={device.status ? "text-yellow-500" : "text-gray-400"}
          />
        );
      case "THERMOSTAT":
        return (
          <Thermometer
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
      case "LOCK":
        return (
          <Lock
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
      case "CAMERA":
        return (
          <Camera
            size={24}
            className={device.status ? "text-blue-600" : "text-gray-400"}
          />
        );
      case "SPEAKER":
        return (
          <Speaker
            size={24}
            className={device.status ? "text-violet-500" : "text-gray-400"}
          />
        );
      case "SENSOR":
        return (
          <Scan
            size={24}
            className={device.status ? "text-violet-500" : "text-gray-400"}
          />
        );
      case "BLINDS":
        return (
          <Blinds
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
      case "WORKSTATION":
        return (
          <Monitor
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
      case "ROUTER":
        return (
          <Router
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
      case "COMPUTER":
        return (
          <HardDrive
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );

      case "AIR":
        return (
          <AirVent
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
      case "FAN":
        return (
          <Fan
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
      case "OUTLET":
        return (
          <Power
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
      case "PRINTER":
        return (
          <Printer
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );

      case "PROJECTOR":
        return (
          <Projector
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
      default:
        return (
          <Power
            size={24}
            className={device.status ? "text-green-500" : "text-gray-400"}
          />
        );
    }
  };

  const renderControls = () => {
    if (!device.status) return null;

    switch (device.type) {
      case DeviceType.LIGHT:
        return (
          <div className="mt-4">
            <label
              htmlFor={`brightness-${device.id}`}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Brilho
            </label>
            <input
              id={`brightness-${device.id}`}
              type="range"
              min="1"
              max="100"
              value={device.additionalProperties?.brightness || 100}
              onChange={(e) =>
                onUpdateProperty(
                  device.id,
                  "brightness",
                  parseInt(e.target.value)
                )
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1%</span>
              <span>{device.additionalProperties?.brightness || 100}%</span>
              <span>100%</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getStatusColorClass = (status: string): string => {
    switch (status) {
      case "active":
        return "text-green-500";
      case "in_use":
        return "text-orange-500";
      case "available":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case "active":
        return "Ativo";
      case "in_use":
        return "Em uso";
      case "available":
        return "Disponível";
      default:
        return "Sem status, por favor verifique";
    }
  };

  const isDeviceActive = (status: string): boolean => {
    return status === "active" || status === "in_use";
  };

  const handleStatusSelect = (NewStatus: string) => {
    console.log("New status selected:", NewStatus);
    onToggle(device.id, NewStatus);
    setStatusDropdownOpen(false);
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border transition-all ${
        isDeviceActive(device.status as string)
          ? "border-blue-200 dark:border-blue-800"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div
            className={`p-3 rounded-full mr-3 ${
              isDeviceActive(device.status as string)
                ? "bg-blue-50 dark:bg-blue-900/30"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            {getDeviceIcon()}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{device.name}</h3>
            <p
              className={`text-sm ${getStatusColorClass(
                device.status as string
              )}`}
            >
              {getStatusText(device.status as string)}
            </p>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
            className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1.5 ${
              isDeviceActive(device.status as string)
                ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-800/50 dark:text-blue-300 dark:hover:bg-blue-800"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            <span>Status</span>
            <ChevronDown
              size={16}
              className={statusDropdownOpen ? "transform rotate-180" : ""}
            />
          </button>

          {statusDropdownOpen && (
            <div className="absolute right-0 mt-1 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <button
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    device.status === "active"
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => handleStatusSelect("active")}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  Ativo
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    device.status === "in_use"
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => handleStatusSelect("in_use")}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                  Em uso
                </button>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    device.status === "available"
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => handleStatusSelect("available")}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-gray-500 mr-2"></span>
                  Disponível
                </button>
              </div>
            </div>
          )}
        </div>

        {/* <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isDeviceActive(device.status as string)}
            onChange={() => onToggle(device.id)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
        </label> */}
      </div>

      {isDeviceActive(device.status as string) && renderControls()}
    </div>
  );
};

export default DeviceCard;
