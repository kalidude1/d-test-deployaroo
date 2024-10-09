import React from 'react';
import { Github, Book } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Deployaroo. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/blink-zero/deployaroo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-500 transition-colors duration-300"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
            <a
              href="https://deployaroo.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-500 transition-colors duration-300"
            >
              <Book size={20} className="mr-2" />
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;