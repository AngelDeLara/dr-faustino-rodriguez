import Header from '../components/Header';
import Services from '../components/ServiceCards';
import About from '../components/About';
import Contact from '../components/Contact';
import ImageGallery from '../components/ImageGallery';
import Valoration from '../components/Valoration';

function Home() {
  return (
    <div className=''>
      <Header />
      <Services />
      <About />
      <Valoration />
      <ImageGallery />
      <Contact />
    </div>
  );
}

export default Home;
