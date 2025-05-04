import { Button } from "@/components/ui/button"; // Assuming Button component is already imported

const CallToActionSection = () => {
  return (
    <>
      {/* First Section: Get Started */}
      <div className="relative text-center py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-black text-gray-800 dark:text-white rounded-xl shadow-lg mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Get Started Now</h2>
        <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">Join thousands of developers who have built their resumes with us. Start crafting your perfect resume today!</p>
        <Button 
          variant="default" 
          size="lg" 
          className="mt-4 hover:bg-primary-dark transition-all duration-200 ease-in-out"
        >
          Start Building
        </Button>
 
      </div>

      {/* Second Section: Join the Community */}
      <div className="relative text-center py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-black text-gray-800 dark:text-white rounded-xl shadow-lg mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Join the Community</h2>
        <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">Follow us on social media for updates, tips, and inspiration directly from the community.</p>
       
        <Button 
          variant="default" 
          size="lg" 
          className="mt-4 hover:bg-primary-dark transition-all duration-200 ease-in-out"
        >
          Follow Us
        </Button>
      </div>

      {/* Third Section: Need Help? */}
      <div className="relative text-center py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-black text-gray-800 dark:text-white rounded-xl shadow-lg mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Need Help?</h2>
        <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">Check out our documentation or contact support for any questions you may have.</p>
        <Button 
          variant="default" 
          size="lg" 
          className="mt-4 hover:bg-primary-dark transition-all duration-200 ease-in-out"
        >
          Get Help
        </Button>
      </div>
    </>
  );
};

export default CallToActionSection;
