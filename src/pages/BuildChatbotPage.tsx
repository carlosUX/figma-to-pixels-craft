
import React from "react";
import { Header } from "@/components/Header";
import { PhaseNavigation } from "@/components/navigation/PhaseNavigation";
import { InputWithButton } from "@/components/ui/InputWithButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BuildChatbotPage: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate("/technology-stack");
  const handleNext = () => navigate("/deploy-chatbot");

  return (
    <div className="max-w-none flex flex-col w-full bg-white min-h-screen">
      <Header />
      
      {/* "What would you like to build?" section */}
      <div className="w-full px-6 md:px-12 lg:px-36 py-4 bg-zinc-400">
        <div className="flex flex-col w-full max-w-[1054px] mx-auto">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">What would you like to build?</h3>
          
          <InputWithButton />
          
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
            <div className="space-y-6">
              <p className="text-gray-800">
                Develop the chatbot using the chosen technology stack and designed conversational flows. This involves coding the chatbot's backend, integrating it with the selected AWS services, and setting up the necessary infrastructure.
              </p>
              
              <p className="text-gray-800">
                Ensure that the chatbot can handle various user inputs and provide accurate responses. Regular testing and debugging are crucial to identify and fix any issues during the development process.
              </p>
            </div>

            <div className="my-12 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-blue-800 mb-4">Development Steps</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Set up AWS Lambda functions for serverless backend processing</li>
                <li>Configure Amazon Lex for natural language understanding</li>
                <li>Implement DynamoDB for storing conversation history and patient data</li>
                <li>Create secure API endpoints for healthcare professional interactions</li>
                <li>Develop authentication system using Amazon Cognito</li>
                <li>Implement data encryption for HIPAA compliance</li>
              </ul>
            </div>

            <div className="my-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg mb-3">Do you want me to open the Code Editor to start building?</h3>
                <p className="text-gray-700 mb-4">You can start writing the Lambda functions and implementing the chatbot logic.</p>
                <button className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-6 py-2 rounded-lg float-right">
                  Yes, please
                </button>
              </div>
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
    </div>
  );
};

export default BuildChatbotPage;
