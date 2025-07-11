import { LayoutDashboard, User, FileText, Settings, Bell } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-primary text-white w-64 h-screen p-6 flex flex-col gap-6 shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">AI Resume Builder</h1>
      <nav className="space-y-3">
        <SidebarItem icon={<LayoutDashboard />} label="Dashboard" />
        <SidebarItem icon={<User />} label="Personal Info" />
        <SidebarItem icon={<FileText />} label="Resume Templates" />
        <SidebarItem icon={<Bell />} label="Notifications" badge="2" />
        <SidebarItem icon={<Settings />} label="Settings" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label, badge }) => (
  <div className="flex items-center justify-between hover:bg-secondary hover:text-white px-3 py-2 rounded-lg cursor-pointer transition">
    <div className="flex items-center gap-3">
      {icon}
      <span>{label}</span>
    </div>
    {badge && (
      <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">{badge}</span>
    )}
  </div>
);

export default Sidebar;
