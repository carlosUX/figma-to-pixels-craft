
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Phase {
  name: string;
  path: string;
  label: string;
  shortLabel?: string;
}

const phases: Phase[] = [
  { name: "scope", path: "/scope-definition", label: "Define the scope", shortLabel: "Scope" },
  { name: "compliance", path: "/regulatory-compliance", label: "Regulatory Compliance", shortLabel: "Compliance" },
  { name: "flows", path: "/conversational-flows", label: "Design Conversational Flows", shortLabel: "Flows" },
  { name: "technology", path: "/technology-stack", label: "Choose Technology Stack", shortLabel: "Tech Stack" },
  { name: "build", path: "/build-chatbot", label: "Build the Chatbot", shortLabel: "Build" },
  { name: "deploy", path: "/deploy-chatbot", label: "Deploy the Chatbot", shortLabel: "Deploy" },
];

export const PhaseNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();

  // Find the active phase
  const activePhaseIndex = phases.findIndex(phase => phase.path === currentPath);

  const handlePhaseClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full">
      <div className="mb-2 text-gray-700">Recommended phases:</div>
      <div className="flex flex-wrap gap-2 md:gap-3 w-full overflow-x-auto pb-2 scrollbar-none">
        {phases.map((phase, index) => {
          const isActive = phase.path === currentPath;
          const itemClass = isActive ? "phase-item-active" : "phase-item-inactive";
          
          return (
            <div
              key={phase.name}
              className={`border ${itemClass} rounded-lg p-2 md:p-3 min-w-[100px] md:min-w-[140px] flex-shrink-0 text-center cursor-pointer shadow-custom transition-all hover:shadow-md text-xs md:text-sm`}
              onClick={() => handlePhaseClick(phase.path)}
            >
              <span>{isMobile ? phase.shortLabel || phase.label : phase.label}</span>
            </div>
          );
        })}
        
        <div className="flex items-center justify-center flex-shrink-0">
          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm">
            <ChevronRight size={16} className="text-primary-blue" />
          </div>
        </div>
      </div>
    </div>
  );
};
