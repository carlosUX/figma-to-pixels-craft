
import React from "react";

interface InputWithButtonProps {
  placeholder?: string;
  buttonText?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
}

export const InputWithButton: React.FC<InputWithButtonProps> = ({
  placeholder = "Message Ivatech",
  buttonText,
  value,
  onChange,
  onButtonClick,
}) => {
  return (
    <div className="flex w-full bg-white p-3 rounded-[20px]">
      <div className="flex items-center w-full bg-neutral-50 pl-6 pr-3 py-2 rounded-2xl">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 text-lg text-[#242424] bg-transparent border-none outline-none"
          value={value}
          onChange={onChange}
        />
        <button 
          className="flex items-center justify-center rounded p-1.5 text-[#335CCC]"
          onClick={onButtonClick}
        >
          {buttonText || (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.72363 2.05279C2.54771 1.96483 2.33657 1.98818 2.18412 2.11244C2.03167 2.2367 1.96623 2.4388 2.0169 2.62884L3.51498 8.24662C3.56554 8.43622 3.72234 8.57872 3.9159 8.61098L10.7704 9.7534C11.0489 9.79982 11.0489 10.2002 10.7704 10.2466L3.9159 11.389C3.72234 11.4213 3.56554 11.5638 3.51498 11.7534L2.0169 17.3712C1.96623 17.5612 2.03167 17.7633 2.18412 17.8876C2.33657 18.0118 2.54771 18.0352 2.72363 17.9472L17.7236 10.4472C17.893 10.3625 18 10.1894 18 10C18 9.81062 17.893 9.63749 17.7236 9.55279L2.72363 2.05279Z" fill="#335CCC"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
