// components/InstagramEmbed.js
import { useEffect } from 'react';

const InstagramEmbed = ({ embedHtml }: { embedHtml: any }) => {
    useEffect(() => {
        // This will run the Instagram embed script after rendering
        const script = document.createElement('script');
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);
    }, []);

    return (
        <div
            dangerouslySetInnerHTML={{ __html: embedHtml }}
            style={{ maxWidth: "540px", margin: "0 auto" }}
        />
    );
};

export default InstagramEmbed;
