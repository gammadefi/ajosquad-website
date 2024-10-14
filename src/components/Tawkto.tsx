import React, { useEffect } from 'react';

const TawkToIntegration = () => {
    useEffect(() => {
        // Create Tawk.to script element
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/656dd054bfb79148e599e4eb/1hgqfbjmp";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        // Append the script to the body
        document.body.appendChild(script);

        // Cleanup function to remove the script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null; // No visible UI
};

export default TawkToIntegration;
