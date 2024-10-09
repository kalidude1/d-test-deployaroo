import React from 'react';
import { Package, Moon, Sun, Github, Star, GitFork, AlertCircle } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-gradient-to-r from-primary to-blue-500 text-white p-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <Package className="mr-3" size={36} />
            <h1 className="text-3xl font-bold">Deployaroo Images</h1>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/blink-zero/deployaroo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2 transition-colors duration-300 hover:bg-opacity-30"
            >
              <Github size={24} />
              <span className="font-semibold">GitHub</span>
            </a>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star size={18} className="mr-1" />
                <span>1</span>
              </div>
              <div className="flex items-center">
                <GitFork size={18} className="mr-1" />
                <span>1</span>
              </div>
              <div className="flex items-center">
                <AlertCircle size={18} className="mr-1" />
                <span>1</span>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={28} /> : <Moon size={28} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;