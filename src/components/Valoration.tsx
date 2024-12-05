import React from "react";

const Valoration: React.FC = () => {
	return (
		<div className="bg-blue-600 h-[400px] w-full flex items-center text-background justify-center flex-col">
			<div>
				<h1 className="text-4xl ">
					<strong>¿Quieres una Valoración?</strong>
				</h1>
				<p className="text-2xl mt-4">Contáctame al 492 287 0336 ó 492 287 0327 <br /> faustinorc@gmail.com</p>
			</div>
			<div className="mt-4">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
			<div className="flex gap-4 h-14 mt-4">
        <button className="bg-background text-primary w-40 text-sm">
          AGENDAR
        </button>
        <button className="w-40 text-sm">
          ENVIAR CORREO
        </button>
      </div>
		</div>
	);
};

export default Valoration;
