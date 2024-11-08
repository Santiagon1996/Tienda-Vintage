import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Discount = ({ price, isOnPromotion }) => {
  const [finalPrice, setFinalPrice] = useState(price);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const aplicarDescuento = new Promise((resolve, reject) => {
      if (isOnPromotion) {
        setTimeout(() => {
          resolve('Descuento aplicado');
        }, 3000);
      } else {
        reject('No se pudo aplicar el descuento');
      }
    });

    aplicarDescuento
      .then((msg) => {
        setMessage(msg);
        setFinalPrice(price * 0.8); // Aplica un descuento del 20%
      })
      .catch((msg) => {
        setMessage(msg);
        setFinalPrice(price); // Mantiene el precio original
      });
  }, [isOnPromotion, price]);

  return (
    <div>
      <h2>Precio Final: ${finalPrice.toFixed(2)}</h2>
      <p>{message}</p>
    </div>
  );
};

Discount.propTypes = {
  price: PropTypes.number.isRequired,
  isOnPromotion: PropTypes.bool.isRequired,
};

export default Discount;