
import { BellRing, User } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path === "/") return "PPE Compliance - Executive Dashboard - Report";
    if (path === "/health-monitoring") return "PPE Compliance";
    if (path === "/performance") return "PPE Compliance - Executive Dashboard - Analytics";
    
    return "PPE Compliance";
  };
  
  return (
    <header className="border-b bg-white flex items-center justify-between p-4">
      <h1 className="font-medium flex items-center gap-2">
        <span className="bg-black text-white p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
            <path d="M8 7h6" />
            <path d="M8 11h8" />
            <path d="M8 15h6" />
          </svg>
        </span>
        {getPageTitle()}
      </h1>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellRing size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="h-full w-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
