import React, { useState } from 'react'

interface TabProps {
    tabs: string[];
    onChange: (activeTab: string) => void;
}

const Main = () => {
    const [filter,setFilter] = useState("")
    return (
        <div className='w-full py-8 md:p-24 px-3 md:px-8 lg:px-[96px] h-full'>

            <div>
                <Tab tabs={["All","Financial Education", " Real estate Portfolio", "General information"]} onChange={(e) =>  setFilter(e)} />
            </div>

        </div>
    )
}

const Tab: React.FC<TabProps> = ({ tabs, onChange }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        onChange(tab); // Trigger the onChange event with the active tab
    };

    return (
        <div className="flex items-center gap-3">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`px-4 py-2 transition-all duration-300 ease-in-out rounded ${activeTab === tab
                            ? 'bg-gradient-to-r from-[#222834] via-[#0066FF] to-[#1EB7CF] text-white'
                            : 'bg-[#F1F1F1] text-black'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};



export default Main