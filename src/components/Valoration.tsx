import InstagramIcon from '../../public/assets/instagram.svg';
import FacebookIcon from '../../public/assets/facebook.svg';

const Valoration: React.FC = () => {
  return (
    <div className="bg-primary h-[400px] w-full flex items-center text-background justify-center flex-col">
      <div>
        <h1 className="text-4xl">
          <strong>¿Quieres una Valoración?</strong>
        </h1>
        <p className="text-2xl mt-4">
          Contáctame al 492 287 0336 ó 492 287 0327 <br /> faustinorc@gmail.com
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <p className="flex items-center">
          <span className="bg-background rounded-full p-2">
            <a href="https://www.facebook.com/share/1YCUtx2Xmq/">
            <img src={FacebookIcon} alt="Facebook" className="w-4 text-primary" />
            </a>
          </span>
          <span className="ml-2">
           <a className='text-white' href="https://www.facebook.com/share/1YCUtx2Xmq/">Facebook</a> 
          </span>
        </p>
        <p className="flex items-center mt-2">
          <span className="bg-background rounded-full p-2">
            <img src={InstagramIcon} alt="Instagram" className="w-4 text-primary" />
          </span>
          <span className="ml-2"><a className='text-background' href='https://www.instagram.com/dr.faustinocirujanop/'>Instagram</a></span>
        </p>
      </div>
      <div className="flex gap-4 h-14 mt-4">
        <button className="bg-background text-primary w-40 text-sm">
          AGENDAR
        </button>
        <button className="w-40 text-sm bg-primary border-background border-3">ENVIAR CORREO</button>
      </div>
    </div>
  );
};

export default Valoration;
