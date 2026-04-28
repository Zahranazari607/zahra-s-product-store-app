import { Button, Typography, Container, Grid, Box, CircularProgress, Rating } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../api/productsApi';
import { ArrowBack, AddShoppingCart } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { useSettings } from '../context/SettingsContext';
import { productTranslations } from '../utils/translations';

const ProductDetails = ({ productId, onBack }) => {
  const dispatch = useDispatch();
  const { state } = useSettings();
  const isEn = state.language === 'en';

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId),
  });

  if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;
  if (!product) return null;

  const translated = productTranslations[product.id];

  return (
    <Container sx={{ mt: 5, pb: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: isEn ? 'flex-start' : 'flex-end', mb: 3 }}>
        <Button 
          onClick={onBack} 
          sx={{ 
            fontWeight: 'bold',
            flexDirection: isEn ? 'row' : 'row-reverse',
            gap: 1
          }}
        >
          <ArrowBack sx={{ transform: isEn ? 'none' : 'rotate(180deg)' }} />
          {isEn ? 'Back to Store' : 'بازگشت به فروشگاه'}
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <Box 
          component="img" 
          src={product.image} 
          sx={{ 
            width: '100%', 
            maxWidth: 500,
            maxHeight: 400, 
            objectFit: 'contain', 
            bgcolor: 'white', 
            p: 2, 
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            mb: 4
          }} 
        />

        <Box 
          sx={{ 
            width: '100%', 
            maxWidth: 800,
            textAlign: 'left', 
            direction: 'ltr',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {isEn ? product.title : (translated?.title || product.title)}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
            <Rating value={product.rating?.rate || 0} readOnly />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {isEn ? `(${product.rating?.count} reviews)` : `(${product.rating?.count} نظر مشتری)`}
            </Typography>
          </Box>

          <Typography variant="h5" color="primary.main" fontWeight="bold" gutterBottom>
            ${product.price}
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
            {isEn ? 'Description:' : 'توضیحات محصول:'}
          </Typography>

          <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.8, color: 'text.secondary' }}>
            {isEn ? product.description : (translated?.description || product.description)}
          </Typography>

          <Button 
            variant="contained" 
            onClick={() => dispatch(addToCart(product))}
            size="large"
            startIcon={<AddShoppingCart />}
            sx={{ 
              mt: 4, 
              px: 5, 
              borderRadius: 2, 
              fontWeight: 'bold',
              width: { xs: '100%', sm: 'auto' }
            }}
          >
            {isEn ? 'Add to Cart' : 'افزودن به سبد خرید'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;