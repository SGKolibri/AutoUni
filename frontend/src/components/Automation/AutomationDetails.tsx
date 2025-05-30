import React from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Settings,
  Zap,
  ToggleLeft,
  History,
  AlertCircle,
} from "lucide-react";
import { Automation } from "../../types";
import { format } from "date-fns";

interface AutomationDetailsProps {
  automation: Automation;
  onBack: () => void;
  onToggle: (id: string, enabled: boolean) => void;
}

const AutomationDetails: React.FC<AutomationDetailsProps> = ({
  automation,
  onBack,
  onToggle,
}) => {
  const getScheduleText = () => {
    if (!automation.schedule) return "No schedule";

    const { repeat, days, time } = automation.schedule;
    const formattedTime = format(new Date(`2000-01-01T${time}`), "h:mm a");

    if (repeat === "daily") {
      return `Todos os dias úteis às ${formattedTime}`;
    } else if (repeat === "weekly" && days) {
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const selectedDays = days.map((day) => dayNames[day]).join(", ");
      return `Every ${selectedDays} at ${formattedTime}`;
    } else {
      return `Once at ${formattedTime}`;
    }
  };

  const getTriggerText = () => {
    const { type, config } = automation.trigger || {};

    switch (type) {
      case "time":
        return config?.time ? `À ${config.time}` : `Sem horário definido`;
      case "device":
        return config?.deviceId
          ? `Quando dispositivo ${config.deviceId} está ${
              config.deviceState ? "on" : "off"
            }`
          : "Quando o dispositivo muda de estado";
      case "scene":
        return `Quando a cena é ativada`;
      default:
        return "Nenhum gatilho definido";
    }
  };

  const getActionText = (action: Automation["actions"][0]) => {
    if (action.type === "scene") {
      return "Ativar cena";
    }

    let text = `${action.state ? "on" : "off"}`;

    if (action.properties) {
      const props = [];
      if (action.properties.brightness !== undefined) {
        props.push(`Definir brilho para ${action.properties.brightness}%`);
      }
      if (action.properties.temperature !== undefined) {
        props.push(
          `Definir temperatura para ${action.properties.temperature}°C`
        );
      }
      if (action.properties.level !== undefined) {
        props.push(`Definir nível para ${action.properties.level}`);
      }
      if (props.length > 0) {
        text += ` e ${props.join(", ")}`;
      }
    }

    return text;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900">
            {automation.name}
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onToggle(automation.id, !automation.enabled)}
            className={`p-2 rounded-lg transition-colors ${
              automation.enabled ? "text-blue-500" : "text-gray-400"
            }`}
          >
            <ToggleLeft size={24} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Schedule Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <Calendar size={20} className="text-blue-500 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Programação</h3>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-2" />
            <span>{getScheduleText()}</span>
          </div>
        </div>

        {/* Trigger Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <Zap size={20} className="text-orange-500 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Gatilho</h3>
          </div>
          <div className="text-gray-600">{getTriggerText()}</div>
        </div>

        {/* Actions Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <Settings size={20} className="text-purple-500 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Ações</h3>
          </div>
          <div className="space-y-3">
            {automation.actions.map((action, index) => (
              <div key={index} className="flex items-center text-gray-600">
                <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full mr-3 text-sm font-medium">
                  {index + 1}
                </div>
                {getActionText(action)}
              </div>
            ))}
          </div>
        </div>

        {/* Last Run Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <History size={20} className="text-green-500 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">
              Última execução
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Ontem às 6:30 PM</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              Sucesso
            </span>
          </div>
        </div>

        {/* Conditions Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <AlertCircle size={20} className="text-yellow-500 mr-3" />
            <h3 className="text-lg font-medium text-gray-900">Condições</h3>
          </div>
          <div className="text-gray-600">
            Somente execute se a temperatura da sala estiver acima de 25°C
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationDetails;
