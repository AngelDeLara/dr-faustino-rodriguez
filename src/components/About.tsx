import React from "react";

const About: React.FC = () => {
	return (
		<div className="bg-background flex justify-center">
			<div className="flex w-auto items-center px-52 py-16 max-sm:flex-col max-md:px-8 max-md:gap-10">
				<div className="flex flex-col justify-center text-left gap-4 w-1/2 max-md:w-auto">
					<h2 className="text-5xl font-bold text-black text-left max-md:text-3xl">CONÓCEME MÁS</h2>
					<p className="text-gray-700 text-left text-xl">
						El <strong>Dr. Faustino Rodriguez Collazo</strong> es un medico especializado en la
						cirugia plástica, estética y reconstructiva. <br /> <br />
            Experiencia y
						vanguardia en cirugia plástica. Con años de experiencia y un
						compromiso inquebrantable con la innovación te ofrece las mejores
						técnicas para lograr resultados naturales y armoniosos
					</p>
				</div>
				<div className="flex justify-center w-1/2 max-md:w-auto">
					<img
						src="/assets/FAUSTINO_2.jpg"
						alt="Dr. Faustino Rodriguez"
						className="w-1/2 object-cover rounded-lg max-md:w-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
