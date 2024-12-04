import React, { useState } from "react";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		city: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Aquí puedes manejar el envío del formulario
		console.log(formData);
	};

	return (
		<div className="bg-background">
			<div className="max-w-2xl mx-auto text-black pt-20">
				<h2 className="text-3xl font-bold mb-6 text-center">
					Comparte tus datos para obtener más información
				</h2>
				<p className="mb-8 text-center text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
					mauris.
				</p>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="name" className="block mb-1 font-medium">
							Nombre
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div>
						<label htmlFor="email" className="block mb-1 font-medium">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div>
						<label htmlFor="phone" className="block mb-1 font-medium">
							Teléfono
						</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div>
						<label htmlFor="city" className="block mb-1 font-medium">
							Ciudad
						</label>
						<input
							type="text"
							id="city"
							name="city"
							value={formData.city}
							onChange={handleChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						/>
					</div>
					<div>
						<label htmlFor="message" className="block mb-1 font-medium">
							Mensaje
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={4}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							required
						></textarea>
					</div>
					<div>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
						>
							Enviar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
