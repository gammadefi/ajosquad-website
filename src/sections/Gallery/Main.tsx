import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import GalleryComponent from './GalleryComponent';
import Pagination from '../../components/Pagination';

interface TabProps {
    tabs: string[];
    Tab: string;
    onChange: (activeTab: string) => void;
}

const Main = () => {
    const router = useRouter();
    const { query } = router;

    const [galleryItems, setGalleryItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1)

    const filterFromQuery: any = query.filterBy || 'All';
    const pageFromQuery = query.page ? parseInt(query.page as string, 10) : 1;

    // Fetch gallery items based on filter and page
    useEffect(() => {
        const fetchGalleryItems = async () => {
            setIsLoading(true);

            const filterBy = filterFromQuery !== 'All' ? filterFromQuery : '';
            const page = pageFromQuery;

            try {
                const response = await axios.get(
                    `https://ajosquad-backend.onrender.com/gallery?page=${page}&limit=9&tags=${filterBy}`
                );
                setGalleryItems(response.data.data); // Set gallery items from API response
                setTotalPages(response.data.totalPages)
            } catch (error) {
                console.error('Error fetching gallery items:', error);
                setGalleryItems([]); // Clear items on error
            } finally {
                setIsLoading(false);
            }
        };

        fetchGalleryItems();
    }, [filterFromQuery, pageFromQuery]); // Refetch data when query parameters change

    // Handle page change by updating the URL
    const handlePageChange = (newPage: number) => {
        router.push({
            pathname: '/gallery',
            query: { ...query, page: newPage },
        }, undefined, { scroll: false }); // Prevent scrolling to the top
    };
    // Handle filter change by updating the URL
    const handleFilterChange = (newFilter: string) => {
        setIsLoading(true)
        router.push({
            pathname: '/gallery',
            query: { filterBy: newFilter, page: 1 }, // Reset to page 1 when filter changes
        }, undefined, { scroll: false }); // Prevent scrolling to the top
    };

    return (
        <div className='w-full py-8 md:p-24 px-3 md:px-8 lg:px-[96px] h-full'>
            <div className="w-full custom-scrollbar overflow-hidden hover:overflow-x-auto " >
                <Tab
                    Tab={filterFromQuery}
                    tabs={["All", "Financial Education", "Real estate Portfolio", "General information"]}
                    onChange={handleFilterChange}
                />
            </div>

            <div className='py-8 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6'>
                {isLoading ? (
                    <div className='col-span-3 h-[40vh] flex justify-center items-center'>
                        <img src='/assets/logo.svg' className='animate-pulse' alt='Loading...' />
                    </div>
                ) : (
                    galleryItems.length > 0 ? galleryItems.map((item, index) => (
                        <GalleryComponent galleryItem={item} key={index} />
                    )) :
                        <div className='flex col-span-3 justify-center items-center gap-5 max-w-[600px] flex-col w-full mx-auto '>
                            <img src='/assets/no-gallery.svg' className='mx-auto md:w-[264px] w-[150px] h-auto' />

                            <h3 className='tex-center capitalize font-semibold md:text-3xl text-xl'>{filterFromQuery === "All" ? "No video Yet" : `no video found for "${filterFromQuery}"`}</h3>
                            <p className='font-light text-center'>Our video gallery is currently empty. Explore our blog for more information and stay tuned for upcoming video content.</p>

                        </div>
                )}
            </div>

            {/* Pagination Logic */}
            {(!isLoading && galleryItems.length > 0)  && <div className='flex justify-end mt-8'>

                <Pagination totalPages={totalPages} />
            </div>}
        </div>
    );
};

const Tab: React.FC<TabProps> = ({ tabs, onChange, Tab }) => {
    const [activeTab, setActiveTab] = useState(Tab || tabs[0]);

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
                    className={`px-4 py-2 whitespace-nowrap transition-all duration-300 ease-in-out rounded ${activeTab === tab
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

export default Main;
