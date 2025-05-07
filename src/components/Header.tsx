
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="flex w-full px-8 py-3.5 border-b border-solid border-b-[#E0EBF7] bg-gradient-header shadow-sm max-sm:px-4">
      <div className="flex items-center">
        {/*
        <Link to="/">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c7c32e3edfd872015a6f7028ee286776486d63c?placeholderIfAbsent=true" className="w-[45px] h-[53px] max-sm:w-[35px] max-sm:h-[41px]" alt="Innovatech Solutions Logo" />
        </Link>
        */}
        <Link to="/">
        <span className="font-bold text-2xl text-white ml-[9px] max-sm:text-lg">
          Innovatech Solutions
        </span>
        </Link>
      </div>
    </header>
  );
};
