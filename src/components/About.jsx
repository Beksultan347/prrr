import React from 'react';
import logo from '../assets/logo.png'; // Путь к логотипу

const About = () => {
  return (
    <div className="w-full bg-[#7d5ce6] h-64 flex flex-col items-center justify-center text-center p-2 relative">
      {/* Контейнер для логотипа */}
      <div className="relative flex items-center justify-center">
        {/* Логотип магазина */}
        <img src={logo} alt="Logo" className="h-32 mb-4" />
      </div>
      
      {/* Название бренда с новым шрифтом Bebas Neue */}
      <p className='absolute text-white top-12 right-1 text-sm'>Качественные товары</p>
      <h2
        className="text-white text-4xl font-extrabold mb-2"
        style={{ fontFamily: ' sans-serif' }} // Применяем шрифт Bebas Neue
      >
        Stella Moda
      </h2>
      <p className='text-white pt-2'>Бесплатная доставка по всему Кыргызстану</p>
      <p className='absolute text-white top-12 left-6 text-sm'>Удобная доставка</p>
      <p className='absolute text-white top-26 left-6 text-sm'>Выгодные цены</p>
      <p className='absolute text-white top-26 right-1 text-sm'>Большой ассертимент</p>
    </div>
  );
};

export default About;
