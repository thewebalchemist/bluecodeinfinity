
import Head from 'next/head'

// local imports
import Hero from './layout/hero'
import Features from './layout/features'
import TextSection from './layout/textSection'
import Services from './layout/services'
import ImageGallery from './layout/image-gallery'
import DevelopmentApproach from './layout/development'
import CaseStudy from './layout/casestudy'
import Expertise from './layout/expertise'
import Testimonials from './layout/testimonials'
import BlueCodeinNumbers from './layout/numbers'
import Banner1 from './layout/banner1'
import Contactus from './contact-us'



const Home = () => {


  return (
    <main className="relative overflow-hidden py-20">

      {/* The head section */}
      <Head>
        <title>Bluecode Infinity - Your premium software development patner</title>
        <meta name="description" content="We create scalable and meaningful hi-tech solution for your business" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon//apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon//favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon//site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="//code.jivosite.com/widget/U2A0sPgoOC" async></script>
        <link href="//db.onlinewebfonts.com/c/2206d6cc490084998d531e8c1b2cbb4a?family=Druk+Wide+Bold" rel="stylesheet" type="text/css"/>
      </Head>

      {/* hero section starts */}
      <Hero />
      {/* hero section ends */}

  

      {/* the text section starts */}
      <TextSection />
      {/* the text section ends */}
      <Features />


      {/* services section starts */}
      <Services />
      {/* services section ends */}


      {/* Image Gallery starts */}
      <ImageGallery />
      {/* Image Gallery ends */}

      {/* development approach section starts */}
      <DevelopmentApproach />
      {/* development approach section ends */}

      {/* expertise section starts */}
      <Expertise />
      {/* expertise section ends */}

      {/* testimonials starts */}
      <Testimonials />
      {/* testimonials ends*/}

      {/* bluecodeinnumbers section starts */}
      <BlueCodeinNumbers />
      {/* bluecodeinnumbers section ends */}

      {/* banner starts */}
      <Banner1 />
      {/* banner ends*/}

      {/* contactus form starts */}
      <div>
      <Contactus />
      </div>      
      {/* contactus form ends */}


    </main>
  )
}

export default Home;