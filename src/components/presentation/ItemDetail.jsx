import  { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import { Link } from "react-router-dom";
import ItemQuantitySelector from "../containers/ItemQuantitySelector";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { ButtonGroup, Button } from "@mui/material";
import PropTypes from "prop-types";
const ItemDetail = ({ product }) => {
  const { counter, setCounter,  cartItems , addToCart} = useContext(CounterContext);
  return (
    <>
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={`Imagen del producto ${product.title} `}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Precio: ${product.price} 
          </Typography>
          <ButtonGroup >
              <ItemQuantitySelector  />
              <Button
                onClick={() => {
                  addToCart(product);
                  setCounter(0);
                  if (counter != 0) {
                    cartItems.push([product.title, product.price, counter]);
                  } else {
                    alert("Debe indicar la cantidad");
                  }
                }}
                
              >
                Agregar al carrito
              </Button>
            </ButtonGroup>
            <Link to={"/products"}>
          <Button onClick={() => setCounter(0)}>Volver</Button>
            
            </Link>
          
        </CardContent>
      </CardActionArea>
    </Card>
    
    </>
  )
}
// Validación de PropTypes
ItemDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    //stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetail