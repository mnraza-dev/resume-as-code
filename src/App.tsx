import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import ResumePreview from './components/ResumePreview';
import Layout from './components/Layout'; 
const App: React.FC = () => {
  const [jsonData, setJsonData] = useState(`
  {
    "name": "Jane Doe",
    "title": "Frontend Developer",
    "skills": ["React", "TypeScript", "TailwindCSS"],
    "experience": [
      {
        "company": "Tech Corp",
        "role": "UI Engineer",
        "duration": "2021 - Present"
      }
    ]
  }`);

  return (
    <Layout>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Build Your Resume from JSON</h1>
        <p className="text-lg text-gray-400">Developer-friendly. Themeable. Exportable.</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Code Editor Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Your JSON</h2>
          <CodeEditor code={jsonData} onChange={setJsonData} />
        </div>
        {/* Live Resume Preview Section */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Live Preview</h2>
          <ResumePreview jsonData={jsonData} />
        </div>
      </main>
    </Layout>
  );
};

export default App;
