import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0  }}>
      <BottomNavigation  value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          sx={{ color: '#1976d2' }}
        />
        <BottomNavigationAction
          label="Mas Vendidos"
          icon={<FavoriteIcon />}
          sx={{ color: '#1976d2' }}
        />
        <BottomNavigationAction
          label="Carrito de Compras"
          icon={<ShoppingCartCheckoutIcon />}
          sx={{ color: '#1976d2' }}
        />
        <BottomNavigationAction
          label="Contacto"
          icon={<InstagramIcon />}
          sx={{ color: '#1976d2' }}
        />
      </BottomNavigation>
      
    </Box>
  );
};

export default Footer;
