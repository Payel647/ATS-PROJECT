// src/components/templates/Template1.jsx
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const Template1 = () => {
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
    skills,
  } = resumeData;

  return (
    <div className="p-8 font-sans bg-white shadow-lg rounded-lg w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center border-b pb-4">
        <h1 className="text-3xl font-bold text-indigo-600">{name}</h1>
        <p className="text-lg text-gray-600">{title}</p>
        <div className="text-sm mt-2 text-gray-500 space-x-3">
          <span>📍 {location}</span>
          <span>📧 {email}</span>
          <span>📞 {phone}</span>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-indigo-500 mb-2">
            Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-indigo-500 mb-2">
            Experience
          </h2>
          {experience.map((job, idx) => (
            <div key={idx} className="mb-4">
              <p className="font-semibold">{job.title} – {job.company}</p>
              <p className="text-sm text-gray-500">{job.duration} | {job.location}</p>
              <ul className="list-disc ml-6 mt-1 text-sm text-gray-700">
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
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-indigo-500 mb-2">
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">{edu.degree} – {edu.school}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-indigo-500 mb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 text-sm text-white">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-emerald-500 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Template1;
