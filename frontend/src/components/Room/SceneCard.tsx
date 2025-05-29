import React from "react";
import { Scene } from "../../types";
import {
  Film,
  Sun,
  Moon,
  Utensils,
  Play,
  DivideIcon as LucideIcon,
} from "lucide-react";

interface SceneCardProps {
  scene: Scene;
  onActivate: (sceneId: string) => void;
}

const SceneCard: React.FC<SceneCardProps> = ({ scene, onActivate }) => {
  const getSceneIcon = (iconName: string) => {
    switch (iconName) {
      case "film":
        return <Film size={20} className="text-blue-500" />;
      case "sun":
        return <Sun size={20} className="text-yellow-500" />;
      case "moon":
        return <Moon size={20} className="text-purple-500" />;
      case "utensils":
        return <Utensils size={20} className="text-orange-500" />;
      default:
        return <Play size={20} className="text-blue-500" />;
    }
  };

  return (
    <button
      onClick={() => onActivate(scene.id)}
      className="flex items-center bg-white rounded-lg border border-gray-200 p-3 hover:bg-blue-50 hover:border-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      <div className="mr-3 p-2 bg-gray-100 rounded-full">
        {scene.icon && getSceneIcon(scene.icon)}
      </div>
      <span className="font-medium text-gray-700">{scene.name}</span>
    </button>
  );
};

export default SceneCard;
