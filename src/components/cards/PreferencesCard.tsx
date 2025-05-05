import React from "react";
import { Tag } from "../ui/Tag";

export const PreferencesCard: React.FC = () => {
  return (
    <div className="flex flex-col w-[462px] shadow-[0px_2px_4px_rgba(0,0,0,0.14),0px_0px_2px_rgba(0,0,0,0.12)] border bg-white rounded-xl border-solid border-[#E0E0E0] max-sm:w-full max-sm:max-w-[400px]">
      <div className="flex items-center px-2.5 py-[11px] border-b-[#E0E0E0] border-b border-solid">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 11.0002C13.2386 11.0002 11 13.2388 11 16.0002C11 18.7616 13.2386 21.0002 16 21.0002C18.7614 21.0002 21 18.7616 21 16.0002C21 13.2388 18.7614 11.0002 16 11.0002ZM13 16.0002C13 14.3434 14.3431 13.0002 16 13.0002C17.6569 13.0002 19 14.3434 19 16.0002C19 17.6571 17.6569 19.0002 16 19.0002C14.3431 19.0002 13 17.6571 13 16.0002Z" fill="#242424"/></svg>`,
          }}
        />
        <div className="font-semibold text-2xl text-[#242424] flex-1">
          Preferences
        </div>
        <button className="flex items-center rounded px-3 py-1.5">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1813 0.926893C14.029 -0.284951 12.1046 -0.309226 10.9222 0.873168L1.54736 10.2475C1.21953 10.5754 0.991992 10.9899 0.891436 11.4424L0.0138194 15.3923C-0.0232615 15.5592 0.0274974 15.7335 0.148396 15.8544C0.269295 15.9753 0.443572 16.026 0.610456 15.9889L4.53685 15.1157C5.00428 15.0118 5.43238 14.7767 5.77098 14.4381L15.129 5.08003C16.27 3.939 16.2932 2.09631 15.1813 0.926893ZM11.6293 1.58029C12.4142 0.795384 13.6917 0.811498 14.4566 1.61596C15.1947 2.39225 15.1793 3.61548 14.4219 4.37293L13.7506 5.04418L10.958 2.25155L11.6293 1.58029ZM10.2509 2.95864L13.0435 5.7513L5.06387 13.731C4.85972 13.9352 4.6016 14.0769 4.31977 14.1396L1.16046 14.8421L1.86763 11.6593C1.92693 11.3924 2.06112 11.148 2.25445 10.9547L10.2509 2.95864Z" fill="#424242"/>
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
        <div className="mb-3.5">
          <div className="font-semibold text-base text-[#242424] mb-1">
            Learning format
          </div>
          <div className="flex flex-wrap gap-[11px]">
            <Tag>written documentation</Tag>
            <Tag>Interactive modules</Tag>
            <Tag>Video tutorials</Tag>
            <Tag>Hands-on labs</Tag>
            <Tag>Practical exercises</Tag>
          </div>
        </div>
        <div className="mb-3.5">
          <div className="font-semibold text-base text-[#242424] mb-1">
            Content Level
          </div>
          <div className="flex flex-wrap gap-[11px]">
            <Tag>Advanced level content</Tag>
            <Tag>Advanced technical skills</Tag>
          </div>
        </div>
        <div className="mb-3.5">
          <div className="font-semibold text-base text-[#242424] mb-1">
            Topics of Interest:
          </div>
          <div className="flex flex-wrap gap-[11px]">
            <Tag>Azure</Tag>
            <Tag>Microsoft 365</Tag>
            <Tag>AI</Tag>
            <Tag>Machine learning</Tag>
          </div>
        </div>
        <div className="mb-3.5">
          <div className="font-semibold text-base text-[#242424] mb-1">
            Learning pace:
          </div>
          <div className="flex flex-wrap gap-[11px]">
          <Tag>Self-paced</Tag>
          </div>
        </div>
      </div>
    </div>
  );
};
