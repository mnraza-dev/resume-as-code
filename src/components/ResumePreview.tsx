interface ResumeData {
    name: string;
    title: string;
    skills: string[];
    experience: { company: string; role: string; duration: string }[];
  }
  
  interface ResumePreviewProps {
    jsonData: string;
  }
  
  const ResumePreview: React.FC<ResumePreviewProps> = ({ jsonData }) => {
    const resume: ResumeData = JSON.parse(jsonData);
  
    return (
      <div className="bg-gray-800 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold">{resume.name}</h1>
        <h2 className="text-xl text-gray-400">{resume.title}</h2>
        <section className="mt-4">
          <h3 className="text-xl font-semibold">Skills</h3>
          <ul className="list-disc ml-6">
            {resume.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        <section className="mt-4">
          <h3 className="text-xl font-semibold">Experience</h3>
          {resume.experience.map((exp, index) => (
            <div key={index} className="mt-2">
              <p className="text-lg">{exp.role} @ {exp.company}</p>
              <p className="text-sm text-gray-400">{exp.duration}</p>
            </div>
          ))}
        </section>
      </div>
    );
  };
  
  export default ResumePreview;  