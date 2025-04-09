/*import React, { useState, useEffect } from 'react';
import productsData from '../data/productsData'; // Импортируем данные о товарах

const Projects = ({ activeCategory }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false); // Стейт для успешного заказа

  useEffect(() => {
    // Попробуем получить номер телефона из localStorage, если он есть
    const savedPhoneNumber = localStorage.getItem('phoneNumber');
    if (savedPhoneNumber) {
      setPhoneNumber(savedPhoneNumber);
    }
  }, []);

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedProduct(null);
    }
  };

  const handleOrderClick = () => {
    setIsPhoneModalOpen(true);
  };

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber) return;

    localStorage.setItem('phoneNumber', phoneNumber);
    setIsPhoneModalOpen(false);
    setSelectedProduct(null);

    sendTelegramMessage(phoneNumber, selectedProduct.id);

    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
    }, 5000);
  };

  const sendTelegramMessage = (phone, productId) => {
    const telegramToken = '8142625929:AAFLEKKUiKM2jvW5IoW49peFrEWkjtgQOY8';
    const chatId = '6441055549'; // Замените на ваш chat_id
    
    const message = `Новый заказ!\nТелефон: ${phone}\nТовар ID: ${productId}`;
    
    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Message sent', data);
      })
      .catch((error) => {
        console.error('Error sending message to Telegram:', error);
      });
  };

  // Фильтрация товаров по категории
  const filteredProducts = activeCategory === 'Все'
    ? productsData
    : productsData.filter(product => product.category === activeCategory);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="cursor-pointer bg-white border border-[#333] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-2 rounded-xl" // Уменьшена высота изображения
            />
            <h3 className="text-base font-semibold text-gray-800">{product.title}</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-2">{product.description}</p>
            <button
              onClick={handleOrderClick}
              className="mt-auto bg-blue-600 text-white text-sm px-3 py-1.5 rounded-full hover:bg-blue-700 transition"
            >
              Заказать
            </button>
          </div>
        ))}
      </div>

     
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-56 object-contain mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{selectedProduct.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{selectedProduct.description}</p>
            <button
              onClick={handleOrderClick}
              className="w-full bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Заказать
            </button>
          </div>
        </div>
      )}

    
      {isPhoneModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
          onClick={(e) => e.target === e.currentTarget && setIsPhoneModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Введите ваш номер телефона</h3>
            <form onSubmit={handlePhoneNumberSubmit}>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ваш номер телефона"
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Подтвердить
              </button>
            </form>
          </div>
        </div>
      )}


{orderSuccess && (
  <div className="fixed top-0 left-0 right-0 p-4 bg-green-600 text-white text-center">
    <p>Ваш заказ успешно оформлен! Наши менеджеры свяжутся с вами.</p>
  </div>
)}

{orderSuccess && (
  setTimeout(() => {
    setOrderSuccess(false);  // Скрываем уведомление
  }, 1500)  // Уменьшили задержку на 2 секунды
)}

    </div>
  );
};

export default Projects;

*/



import React, { useState, useEffect } from 'react';
import productsData from '../data/productsData'; // Импортируем данные о товарах

const Projects = ({ activeCategory }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false); // Стейт для успешного заказа

  useEffect(() => {
    // Попробуем получить номер телефона из localStorage, если он есть
    const savedPhoneNumber = localStorage.getItem('phoneNumber');
    if (savedPhoneNumber) {
      setPhoneNumber(savedPhoneNumber);
    }
  }, []);

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedProduct(null);
    }
  };

  const handleOrderClick = () => {
    setIsPhoneModalOpen(true);
  };

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber) return;

    localStorage.setItem('phoneNumber', phoneNumber);
    setIsPhoneModalOpen(false);
    setSelectedProduct(null);

    sendTelegramMessage(phoneNumber, selectedProduct.id);

    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
    }, 5000);
  };

  const sendTelegramMessage = (phone, productId) => {
    const telegramToken = '8142625929:AAFLEKKUiKM2jvW5IoW49peFrEWkjtgQOY8';
    const chatId = '6441055549'; // Замените на ваш chat_id
    
    const message = `Новый заказ!\nТелефон: ${phone}\nТовар ID: ${productId}`;
    
    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Message sent', data);
      })
      .catch((error) => {
        console.error('Error sending message to Telegram:', error);
      });
  };

  // Фильтрация товаров по категории
  const filteredProducts = activeCategory === 'Все'
    ? productsData
    : productsData.filter(product => product.category === activeCategory);

  return (
    <div className="p-6 bg-[#d6cef2] min-h-screen">

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="cursor-pointer bg-white border border-[#333] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain mb-1 rounded-xl" // Уменьшена высота изображения
            />
            <h3 className="text-base py-2 font-semibold text-gray-800">{product.title}</h3>
            
            <button
              onClick={handleOrderClick}
              className="mt-auto bg-blue-600 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-700 transition"
            >
              Заказать
            </button>
          </div>
        ))}
      </div>

     
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-56 object-contain mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-2">{selectedProduct.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{selectedProduct.description}</p>
            <button
              onClick={handleOrderClick}
              className="w-full bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Заказать
            </button>
          </div>
        </div>
      )}

    
      {isPhoneModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
          onClick={(e) => e.target === e.currentTarget && setIsPhoneModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Введите ваш номер телефона</h3>
            <form onSubmit={handlePhoneNumberSubmit}>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ваш номер телефона"
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Подтвердить
              </button>
            </form>
          </div>
        </div>
      )}


{orderSuccess && (
  <div className="fixed top-0 left-0 right-0 p-4 bg-green-600 text-white text-center">
    <p>Ваш заказ успешно оформлен! Наши менеджеры свяжутся с вами.</p>
  </div>
)}

{orderSuccess && (
  setTimeout(() => {
    setOrderSuccess(false);  // Скрываем уведомление
  }, 1500)  // Уменьшили задержку на 2 секунды
)}

    </div>
  );
};

export default Projects;







