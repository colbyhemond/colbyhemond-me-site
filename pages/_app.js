import '../styles/globals.css'
import Layout from '../components/Layout'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import * as Fathom from 'fathom-client';


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('GNERRYAJ', {
      includedDomains: ['colbyhemond.me'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
