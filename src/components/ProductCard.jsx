import { Card, CardMedia, CardContent, Typography, CardActions, Button, Rating, Box } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useSettings } from '../context/SettingsContext';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { state } = useSettings();
  const isEn = state.language === 'en';
  const isList = state.view === 'list';

  return (
    <Card sx={{ 
      display: 'flex', 
      flexDirection: isList ? 'row' : 'column',
      width: '100%', 
      height: '100%', 
      borderRadius: 3, 
      boxShadow: 3,
      flexGrow: 1,
      transition: '0.3s',
      '&:hover': { boxShadow: 6 }
    }}>
      <Box sx={{ 
        width: isList ? 250 : '100%',
        height: 200, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        p: 2, 
        bgcolor: '#fff' 
      }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: 'contain', height: '100%', width: '100%' }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontWeight: 'bold', 
            height: isList ? 'auto' : '3rem', 
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.5rem',
            mb: 1
          }}
        >
          {product.title}
        </Typography>
        
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary.main" sx={{ fontWeight: 'bold' }}>
            ${product.price}
          </Typography>
          <Rating value={product.rating?.rate || 0} readOnly size="small" />
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0, justifyContent: isList ? 'center' : 'flex-start' }}>
        <Button 
          fullWidth={!isList} 
          variant="contained" 
          startIcon={<AddShoppingCart />}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
          }}
          sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 'bold', px: isList ? 4 : 2 }}
        >
          {isEn ? 'Add to Cart' : 'افزودن به سبد'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;