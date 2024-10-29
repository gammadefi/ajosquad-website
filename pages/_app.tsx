// @ts-ignore
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import Script from 'next/script';
import TawkToIntegration from '../src/components/Tawkto'
import WhatsAppButton from '../src/components/WhatsappHelp';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq?: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      (function (f: any, b: Document, e: string, v: string, n: any, t: HTMLScriptElement | null, s: HTMLElement | null | any) {
        if (typeof f.fbq === 'undefined') {
          n = f.fbq = function (...args: any[]) {
            n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
          };
          f._fbq = n;
          n.push = n;
          n.loaded = true;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e) as HTMLScriptElement;
          t.async = true;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode?.insertBefore(t, s);
        }
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);

      window.fbq('init', '3848526125376124D');
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      <TawkToIntegration />
      <Toaster />
      <WhatsAppButton />
      {/* Meta Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          fbq('track', 'PageView');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );

}

export default MyApp
