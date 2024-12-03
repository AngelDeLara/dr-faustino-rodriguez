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
    <div className="flex flex-wrap justify-center gap-8 p-8 bg-background">
      {services.map((service, index) => (
        <div key={index} className="bg-primary text-background rounded shadow-lg w-64 h-64 pt-16 pl-8">
          <h3 className="font-bold text-left">{service.title}</h3>
          <p className="text-left mb-4">{service.description}</p>
          <a href={service.link} className="text-background px-4 py-2 rounded hover:bg-blue-100 transition duration-300 text-left">
            LEER MÁS
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;