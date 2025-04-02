
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const DownloadStatic = ({ isFullProject = false }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      toast({
        title: isFullProject ? "Packaging project files" : "Generating static files",
        description: "Please wait while we prepare your download...",
      });
      
      // In a real implementation, this would trigger a server-side build process
      // For demo purposes, we'll just simulate a delay and download a pre-built zip
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a link element
      const link = document.createElement('a');
      
      // In a real implementation, this would be dynamically generated
      // For demonstration, we'll just point to a static file
      link.href = isFullProject ? '/wiseinsure-project.zip' : '/static-site.zip';
      link.download = isFullProject ? 'wiseinsure-project.zip' : 'wiseinsure-static.zip';
      
      // Append to the document body
      document.body.appendChild(link);
      
      // Programmatically click the link
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      
      toast({
        title: isFullProject ? "Project download initiated!" : "Download initiated!",
        description: isFullProject ? "Your complete project is being downloaded." : "Your static site is being downloaded.",
        variant: "default",
      });
    } catch (error) {
      console.error('Download failed:', error);
      toast({
        title: "Download failed",
        description: "There was an error generating your download.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      onClick={handleDownload} 
      className="bg-insurance-primary hover:bg-insurance-primary/90"
      disabled={isGenerating}
    >
      <Download className="mr-2 h-4 w-4" />
      {isGenerating 
        ? (isFullProject ? 'Packaging...' : 'Generating...') 
        : (isFullProject ? 'Download Complete Project' : 'Download Static Site')
      }
    </Button>
  );
};

export default DownloadStatic;
