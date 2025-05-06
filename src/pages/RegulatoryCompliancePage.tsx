import React from "react";
import { Header } from "@/components/Header";
import { PhaseNavigation } from "@/components/navigation/PhaseNavigation";
import { InputWithButton } from "@/components/ui/InputWithButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const RegulatoryCompliancePage: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate("/scope-definition");
  const handleNext = () => navigate("/conversational-flows");
  return <div className="max-w-none flex flex-col w-full bg-white min-h-screen">
      <Header />
      
      {/* Moved "What would you like to build?" section here */}
      <div className="w-full px-6 md:px-12 lg:px-36 py-4 bg-zinc-400">
        <div className="flex flex-col w-full max-w-[1054px] mx-auto">
          <h3 className="font-semibold text-lg mb-4 text-zinc-50">What would you like to build?</h3>
          
          <InputWithButton placeholder="Message Ivatech" />
          
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-700 mr-2">Complexity</span>
            <span className="text-sm font-semibold text-gray-700">Moderate</span>
            <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83333 5H14.1667C14.6269 5 15 5.37308 15 5.83333V14.1667C15 14.6269 14.6269 15 14.1667 15H5.83333C5.37308 15 5 14.6269 5 14.1667V5.83333C5 5.37308 5.37308 5 5.83333 5Z" stroke="#335CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 5L15 15" stroke="#335CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 5L5 15" stroke="#335CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      
      <main className="flex flex-col items-center px-6 md:px-12 lg:px-36 py-6 bg-zinc-200">
        <div className="flex flex-col w-full max-w-[1054px]">
          {/* User prompt display */}
          <div className="text-center my-6 italic text-gray-700">
            I want to build a chatbot for healthcare professionals to track progress of patients in clinical trials. I am more familiar with AWS.
          </div>
          
          {/* Phase Navigation */}
          <div className="w-full max-w-[1054px] mb-8">
            <PhaseNavigation />
          </div>
          
          {/* Main content */}
          <div className="w-full max-w-[1054px] mb-12">
            <div className="space-y-8">
              <p className="text-gray-800">
                Ensure the chatbot complies with healthcare regulations such as HIPAA. This involves implementing robust data protection measures to safeguard patient information.
              </p>
              
              <p className="text-gray-800">
                Conduct a thorough review of relevant regulations and consult with legal experts to ensure that all aspects of the chatbot, from data storage to user interactions, adhere to the required standards.
              </p>
              
              <p className="text-gray-800">
                Regular audits and updates to the compliance framework will help maintain adherence to these regulations.
              </p>
            </div>

            <div className="my-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-blue-800 mb-3">Key Compliance Requirements</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Data encryption for all patient information at rest and in transit</li>
                <li>User authentication and access controls</li>
                <li>Audit trails for all data access and modifications</li>
                <li>Secure data storage and backup procedures</li>
                <li>Data minimization practices (collecting only necessary information)</li>
                <li>User consent mechanisms and privacy notices</li>
                <li>Incident response plan for potential data breaches</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
              <p className="text-amber-800">
                <strong>Important:</strong> Ensure your AWS architecture implements appropriate security controls to maintain HIPAA compliance, including but not limited to: encryption, access logging, and business associate agreements with AWS.
              </p>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex gap-4 mb-12">
            <Button onClick={handleBack} variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              <span className="mr-1">←</span> Back
            </Button>
            
            <Button onClick={handleNext} variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Next <span className="ml-1">→</span>
            </Button>
          </div>
        </div>
      </main>
      
      {/* Footer section removed from here */}
    </div>;
};
export default RegulatoryCompliancePage;