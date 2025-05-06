
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChatPage from "./pages/ChatPage";
import ScopePage from "./pages/ScopePage";
import ScopeDefinitionPage from "./pages/ScopeDefinitionPage";
import RegulatoryCompliancePage from "./pages/RegulatoryCompliancePage";
import ConversationalFlowsPage from "./pages/ConversationalFlowsPage";
import TechnologyStackPage from "./pages/TechnologyStackPage";
import BuildChatbotPage from "./pages/BuildChatbotPage";
import DeployChatbotPage from "./pages/DeployChatbotPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/scope" element={<ScopePage />} />
            <Route path="/scope-definition" element={<ScopeDefinitionPage />} />
            <Route path="/regulatory-compliance" element={<RegulatoryCompliancePage />} />
            <Route path="/conversational-flows" element={<ConversationalFlowsPage />} />
            <Route path="/technology-stack" element={<TechnologyStackPage />} />
            <Route path="/build-chatbot" element={<BuildChatbotPage />} />
            <Route path="/deploy-chatbot" element={<DeployChatbotPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
