import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCards: React.FC = () => {
  const services = [
    {
      title: "Cirugía Corporal",
      description: "Tratamientos para remodelar y mejorar el cuerpo.",
      link: "/body-surgery"
    },
    {
      title: "Cirugía Facial",
      description: "Procedimientos para mejorar y rejuvenecer el rostro.",
      link: "/facial-surgery"
    },
    {
      title: "Cirugía Mínimamente Invasiva",
      description: "Procedimientos con mínimo impacto y rápida recuperación.",
      link: "/min-surgery"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-16 px-8 bg-background">
      {services.map((service, index) => (
        <div key={index} className="bg-primary text-background rounded shadow-lg w-auto h-96 flex flex-col items-start justify-center px-10">
          <h3 className="font-bold text-left text-3xl mb-4">{service.title}</h3>
          <p className="text-left mb-8">{service.description}</p>
          <a 
            href={service.link}
            className="text-background rounded hover:bg-blue-100 transition duration-300 text-left">
            LEER MÁS
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;