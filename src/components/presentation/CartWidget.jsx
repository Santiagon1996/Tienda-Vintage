import { Box, IconButton, Badge } from '@mui/material'
import { CounterContext } from '../../context/CounterContext'
import {useContext} from 'react'
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
const CartWidget = () => {
  const { counter } = useContext(CounterContext);
  
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
  return (
    <>  
    {/* Widget del carrito */}
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton color="inherit">
      <Link to="/cart">
        <StyledBadge badgeContent={counter} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </Link>
      </IconButton>
    </Box></>
  )
}

export default CartWidget