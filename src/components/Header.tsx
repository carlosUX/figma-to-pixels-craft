import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex w-full bg-[#F5E7DE] px-[49px] py-3.5 border-b-[#E0EBF7] border-b border-solid max-sm:px-5 max-sm:py-2.5">
      <div className="flex items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c7c32e3edfd872015a6f7028ee286776486d63c?placeholderIfAbsent=true"
          className="w-[45px] h-[53px] max-sm:w-[35px] max-sm:h-[41px]"
          alt="Innovatech Solutions Logo"
        />
        <span className="font-bold text-2xl text-[#65696F] ml-[9px] max-sm:text-xl">
        <link
        href="home"
        rel="stylesheet"
      />Innovatech Solutions
        </span>
      </div>
    </header>
  );
};
