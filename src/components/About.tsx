import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full bg-background">
      <div className="flex h-[400px]">
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-black">CONÓCEME MÁS</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
            rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna 
            non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus
          </p>
        </div>
        <div className="flex-1 overflow-hidden">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Dr. Faustino Rodriguez" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-blue-600 h-[400px] w-full">
        {/* Puedes agregar contenido aquí si lo deseas */}
      </div>
    </div>
  );
};

export default About;
