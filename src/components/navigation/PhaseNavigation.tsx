import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Phase {
  name: string;
  path: string;
  label: string;
}

const phases: Phase[] = [
  { name: "scope", path: "/scope-definition", label: "Define the scope" },
  { name: "compliance", path: "/regulatory-compliance", label: "Regulatory Compliance" },
  { name: "flows", path: "/conversational-flows", label: "Design Conversational Flows" },
  { name: "technology", path: "/technology-stack", label: "Choose Technology Stack" },
];

export const PhaseNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Find the active phase
  const activePhaseIndex = phases.findIndex(phase => phase.path === currentPath);

  const handlePhaseClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full">
      <div className="mb-2 text-gray-700">Recommended phases:</div>
      <div className="flex flex-wrap gap-2 md:gap-4 w-full">
        {phases.map((phase, index) => {
          const isActive = phase.path === currentPath;
          const underlineClass = isActive ? "border-b-2 border-b-green-500" : "";
          const bgClass = isActive ? "border-[#E8D1C5] bg-white" : "border-gray-200 bg-white";
          const textClass = isActive ? "text-[#335CCC] font-semibold" : "text-gray-700";
          
          return (
            <div
              key={phase.name}
              className={`border ${bgClass} rounded-lg p-3 md:p-4 min-w-[160px] text-center cursor-pointer shadow-sm ${underlineClass}`}
              onClick={() => handlePhaseClick(phase.path)}
            >
              <span className={`${textClass}`}>{phase.label}</span>
            </div>
          );
        })}
        
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-white border border-gray-200">
            <ChevronRight size={16} className="text-[#335CCC]" />
          </div>
        </div>
      </div>
    </div>
  );
};