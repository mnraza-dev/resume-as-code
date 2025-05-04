const FeatureHighlights = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold mb-4">Customizable Templates</h3>
              <p className="text-sm text-gray-600">
                Personalize your resume with pre-built templates or create your own from scratch.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold mb-4">Instant Feedback</h3>
              <p className="text-sm text-gray-600">
                View real-time updates of your resume as you edit the JSON. No more guesswork.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-2xl font-semibold mb-4">Fast PDF Export</h3>
              <p className="text-sm text-gray-600">
                Download your resume as a high-quality PDF instantly. No server-side processing required.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureHighlights;