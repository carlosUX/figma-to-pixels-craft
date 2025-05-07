import React from "react";
import { Header } from "@/components/Header";
import { InputSection } from "@/components/InputSection";
import { PreferencesCard } from "@/components/cards/PreferencesCard";
import { PastInteractionCard } from "@/components/cards/PastInteractionCard";
import { GoalsCard } from "@/components/cards/GoalsCard";
import { RelatedInformation } from "@/components/RelatedInformation";
const Index: React.FC = () => {
  return <div className="max-w-none flex flex-col w-full bg-white mx-auto">
      <Header />
      <main className="w-full flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-36 py-4 sm:py-6 bg-zinc-200">
        <InputSection />
        {/* <RelatedInformation /> */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-2 sm:px-4 md:px-8 lg:px-[141px] py-4 sm:py-6 md:py-[70px] max-md:p-5 max-sm:flex-col max-sm:items-center max-sm:p-[15px] bg-zinc-200">
          <PreferencesCard />
          <PastInteractionCard />
          <GoalsCard />
        </div>
      </main>
    </div>;
};
export default Index;