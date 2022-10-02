import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: to bem implemented and replace _app.tsx
  <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
