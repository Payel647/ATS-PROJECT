import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Add horizontal padding with px-4 */}
      <div className="w-full flex items-center justify-between h-16 px-4 md:px-8">
        
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          Resume Checker
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="/login" className="text-gray-600 hover:text-blue-500">Login</a>
          <a href="/signup" className="text-gray-600 hover:text-blue-500">Sign Up</a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden w-full bg-white shadow-md px-4 pb-4">
          <a href="/" className="block py-2 text-gray-600 hover:text-blue-500">Home</a>
          <a href="/login" className="block py-2 text-gray-600 hover:text-blue-500">Login</a>
          <a href="/signup" className="block py-2 text-gray-600 hover:text-blue-500">Sign Up</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
