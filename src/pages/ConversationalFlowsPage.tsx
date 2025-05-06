
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { PhaseNavigation } from "@/components/navigation/PhaseNavigation";
import { InputWithButton } from "@/components/ui/InputWithButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const ConversationalFlowsPage: React.FC = () => {
  const navigate = useNavigate();
  const [taskInput1, setTaskInput1] = useState("");
  const [taskInput2, setTaskInput2] = useState("");
  const [wantsHelp, setWantsHelp] = useState(false);

  const handleBack = () => navigate("/regulatory-compliance");
  const handleNext = () => navigate("/technology-stack");
  
  const toggleHelp = () => setWantsHelp(true);

  return (
    <div className="max-w-none flex flex-col w-full bg-white min-h-screen">
      <Header />
      
      <main className="flex flex-col items-center bg-[#F2F2F2] px-6 md:px-12 lg:px-36 py-6">
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
            <p className="text-gray-800 mb-6">
              Create dialogues for different scenarios, ensuring they are user-friendly and meet the needs of healthcare professionals. Map out various user journeys and interactions, considering common questions and tasks the chatbot will handle. Use natural language processing (NLP) techniques to make the conversations as intuitive and human-like as possible. Testing these flows with real users can provide valuable feedback for refinement.
            </p>
            
            {/* AI Assistant */}
            <div className="mb-8 bg-white rounded-lg p-6 border border-gray-200">
              <p className="mb-4">Do you want me to assist you to create scenarios for your Chatbot?</p>
              
              {!wantsHelp && (
                <button
                  onClick={toggleHelp} 
                  className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 rounded-lg float-right"
                >
                  Yes, please
                </button>
              )}
              
              {wantsHelp && (
                <p className="text-green-600 italic">
                  I'll help you create some effective conversation scenarios for your healthcare chatbot.
                </p>
              )}
            </div>
            
            <div className="mb-6">
              <p className="font-medium mb-3">
                What are the most common tasks or questions that healthcare professionals might need assistance with? (e.g., appointment scheduling, medication reminders, patient follow-ups)
              </p>
              <Input 
                placeholder="Enter common tasks"
                value={taskInput1} 
                onChange={(e) => setTaskInput1(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>
            
            <div className="mb-10">
              <p className="font-medium mb-3">
                Can you list specific scenarios where the chatbot will interact with healthcare professionals?
              </p>
              <Input 
                placeholder="Enter common tasks"
                value={taskInput2} 
                onChange={(e) => setTaskInput2(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex gap-4 mb-12">
            <Button 
              onClick={handleBack} 
              variant="secondary" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              <span className="mr-1">←</span> Back
            </Button>
            
            <Button 
              onClick={handleNext} 
              variant="secondary" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              Next <span className="ml-1">→</span>
            </Button>
          </div>
        </div>
      </main>
      
      {/* Footer section */}
      <div className="w-full bg-[#F2BFA4] px-6 md:px-12 lg:px-36 py-8">
        <div className="flex flex-col w-full max-w-[1054px] mx-auto">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">What would you like to build?</h3>
          
          <InputWithButton placeholder="Message Ivatech" />
          
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-700 mr-2">Complexity</span>
            <span className="text-sm font-semibold text-gray-700">Moderate</span>
            <svg className="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83333 5H14.1667C14.6269 5 15 5.37308 15 5.83333V14.1667C15 14.6269 14.6269 15 14.1667 15H5.83333C5.37308 15 5 14.6269 5 14.1667V5.83333C5 5.37308 5.37308 5 5.83333 5Z" stroke="#335CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 5L15 15" stroke="#335CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 5L5 15" stroke="#335CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationalFlowsPage;
