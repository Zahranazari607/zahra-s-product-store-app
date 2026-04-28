import { Box, Typography, Container, Divider, Grid, Stack, IconButton } from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Email, 
  Phone, 
  Storefront, 
  Instagram, 
  Facebook, 
  X 
} from '@mui/icons-material';
import { useSettings } from '../context/SettingsContext';

const Footer = () => {
  const { state } = useSettings();
  const isEn = state.language === 'en';
  const isDark = state.darkMode;

  const socialIconStyle = {
    transition: '0.3s',
    '&:hover': { 
      color: 'primary.main', 
      transform: 'translateY(-4px)' 
    }
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6, 
        px: 2, 
        mt: 'auto', 
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`
      }}
    >
      <Box sx={{
        position: 'absolute', top: -100, right: -100, width: 300, height: 300,
        background: isDark 
          ? 'radial-gradient(circle, rgba(144, 202, 249, 0.05) 0%, transparent 70%)' 
          : 'radial-gradient(circle, rgba(25, 118, 210, 0.05) 0%, transparent 70%)',
        filter: 'blur(50px)', zIndex: 0, pointerEvents: 'none'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} justifyContent="space-between">
          
          <Grid item xs={12} md={5}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
              <Storefront sx={{ color: 'primary.main', fontSize: 30 }} />
              <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: '0.5px' }}>
                {isEn ? "ZAHRA'S SHOP" : "فروشگاه زهرا"}
              </Typography>
            </Stack>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              {isEn 
                ? "Your destination for a curated selection of premium products. We combine quality and technology to redefine your experience."
                : "انتخابی هوشمندانه از محصولات باکیفیت. ما با تلفیق کیفیت و تکنولوژی، تجربه خرید شما را دوباره تعریف می‌کنیم."}
            </Typography>
            
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <IconButton size="small" component="a" href="https://github.com/Zahranazari607" target="_blank" sx={socialIconStyle}>
                <GitHub fontSize="small" />
              </IconButton>
              <IconButton size="small" component="a" href="https://www.linkedin.com/in/zahra-nazari-29aa07333/" target="_blank" sx={socialIconStyle}>
                <LinkedIn fontSize="small" />
              </IconButton>
              <IconButton size="small" component="a" href="https://www.instagram.com/zahra_n6733/" target="_blank" sx={socialIconStyle}>
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton size="small" component="a" href="https://www.facebook.com/profile.php?id=100085397432649" target="_blank" sx={socialIconStyle}>
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton size="small" component="a" href="https://x.com/Zahrana70554346" target="_blank" sx={socialIconStyle}>
                <X fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 3 }}>
              {isEn ? "Contact Details" : "اطلاعات تماس"}
            </Typography>
            <Stack spacing={2.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ bgcolor: 'action.hover', p: 1, borderRadius: '10px', display: 'flex' }}>
                  <Email fontSize="small" color="primary" />
                </Box>
                <Typography 
                  variant="body2" 
                  color="primary" component="a" 
                  href="mailto:nazariz673@gmail.com"
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  nazariz673@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ bgcolor: 'action.hover', p: 1, borderRadius: '10px', display: 'flex' }}>
                  <Phone fontSize="small" color="primary" />
                </Box>
                <Typography variant="body2" color="text.secondary" dir="ltr">0782714769</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, opacity: 0.6 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" color="text.secondary">
            {isEn 
              ? `© ${new Date().getFullYear()} Zahra's Shop. All rights reserved.` 
              : `© ${new Date().getFullYear()} فروشگاه زهرا. تمامی حقوق محفوظ است.`}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            {isEn ? "Developed by Zahra Nazari" : "طراحی و توسعه توسط زهرا نظری"}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;