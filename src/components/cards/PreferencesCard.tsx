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
              __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1813 2.92689C16.029 1.71505 14.1046 1.69077 12.9222 2.87317L3.54735 12.2475C3.21952 12.5754 2.99198 12.9899 2.89142 13.4424L2.0138 17.3923C1.97672 17.5592 2.02748 17.7335 2.14838 17.8544C2.26928 17.9753 2.44356 18.026 2.61044 17.9889L6.53683 17.1157C7.00426 17.0118 7.43237 16.7767 7.77096 16.4381L17.129 7.08003C18.27 5.939 18.2932 4.09631 17.1813 2.92689Z" fill="#424242"/></svg>`,
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
