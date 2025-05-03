interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  description?: string[];
}

interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

interface ProjectItem {
  name: string;
  description: string;
  url?: string;
}

interface ResumeData {
  name: string;
  title: string;
  summary?: string;
  location?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  skills: string[];
  achievements?: string[];
  experience: ExperienceItem[];
  education?: EducationItem[];
  certifications?: CertificationItem[];
  projects?: ProjectItem[];
}

interface ResumePreviewProps {
  jsonData: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ jsonData }) => {
  const resume: ResumeData = JSON.parse(jsonData);

  return (
    <div className="bg-gray-800 text-gray-300 p-8 rounded-lg overflow-y-auto max-h-[90vh]">
      <h1 className="text-3xl font-bold">{resume.name}</h1>
      <h2 className="text-xl text-gray-400">{resume.title}</h2>
      {resume.summary && <p className="mt-2 text-gray-300">{resume.summary}</p>}

      <section className="mt-4">
        <h3 className="text-xl font-semibold">Skills</h3>
        <ul className="flex flex-wrap gap-2 leading-4">
          {resume.skills.map((skill, index) => (
            <li key={index}>{skill},</li>
          ))}
        </ul>
      </section>
      {resume.achievements && (
        <section className="mt-4">
          <h3 className="text-xl font-semibold">Achievements</h3>
          <ul className="list-disc ml-6">
            {resume.achievements.map((ach, index) => (
              <li key={index}>{ach}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-4">
        <h3 className="text-xl font-semibold">Experience</h3>
        {resume.experience.map((exp, index) => (
          <div key={index} className="mt-2">
            <p className="text-lg font-medium">
              {exp.role} @ {exp.company}
            </p>
            <p className="text-sm text-gray-400">
              {exp.duration} {exp.location ? ` | ${exp.location}` : ''}
            </p>
            {exp.description && (
              <ul className="list-disc ml-6 text-sm text-gray-300">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {resume.education && (
        <section className="mt-4">
          <h3 className="text-xl font-semibold">Education</h3>
          {resume.education.map((edu, index) => (
            <div key={index}>
              <p>{edu.degree} - {edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.year}</p>
            </div>
          ))}
        </section>
      )}

      {resume.certifications && (
        <section className="mt-4">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="list-disc ml-6">
            {resume.certifications.map((cert, index) => (
              <li key={index}>
                {cert.name} - {cert.issuer} ({cert.year})
              </li>
            ))}
          </ul>
        </section>
      )}

      {resume.projects && (
        <section className="mt-4">
          <h3 className="text-xl font-semibold">Projects</h3>
          <ul className="list-disc ml-6">
            {resume.projects.map((proj, index) => (
              <li key={index}>
                <strong>{proj.name}</strong>: {proj.description}
                {proj.url && (
                  <a
                    href={proj.url}
                    className="ml-2 text-blue-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
