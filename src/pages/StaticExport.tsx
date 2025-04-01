
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DownloadStatic from '@/components/DownloadStatic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Info, AlertTriangle } from 'lucide-react';

const StaticExport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Static Site Export</h1>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="mr-2 h-5 w-5 text-blue-500" />
                  About Static Export
                </CardTitle>
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
            
            <Card className="mb-8">
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
                    <strong>Download the zip file</strong> containing your static website files
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
