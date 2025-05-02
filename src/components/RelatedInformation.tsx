
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, PieChart, BarChart, Table as TableIcon } from "lucide-react";

export const RelatedInformation: React.FC = () => {
  return (
    <div className="w-full max-w-[1054px] mb-8">
      <h2 className="font-semibold text-xl text-[#242424] mb-4">Related Information</h2>
      
      <Tabs defaultValue="insights" className="w-full">
        <TabsList className="mb-4 bg-white/20">
          <TabsTrigger value="insights" className="flex items-center gap-2">
            <PieChart size={18} />
            <span>Insights</span>
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <TableIcon size={18} />
            <span>Clinical Data</span>
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <FileText size={18} />
            <span>Resources</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="insights" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Patient Enrollment Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#707070]">Total enrolled:</span>
                    <span className="font-medium">248 patients</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707070]">Active participants:</span>
                    <span className="font-medium">187 patients</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707070]">Completion rate:</span>
                    <span className="font-medium">76%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707070]">Dropout rate:</span>
                    <span className="font-medium">8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Trial Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#707070]">Phase 1 completion:</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707070]">Phase 2 completion:</span>
                    <span className="font-medium">63%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707070]">Expected end date:</span>
                    <span className="font-medium">Nov 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#707070]">On schedule:</span>
                    <span className="font-medium text-green-600">Yes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="data" className="w-full">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Patient Data</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient ID</TableHead>
                    <TableHead>Age Group</TableHead>
                    <TableHead>Treatment Group</TableHead>
                    <TableHead>Last Checkup</TableHead>
                    <TableHead>Progress</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>PT-10293</TableCell>
                    <TableCell>45-55</TableCell>
                    <TableCell>Group A</TableCell>
                    <TableCell>Apr 28, 2025</TableCell>
                    <TableCell>On track</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>PT-10305</TableCell>
                    <TableCell>35-45</TableCell>
                    <TableCell>Group B</TableCell>
                    <TableCell>Apr 30, 2025</TableCell>
                    <TableCell>On track</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>PT-10318</TableCell>
                    <TableCell>55-65</TableCell>
                    <TableCell>Group A</TableCell>
                    <TableCell>Apr 29, 2025</TableCell>
                    <TableCell>Needs review</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>PT-10342</TableCell>
                    <TableCell>45-55</TableCell>
                    <TableCell>Group B</TableCell>
                    <TableCell>May 1, 2025</TableCell>
                    <TableCell>On track</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources" className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white/90">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">AWS Healthcare Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>AWS HealthLake</li>
                  <li>AWS HIPAA Compliance Guide</li>
                  <li>Healthcare IoT Solutions</li>
                  <li>Medical Research Cloud</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Clinical Trial Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>FDA Guidelines</li>
                  <li>Patient Tracking Templates</li>
                  <li>Data Security Protocols</li>
                  <li>Compliance Documentation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Chatbot Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>AWS Lex Documentation</li>
                  <li>Healthcare NLP Models</li>
                  <li>HIPAA Chatbot Guidelines</li>
                  <li>Patient Data Integrations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
