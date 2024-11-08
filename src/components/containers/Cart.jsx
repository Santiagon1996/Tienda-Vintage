import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import { Link } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import PropTypes from "prop-types";
const Cart = () => {

  // Obtener el estado y la función para actualizarlo del contexto
  const {  removeFromCart, cartItems } = useContext(CounterContext);
  // Calcular el precio total
  
  // Calcular el precio total
  const precioTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
 

  const VerificarCart = ({ cantidadProductos }) => {
    if (cantidadProductos > 0) {
      return (
        <Link to="/checkout">
          <Button variant="contained" color="primary" size="medium" sx={{ mx: 2 }}>
            Realizar pedido
          </Button>
        </Link>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          size="medium"
          sx={{ mx: 2 }}
          onClick={() => alert("El carro debe tener al menos un producto.")}
        >
          Realizar pedido
        </Button>
      );
    }
  };
  
  VerificarCart.propTypes = {
    cantidadProductos: PropTypes.number.isRequired,
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
              <TableCell align="right">${item.price.toFixed(2)}</TableCell>
              <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="secondary" onClick={() => removeFromCart(item)}>
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">${precioTotal.toFixed(2)}</TableCell>
            <TableCell align="right">
              <VerificarCart cantidadProductos={cartItems.length} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;