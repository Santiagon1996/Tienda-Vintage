import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ItemList = ({ product }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="imagen producto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
               {product.description} 
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight:"bold" }}>
              Precio: ${product.price}
            </Typography>
            {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Stock: {product.stock}
            </Typography> */}
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight:"bold" }}>
             ID: {product.id}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight:"bold" }}>
             Stock: {product.stock}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <ButtonGroup spacing="2">
                {/* {product.stock === 0 ? (
                  <Button disabled >
                    Sin Stock
                  </Button>
                ) : (
                    <Button
                    component={Link}
                    to={`/item/${product.id}`} >
                      Pedir
                    </Button>
                  
                )} */}
                  
                    <Button
                    component={Link}
                    to={`/item/${product.id}`} >
                      Pedir
                    </Button>
                  
              </ButtonGroup>
          
        </CardActions>
      </Card>
    </>
  );
};
// Validación de PropTypes
ItemList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemList;
