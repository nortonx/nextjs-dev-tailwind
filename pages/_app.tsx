import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />

  // TODO: Implement use of the Layout component
  // <Layout>
  //   <Component {...pageProps} />
  // </Layout>
}

export default MyApp
