
import React from "react";
import { ComplexitySlider } from "./ui/ComplexitySlider";

export const InputSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-full max-w-[1054px] mb-[30px] max-md:max-w-full max-sm:max-w-full">
      <div className="font-semibold text-xl text-[#242424] mb-[17px]">
        What would you like to build?
      </div>
      <div className="flex w-full bg-white p-3 rounded-[20px] max-sm:p-2.5">
        <div className="flex items-center w-full bg-neutral-50 pl-6 pr-3 py-1 rounded-2xl max-sm:px-2.5 max-sm:py-1">
          <div className="flex-1 text-lg text-[#242424]">
            I want to build a chatbot for healthcare professionals to track
            progress of patients in clinical trials. I am more familiar with
            AWS.
          </div>
          <button
            onClick={() => window.location.href = "/NewPage"}
            className="flex items-center justify-center rounded p-1.5"
            >
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.72363 2.05279C2.54771 1.96483 2.33657 1.98818 2.18412 2.11244C2.03167 2.2367 1.96623 2.4388 2.0169 2.62884L3.51498 8.24662C3.56554 8.43622 3.72234 8.57872 3.9159 8.61098L10.7704 9.7534C11.0489 9.79982 11.0489 10.2002 10.7704 10.2466L3.9159 11.389C3.72234 11.4213 3.56554 11.5638 3.51498 11.7534L2.0169 17.3712C1.96623 17.5612 2.03167 17.7633 2.18412 17.8876C2.33657 18.0118 2.54771 18.0352 2.72363 17.9472L17.7236 10.4472C17.893 10.3625 18 10.1894 18 10C18 9.81062 17.893 9.63749 17.7236 9.55279L2.72363 2.05279Z" fill="#335CCC"/></svg>`,
              }}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1054px] mt-2.5 max-md:max-w-full max-sm:max-w-full">
        <div className="font-semibold text-base text-[#242424] mb-1.5">
          Complexity
        </div>
        <div className="text-sm text-[#707070] mb-2.5">
          Choose the level of detail you want in the response
        </div>
        <ComplexitySlider />
      </div>
    </div>
  );
};
