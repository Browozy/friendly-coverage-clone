
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
      
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a link element to trigger the download
      const link = document.createElement('a');
      
      // Set the download source based on the requested file type
      link.href = isFullProject ? '/wiseinsure-project.zip' : '/static-site.zip';
      link.download = isFullProject ? 'wiseinsure-project.zip' : 'wiseinsure-static.zip';
      
      // Append to the document body and trigger the download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      
      toast({
        title: isFullProject ? "Project download initiated!" : "Static site download initiated!",
        description: isFullProject 
          ? "Your complete project is being downloaded." 
          : "Your static site is being downloaded.",
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
