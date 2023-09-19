import '@/styles/globals.css'
import Layout from '@/components/Layout';
import NextProgress from 'nextjs-progressbar'

 function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <NextProgress color="tomato" 
  startPosition={0.3} 
  stopDelayMs={200}
  height={3} 
  showOnShallow={true} />
    <Component {...pageProps} />
  </Layout>
  );
};

export default MyApp;