import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  Timer,
  Plus,
  Calendar,
  Clock,
  ToggleLeft,
  Trash2,
  Edit,
  ArrowRight,
} from "lucide-react";
import { Automation } from "../../types";
import * as api from "../../services/api";
import AutomationDetails from "./AutomationDetails";

const AutomationView: React.FC = () => {
  const [automations, setAutomations] = useState<Automation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAutomation, setSelectedAutomation] =
    useState<Automation | null>(null);

  useEffect(() => {
    const fetchAutomations = async () => {
      try {
        const data = await api.getAutomations();
        setAutomations(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch automations:", error);
        setIsLoading(false);
      }
    };

    fetchAutomations();
  }, []);

  const handleToggleAutomation = async (id: string, enabled: boolean) => {
    try {
      await api.updateAutomation(id, { enabled });
      setAutomations(
        automations.map((automation) =>
          automation.id === id ? { ...automation, enabled } : automation
        )
      );
      if (selectedAutomation?.id === id) {
        setSelectedAutomation({ ...selectedAutomation, enabled });
      }
    } catch (error) {
      console.error("Failed to toggle automation:", error);
    }
  };

  const handleDeleteAutomation = async (id: string) => {
    try {
      await api.deleteAutomation(id);
      setAutomations(automations.filter((automation) => automation.id !== id));
      if (selectedAutomation?.id === id) {
        setSelectedAutomation(null);
      }
    } catch (error) {
      console.error("Failed to delete automation:", error);
    }
  };

  const getScheduleText = (automation: Automation) => {
    if (!automation.schedule) return "No schedule";

    const { repeat, days, time } = automation.schedule;
    const formattedTime = format(new Date(`2000-01-01T${time}`), "h:mm a");

    if (repeat === "daily") {
      return `Todos os dias úteis às ${formattedTime}`;
    } else if (repeat === "weekly" && days) {
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const selectedDays = days.map((day) => dayNames[day]).join(", ");
      return `Tod ${selectedDays} at ${formattedTime}`;
    } else {
      return `Once at ${formattedTime}`;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (selectedAutomation) {
    return (
      <AutomationDetails
        automation={selectedAutomation}
        onBack={() => setSelectedAutomation(null)}
        onToggle={handleToggleAutomation}
      />
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Timer size={24} className="text-blue-500 mr-3" />
          <h1 className="text-2xl font-semibold text-gray-900">Rotinas</h1>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <Plus size={20} className="mr-2" />
          Criar rotina
        </button>
      </div>

      <div className="grid gap-4">
        {automations.map((automation) => (
          <div
            key={automation.id}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {automation.name}
                </h3>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <Calendar size={16} className="mr-2" />
                  <span>{getScheduleText(automation)}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() =>
                    handleToggleAutomation(automation.id, !automation.enabled)
                  }
                  className={`p-2 rounded-lg transition-colors ${
                    automation.enabled ? "text-blue-500" : "text-gray-400"
                  }`}
                >
                  <ToggleLeft size={24} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Edit size={20} />
                </button>
                <button
                  onClick={() => handleDeleteAutomation(automation.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-2" />
                  <span>
                    {automation.actions.length}
                    {automation.actions.length !== 1 ? " ação" : " ações"}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedAutomation(automation)}
                  className="flex items-center text-blue-500 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  Ver detalhes
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {automations.length === 0 && (
          <div className="text-center py-12">
            <Timer size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Sem rotinas criadas
            </h3>
            <p className="text-gray-500">
              Registre uma rotina para automatizar suas ações diárias.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutomationView;
