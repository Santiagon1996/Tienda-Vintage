import ItemList from "../presentation/ItemList";
import { useEffect, useState, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Grid2 } from "@mui/material";


const ItemListConteiner = () => {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All"); // Estado para la categoría seleccionada
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías únicas

  const params = useParams(); // Obtener los parámetros de la URL
  useEffect(() => {
    // Función que se ejecuta cuando el componente se monta o se actualiza
    const fetchData = async () => {
      // Intento a realizar una solicitud HTTP GET a la API de fake store
      try {
        // Esperar a que la promesa de fetch se resuelva
        const response = await fetch("https://fakestoreapi.com/products");
        
        // Convertir la respuesta a JSON
        const data = await response.json();
        
        // Agregar un valor de stock predeterminado si no lo tienen
        const productsWithStock = data.map(product => ({
          ...product,
          stock: product.stock || 10 // Valor de stock predeterminado
        }));
        // Actualizar el estado con los productos obtenidos
        setProducts(productsWithStock);

         // Obtiene todas las categorías únicas de los productos
         const uniqueCategories = [
          // Usar un Set para obtener valores únicos
          // Luego convertir el Set en un array
          // Usar map para extraer solo la propiedad category
          // Usar spread operator para agregar las categorías únicas al array
          ...new Set(data.map((articulo) => articulo.category)),
        ];
        setCategories(uniqueCategories);

        // Si hay un parámetro de ruta, usa ese como filtro inicial
        if (params.category) {
          setFilter(params.category);
        }
      } catch (error) {
        // Capturar cualquier error durante la operación asíncrona
        console.error("Error:", error);
      }
    };
  
    // Llamar a la función asíncrona
    fetchData();
  
  // Dependencia para ejecutar el efecto cuando cambie el parámetro de la URL
  }, [params]); // Array vacío indica que se ejecuta solo una vez al montaje
  

 // Actualiza el estado de filter con la categoría seleccionada
 // Si la categoría es "All", se establece el filtro en "All"
 // De lo contrario, se establece el filtro en la categoría seleccionada
 const handleCategoryChange = (category) => {
  // Actualizar el estado de filter
  setFilter(category === "All" ? category : params.category || category);
};



// Filtrar los productos según la categoría seleccionada
const filterProducts = useCallback(() => {
  // Si la categoría es "All", devolver todos los productos
  if (filter === "All") {
    return products;
  }
  // Filtrar los productos según la categoría seleccionada
  // Usar filter para devolver solo los productos que coincidan con la categoría
  return products.filter((product) => product.category === filter);
  // Dependencia para ejecutar el efecto cuando cambie el filtro o los productos 
}, [products, filter]);





// Mapear los productos y renderizar un componente ItemList por cada uno
// Usar useMemo para memorizar el resultado de la función y evitar renderizados innecesarios
const renderProducts = useMemo(() => {
  // Mapear los productos y renderizar un componente ItemList por cada uno
  // Usar filterProducts para obtener los productos a renderizar
  // Usar map para renderizar un componente ItemList por cada producto
  // Usar key para asignar una clave única a cada componente
  // Pasar el producto como propiedad al componente ItemList
  return filterProducts().map((product) => (
    <ItemList key={product.id} product={product}  />
  ));
  // Dependencia para ejecutar el efecto cuando cambie el filtro o los productos
}, [filterProducts]);

  return (
    <>
    {/*  Renderizar los botones de categoría */}
    {/*  Usar map para renderizar un botón por cada categoría */}
    
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 , justifyContent:'center', margin:10}}>
      
        {["All", ...categories].map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category)}
            variant={filter === category ? "contained" : "outlined"}
            aria-label={`Filtrar por ${category}`}
            sx={{
              textTransform: 'none',
              ...(filter === category && {
                backgroundColor: 'primary.main',
                color: 'white',
              }),
            }}
          >
            {category}
          </Button>
        ))}
      </Box>
      <Grid2 container spacing={6} sx={{ mt: 2 , justifyContent: 'center' }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {renderProducts}
      </Grid2>
    
    </>
  );
};

export default ItemListConteiner;