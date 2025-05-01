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
            AWS.CACA
          </div>
          <button
            onClick={() => window.location.href = "/NewPage"}
            className="flex items-center justify-center rounded p-1.5"
            ></button>
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
