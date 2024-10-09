import React from 'react';

interface FilterBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  osFilter: string;
  setOsFilter: (os: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeTab, setActiveTab, osFilter, setOsFilter }) => {
  const tabs = ['All', 'Non-Domain', 'Domain', 'Community'];
  const osTags = ['All', 'Windows', 'Linux'];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md transition-colors duration-300 whitespace-nowrap ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
        {osTags.map((os) => (
          <button
            key={os}
            className={`px-4 py-2 rounded-md transition-colors duration-300 whitespace-nowrap ${
              osFilter === os
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white'
            }`}
            onClick={() => setOsFilter(os)}
          >
            {os}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;