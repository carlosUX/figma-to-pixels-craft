import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { PhaseNavigation } from "@/components/navigation/PhaseNavigation";
import { InputWithButton } from "@/components/ui/InputWithButton";
const ScopePage: React.FC = () => {
  const navigate = useNavigate();
  const [functionalitiesInput, setFunctionalitiesInput] = useState("");

  // Checkbox states
  const [appointmentScheduling, setAppointmentScheduling] = useState(false);
  const [medicalInformation, setMedicalInformation] = useState(false);
  const [patientFollowUps, setPatientFollowUps] = useState(false);
  const [patientsChecked, setPatientsChecked] = useState(false);
  const [providersChecked, setProvidersChecked] = useState(false);
  const [staffChecked, setStaffChecked] = useState(false);
  const handleNext = () => {
    // Navigate to the next page or process the form
    navigate('/regulatory-compliance');
  };
  return <div className="max-w-none flex flex-col w-full bg-white min-h-screen">
      <Header />
      
      {/* Moved "What would you like to build?" section here */}
      <div className="w-full px-6 md:px-12 lg:px-36 py-4 bg-zinc-400">
        <div className="flex flex-col w-full max-w-[1054px] mx-auto">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">What would you like to build?</h3>
          
          <div className="flex w-full bg-white p-3 rounded-[20px]">
            <div className="flex items-center w-full bg-neutral-50 pl-6 pr-3 py-2 rounded-2xl">
              <input type="text" placeholder="Message Ivatech" className="flex-1 text-lg text-[#242424] bg-transparent border-none outline-none" defaultValue="" />
              <button className="flex items-center justify-center rounded p-1.5 text-[#335CCC]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.72363 2.05279C2.54771 1.96483 2.33657 1.98818 2.18412 2.11244C2.03167 2.2367 1.96623 2.4388 2.0169 2.62884L3.51498 8.24662C3.56554 8.43622 3.72234 8.57872 3.9159 8.61098L10.7704 9.7534C11.0489 9.79982 11.0489 10.2002 10.7704 10.2466L3.9159 11.389C3.72234 11.4213 3.56554 11.5638 3.51498 11.7534L2.0169 17.3712C1.96623 17.5612 2.03167 17.7633 2.18412 17.8876C2.33657 18.0118 2.54771 18.0352 2.72363 17.9472L17.7236 10.4472C17.893 10.3625 18 10.1894 18 10C18 9.81062 17.893 9.63749 17.7236 9.55279L2.72363 2.05279Z" fill="#335CCC" />
                </svg>
              </button>
            </div>
          </div>
          
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
        <div className="flex flex-col w-full max-w-[1054px] items-center">
          {/* User prompt display */}
          <div className="text-center my-6 text-gray-700 text-lg max-w-3xl">
            I want to build a chatbot for healthcare professionals to track progress of patients in clinical trials. I am more familiar with AWS.
          </div>
           {/* Phase Navigation */}
           <div className="w-full max-w-[1054px] mb-8">
            <PhaseNavigation />
          </div>
          
          {/* Main content */}
          <div className="w-full max-w-[1054px] flex flex-col gap-8 mb-8">
            <div className="text-left">
              <p className="text-gray-700 mb-4">
                Identify the kind of healthcare chatbot you are going to build and for what audience. Determine the specific functionalities and user needs.
              </p>
              
              <Input placeholder="Enter Functionalities" className="w-full p-4 border border-gray-300 rounded-lg mb-6" value={functionalitiesInput} onChange={e => setFunctionalitiesInput(e.target.value)} />
              
              <p className="text-gray-700 mb-2">
                For example, decide whether the chatbot will assist with appointment scheduling, provide medical information, or support patient follow-ups.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="appointment" checked={appointmentScheduling} onCheckedChange={checked => setAppointmentScheduling(checked === true)} />
                  <label htmlFor="appointment" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Appointment scheduling
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="medical" checked={medicalInformation} onCheckedChange={checked => setMedicalInformation(checked === true)} />
                  <label htmlFor="medical" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Medical information
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="followups" checked={patientFollowUps} onCheckedChange={checked => setPatientFollowUps(checked === true)} />
                  <label htmlFor="followups" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Support patient follow-ups
                  </label>
                </div>
              </div>
              
              <p className="text-gray-700 mb-2">
                Understanding the target audience, such as patients, healthcare providers, or administrative staff, will help tailor the chatbot's features and interactions to meet their specific needs.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center space-x-2">
                  <Checkbox id="patients" checked={patientsChecked} onCheckedChange={checked => setPatientsChecked(checked === true)} />
                  <label htmlFor="patients" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    patients
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="providers" checked={providersChecked} onCheckedChange={checked => setProvidersChecked(checked === true)} />
                  <label htmlFor="providers" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    healthcare providers
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="staff" checked={staffChecked} onCheckedChange={checked => setStaffChecked(checked === true)} />
                  <label htmlFor="staff" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    administrative staff
                  </label>
                </div>
              </div>
              
              <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                Next <span className="ml-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer section removed from here */}
    </div>;
};
export default ScopePage;