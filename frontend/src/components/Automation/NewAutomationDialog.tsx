import React, { useState } from "react";
import { X, Clock, Zap, Play } from "lucide-react";

interface NewAutomationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (automation: {
    name: string;
    trigger: {
      type: "time" | "device" | "scene";
      config: any;
    };
    actions: Array<{
      type: "device" | "scene";
      targetId: string;
      state?: boolean;
      properties?: any;
    }>;
    schedule?: {
      repeat: "daily" | "weekly" | "once";
      days?: number[];
      time: string;
    };
  }) => void;
}

const NewAutomationDialog: React.FC<NewAutomationDialogProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [triggerType, setTriggerType] = useState<"time" | "device" | "scene">(
    "time"
  );
  const [scheduleType, setScheduleType] = useState<"daily" | "weekly" | "once">(
    "daily"
  );
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [time, setTime] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    const newAutomation = {
      name,
      trigger: {
        type: triggerType,
        config: {
          time: time,
        },
      },
      actions: [
        {
          type: "device" as const,
          targetId: "1",
          state: true,
        },
      ],
      schedule: {
        repeat: scheduleType,
        days: scheduleType === "weekly" ? selectedDays : undefined,
        time: time,
      },
    };

    onSave(newAutomation);
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Nome da rotina
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Nome da rotina de automação"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!name}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Próximo
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Selecione Tipo de Gatilho
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => setTriggerType("time")}
                className={`p-4 rounded-lg border ${
                  triggerType === "time"
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                    : "border-gray-200 dark:border-gray-700"
                } flex flex-col items-center space-y-2`}
              >
                <Clock
                  size={24}
                  className={
                    triggerType === "time" ? "text-blue-500" : "text-gray-500"
                  }
                />
                <span
                  className={`text-sm ${
                    triggerType === "time"
                      ? "text-blue-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  Horário
                </span>
              </button>
              <button
                onClick={() => setTriggerType("device")}
                className={`p-4 rounded-lg border ${
                  triggerType === "device"
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                    : "border-gray-200 dark:border-gray-700"
                } flex flex-col items-center space-y-2`}
              >
                <Zap
                  size={24}
                  className={
                    triggerType === "device" ? "text-blue-500" : "text-gray-500"
                  }
                />
                <span
                  className={`text-sm ${
                    triggerType === "device"
                      ? "text-blue-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  Dispositivo
                </span>
              </button>
              <button
                onClick={() => setTriggerType("scene")}
                className={`p-4 rounded-lg border ${
                  triggerType === "scene"
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900"
                    : "border-gray-200 dark:border-gray-700"
                } flex flex-col items-center space-y-2`}
              >
                <Play
                  size={24}
                  className={
                    triggerType === "scene" ? "text-blue-500" : "text-gray-500"
                  }
                />
                <span
                  className={`text-sm ${
                    triggerType === "scene"
                      ? "text-blue-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  Cena
                </span>
              </button>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Voltar
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Próximo
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tipo de Agendamento
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={scheduleType === "daily"}
                    onChange={() => setScheduleType("daily")}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Diário
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={scheduleType === "weekly"}
                    onChange={() => setScheduleType("weekly")}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Semanal
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    checked={scheduleType === "once"}
                    onChange={() => setScheduleType("once")}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Uma vez
                  </span>
                </label>
              </div>
            </div>

            {scheduleType === "weekly" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Selecione os dias da semana
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"].map(
                    (day, index) => (
                      <button
                        key={day}
                        onClick={() => {
                          setSelectedDays((prev) =>
                            prev.includes(index)
                              ? prev.filter((d) => d !== index)
                              : [...prev, index]
                          );
                        }}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedDays.includes(index)
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {day}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Horário
              </label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Voltar
              </button>
              <button
                onClick={handleSave}
                disabled={
                  !time ||
                  (scheduleType === "weekly" && selectedDays.length === 0)
                }
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Salvar Rotina
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-lg mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Nova rotina de automação
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <div className="p-6">{renderStep()}</div>
      </div>
    </div>
  );
};

export default NewAutomationDialog;
