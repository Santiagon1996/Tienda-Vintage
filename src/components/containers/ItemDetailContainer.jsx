import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../presentation/ItemDetail";
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Alert } from '@mui/material';

const ItemDetailContainer = () => {
  // Obtenemos el id del producto de la URL
  const { id } = useParams();
  // Definimos el estado del producto
const [product, setProduct] = useState(null);//][]
  // Definimos el estado de carga
  const [isLoading, setIsLoading] = useState(true);
  // Definimos el estado de error
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener el producto
    const fetchProduct = async () => {
      setIsLoading(true);
      // Realizamos la petición al servidor
      try {
        // Obtenemos el producto con el id correspondiente
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        // Verificamos si la respuesta es exitosa
        
        const data = await response.json();
        // Actualizamos el estado del producto
        setProduct(data);
        // Manejamos el error
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to fetch product. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
// Llamamos a la función para obtener el producto
    fetchProduct();
    // Dependencia: id
  }, [id]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error">{error}</Alert>
    );
  }

  return (
    <>
    {/*  Mostramos el componente ItemDetail con el producto obtenido */}
      {<ItemDetail product={product} />}
    </>
  );
};

export default ItemDetailContainer;