import React from "react";
import { Header } from "@/components/Header";
import { Link, useNavigate } from "react-router-dom";
interface MessageProps {
  isUser: boolean;
  content: string;
}
const Message: React.FC<MessageProps> = ({
  isUser,
  content
}) => {
  return <div className={`w-full max-w-[900px] mb-6 ${isUser ? 'self-end' : 'self-start'}`}>
      <div className={`p-4 rounded-lg ${isUser ? 'bg-[#E8F3FF]' : 'bg-[#F0F9FF]'}`}>
        <p className="text-[#242424] text-base">{content}</p>
      </div>
    </div>;
};
const ChatPrompt: React.FC<{
  question: string;
}> = ({
  question
}) => {
  return <div className="w-full max-w-[900px] border border-gray-200 rounded-lg mb-6">
      <div className="p-4 bg-gray-50 rounded">
        <p className="text-[#242424] text-base">{question}</p>
      </div>
    </div>;
};
const ProgressIndicator: React.FC = () => {
  return <Link to="/scope"><div className="w-full max-w-[900px] flex items-center border border-[#9370DB] rounded-lg p-6 mb-6 bg-slate-50">
      <div className="w-8 h-8 mr-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L19.2411 12.7589L28 16L19.2411 19.2411L16 28L12.7589 19.2411L4 16L12.7589 12.7589L16 4Z" fill="#9370DB" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-base text-[#242424]">Generating instructions to build a chatbot for healthcare</p>
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-[#9370DB] to-[#7B68EE]"></div>
        </div>
      </div>
    </div></Link>
};
const ChatPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSendMessage = () => {
    navigate('/scope');
  };
  return <div className="max-w-none flex flex-col w-full bg-white min-h-screen">
      <Header />
      <main className="flex flex-col items-center bg-[#F2BFA4] px-6 md:px-12 lg:px-36 py-6">
        <div className="flex flex-col w-full max-w-[1054px]">
          <div className="font-semibold text-xl text-[#242424] mb-4">
            What would you like to build?
          </div>
          
          <div className="flex w-full bg-white p-3 rounded-[20px] mb-4">
            <div className="flex items-center w-full bg-neutral-50 pl-6 pr-3 py-2 rounded-2xl">
              <input type="text" placeholder="Type your message here" className="flex-1 text-lg text-[#242424] bg-transparent border-none outline-none" defaultValue="I want to build a chatbot for healthcare professionals to track progress of patients in clinical trials. I am more familiar with AWS." />
              <button onClick={handleSendMessage} className="flex items-center justify-center rounded p-1.5 text-[#335CCC]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.72363 2.05279C2.54771 1.96483 2.33657 1.98818 2.18412 2.11244C2.03167 2.2367 1.96623 2.4388 2.0169 2.62884L3.51498 8.24662C3.56554 8.43622 3.72234 8.57872 3.9159 8.61098L10.7704 9.7534C11.0489 9.79982 11.0489 10.2002 10.7704 10.2466L3.9159 11.389C3.72234 11.4213 3.56554 11.5638 3.51498 11.7534L2.0169 17.3712C1.96623 17.5612 2.03167 17.7633 2.18412 17.8876C2.33657 18.0118 2.54771 18.0352 2.72363 17.9472L17.7236 10.4472C17.893 10.3625 18 10.1894 18 10C18 9.81062 17.893 9.63749 17.7236 9.55279L2.72363 2.05279Z" fill="#335CCC" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="w-full flex flex-col items-center space-y-6 py-8">
            <Message isUser={true} content="I want to build a chatbot for healthcare professionals to track progress of patients in clinical trials. I am more familiar with AWS." />
            
            <ChatPrompt question="What specific functionalities do you need the chatbot to have?" />
            
            <Message isUser={true} content="The chatbot should support tasks such as symptom-checking, automated patient intake, remote monitoring of chronic conditions, and medication reminders" />
            
            <ChatPrompt question="Are there any data security and compliance requirements?" />
            
            <Message isUser={true} content="Yes, the chatbot must comply with HIPAA regulations to ensure the security and privacy of patient data" />
            
            <Message isUser={true} content="Yes, the chatbot must comply with HIPAA regulations to ensure the security and privacy of patient data" />
            
            <ProgressIndicator />
          </div>
        </div>
      </main>
    </div>;
};
export default ChatPage;