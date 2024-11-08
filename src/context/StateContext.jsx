import { useState } from "react";
import {CounterContext} from "./CounterContext"
import PropTypes from "prop-types";

const StateContext = ({ children }) => {
  // Estado para almacenar el contador
  const [counter, setCounter] = useState(0);
  // Estado para almacenar el carrito
  const [cart, setCart] = useState(0);
  // Estado para almacenar los items del carrito
  const [cartItems, setCartItems] = useState([]);
  // Estado para almacenar el id de la orden
  const [idOrden, setIdOrden] = useState("");

  // Funciones para incrementar, decrementar y resetear el contador
  const addToCart = (product) => {
      setCounter(counter + 1);
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
  };
  const removeFromCart = (product) => {
    if (counter > 0) {
      setCounter(counter - 1);
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem.quantity === 1) {
          return prevItems.filter((item) => item.id !== product.id);
        } else {
          return prevItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
      });
    }
  };
  const resetCart = () => {
    setCartItems([]);
    setCounter(0);
  };
  return (
    // Proveer el estado y la función para actualizarlo a los componentes hijos
    <CounterContext.Provider
      value={{
        counter,
        addToCart,
        removeFromCart,
        resetCart,
        setCounter,
        cart,
        setCart,
        cartItems,
        setCartItems,
        idOrden,
        setIdOrden,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

StateContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateContext;
