import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import ResumePreview from '../components/ResumePreview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  const [jsonData, setJsonData] = useState(`{
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
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Build Your Resume from JSON</h1>
        <p className="text-lg text-muted-foreground">Developer-friendly. Themeable. Exportable.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Your JSON</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeEditor code={jsonData} onChange={setJsonData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResumePreview jsonData={jsonData} />
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button>Export as PDF</Button>
      </div>
    </div>
  );
};

export default Home;
