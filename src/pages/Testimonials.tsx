const Testimonials = () => {
    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Users Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <p className="text-lg italic text-gray-400 mb-4">"This tool made it so easy to create a beautiful resume! The live preview and JSON editing is a game changer."</p>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <p className="text-lg italic text-gray-400 mb-4">"I love the fact that I can control the structure of my resume with JSON. It's so much faster and more flexible!"</p>
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Testimonials;
  