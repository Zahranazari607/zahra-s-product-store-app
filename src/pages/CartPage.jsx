import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Button, Paper, Box, Divider } from '@mui/material';
import { Add, Remove, ArrowBack, ArrowForward } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../store/cartSlice';
import { useSettings } from '../context/SettingsContext';
import toast, { Toaster } from 'react-hot-toast';

const CartPage = ({ onBack }) => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { state } = useSettings();
  const isEn = state.language === 'en';

  const handleCheckout = () => {
    const message = isEn 
      ? 'Your order has been placed successfully!' 
      : 'سفارش شما با موفقیت ثبت شد! ممنون از اعتماد شما.';
    
    toast.success(message, {
      duration: 4000,
      position: 'bottom-center',
      style: { borderRadius: '10px', background: '#333', color: '#fff' },
    });

    setTimeout(() => {
      dispatch(clearCart());
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <Container sx={{ mt: 10, textAlign: 'center' }}>
        <Typography variant="h5">
          {isEn ? 'Your cart is empty!' : 'سبد خرید شما خالی است!'}
        </Typography>
        <Button 
          startIcon={isEn ? <ArrowBack /> : <ArrowForward />} 
          onClick={onBack} 
          sx={{ mt: 2 }}
        >
          {isEn ? 'Back to Store' : 'بازگشت به فروشگاه'}
        </Button>
        <Toaster />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Button 
        startIcon={isEn ? <ArrowBack /> : <ArrowForward />} 
        onClick={onBack} 
        sx={{ mb: 2 }}
      >
        {isEn ? 'Back to Store' : 'بازگشت به فروشگاه'}
      </Button>

      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: isEn ? 'left' : 'right' }}>
        {isEn ? 'Your Shopping Cart' : 'سبد خرید شما'}
      </Typography>
      
      <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
        <List disablePadding>
          {items.map((item, index) => (
            <Box key={item.id}>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: isEn ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  py: 2,
                  px: 1,
                  gap: 2
                }}
              >
                <ListItemAvatar sx={{ minWidth: 'auto' }}>
                  <Avatar 
                    src={item.image} 
                    variant="rounded" 
                    sx={{ width: 70, height: 70, bgcolor: 'white', p: 0.5, border: '1px solid #eee' }} 
                  />
                </ListItemAvatar>

                <ListItemText 
                  sx={{ textAlign: isEn ? 'left' : 'right' }}
                  primary={<Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>{item.title}</Typography>} 
                  secondary={
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      {isEn 
                        ? `$${item.price} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
                        : `${item.quantity} عدد × $${item.price} = $${(item.price * item.quantity).toFixed(2)}`
                      }
                    </Typography>
                  } 
                />

                {/* دکمه‌های کنترل تعداد - جایگزین secondaryAction برای جلوگیری از تداخل */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  bgcolor: 'action.hover', 
                  borderRadius: 2,
                  p: 0.5
                }}>
                  <IconButton onClick={() => dispatch(removeFromCart(item.id))} size="small" color="primary">
                    <Remove fontSize="small" />
                  </IconButton>
                  <Typography sx={{ mx: 1.5, fontWeight: 'bold' }}>{item.quantity}</Typography>
                  <IconButton onClick={() => dispatch(addToCart(item))} size="small" color="primary">
                    <Add fontSize="small" />
                  </IconButton>
                </Box>
              </ListItem>
              {index < items.length - 1 && <Divider />}
            </Box>
          ))}
        </List>

        <Box sx={{ 
          mt: 3, 
          pt: 2, 
          borderTop: '2px solid #eee',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: 2 
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {isEn ? 'Total:' : 'قیمت کل:'} ${totalPrice.toFixed(2)}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="error" variant="text" onClick={() => dispatch(clearCart())}>
              {isEn ? 'Clear' : 'خالی کردن'}
            </Button>
            <Button 
              variant="contained" 
              color="success" 
              onClick={handleCheckout}
              sx={{ borderRadius: 2, px: 4, fontWeight: 'bold' }}
            >
              {isEn ? 'Checkout' : 'تسویه حساب'}
            </Button>
          </Box>
        </Box>
      </Paper>
      <Toaster />
    </Container>
  );
};

export default CartPage;