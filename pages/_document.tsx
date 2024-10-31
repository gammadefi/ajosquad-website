import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    {/* Google Tag Manager NoScript */}
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-MNVT2BBB"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                    {/* Meta Pixel NoScript */}
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: 'none' }}
                            src="https://www.facebook.com/tr?id=1061611859018286&ev=PageView&noscript=1"
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
