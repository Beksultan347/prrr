import React from 'react';
import logo from '../assets/logo.png'; // Путь к логотипу

const About = () => {
  return (
    <div className="w-full bg-[#7d5ce6] h-40 flex flex-col items-center justify-center text-center">
      {/* Логотип магазина */}
      <img src={logo} alt="Logo" className="h-20 mb-4" />

    </div>
  );
};

export default About;
