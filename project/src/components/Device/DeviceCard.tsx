import React, { useState } from 'react';
import { Device, DeviceType } from '../../types';
import { 
  Lightbulb, 
  Thermometer, 
  Lock, 
  Camera, 
  Speaker, 
  Blinds,
  Fan,
  Power
} from 'lucide-react';

interface DeviceCardProps {
  device: Device;
  onToggle: (deviceId: string) => void;
  onUpdateProperty: (deviceId: string, property: string, value: any) => void;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device, onToggle, onUpdateProperty }) => {
  const getDeviceIcon = () => {
    switch (device.type) {
      case DeviceType.LIGHT:
        return <Lightbulb size={24} className={device.status ? "text-yellow-400" : "text-gray-400"} />;
      case DeviceType.THERMOSTAT:
        return <Thermometer size={24} className={device.status ? "text-blue-500" : "text-gray-400"} />;
      case DeviceType.LOCK:
        return <Lock size={24} className={device.status ? "text-green-500" : "text-gray-400"} />;
      case DeviceType.CAMERA:
        return <Camera size={24} className={device.status ? "text-red-500" : "text-gray-400"} />;
      case DeviceType.SPEAKER:
        return <Speaker size={24} className={device.status ? "text-purple-500" : "text-gray-400"} />;
      case DeviceType.BLINDS:
        return <Blinds size={24} className={device.status ? "text-blue-500" : "text-gray-400"} />;
      case DeviceType.FAN:
        return <Fan size={24} className={device.status ? "text-blue-500" : "text-gray-400"} />;
      case DeviceType.OUTLET:
        return <Power size={24} className={device.status ? "text-green-500" : "text-gray-400"} />;
      default:
        return <Power size={24} className={device.status ? "text-green-500" : "text-gray-400"} />;
    }
  };

  const renderControls = () => {
    if (!device.status) return null;

    switch (device.type) {
      case DeviceType.LIGHT:
        return (
          <div className="mt-4">
            <label htmlFor={`brightness-${device.id}`} className="block text-sm font-medium text-gray-700 mb-1">
              Brightness
            </label>
            <input
              id={`brightness-${device.id}`}
              type="range"
              min="1"
              max="100"
              value={device.additionalProperties?.brightness || 100}
              onChange={(e) => onUpdateProperty(device.id, 'brightness', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1%</span>
              <span>{device.additionalProperties?.brightness || 100}%</span>
              <span>100%</span>
            </div>
          </div>
        );
      case DeviceType.THERMOSTAT:
        return (
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  const currentTemp = device.additionalProperties?.temperature || 22;
                  if (currentTemp > 16) {
                    onUpdateProperty(device.id, 'temperature', currentTemp - 1);
                  }
                }}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200"
              >
                -
              </button>
              <div className="text-2xl font-semibold text-gray-800">
                {device.additionalProperties?.temperature || 22}°C
              </div>
              <button
                onClick={() => {
                  const currentTemp = device.additionalProperties?.temperature || 22;
                  if (currentTemp < 30) {
                    onUpdateProperty(device.id, 'temperature', currentTemp + 1);
                  }
                }}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
        );
      case DeviceType.FAN:
        return (
          <div className="mt-4">
            <label htmlFor={`level-${device.id}`} className="block text-sm font-medium text-gray-700 mb-1">
              Fan Speed
            </label>
            <div className="flex justify-between gap-2">
              {[1, 2, 3].map((level) => (
                <button
                  key={level}
                  onClick={() => onUpdateProperty(device.id, 'level', level)}
                  className={`flex-1 py-2 rounded-md text-sm font-medium ${
                    (device.additionalProperties?.level || 1) === level
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level === 1 ? 'Low' : level === 2 ? 'Medium' : 'High'}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 border transition-all ${
      device.status ? 'border-blue-200' : 'border-gray-200'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className={`p-3 rounded-full mr-3 ${
            device.status ? 'bg-blue-50' : 'bg-gray-100'
          }`}>
            {getDeviceIcon()}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{device.name}</h3>
            <p className="text-sm text-gray-500">
              {device.status ? 'On' : 'Off'}
            </p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={device.status}
            onChange={() => onToggle(device.id)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
        </label>
      </div>
      
      {renderControls()}
    </div>
  );
};

export default DeviceCard;