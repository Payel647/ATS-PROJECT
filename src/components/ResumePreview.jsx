import React, { useState, useContext } from "react"; // ✅ CORRECT
import { ResumeContext } from "../context/ResumeContext";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";


const templates = [
  { name: "Modern", component: <Template1 /> },
  { name: "Classic", component: <Template2 /> },
  { name: "Elegant", component: <Template3 /> },
];

const ResumePreview = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [selected, setSelected] = useState(0);

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle JSON Upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        setResumeData(parsed);
      } catch (err) {
        alert("Invalid JSON file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-6 bg-[#F9FAFB]">
      {/* Input Form */}
      <div className="lg:w-1/3 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold text-indigo-600 mb-4">Edit Details</h2>

        <input
          type="text"
          name="name"
          value={resumeData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border px-3 py-2 mb-2 rounded"
        />
        <input
          type="text"
          name="email"
          value={resumeData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border px-3 py-2 mb-2 rounded"
        />
        <input
          type="text"
          name="phone"
          value={resumeData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full border px-3 py-2 mb-2 rounded"
        />
        <input
          type="text"
          name="location"
          value={resumeData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border px-3 py-2 mb-2 rounded"
        />
        <input
          type="text"
          name="title"
          value={resumeData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border px-3 py-2 mb-2 rounded"
        />

        <label className="block mt-4 mb-2 font-medium text-sm">Upload JSON Resume</label>
        <input type="file" accept="application/JSON" onChange={handleFileUpload} />

        <div className="mt-4">
          <label className="text-sm font-semibold">Choose Template:</label>
          <div className="flex gap-2 mt-2">
            {templates.map((t, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`px-3 py-1 rounded border text-sm ${
                  selected === i
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Live Preview */}
      <div className="lg:w-2/3 p-4 bg-white rounded shadow overflow-auto max-h-[90vh]">
        {templates[selected].component}
      </div>
    </div>
  );
};

export default ResumePreview;
