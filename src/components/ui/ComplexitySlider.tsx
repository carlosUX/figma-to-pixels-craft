import React from "react";

export const ComplexitySlider: React.FC = () => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<svg id="184:19384" width="1057" height="78" viewBox="0 0 1057 78" fill="none" xmlns="http://www.w3.org/2000/svg" class="complexity-slider" style="width: 100%; height: 78px"> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Segoe UI" font-size="14" letter-spacing="0em"><tspan x="138.045" y="15.2969">Low</tspan></text> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Segoe UI" font-size="14" letter-spacing="0em"><tspan x="475.292" y="15.2969">Moderate</tspan></text> <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Segoe UI" font-size="14" letter-spacing="0em"><tspan x="880.248" y="15.2969">High </tspan></text> <path d="M1054 40.5C1055.38 40.5 1056.5 39.3807 1056.5 38C1056.5 36.6193 1055.38 35.5 1054 35.5L1054 40.5ZM706 38L706 40.5L1054 40.5L1054 38L1054 35.5L706 35.5L706 38Z" fill="white"></path> <path d="M3 35.5C1.61929 35.5 0.5 36.6193 0.5 38C0.5 39.3807 1.61929 40.5 3 40.5V35.5ZM3 38V40.5H347V38V35.5H3V38Z" fill="#707070"></path> <path d="M352 38L700 38" stroke="white" stroke-width="5"></path> <text fill="#201F1F" xml:space="preserve" style="white-space: pre" font-family="Segoe UI" font-size="10" letter-spacing="0em"><tspan x="0" y="62.6406">Provides brief and straightforward responses, ideal for quick answers or basic </tspan><tspan x="0" y="75.6406">information.</tspan></text> <circle cx="146.87" cy="37.87" r="7.87" fill="#707070"></circle> <circle cx="146.87" cy="37.87" r="7.87" stroke="white" stroke-width="2"></circle> <circle cx="146.87" cy="37.87" r="7.87" stroke="black" stroke-opacity="0.2" stroke-width="2"></circle> </svg>`,
        }}
      />
    </div>
  );
};
