import React from "react";

interface GoalItemProps {
  title: string;
  description: string;
}

const GoalItem: React.FC<GoalItemProps> = ({ title, description }) => (
  <div className="flex items-center mb-2.5">
    <div
      dangerouslySetInnerHTML={{
        __html: `<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3355 0C16.0206 0 17.6361 0.297661 19.1324 0.84327L17.4612 2.51456C16.4651 2.24417 15.4172 2.09987 14.3355 2.09987C7.76206 2.09987 2.43325 7.42868 2.43325 14.0021C2.43325 20.5755 7.76206 25.9043 14.3355 25.9043C20.9089 25.9043 26.2377 20.5755 26.2377 14.0021C26.2377 12.9219 26.0938 11.8753 25.8241 10.8804L27.4957 9.2089C28.0404 10.7042 28.3376 12.3184 28.3376 14.0021C28.3376 21.7352 22.0686 28.0042 14.3355 28.0042C6.60233 28.0042 0.333374 21.7352 0.333374 14.0021C0.333374 6.26896 6.60233 0 14.3355 0ZM14.3354 5.60261C15.0615 5.60261 15.766 5.69473 16.4379 5.86791L16.438 8.0619C15.7804 7.82915 15.0727 7.70249 14.3354 7.70249C10.8563 7.70249 8.03582 10.5229 8.03582 14.0021C8.03582 17.4813 10.8563 20.3017 14.3354 20.3017C17.8146 20.3017 20.6351 17.4813 20.6351 14.0021C20.6351 13.2658 20.5087 12.559 20.2766 11.9022L22.4703 11.9022C22.6431 12.5734 22.7349 13.277 22.7349 14.0021C22.7349 18.641 18.9744 22.4016 14.3354 22.4016C9.69653 22.4016 5.93594 18.641 5.93594 14.0021C5.93594 9.3632 9.69653 5.60261 14.3354 5.60261ZM17.1353 14.0021C17.1353 15.5484 15.8817 16.8019 14.3354 16.8019C12.7891 16.8019 11.5356 15.5484 11.5356 14.0021C11.5356 12.4558 12.7891 11.2023 14.3354 11.2023C14.7241 11.2023 15.0943 11.2815 15.4307 11.4246L17.838 9.01734L17.8378 4.55273C17.8378 4.27427 17.9484 4.0072 18.1453 3.81029L21.645 0.310411C21.9453 0.0101201 22.3969 -0.0797175 22.7892 0.0827898C23.1816 0.245297 23.4374 0.628146 23.4374 1.05281V4.90261L27.2874 4.90268C27.7121 4.90269 28.0949 5.1585 28.2574 5.55084C28.4199 5.94317 28.3301 6.39477 28.0298 6.69504L24.5299 10.1948C24.333 10.3917 24.066 10.5023 23.7875 10.5023L19.3226 10.5023L16.9145 12.9105C17.0566 13.2459 17.1353 13.6148 17.1353 14.0021ZM23.3526 8.40246L24.7526 7.00251L22.3874 7.00247C21.8076 7.00246 21.3375 6.53239 21.3375 5.95253V3.58767L19.9377 4.98756L19.9378 8.31993C19.9522 8.33282 19.9663 8.34618 19.9801 8.36C19.994 8.37387 20.0074 8.38803 20.0203 8.40247L23.3526 8.40246Z" fill="#242424"/>
</svg>
`,
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
            __html: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11Z" fill="#242424"/></svg>`,
          }}
          className="mr-2.5"
        />
        <div className="font-semibold text-2xl text-[#242424] flex-1">
          Goals
        </div>
        <button className="flex items-center rounded px-3 py-1.5">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3315 12.0002C11.4361 12.0002 12.3315 11.1047 12.3315 10.0002C12.3315 8.89558 11.4361 8.00015 10.3315 8.00015C9.22697 8.00015 8.33154 8.89558 8.33154 10.0002C8.33154 11.1047 9.22697 12.0002 10.3315 12.0002ZM4.33154 10.0002C4.33154 6.68644 7.01783 4.00015 10.3315 4.00015C13.6453 4.00015 16.3315 6.68644 16.3315 10.0002C16.3315 13.3139 13.6453 16.0002 10.3315 16.0002C7.01783 16.0002 4.33154 13.3139 4.33154 10.0002ZM10.3315 5.50015C7.84626 5.50015 5.83154 7.51487 5.83154 10.0002C5.83154 12.4854 7.84626 14.5002 10.3315 14.5002C12.8168 14.5002 14.8315 12.4854 14.8315 10.0002C14.8315 7.51487 12.8168 5.50015 10.3315 5.50015ZM0.329468 10.0001C0.329468 4.47614 4.80756 -0.00195312 10.3316 -0.00195312C15.8556 -0.00195312 20.3337 4.47614 20.3337 10.0001C20.3337 15.5242 15.8556 20.0022 10.3316 20.0022C4.80756 20.0022 0.329468 15.5242 0.329468 10.0001ZM10.3316 1.49805C5.63599 1.49805 1.82947 5.30457 1.82947 10.0001C1.82947 14.6957 5.63599 18.5022 10.3316 18.5022C15.0271 18.5022 18.8337 14.6957 18.8337 10.0001C18.8337 5.30457 15.0271 1.49805 10.3316 1.49805Z" fill="#242424"/>
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
