
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
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <svg id="184:19384" width="1057" height="78" viewBox="0 0 1057 78" fill="none" xmlns="http://www.w3.org/2000/svg" class="complexity-slider" style="width: 100%; height: 78px">
              <text fill="black" xml:space="preserve" style="white-space: pre; cursor: pointer;" font-family="Segoe UI" font-size="14" letter-spacing="0em" id="low-level"><tspan x="138.045" y="15.2969">Low</tspan></text>
              <text fill="black" xml:space="preserve" style="white-space: pre; cursor: pointer;" font-family="Segoe UI" font-size="14" letter-spacing="0em" id="moderate-level"><tspan x="475.292" y="15.2969">Moderate</tspan></text>
              <text fill="black" xml:space="preserve" style="white-space: pre; cursor: pointer;" font-family="Segoe UI" font-size="14" letter-spacing="0em" id="high-level"><tspan x="880.248" y="15.2969">High</tspan></text>
              <path d="M1054 40.5C1055.38 40.5 1056.5 39.3807 1056.5 38C1056.5 36.6193 1055.38 35.5 1054 35.5L1054 40.5ZM706 38L706 40.5L1054 40.5L1054 38L1054 35.5L706 35.5L706 38Z" fill="white"></path>
              <path d="M3 35.5C1.61929 35.5 0.5 36.6193 0.5 38C0.5 39.3807 1.61929 40.5 3 40.5V35.5ZM3 38V40.5H347V38V35.5H3V38Z" fill="#707070"></path>
              <path d="M352 38L700 38" stroke="white" stroke-width="5"></path>
              <circle cx="146.87" cy="37.87" r="7.87" fill="#707070" id="low-circle"></circle>
              <circle cx="146.87" cy="37.87" r="7.87" stroke="white" stroke-width="2"></circle>
              <circle cx="146.87" cy="37.87" r="7.87" stroke="black" stroke-opacity="0.2" stroke-width="2"></circle>
              <circle cx="524.87" cy="37.87" r="7.87" fill="${selectedLevel === 'moderate' ? '#707070' : 'transparent'}" id="moderate-circle" style="display: ${selectedLevel === 'moderate' ? 'block' : 'none'}"></circle>
              <circle cx="524.87" cy="37.87" r="7.87" stroke="white" stroke-width="2" style="display: ${selectedLevel === 'moderate' ? 'block' : 'none'}"></circle>
              <circle cx="524.87" cy="37.87" r="7.87" stroke="black" stroke-opacity="0.2" stroke-width="2" style="display: ${selectedLevel === 'moderate' ? 'block' : 'none'}"></circle>
              <circle cx="880.87" cy="37.87" r="7.87" fill="${selectedLevel === 'high' ? '#707070' : 'transparent'}" id="high-circle" style="display: ${selectedLevel === 'high' ? 'block' : 'none'}"></circle>
              <circle cx="880.87" cy="37.87" r="7.87" stroke="white" stroke-width="2" style="display: ${selectedLevel === 'high' ? 'block' : 'none'}"></circle>
              <circle cx="880.87" cy="37.87" r="7.87" stroke="black" stroke-opacity="0.2" stroke-width="2" style="display: ${selectedLevel === 'high' ? 'block' : 'none'}"></circle>
            </svg>`,
        }}
      />
      <div className="text-sm text-[#201F1F] mt-2">
        {getLevelDescription()}
      </div>
      
      <div className="absolute opacity-0" style={{ pointerEvents: "none" }}>
        {/* Hidden buttons for screen readers */}
        <button onClick={() => handleLevelClick("low")}>Low</button>
        <button onClick={() => handleLevelClick("moderate")}>Moderate</button>
        <button onClick={() => handleLevelClick("high")}>High</button>
      </div>
      
      {/* Clickable overlay areas */}
      <div className="relative" style={{ marginTop: "-78px", pointerEvents: "auto" }}>
        <div 
          className="absolute cursor-pointer" 
          style={{ left: "0%", width: "33%", height: "78px" }}
          onClick={() => handleLevelClick("low")}
          aria-label="Select low complexity"
        />
        <div 
          className="absolute cursor-pointer" 
          style={{ left: "33%", width: "34%", height: "78px" }}
          onClick={() => handleLevelClick("moderate")}
          aria-label="Select moderate complexity"
        />
        <div 
          className="absolute cursor-pointer" 
          style={{ left: "67%", width: "33%", height: "78px" }}
          onClick={() => handleLevelClick("high")}
          aria-label="Select high complexity"
        />
      </div>
    </div>
  );
};
