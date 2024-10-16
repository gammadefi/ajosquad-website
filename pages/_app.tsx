import { Toaster } from 'react-hot-toast';
import TawkToIntegration from '../src/components/Tawkto'
import WhatsAppButton from '../src/components/WhatsappHelp';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TawkToIntegration />
      <Toaster />
      <WhatsAppButton />
      <Component {...pageProps} />
    </>
  );

}

export default MyApp
