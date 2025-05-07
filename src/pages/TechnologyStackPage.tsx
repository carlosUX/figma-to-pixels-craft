
import React from "react";
import { Header } from "@/components/Header";
import { PhaseNavigation } from "@/components/navigation/PhaseNavigation";
import { InputWithButton } from "@/components/ui/InputWithButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const TechnologyStackPage: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const handleBack = () => navigate("/conversational-flows");
  const handleNext = () => navigate("/build-chatbot");

  return (
    <div className="max-w-none flex flex-col w-full bg-white min-h-screen">
      <Header />
      
      {/* "What would you like to build?" section */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-36 py-3 sm:py-4 bg-zinc-400">
        <div className="flex flex-col w-full max-w-[1054px] mx-auto">
          <h3 className="font-semibold text-md sm:text-lg text-gray-700 mb-3 sm:mb-4">What would you like to build?</h3>
          
          <InputWithButton />
          
          <div className="flex items-center mt-2">
            <span className="text-xs sm:text-sm text-gray-700 mr-2">Complexity</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Moderate</span>
            <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83333 5H14.1667C14.6269 5 15 5.37308 15 5.83333V14.1667C15 14.6269 14.6269 15 14.1667 15H5.83333C5.37308 15 5 14.6269 5 14.1667V5.83333C5 5.37308 5.37308 5 5.83333 5Z" stroke="#335CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 5L15 15" stroke="#335CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 5L5 15" stroke="#335CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      
      <main className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-36 py-4 sm:py-6 bg-zinc-200">
        <div className="flex flex-col w-full max-w-[1054px]">
          {/* User prompt display */}
          <div className="text-center my-4 sm:my-6 italic text-gray-700 text-sm sm:text-base">
            I want to build a chatbot for healthcare professionals to track progress of patients in clinical trials. I am more familiar with AWS.
          </div>
          
          {/* Phase Navigation */}
          <div className="w-full max-w-[1054px] mb-6 sm:mb-8">
            <PhaseNavigation />
          </div>
          
          {/* Main content */}
          <div className="w-full max-w-[1054px] mb-8 sm:mb-12">
            <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base">
              Select the appropriate AWS services for natural language processing, data storage, and serverless computing.
            </p>
            
            <p className="text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base">
              AWS offers a range of services such as Amazon Lex for building conversational interfaces, Amazon S3 for secure data storage, and AWS Lambda for serverless computing. Choosing the right combination of these services will ensure that the chatbot is scalable, reliable, and efficient.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-6 sm:my-10">
              <div className="border border-gray-200 bg-white rounded-lg p-4 sm:p-6 flex flex-col items-center w-[100px] sm:w-[160px]">
                <img src="/lovable-uploads/b96c0288-80d9-431c-af55-c7618d487147.png" alt="Amazon Lex Logo" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
                <h3 className="mt-3 sm:mt-4 font-semibold text-center text-sm sm:text-base">Amazon Lex</h3>
              </div>
              
              <div className="border border-gray-200 bg-white rounded-lg p-4 sm:p-6 flex flex-col items-center w-[100px] sm:w-[160px]">
                <img src="/lovable-uploads/f0c27208-2951-4976-8c27-523784e08310.png" alt="Amazon S3 Logo" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
                <h3 className="mt-3 sm:mt-4 font-semibold text-center text-sm sm:text-base">Amazon S3</h3>
              </div>
              
              <div className="border border-gray-200 bg-white rounded-lg p-4 sm:p-6 flex flex-col items-center w-[100px] sm:w-[160px]">
                <img src="/lovable-uploads/ca498189-5de4-4d19-ba7a-33684da6ff34.png" alt="AWS Lambda Logo" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
                <h3 className="mt-3 sm:mt-4 font-semibold text-center text-sm sm:text-base">AWS Lambda</h3>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button onClick={handleBack} variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-6 py-1 sm:py-2 text-sm sm:text-base">
              <span className="mr-1">←</span> Back
            </Button>
            
            <Button onClick={handleNext} variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-6 py-1 sm:py-2 text-sm sm:text-base">
              Next <span className="ml-1">→</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechnologyStackPage;
