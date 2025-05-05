
import React, { useState } from "react";

export const ComplexitySlider: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<"low" | "moderate" | "high">("low");

  const getLevelDescription = () => {
    switch (selectedLevel) {
      case "low":
        return "Provides brief and straightforward responses, ideal for quick answers or basic information.";
      case "moderate":
        return "Includes a wide range of features and customization options for experienced users.";
      case "high":
        return "Provides comprehensive and detailed features, catering to power users who need full control and advanced functionalities.";
    }
  };

  const handleLevelClick = (level: "low" | "moderate" | "high") => {
    setSelectedLevel(level);
  };

  return (
    <div className="w-full mb-[0px]">
      <div className="relative w-full h-[78px] mb-0">
        {/* Text labels - properly centered with each section */}
        <div 
          className="absolute top-[15px] left-[175px] transform -translate-x-1/2 font-sans text-sm cursor-pointer mb-2" 
          onClick={() => handleLevelClick("low")}
        >
          Low
        </div>
        <div 
          className="absolute top-[15px] left-[525px] transform -translate-x-1/2 font-sans text-sm cursor-pointer mb-2" 
          onClick={() => handleLevelClick("moderate")}
        >
          Moderate
        </div>
        <div 
          className="absolute top-[15px] left-[880px] transform -translate-x-1/2 font-sans text-sm cursor-pointer mb-2" 
          onClick={() => handleLevelClick("high")}
        >
          High
        </div>

        {/* Slider bar */}
        <svg width="100%" height="78" viewBox="0 0 1057 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
          {/* Left line section */}
          <path 
            d="M3 35.5C1.61929 35.5 0.5 36.6193 0.5 38C0.5 39.3807 1.61929 40.5 3 40.5V35.5ZM3 38V40.5H347V38V35.5H3V38Z" 
            fill={selectedLevel === "low" ? "#707070" : "white"} 
          />
          
          {/* Middle line section */}
          <path 
            d="M352 38L700 38" 
            stroke={selectedLevel === "moderate" ? "#707070" : "white"} 
            strokeWidth="5" 
          />
          
          {/* Right line section */}
          <path 
            d="M1054 40.5C1055.38 40.5 1056.5 39.3807 1056.5 38C1056.5 36.6193 1055.38 35.5 1054 35.5L1054 40.5ZM706 38L706 40.5L1054 40.5L1054 38L1054 35.5L706 35.5L706 38Z" 
            fill={selectedLevel === "high" ? "#707070" : "white"} 
          />
          
          {/* Circles for each level */}
          {/* Low circle */}
          <circle 
            cx="146.87" 
            cy="37.87" 
            r="7.87" 
            fill={selectedLevel === "low" ? "#707070" : "white"} 
          />
          <circle 
            cx="146.87" 
            cy="37.87" 
            r="7.87" 
            stroke="white" 
            strokeWidth="2" 
          />
          <circle 
            cx="146.87" 
            cy="37.87" 
            r="7.87" 
            stroke="black" 
            strokeOpacity="0.2" 
            strokeWidth="2" 
          />
          
          {/* Moderate circle */}
          <circle 
            cx="524.87" 
            cy="37.87" 
            r="7.87" 
            fill={selectedLevel === "moderate" ? "#707070" : "white"} 
          />
          <circle 
            cx="524.87" 
            cy="37.87" 
            r="7.87" 
            stroke="white" 
            strokeWidth="2" 
          />
          <circle 
            cx="524.87" 
            cy="37.87" 
            r="7.87" 
            stroke="black" 
            strokeOpacity="0.2" 
            strokeWidth="2" 
          />
          
          {/* High circle */}
          <circle 
            cx="880.87" 
            cy="37.87" 
            r="7.87" 
            fill={selectedLevel === "high" ? "#707070" : "white"} 
          />
          <circle 
            cx="880.87" 
            cy="37.87" 
            r="7.87" 
            stroke="white" 
            strokeWidth="2" 
          />
          <circle 
            cx="880.87" 
            cy="37.87" 
            r="7.87" 
            stroke="black" 
            strokeOpacity="0.2" 
            strokeWidth="2" 
          />
        </svg>

        {/* Clickable overlay areas */}
        <div className="absolute w-full h-full">
          <div 
            className="absolute left-0 w-[33%] h-full cursor-pointer" 
            onClick={() => handleLevelClick("low")}
            aria-label="Select low complexity"
          />
          <div 
            className="absolute left-[33%] w-[34%] h-full cursor-pointer" 
            onClick={() => handleLevelClick("moderate")}
            aria-label="Select moderate complexity"
          />
          <div 
            className="absolute left-[67%] w-[33%] h-full cursor-pointer" 
            onClick={() => handleLevelClick("high")}
            aria-label="Select high complexity"
          />
        </div>
      </div>

      {/* Description text - reduced margin between slider and description */}
      <div className="text-sm text-[#201F1F] mt-[0px]">
        {getLevelDescription()}
      </div>
    </div>
  );
};
