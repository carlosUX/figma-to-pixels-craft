import React from "react";

interface TagProps {
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <div className="border text-xs text-[#242424] px-3 py-1 rounded-xl border-solid border-[#B0BEFF]">
      {children}
    </div>
  );
};
