
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadStatic from '@/components/DownloadStatic';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Info, AlertTriangle, Download, Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const StaticExport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Project Downloads</h1>
            
            <Tabs defaultValue="static" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="static">Static Site</TabsTrigger>
                <TabsTrigger value="project">Complete Project</TabsTrigger>
              </TabsList>
              
              <TabsContent value="static">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Info className="mr-2 h-5 w-5 text-blue-500" />
                      Static Site Export
                    </CardTitle>
                    <CardDescription>
                      Download a static HTML version of your WiseInsure website for simple hosting.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Convert your WiseInsure website to static HTML, CSS, and JavaScript files that can be hosted 
                      on any web server without requiring Node.js or other backend technologies.
                    </p>
                    
                    <div className="flex justify-center my-6">
                      <DownloadStatic />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      Benefits of Static Export
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Faster page loads with pre-rendered HTML</li>
                      <li>Improved SEO as search engines can easily index content</li>
                      <li>Lower hosting costs - host on affordable static hosting platforms</li>
                      <li>Enhanced security with reduced attack surface</li>
                      <li>Reliable offline browsing capabilities</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="project">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="mr-2 h-5 w-5 text-purple-500" />
                      Complete Project Download
                    </CardTitle>
                    <CardDescription>
                      Download the entire WiseInsure project including all source code and assets.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Get full access to the complete WiseInsure project codebase, including all source files, 
                      components, styles, and assets. Perfect for developers who want to customize or extend 
                      the application.
                    </p>
                    
                    <div className="flex justify-center my-6">
                      <DownloadStatic isFullProject={true} />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                      Development Instructions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>
                        <strong>Download the project zip file</strong> containing the complete codebase
                      </li>
                      <li>
                        <strong>Extract the contents</strong> to your local development environment
                      </li>
                      <li>
                        <strong>Install dependencies</strong> by running <code className="bg-gray-100 p-1 rounded">npm install</code> or <code className="bg-gray-100 p-1 rounded">yarn</code>
                      </li>
                      <li>
                        <strong>Start the development server</strong> with <code className="bg-gray-100 p-1 rounded">npm run dev</code> or <code className="bg-gray-100 p-1 rounded">yarn dev</code>
                      </li>
                      <li>
                        <strong>Build for production</strong> using <code className="bg-gray-100 p-1 rounded">npm run build</code> or <code className="bg-gray-100 p-1 rounded">yarn build</code>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                  Hosting Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 list-decimal pl-5">
                  <li>
                    <strong>Download your preferred file</strong> (static site or full project)
                  </li>
                  <li>
                    <strong>Extract the contents</strong> to your local computer
                  </li>
                  <li>
                    <strong>Upload the extracted files</strong> to your web hosting service:
                    <ul className="list-disc pl-5 mt-2">
                      <li>GitHub Pages</li>
                      <li>Netlify</li>
                      <li>Vercel</li>
                      <li>Amazon S3</li>
                      <li>Any standard web hosting provider</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Configure your domain</strong> to point to your hosting service
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StaticExport;
