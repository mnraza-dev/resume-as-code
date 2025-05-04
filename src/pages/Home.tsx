import React, { useRef, useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import ResumePreview from '../components/ResumePreview';
import PrintableResume from '../components/PrintableResume';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useReactToPrint } from 'react-to-print';
const Home: React.FC = () => {
  const [jsonData, setJsonData] = useState(`{
  "name": "MN Raza",
  "title": "Senior Frontend Developer",
  "summary": "Frontend engineer with 5+ years of experience building scalable web apps using React, TypeScript, and modern UI frameworks. Passionate about performance, accessibility, and pixel-perfect design.",
  "location": "Bangalore, India",
  "email": "aarav.mehta@example.com",
  "phone": "+91-7839123456",
  "linkedin": "https://linkedin.com/in/aaravmehta",
  "github": "https://github.com/aarav-mehta",
  "skills": [
    "React",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Redux",
    "GraphQL",
    "Jest",
    "Cypress",
    "Figma",
    "Webpack"
  ],
  "achievements": [
    "Increased monthly active users by 23% by improving UX and reducing load time across product pages",
    "Published an open-source Tailwind-based resume builder with 500+ GitHub stars"],
  "experience": [
    {
      "company": "Zeta Tech",
      "role": "Senior Frontend Engineer",
      "duration": "Jan 2022 – Present",
      "location": "Remote",
      "description": [
        "Led the revamp of a complex internal dashboard using Next.js and Tailwind, improving performance by 40%",
        "Collaborated with UX team to build a reusable component library in Storybook",
        "Mentored 3 junior devs, conducting weekly code reviews and pair programming sessions"
      ]
    },
    {
      "company": "Razorpay",
      "role": "Frontend Developer",
      "duration": "Jul 2019 – Dec 2021",
      "location": "Bangalore, India",
      "description": [
        "Developed user-facing modules for the merchant portal with React and Redux",
        "Optimized Lighthouse performance scores from 68 to 95+ across key pages",
        "Integrated real-time analytics tracking via Segment and Mixpanel"
      ]
    }
  ],
  "education": [
    {
      "institution": "National Institute of Technology, Karnataka",
      "degree": "B.Tech in Computer Science",
      "year": "2015 – 2019"
    }
  ],
  "certifications": [
    {
      "name": "Frontend Developer Career Path",
      "issuer": "Frontend Masters",
      "year": "2022"
    },
    {
      "name": "TypeScript Fundamentals",
      "issuer": "Pluralsight",
      "year": "2021"
    }
  ],
  "projects": [
    {
      "name": "DevTrackr",
      "description": "A job application tracking app for developers (React + Firebase + Chakra UI)",
      "url": "https://devtrackr.app"
    },
    {
      "name": "Tailwind Resume",
      "description": "Open-source resume builder powered by TailwindCSS and JSON",
      "url": "https://github.com/aarav-mehta/tailwind-resume"
    }
  ]
}
`);

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'My_Resume',
  });

  return (
    <div className="space-y-6">
      <div className="text-center py-24">
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
        <Button variant={"outline"} size={"lg"} onClick={handlePrint} className='cursor-pointer'>Export as PDF</Button>
      </div>

      {/* Hidden printable content */}
      <div className="hidden">
        <PrintableResume ref={printRef} jsonData={jsonData} />
      </div>
    </div>
  );
};

export default Home;
