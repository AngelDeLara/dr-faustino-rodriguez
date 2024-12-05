import React from 'react';
import profilePic from '/assets/FAUSTINO_26.jpg';

const Header: React.FC = () => {
  return (
    <header className="bg-background shadow-md text-left">
      <div 
        className="bg-cover bg-center h-160 flex items-center text-left px-16"
        style={{ backgroundImage: `url(${profilePic})` }}
      >
        <div className="container z-10 text-left pr-36">
          <h1 className="text-4xl font-bold text-background mb-4">Luce radiante y recupera tu autoestima</h1>
          <a className="text-lg bg-primary text-background inline-block px-4 py-2 rounded cursor-pointer hover:text-background">Agenda tu cita</a>
        </div>
      </div>
    </header>
  );
}

export default Header;