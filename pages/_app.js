import Layout from './layout/layout'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Script from "next/script";


function MyApp({ Component, pageProps }) {
  return (
  <Layout>
      <Component {...pageProps} />
      {/* <!--Start of Tawk.to Script--> */}
      <Script id="tawk" strategy="lazyOnload">
        {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/63347c6254f06e12d8975fb5/1ge2gbovk';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `}
      </Script>
  </Layout>
  )
}

export default MyApp
