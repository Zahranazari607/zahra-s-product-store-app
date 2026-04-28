import { useState, useMemo } from 'react';
import { Container, Typography, Grid, CircularProgress, Alert, Box, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { useProducts } from './hooks/useProducts';
import ProductCard from './components/ProductCard';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';
import { useSettings } from './context/SettingsContext';
import { productTranslations } from './utils/translations';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  const { data: products, isLoading, isError } = useProducts();
  const { state } = useSettings();
  const isEn = state.language === 'en';

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, category, searchQuery]);

  const handleOpenDetails = (id) => {
    setSelectedProductId(id);
    setShowCart(false);
  };

  const handleBackToHome = () => {
    setSelectedProductId(null);
    setShowCart(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        onCartClick={() => { setShowCart(true); setSelectedProductId(null); }} 
        onHomeClick={handleBackToHome} 
      />

      <Box sx={{ flexGrow: 1 }}> 
        {showCart ? (
          <CartPage onBack={handleBackToHome} />
        ) : selectedProductId ? (
          <ProductDetails productId={selectedProductId} onBack={handleBackToHome} />
        ) : (
          <Container maxWidth="lg" sx={{ mt: 4, pb: 5 }}>
            <Box sx={{ mb: 4, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }} dir={isEn ? 'ltr' : 'rtl'}>
              <TextField
                fullWidth
                label={isEn ? "Search products..." : "جستجوی محصولات..."}
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FormControl sx={{ minWidth: 220 }}>
                <InputLabel>{isEn ? "Category" : "دسته‌بندی"}</InputLabel>
                <Select
                  value={category}
                  label={isEn ? "Category" : "دسته‌بندی"}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value="all">{isEn ? "All" : "همه محصولات"}</MenuItem>
                  <MenuItem value="electronics">{isEn ? "Electronics" : "لوازم الکترونیکی"}</MenuItem>
                  <MenuItem value="jewelery">{isEn ? "Jewelery" : "جواهرات"}</MenuItem>
                  <MenuItem value="men's clothing">{isEn ? "Men's Clothing" : "پوشاک مردانه"}</MenuItem>
                  <MenuItem value="women's clothing">{isEn ? "Women's Clothing" : "پوشاک زنانه"}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
              {isEn ? 'Our Collection' : 'مجموعه محصولات ما'}
            </Typography>

            {isLoading && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <CircularProgress size={60} />
              </Box>
            )}
            
            {isError && (
              <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Alert severity="error" variant="filled">
                  {isEn ? 'Error loading products!' : 'خطا در بارگذاری محصولات!'}
                </Alert>
              </Box>
            )}

            <Grid container spacing={3} alignItems="stretch">
              {filteredProducts?.map((product) => {
                const translated = productTranslations[product.id];
                const displayProduct = {
                  ...product,
                  title: isEn ? product.title : (translated?.title || product.title)
                };

                return (
                  <Grid 
                    item 
                    key={product.id} 
                    xs={12} 
                    sm={state.view === 'grid' ? 6 : 12} 
                    md={state.view === 'grid' ? 4 : 12} 
                    sx={{ 
                      display: 'flex', 
                      flexGrow: 1, 
                      flexBasis: state.view === 'grid' 
                        ? { md: '33.33%', sm: '50%', xs: '100%' } 
                        : '100%' 
                    }}
                  >
                    <Box onClick={() => handleOpenDetails(product.id)} sx={{ cursor: 'pointer', width: '100%' }}>
                      <ProductCard product={displayProduct} isListView={state.view === 'list'} />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            {!isLoading && filteredProducts.length === 0 && (
               <Typography variant="h6" align="center" sx={{ mt: 5, color: 'text.secondary' }}>
                  {isEn ? "No products found matches your search." : "محصولی مطابق با جستجوی شما پیدا نشد."}
               </Typography>
            )}
          </Container>
        )}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;