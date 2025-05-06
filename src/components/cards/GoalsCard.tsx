import React from "react";

interface GoalItemProps {
  title: string;
  description: string;
}

const GoalItem: React.FC<GoalItemProps> = ({ title, description }) => (
  <div className="flex items-center mb-2.5">
    <div
      dangerouslySetInnerHTML={{
        __html: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3315 12.0002C11.4361 12.0002 12.3315 11.1047 12.3315 10.0002C12.3315 8.89558 11.4361 8.00015 10.3315 8.00015C9.22697 8.00015 8.33154 8.89558 8.33154 10.0002C8.33154 11.1047 9.22697 12.0002 10.3315 12.0002ZM4.33154 10.0002C4.33154 6.68644 7.01783 4.00015 10.3315 4.00015C13.6453 4.00015 16.3315 6.68644 16.3315 10.0002C16.3315 13.3139 13.6453 16.0002 10.3315 16.0002C7.01783 16.0002 4.33154 13.3139 4.33154 10.0002ZM10.3315 5.50015C7.84626 5.50015 5.83154 7.51487 5.83154 10.0002C5.83154 12.4854 7.84626 14.5002 10.3315 14.5002C12.8168 14.5002 14.8315 12.4854 14.8315 10.0002C14.8315 7.51487 12.8168 5.50015 10.3315 5.50015ZM0.329468 10.0001C0.329468 4.47614 4.80756 -0.00195312 10.3316 -0.00195312C15.8556 -0.00195312 20.3337 4.47614 20.3337 10.0001C20.3337 15.5242 15.8556 20.0022 10.3316 20.0022C4.80756 20.0022 0.329468 15.5242 0.329468 10.0001ZM10.3316 1.49805C5.63599 1.49805 1.82947 5.30457 1.82947 10.0001C1.82947 14.6957 5.63599 18.5022 10.3316 18.5022C15.0271 18.5022 18.8337 14.6957 18.8337 10.0001C18.8337 5.30457 15.0271 1.49805 10.3316 1.49805Z" fill="#242424"/>
</svg>`,
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
            __html: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3315 12.0002C11.4361 12.0002 12.3315 11.1047 12.3315 10.0002C12.3315 8.89558 11.4361 8.00015 10.3315 8.00015C9.22697 8.00015 8.33154 8.89558 8.33154 10.0002C8.33154 11.1047 9.22697 12.0002 10.3315 12.0002ZM4.33154 10.0002C4.33154 6.68644 7.01783 4.00015 10.3315 4.00015C13.6453 4.00015 16.3315 6.68644 16.3315 10.0002C16.3315 13.3139 13.6453 16.0002 10.3315 16.0002C7.01783 16.0002 4.33154 13.3139 4.33154 10.0002ZM10.3315 5.50015C7.84626 5.50015 5.83154 7.51487 5.83154 10.0002C5.83154 12.4854 7.84626 14.5002 10.3315 14.5002C12.8168 14.5002 14.8315 12.4854 14.8315 10.0002C14.8315 7.51487 12.8168 5.50015 10.3315 5.50015ZM0.329468 10.0001C0.329468 4.47614 4.80756 -0.00195312 10.3316 -0.00195312C15.8556 -0.00195312 20.3337 4.47614 20.3337 10.0001C20.3337 15.5242 15.8556 20.0022 10.3316 20.0022C4.80756 20.0022 0.329468 15.5242 0.329468 10.0001ZM10.3316 1.49805C5.63599 1.49805 1.82947 5.30457 1.82947 10.0001C1.82947 14.6957 5.63599 18.5022 10.3316 18.5022C15.0271 18.5022 18.8337 14.6957 18.8337 10.0001C18.8337 5.30457 15.0271 1.49805 10.3316 1.49805Z" fill="#242424"/>
</svg>`,
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
<path d="M15.1813 0.926893C14.0291 -0.284951 12.1047 -0.309226 10.9222 0.873168L1.54741 10.2475C1.21958 10.5754 0.992038 10.9899 0.891482 11.4424L0.0138652 15.3923C-0.0232157 15.5592 0.0275431 15.7335 0.148442 15.8544C0.26934 15.9753 0.443618 16.026 0.610502 15.9889L4.53689 15.1157C5.00432 15.0118 5.43243 14.7767 5.77103 14.4381L15.129 5.08003C16.27 3.939 16.2933 2.09631 15.1813 0.926893ZM11.6293 1.58029C12.4143 0.795384 13.6917 0.811498 14.4566 1.61596C15.1948 2.39225 15.1793 3.61548 14.4219 4.37293L13.7507 5.04418L10.958 2.25155L11.6293 1.58029ZM10.2509 2.95864L13.0436 5.7513L5.06391 13.731C4.85976 13.9352 4.60164 14.0769 4.31982 14.1396L1.1605 14.8421L1.86768 11.6593C1.92698 11.3924 2.06117 11.148 2.2545 10.9547L10.2509 2.95864Z" fill="#424242"/>
</svg>
`,
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
