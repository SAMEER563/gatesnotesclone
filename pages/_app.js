import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import NavbarTop from '@/components/NavbarTop';


 function MyApp({ Component, pageProps }) {
  return (
  <>
  {" "}
  <Navbar />
  <NavbarTop />
  <Component {...pageProps} />
  </>
  );
}

export default MyApp;