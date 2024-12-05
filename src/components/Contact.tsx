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
        // Enviar los datos al backend
        console.log(formData);
    };

    return (
        <div className="bg-background">
            <div className="max-w-2xl mx-auto text-black pt-20 pb-20">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Comparte tus datos para obtener más información
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Nombre"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Teléfono"
                        required
                    />
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ciudad"
                        required
                    />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary col-span-2"
                        placeholder="Mensaje"
                        required
                    ></textarea>
                    <div className="col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="w-36 bg-primary text-white font-bold py-3 px-4 rounded-full hover:bg-primary-dark transition duration-300"
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
