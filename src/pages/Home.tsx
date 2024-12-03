import Header from '../components/Header';
import Services from '../components/ServiceCards';
import About from '../components/About';
import Contact from '../components/Contact';
import ImageGallery from '../components/ImageGallery';

function Home() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <ImageGallery />
      <Contact />
    </div>
  );
}

export default Home;
