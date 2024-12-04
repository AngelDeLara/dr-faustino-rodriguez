import React from "react";

const About: React.FC = () => {
	return (
		<div className="w-full bg-background">
			<div className="flex h-[400px] px-44 items-center">
				<div className="flex-1 flex flex-col justify-center text-left gap-4">
					<h2 className="text-4xl font-bold text-black text-left">CONÓCEME MÁS</h2>
					<p className="text-gray-700 text-left">
						El <strong>Dr. Faustino Rodriguez Collazo</strong> es un medico especializado en la
						cirugia plástica, estética y reconstructiva. 
          </p>
          <p className="text-gray-700 text-left">
            Experiencia y
						vanguardia en cirugia plástica. Con años de experiencia y un
						compromiso inquebrantable con la innovación te ofrece las mejores
						técnicas para lograr resultados naturales y armoniosos
					</p>
				</div>
				<div className="flex-1 flex overflow-hidden justify-center">
					<img
						src="/assets/FAUSTINO_2.jpg"
						alt="Dr. Faustino Rodriguez"
						className="w-96 h-80 object-cover rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
