import React from 'react'
import { fToNow } from '../../utils/formatTime';
import Link from 'next/link';

const GalleryComponent = ({ galleryItem }: { galleryItem: any }) => {
    // Helper function to check if the URL is a video
    const isVideo = (url: string) => {
        return url.match(/\.(mp4|webm|ogg|mov)$/i);
    };

    return (
        <div className='w-full cursor-pointer h-full md:w-[400px]'>
            <Link href={`/gallery/${galleryItem.id}`}>
                <>
                    <div className='w-full bg-[#F1F1F1] rounded h-[227.62px] '>
                        {isVideo(galleryItem.url) ? (
                            // Render video as a static image using the poster attribute or just a preview
                            <video
                                className="w-full rounded object-cover h-full"
                                poster={galleryItem.thumbnail_url} // Optional placeholder for video preview
                                controls={false} // No controls to make it appear static
                            >
                                <source src={galleryItem.url} />
                                {/* You can add fallback formats if needed */}
                            </video>
                        ) : (
                            <img src={galleryItem.url} className='w-full object-cover h-full' alt={galleryItem.title} />
                        )}
                    </div>

                    <h3 className='font-medium my-2 text-lg'>{galleryItem.title}</h3>

                    <div className='flex justify-between items-center'>
                        <span className='px-3 py-[6px] bg-[#F1F1F1] rounded text-xs'>{galleryItem.tags[0]}</span>
                        <span className='text-xs'>{fToNow(galleryItem.createdAt)}</span>
                    </div>
                </>
            </Link>

        </div>
    );
};

export default GalleryComponent;
