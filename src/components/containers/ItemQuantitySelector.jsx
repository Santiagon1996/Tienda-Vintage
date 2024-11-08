import { useContext } from "react";
import {CounterContext} from "../../context/CounterContext"
import { Button, Box } from "@mui/material";
//import PropTypes from "prop-types";

const ItemQuantitySelector = () => {
  // Obtener el estado y la función para actualizarlo del contexto
  const { counter,addToCart, removeFromCart, resetCart } = useContext(CounterContext);
  // Funciones para incrementar, decrementar y resetear el contador
 
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button variant="outlined" color="primary" onClick={removeFromCart}>
        -
      </Button>
      <Button variant="outlined" color="primary" onClick={resetCart}>
        Reset
      </Button>
      <Button variant="outlined" color="primary" onClick={addToCart}>
        +
      </Button>
      <h2>{counter}</h2>
    </Box>
  );
};

ItemQuantitySelector.propTypes = {
 // stock: PropTypes.number.isRequired,
};

export default ItemQuantitySelector;