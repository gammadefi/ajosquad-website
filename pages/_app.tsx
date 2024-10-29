// @ts-ignore
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import Script from 'next/script';
import TawkToIntegration from '../src/components/Tawkto'
import WhatsAppButton from '../src/components/WhatsappHelp';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq?: typeof window.fbq;
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize fbq after loading the script
    if (process.env.NODE_ENV === 'production' && typeof window.fbq !== 'undefined') {
      window.fbq('init', '3848526125376124'); // Replace 'YOUR_PIXEL_ID' with your actual Pixel ID
      window.fbq('track', 'PageView');
    }
  }, []);
  return (
    <>
      <Head>
        {/* Facebook Pixel - Noscript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=3848526125376124&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-85Q5QFYMRK`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-85Q5QFYMRK');
                `}
      </Script>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                        !(function(f, b, e, v, n, t, s) {
                            if (f.fbq) return;
                            n = f.fbq = function() {
                                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                            };
                            if (!f._fbq) f._fbq = n;
                            n.push = n;
                            n.loaded = !0;
                            n.version = '2.0';
                            n.queue = [];
                            t = b.createElement(e);
                            t.async = !0;
                            t.src = v;
                            s = b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t, s);
                        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                    `,
        }}
      />
      <TawkToIntegration />
      <Toaster />
      <WhatsAppButton />
      <Component {...pageProps} />
    </>
  );

}

export default MyApp
