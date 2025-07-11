import Sidebar from "../components/Sidebar";
import ResumePreview from "../components/ResumePreview";

const PreviewPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-black min-h-screen">
        <ResumePreview />
      </main>
    </div>
  );
};

export default PreviewPage;
