
import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressIndicatorProps {
  value?: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ value = 75 }) => {
  return (
    <div className="w-full max-w-[900px] flex items-center border border-[#9370DB] rounded-lg p-6 mb-6">
      <div className="w-8 h-8 mr-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L19.2411 12.7589L28 16L19.2411 19.2411L16 28L12.7589 19.2411L4 16L12.7589 12.7589L16 4Z" fill="#9370DB" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-base text-[#242424]">Generating instructions to build a chatbot for healthcare</p>
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-[#9370DB] to-[#7B68EE]"></div>
        </div>
      </div>
    </div>
  );
};
