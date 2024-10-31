import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Google Tag Manager Script */}
                  
                </Head>
                <body>
                    {/* Google Tag Manager NoScript */}
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=GTM-MNVT2BBB `}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>
                    </noscript>
                    {/* Facebook Pixel - Noscript Fallback */}
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: 'none' }}
                            src={`https://www.facebook.com/tr?id=3848526125376124&ev=PageView&noscript=1`}
                        />
                    </noscript>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
