import React from 'react';
import profilePic from '../assets/profile-pic.png';

const Header: React.FC = () => {
  return (
    <header className="bg-background shadow-md py-6 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${profilePic})` }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl font-bold text-background-800">Luce radiante y recupera tu autoestima</h1>
        <a className="text-lg bg-primary text-background mt-2 inline-block px-4 py-2 rounded cursor-pointer hover:text-background">Agenda tu cita</a>
      </div>
    </header>
  );
}

export default Header;