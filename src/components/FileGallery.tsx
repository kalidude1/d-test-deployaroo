import React from 'react';
import { FileArchive, User, Tag, Monitor, Download } from 'lucide-react';

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

interface FileGalleryProps {
  files: File[];
  onFileClick: (file: File) => void;
}

const FileGallery: React.FC<FileGalleryProps> = ({ files, onFileClick }) => {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>, file: File) => {
    e.stopPropagation();
    // implement the actual download logic here
    console.log(`Downloading ${file.name}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {files.map((file) => (
        <div
          key={file.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group"
          onClick={() => onFileClick(file)}
        >
          <div className="p-6 flex flex-col items-center">
            <FileArchive className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
            <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-gray-100 mb-2">{file.name}</h3>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
              <User size={16} className="mr-1" />
              <span>{file.author}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${file.type === 'non-domain' ? 'bg-green-200 text-green-800' : file.type === 'domain' ? 'bg-blue-200 text-blue-800' : 'bg-purple-200 text-purple-800'}`}>
                <Tag size={12} className="mr-1" />
                {file.type}
              </span>
              <span className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${file.os === 'windows' ? 'bg-indigo-200 text-indigo-800' : 'bg-red-200 text-red-800'}`}>
                <Monitor size={12} className="mr-1" />
                {file.os}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center line-clamp-2 mb-4">{file.description}</p>
            <button
              className="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
              onClick={(e) => handleDownload(e, file)}
            >
              <Download size={16} className="mr-2" />
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileGallery;