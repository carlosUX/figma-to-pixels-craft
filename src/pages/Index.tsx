import React from "react";
import { Header } from "@/components/Header";
import { InputSection } from "@/components/InputSection";
import { PreferencesCard } from "@/components/cards/PreferencesCard";
import { PastInteractionCard } from "@/components/cards/PastInteractionCard";
import { GoalsCard } from "@/components/cards/GoalsCard";

const Index: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Segoe+UI:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-none flex flex-col w-full bg-white mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <main className="flex flex-col items-center bg-[#F2BFA4] px-36 py-[26px] max-md:p-5 max-sm:p-[15px]">
          <InputSection />
          <div className="flex flex-wrap justify-center gap-6 bg-[rgba(250,250,250,0.98)] px-[141px] py-[70px] max-md:p-5 max-sm:flex-col max-sm:items-center max-sm:p-[15px]">
            <PreferencesCard />
            <PastInteractionCard />
            <GoalsCard />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
