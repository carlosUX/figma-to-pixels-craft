import React from "react";
import { Header } from "@/components/Header";
import { InputSection } from "@/components/InputSection";
import { PreferencesCard } from "@/components/cards/PreferencesCard";
import { PastInteractionCard } from "@/components/cards/PastInteractionCard";
import { GoalsCard } from "@/components/cards/GoalsCard";
import { RelatedInformation } from "@/components/RelatedInformation";
const Index: React.FC = () => {
  return <>
      <div className="max-w-none flex flex-col w-full bg-white mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <main className="flex flex-col items-center bg-[#F2BFA4] px-36 py-[26px] max-md:p-5 max-sm:p-[15px]">
          <InputSection />
          {/* RelatedInformation /> */}
          <div className=" flex-col w-full flex flex-wrap justify-center gap-6 bg-[rgba(250,250,250,0.98)] px-[141px] py-[70px] max-md:p-5 max-sm:flex-col max-sm:items-center max-sm:p-[15px]">
            <PreferencesCard />
            <PastInteractionCard />
            <GoalsCard />
          </div>
        </main>
      </div>
    </>;
};
export default Index;