import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from '@mui/material';
import { ShoppingCart, Brightness4, Brightness7, Storefront, Settings as SettingsIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useSettings } from '../context/SettingsContext';
import SettingsPanel from '../components/SettingsPanel';

const Navbar = ({ onCartClick, onHomeClick }) => {
  const { state, dispatch } = useSettings();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const isEn = state.language === 'en';
  
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <AppBar position="sticky" sx={{ mb: 2, backgroundImage: 'none' }}>
        <Toolbar sx={{ flexDirection: 'row-reverse' }}>
          <IconButton 
            color="inherit" 
            onClick={onHomeClick} 
            sx={{ 
              ml: 1 
            }}
          >
            <Storefront />
          </IconButton>

          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              cursor: 'pointer', 
              fontWeight: 'bold', 
              letterSpacing: 1,
              textAlign: 'right',
              px: 2
            }}
            onClick={onHomeClick}
          >
            {isEn ? "Zahra's Store" : "فروشگاه زهرا"}
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            flexDirection: 'row-reverse'
          }}>
            <IconButton color="inherit" onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
              {state.themeName.toLowerCase().includes('dark') || ['forest', 'sunset', 'wine'].includes(state.themeName) 
                ? <Brightness7 /> 
                : <Brightness4 />
              }
            </IconButton>

            <IconButton color="inherit" onClick={onCartClick}>
              <Badge badgeContent={totalQuantity} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={() => setIsSettingsOpen(true)}>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <SettingsPanel open={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
};

export default Navbar;