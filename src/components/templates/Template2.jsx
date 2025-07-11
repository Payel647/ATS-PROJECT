// src/components/templates/Template2.jsx
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const Template2 = () => {
  const { resumeData } = useContext(ResumeContext);
  const {
    name,
    title,
    email,
    phone,
    location,
    summary,
    experience,
    education,
  } = resumeData;

  return (
    <div className="p-6 font-serif text-gray-800 bg-white border border-gray-200 shadow-sm max-w-3xl mx-auto">
      <div className="border-b-2 border-sky-500 pb-2 mb-4">
        <h1 className="text-2xl font-bold text-sky-600">{name}</h1>
        <p className="text-md">{title}</p>
        <div className="text-sm space-x-4 text-gray-600">
          <span>📍 {location}</span>
          <span>📧 {email}</span>
          <span>📞 {phone}</span>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-sky-500">Summary</h2>
          <p className="text-sm text-gray-700">{summary}</p>
        </section>
      )}

      {/* Work Experience */}
      {experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-sky-500">Work Experience</h2>
          {experience.map((job, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-semibold">
                {job.title} – {job.company}
              </p>
              <p className="text-sm text-gray-500">
                {job.duration} | {job.location}
              </p>
              <ul className="list-disc ml-6 text-sm text-gray-700">
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-sky-500">Education</h2>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">
                {edu.degree} – {edu.school}
              </p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Template2;
