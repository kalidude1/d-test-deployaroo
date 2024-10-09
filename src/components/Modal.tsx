import React from 'react';
import { X, FileArchive, Calendar, User, HardDrive, Tag } from 'lucide-react';

interface File {
  id: number;
  name: string;
  description: string;
  type: string;
  os: string;
  size: string;
  lastModified: string;
  author: string;
}

interface ModalProps {
  file: File;
  onClose: () => void;
  darkMode: boolean;
}

const Modal: React.FC<ModalProps> = ({ file, onClose, darkMode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
        <div className="flex justify-between items-center p-6 bg-gray-50 dark:bg-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{file.name}</h2>
          <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center mb-6">
            <FileArchive className="text-primary" size={80} />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{file.description}</p>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex items-center">
              <HardDrive className="text-primary mr-3" size={20} />
              <span className="text-gray-700 dark:text-gray-200">{file.size}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="text-primary mr-3" size={20} />
              <span className="text-gray-700 dark:text-gray-200">{file.lastModified}</span>
            </div>
            <div className="flex items-center">
              <User className="text-primary mr-3" size={20} />
              <span className="text-gray-700 dark:text-gray-200">{file.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="text-primary mr-3" size={20} />
              <span className="text-gray-700 dark:text-gray-200">{file.type}</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${file.type === 'non-domain' ? 'bg-green-200 text-green-800' : file.type === 'domain' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
              {file.type}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${file.os === 'windows' ? 'bg-indigo-200 text-indigo-800' : 'bg-red-200 text-red-800'}`}>
              {file.os}
            </span>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 flex justify-end">
          <button
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;