import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import FileGallery from './components/FileGallery';
import Header from './components/Header';
import Modal from './components/Modal';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar';

const files = [
  // Non-Domain Images
  { id: 1, name: 'CentOS 7 - GUI', description: 'Automates deployment of CentOS 7 VM with GUI, including network config and final reboot.', type: 'non-domain', os: 'CentOS 7', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 2, name: 'CentOS 7 - Minimal', description: 'Minimal installation of CentOS 7 VM.', type: 'non-domain', os: 'CentOS 7', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 3, name: 'Ubuntu 18.04 - GUI', description: 'Ubuntu 18.04 VM with GUI for non-domain use.', type: 'non-domain', os: 'Ubuntu 18.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 4, name: 'Ubuntu 18.04 - Minimal', description: 'Minimal installation of Ubuntu 18.04 VM.', type: 'non-domain', os: 'Ubuntu 18.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 5, name: 'Ubuntu 20.04 - GUI', description: 'Ubuntu 20.04 VM with GUI for non-domain use.', type: 'non-domain', os: 'Ubuntu 20.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 6, name: 'Ubuntu 20.04 - Minimal', description: 'Minimal installation of Ubuntu 20.04 VM.', type: 'non-domain', os: 'Ubuntu 20.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 7, name: 'Ubuntu 22.04 - GUI', description: 'Ubuntu 22.04 VM with GUI for non-domain use.', type: 'non-domain', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 8, name: 'Ubuntu 22.04 - Minimal', description: 'Minimal installation of Ubuntu 22.04 VM.', type: 'non-domain', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 9, name: 'Ubuntu 22.04 - Developer', description: 'Developer edition of Ubuntu 22.04 VM for non-domain use.', type: 'non-domain', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 10, name: 'Windows 10 Pro', description: 'Windows 10 Pro VM for non-domain environments.', type: 'non-domain', os: 'Windows 10 Professional', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 11, name: 'Windows Server 2019 Datacenter - Core', description: 'Windows Server 2019 Datacenter Core VM for non-domain environments.', type: 'non-domain', os: 'Windows Server 2019 Datacenter', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 12, name: 'Windows Server 2019 Datacenter - Desktop Experience', description: 'Windows Server 2019 Datacenter Desktop Experience VM for non-domain environments.', type: 'non-domain', os: 'Windows Server 2019 Datacenter', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 13, name: 'Windows Server 2022 Datacenter - Core', description: 'Windows Server 2022 Datacenter Core VM for non-domain environments.', type: 'non-domain', os: 'Windows Server 2022 Datacenter', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 14, name: 'Windows Server 2022 Datacenter - Desktop Experience', description: 'Windows Server 2022 Datacenter Desktop Experience VM for non-domain environments.', type: 'non-domain', os: 'Windows Server 2022 Datacenter', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 15, name: 'Windows Server 2022 Datacenter - Active Directory', description: 'Windows Server 2022 Datacenter Desktop Experience VM with Active Directory for non-domain environments.', type: 'non-domain', os: 'Windows Server 2022 Datacenter', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },

  // Domain Images
  { id: 16, name: 'CentOS 7 - Minimal', description: 'Minimal installation of CentOS 7 VM for domain environments.', type: 'domain', os: 'CentOS 7', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 17, name: 'Ubuntu 18.04 - Minimal', description: 'Minimal installation of Ubuntu 18.04 VM for domain environments.', type: 'domain', os: 'Ubuntu 18.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 18, name: 'Ubuntu 20.04 - Minimal', description: 'Minimal installation of Ubuntu 20.04 VM for domain environments.', type: 'domain', os: 'Ubuntu 20.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 19, name: 'Ubuntu 22.04 - Minimal', description: 'Minimal installation of Ubuntu 22.04 VM for domain environments.', type: 'domain', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 20, name: 'Windows 10 Pro', description: 'Windows 10 Pro VM for domain environments.', type: 'domain', os: 'Windows 10 Professional', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 21, name: 'Windows Server 2019 Datacenter - Core', description: 'Windows Server 2019 Datacenter Core VM for domain environments.', type: 'domain', os: 'Windows Server 2019 Datacenter', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 22, name: 'Windows Server 2019 Datacenter - Desktop Experience', description: 'Windows Server 2019 Datacenter Desktop Experience VM for domain environments.', type: 'domain', os: 'Windows Server 2019 Datacenter', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 23, name: 'Windows Server 2022 Datacenter - Core', description: 'Windows Server 2022 Datacenter Core VM for domain environments.', type: 'domain', os: 'Windows Server 2022 Datacenter', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 24, name: 'Windows Server 2022 Datacenter - Desktop Experience', description: 'Windows Server 2022 Datacenter Desktop Experience VM for domain environments.', type: 'domain', os: 'Windows Server 2022 Datacenter', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },

  // Community Images
  { id: 25, name: 'Ubuntu 20.04 - OpenPLCv3', description: 'Minimal installation of Ubuntu 20.04 VM for non-domain environments with OpenPLC installed.', type: 'community', os: 'Ubuntu 20.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 26, name: 'Ubuntu 22.04 - Docker and Docker Compose', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Docker & Docker Compose installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 27, name: 'Windows 10 Pro - FactoryIO', description: 'Windows 10 Professional with FactoryIO and custom scene installed.', type: 'community', os: 'Windows 10 Professional', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 28, name: 'Kali 2024.1', description: 'Kali Linux 2024.1 VM image.', type: 'community', os: 'Kali 2024.1', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 29, name: 'Ubuntu 22.04 - Gitea Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Gitea installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 30, name: 'Ubuntu 22.04 - Jellyfin Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Jellyfin installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 31, name: 'Ubuntu 22.04 - Uptime Kuma Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Uptime Kuma installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 32, name: 'Ubuntu 22.04 - Mealie Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Mealie installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 33, name: 'Ubuntu 22.04 - Wordpress Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Wordpress installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 34, name: 'Ubuntu 22.04 - Linkstack Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Linkstack installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 35, name: 'Ubuntu 22.04 - Ghost Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Ghost installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 36, name: 'Ubuntu 22.04 - Odoo Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Odoo installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 37, name: 'Ubuntu 22.04 - Budibase Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Budibase installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
  { id: 38, name: 'Ubuntu 22.04 - Noodl Cloud Service Container', description: 'Minimal installation of Ubuntu 22.04 VM for non-domain environments with Noodl Cloud Service installed.', type: 'community', os: 'Ubuntu 22.04', size: 'N/A', lastModified: 'N/A', author: 'blink-zero' },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  const [osFilter, setOsFilter] = useState('All');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredFiles = files.filter(file =>
    (file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    file.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (activeTab === 'All' || file.type === activeTab.toLowerCase()) &&
    (osFilter === 'All' || file.os === osFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <FilterBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          osFilter={osFilter}
          setOsFilter={setOsFilter}
        />
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search deployment files..."
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={20} />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-8 transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Deployment Files</h2>
          <FileGallery files={filteredFiles} onFileClick={setSelectedFile} />
        </div>
      </main>
      <Footer />
      {selectedFile && (
        <Modal file={selectedFile} onClose={() => setSelectedFile(null)} darkMode={darkMode} />
      )}
    </div>
  );
}

export default App;