// src/components/templates/Template3.jsx
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const Template3 = () => {
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
    <div className="p-6 bg-emerald-50 text-gray-800 rounded-md font-sans max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold text-emerald-600">{name}</h1>
      <p className="italic">{title}</p>
      <div className="text-sm text-gray-600 mt-2">
        <p>📧 {email}</p>
        <p>📍 {location}</p>
        <p>📞 {phone}</p>
      </div>

      <div className="my-4 border-t border-emerald-300" />

      {/* Summary */}
      {summary && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-emerald-500">Summary</h2>
          <p className="text-sm text-gray-700">{summary}</p>
        </section>
      )}

      {/* Work Experience */}
      {experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-emerald-500">Work Experience</h2>
          {experience.map((job, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-semibold">
                {job.title} – {job.company}
              </p>
              <p className="text-sm text-gray-500">
                {job.duration} | {job.location}
              </p>
              <ul className="list-disc ml-5 text-sm text-gray-700">
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
          <h2 className="text-lg font-semibold text-emerald-500">Education</h2>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-medium">
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

export default Template3;
