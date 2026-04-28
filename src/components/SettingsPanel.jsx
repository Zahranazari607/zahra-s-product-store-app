import { Drawer, Box, Typography, Switch, FormControlLabel, Divider, ToggleButton, ToggleButtonGroup, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { ViewModule, ViewList, Palette } from '@mui/icons-material';
import { useSettings } from '../context/SettingsContext';

const SettingsPanel = ({ open, onClose }) => {
  const { state, dispatch } = useSettings();
  const isEn = state.language === 'en';

  const themes = [
    { id: 'blue', name: isEn ? 'Blue Sky' : 'آبی آسمانی' },
    { id: 'purpleLight', name: isEn ? 'Lavender' : 'یاسی روشن' },
    { id: 'purpleDark', name: isEn ? 'Deep Purple' : 'بنفش تیره' },
    { id: 'pinkLight', name: isEn ? 'Soft Pink' : 'صورتی ملایم' },
    { id: 'forest', name: isEn ? 'Forest Gold' : 'سبز و طلایی' },
    { id: 'sunset', name: isEn ? 'Fire Sunset' : 'نارنجی خورشیدی' },
    { id: 'wine', name: isEn ? 'Rose Wine' : 'قرمز شرابی' },
  ];

  return (
    <Drawer 
      anchor="left" 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '0 20px 20px 0',
          boxShadow: '5px 0 15px rgba(0,0,0,0.1)'
        }
      }}
    >
      <Box 
        sx={{ width: 300, p: 3 }} 
        dir={isEn ? 'ltr' : 'rtl'}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          {isEn ? 'Settings' : 'تنظیمات'}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
          {isEn ? 'Language' : 'زبان سیستم'}
        </Typography>
        <ToggleButtonGroup
          value={state.language}
          exclusive
          onChange={(e, nextLang) => nextLang && dispatch({ type: 'SET_LANGUAGE', payload: nextLang })}
          fullWidth
          size="small"
          sx={{ mb: 3 }}
        >
          <ToggleButton value="en">English</ToggleButton>
          <ToggleButton value="fa">فارسی</ToggleButton>
        </ToggleButtonGroup>

        <FormControlLabel
          control={
            <Switch 
              checked={state.darkMode} 
              onChange={() => dispatch({ type: 'TOGGLE_THEME' })} 
            />
          }
          label={isEn ? "Dark Mode" : "حالت شب"}
          sx={{ mb: 2, display: 'block' }}
        />

        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
          <Palette fontSize="small" /> {isEn ? 'Color Palette' : 'پالت رنگی'}
        </Typography>
        <FormControl fullWidth size="small" sx={{ mb: 3 }}>
          <Select
            value={state.themeName}
            onChange={(e) => dispatch({ type: 'SET_THEME', payload: e.target.value })}
            sx={{ borderRadius: 2 }}
          >
            {themes.map((t) => (
              <MenuItem key={t.id} value={t.id}>
                {t.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
          {isEn ? 'Display View' : 'نوع نمایش محصولات'}
        </Typography>
        <ToggleButtonGroup
          value={state.view}
          exclusive
          onChange={(e, nextView) => nextView && dispatch({ type: 'SET_VIEW', payload: nextView })}
          fullWidth
          size="small"
        >
          <ToggleButton value="grid">
            <ViewModule sx={{ ml: 1 }} /> 
            {isEn ? 'Grid' : 'شبکه‌ای'}
          </ToggleButton>
          <ToggleButton value="list">
            <ViewList sx={{ ml: 1 }} /> 
            {isEn ? 'List' : 'لیستی'}
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Drawer>
  );
};

export default SettingsPanel;