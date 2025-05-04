import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
            <>
            <div className="relative text-center py-20 bg-gradient-to-r from-primary via-indigo-600 to-indigo-700 text-white rounded-xl shadow-lg mb-12">
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
            <div className="relative text-center py-20 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-xl shadow-lg mb-12">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Join the Community</h2>
              <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">Follow us on social media for updates, tips, and inspiration directly from the community.</p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="mt-4 hover:bg-secondary-dark transition-all duration-200 ease-in-out"
              >
                Follow Us
              </Button>
            </div>
            <div className="relative text-center py-20 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white rounded-xl shadow-lg mb-12">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Need Help?</h2>
              <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">Check out our documentation or contact support for any questions you may have.</p>
              <Button 
                variant="outline" 
                size="lg" 
                className="mt-4 border-white text-white hover:bg-white hover:text-gray-800 transition-all duration-200 ease-in-out"
              >
                Get Help
              </Button>
            </div>
          </>  
    );
  };
  
  export default CTASection;  