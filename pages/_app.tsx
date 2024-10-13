import TawkToIntegration from '../src/components/Tawkto'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TawkToIntegration />
      <Component {...pageProps} />
    </>
  );

}

export default MyApp
