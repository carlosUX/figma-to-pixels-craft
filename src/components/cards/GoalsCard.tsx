import React from "react";

interface GoalItemProps {
  title: string;
  description: string;
}

const GoalItem: React.FC<GoalItemProps> = ({ title, description }) => (
  <div className="flex items-center mb-2.5">
    <div
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#242424"/></svg>`,
      }}
      className="mr-2.5"
    />
    <div className="flex-1">
      <div className="font-semibold text-base text-[#242424]">{title}</div>
      <div className="text-sm text-[#242424]">{description}</div>
    </div>
  </div>
);

export const GoalsCard: React.FC = () => {
  return (
    <div className="flex flex-col w-[462px] shadow-[0px_2px_4px_rgba(0,0,0,0.14),0px_0px_2px_rgba(0,0,0,0.12)] border bg-white rounded-xl border-solid border-[#E0E0E0] max-sm:w-full max-sm:max-w-[400px]">
      <div className="flex items-center px-2.5 py-[11px] border-b-[#E0E0E0] border-b border-solid">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0021 0C15.6872 0 17.3027 0.297661 18.7991 0.84327L17.1278 2.51456C16.1318 2.24417 15.0838 2.09987 14.0021 2.09987C7.42868 2.09987 2.09987 7.42868 2.09987 14.0021C2.09987 20.5755 7.42868 25.9043 14.0021 25.9043C20.5755 25.9043 25.9043 20.5755 25.9043 14.0021C25.9043 12.9219 25.7604 11.8753 25.4907 10.8804L27.1623 9.2089C27.707 10.7042 28.0042 12.3184 28.0042 14.0021C28.0042 21.7352 21.7352 28.0042 14.0021 28.0042C6.26896 28.0042 0 21.7352 0 14.0021C0 6.26896 6.26896 0 14.0021 0ZM14.0021 5.60261C14.7281 5.60261 15.4326 5.69473 16.1046 5.86791L16.1046 8.0619C15.4471 7.82915 14.7394 7.70249 14.0021 7.70249C10.5229 7.70249 7.70244 10.5229 7.70244 14.0021C7.70244 17.4813 10.5229 20.3017 14.0021 20.3017C17.4813 20.3017 20.3017 17.4813 20.3017 14.0021C20.3017 13.2658 20.1754 12.559 19.9432 11.9022L22.1369 11.9022C22.3097 12.5734 22.4016 13.277 22.4016 14.0021C22.4016 18.641 18.641 22.4016 14.0021 22.4016C9.36315 22.4016 5.60257 18.641 5.60257 14.0021C5.60257 9.3632 9.36315 5.60261 14.0021 5.60261ZM16.8019 14.0021C16.8019 15.5484 15.5484 16.8019 14.0021 16.8019C12.4558 16.8019 11.2022 15.5484 11.2022 14.0021C11.2022 12.4558 12.4558 11.2023 14.0021 11.2023C14.3907 11.2023 14.7609 11.2815 15.0973 11.4246L17.5046 9.01734L17.5044 4.55273C17.5044 4.27427 17.615 4.0072 17.8119 3.81029L21.3116 0.310411C21.6119 0.0101201 22.0635 -0.0797175 22.4559 0.0827898C22.8482 0.245297 23.104 0.628146 23.104 1.05281V4.90261L26.9541 4.90268C27.3787 4.90269 27.7616 5.1585 27.9241 5.55084C28.0866 5.94317 27.9967 6.39477 27.6964 6.69504L24.1966 10.1948C23.9997 10.3917 23.7326 10.5023 23.4542 10.5023L18.9893 10.5023L16.5811 12.9105C16.7233 13.2459 16.8019 13.6148 16.8019 14.0021ZM23.0193 8.40246L24.4193 7.00251L22.0541 7.00247C21.4742 7.00246 21.0041 6.53239 21.0041 5.95253V3.58767L19.6043 4.98756L19.6044 8.31993C19.6188 8.33282 19.6329 8.34618 19.6468 8.36C19.6606 8.37387 19.674 8.38803 19.687 8.40247L23.0193 8.40246Z" fill="#242424"/>
</svg>
`,
          }}
          className="mr-2.5"
        />
        <div className="font-semibold text-2xl text-[#242424] flex-1">
          Goals
        </div>
        <button className="flex items-center rounded px-3 py-1.5">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1813 0.926893C14.029 -0.284951 12.1046 -0.309226 10.9222 0.873168L1.54736 10.2475C1.21953 10.5754 0.991992 10.9899 0.891436 11.4424L0.0138194 15.3923C-0.0232615 15.5592 0.0274974 15.7335 0.148396 15.8544C0.269295 15.9753 0.443572 16.026 0.610456 15.9889L4.53685 15.1157C5.00428 15.0118 5.43238 14.7767 5.77098 14.4381L15.129 5.08003C16.27 3.939 16.2932 2.09631 15.1813 0.926893ZM11.6293 1.58029C12.4142 0.795384 13.6917 0.811498 14.4566 1.61596C15.1947 2.39225 15.1793 3.61548 14.4219 4.37293L13.7506 5.04418L10.958 2.25155L11.6293 1.58029ZM10.2509 2.95864L13.0435 5.7513L5.06387 13.731C4.85972 13.9352 4.6016 14.0769 4.31977 14.1396L1.16046 14.8421L1.86763 11.6593C1.92693 11.3924 2.06112 11.148 2.25445 10.9547L10.2509 2.95864Z" fill="#424242"/>
</svg>`,
            }}
          />
          <span className="font-semibold text-sm text-[#424242] ml-1.5">
            Edit
          </span>
        </button>
      </div>
      <div className="p-2.5">
        <GoalItem
          title="Explore Subfields"
          description="You are currently focused on completing the design phase of the Proseware project and have set a milestone to finalize the user interface by the end of the month."
        />
        <GoalItem
          title="Explore Subfields"
          description="Complete the Azure Fundamentals learning path to gain a solid understanding of cloud concepts, core Azure services, and Azure pricing and support"
        />
        <GoalItem
          title="Explore Subfields"
          description="Complete the Cybersecurity learning path to understand security best practices, threat protection, and identity management"
        />
      </div>
    </div>
  );
};
