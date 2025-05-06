
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
  { name: "build", path: "/build-chatbot", label: "Build the Chatbot" },
  { name: "deploy", path: "/deploy-chatbot", label: "Deploy the Chatbot" },
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
          const itemClass = isActive ? "phase-item-active" : "phase-item-inactive";
          
          return (
            <div
              key={phase.name}
              className={`border ${itemClass} rounded-lg p-3 md:p-4 min-w-[160px] text-center cursor-pointer shadow-custom transition-all hover:shadow-md`}
              onClick={() => handlePhaseClick(phase.path)}
            >
              <span>{phase.label}</span>
            </div>
          );
        })}
        
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm">
            <ChevronRight size={16} className="text-primary-blue" />
          </div>
        </div>
      </div>
    </div>
  );
};
