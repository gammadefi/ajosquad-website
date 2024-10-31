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
    dataLayer: any[];
  }
}


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Initialize dataLayer for GTM
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'gtm.js',
        'gtm.start': new Date().getTime(),
      });
    }
  }, []);

  useEffect(() => {
    // Initialize fbq after loading the script
    if (process.env.NODE_ENV === 'production' && typeof window.fbq !== 'undefined') {
      window.fbq('init', '3848526125376124'); // Replace 'YOUR_PIXEL_ID' with your actual Pixel ID
      window.fbq('track', 'PageView');
    }
  }, []);
  return (
    <>
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MNVT2BBB ');
      `}
      </Script>
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
