import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import GalleryComponent from './GalleryComponent';
import { fToNow } from '../../utils/formatTime';
import { isEmpty } from '../../utils/functions';
import { FaArrowLeft, FaChevronRight } from 'react-icons/fa6';

const GalleryPage = () => {
    const router = useRouter();
    const { query } = router;
    const [data, setData] = useState<any>({});
    const [related, setRelated] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const pageFromQuery = query.page ? parseInt(query.page as string, 10) : 1;
    const { id }: any = router.query;

    const isVideo = (url: string) => {
        return url.match(/\.(mp4|webm|ogg|mov)$/i);
    };

    // Fetch single gallery item
    const getSingleGallery = async () => {
        try {
            const res = await axios.get(`https://ajosquad-backend.onrender.com/gallery/${id}`);
            setData(res.data?.data);
        } catch (error) {
            console.error('Error fetching single gallery:', error);
        }
    };

    // Fetch related galleries based on tags after the single gallery is fetched
    const getRelatedGallery = async () => {
        const page = pageFromQuery;
        if (data?.tags && data?.tags.length > 0) {
            try {
                const response = await axios.get(
                    `https://ajosquad-backend.onrender.com/gallery?page=${page}&limit=9&tags=${data?.tags[0]}`
                );
                setRelated(response.data.data);
            } catch (error) {
                console.error('Error fetching related gallery items:', error);
            }
        }
    };

    // Fetch single gallery item on initial load or when ID changes
    useEffect(() => {
        if (id) {
            setIsLoading(true);
            getSingleGallery()

        }
    }, [id]);

    // Fetch related gallery items after data (tags) has been set
    useEffect(() => {
        if (!isEmpty(data)) {
            getRelatedGallery().finally(() => setIsLoading(false));;
        }
    }, [data, pageFromQuery]);

    return (
        <div className='w-full py-8 md:pb-20 px-3 md:px-8 lg:px-[96px] h-full'>
            {isLoading ? (
                <div className='w-full flex items-center justify-center h-[50vh] md:h-[70vh]'>
                    <div className='col-span-3 h-[40vh] flex justify-center items-center'>
                        <img src='/assets/logo.svg' className='animate-pulse' alt='Loading...' />
                    </div>
                </div>
            ) : (
                <div>
                    <div className='mb-20'>
                        <div className='flex gap-3 items-center mb-8'>
                            <button onClick={() => router.back()} className='text-primary flex items-center gap-2'><FaArrowLeft /> Back </button>

                            <span className='flex items-center gap-1'><FaChevronRight className='text-primary' />{!isEmpty(data) && data.title} </span>

                        </div>
                        {!isEmpty(data) && (
                            <div className='w-full  aspect-video max-w-[800px]'>
                                <div className='w-full bg-[#F1F1F1] rounded h-full '>
                                    {isVideo(data.url) ? (
                                        <video
                                            className="w-full  rounded object-contain h-full"
                                            poster={data.thumbnail_url}
                                            controls={true}
                                            onError={(e) => {
                                                console.error('Video failed to load:', e);
                                                e.currentTarget.src = data.thumbnail_url; // Prevent further attempts to load the video
                                            }}
                                        >
                                            <source src={data.url} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img src={data.url} className='w-full object-cover h-full' alt={data.title} />
                                    )}
                                </div>

                                <h3 className='font-medium my-4 text-2xl md:text-4xl'>{data.title}</h3>

                                <div className='flex justify-between items-center'>
                                    <span className='px-3 py-[6px] bg-[#F1F1F1] rounded text-xs'>{data.tags[0]}</span>
                                    <span className='text-xs'>{fToNow(data.createdAt)}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {related.length > 0 && (
                        <div className=''>
                            <h3 className='font-semibold text-2xl md:text-4xl my-3'>Other related posts</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {related.filter((item: any) => item.id !== id).map((item, index) => (
                                    <GalleryComponent galleryItem={item} key={index} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
