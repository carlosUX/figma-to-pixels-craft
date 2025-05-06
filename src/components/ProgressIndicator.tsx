
import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressIndicatorProps {
  value?: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ value = 75 }) => {
  return (
    <div className="w-full max-w-[900px] flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">Processing your request...</span>
        <span className="text-sm font-medium text-gray-800">{value}%</span>
      </div>
      <Progress value={value} className="h-2 w-full" />
    </div>
  );
};
