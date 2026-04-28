import { createContext, useReducer, useContext, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { settingsReducer, initialState } from '../reducers/settingsReducer';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const SettingsContext = createContext();

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
  key: 'muiltr',
});

const themePalettes = {
  blue: { mode: 'light', primary: '#1976d2', background: '#ffffff' },
  darkBlue: { mode: 'dark', primary: '#90caf9', background: '#0a1929' },
  purpleLight: { mode: 'light', primary: '#9c27b0', background: '#f3e5f5' },
  purpleDark: { mode: 'dark', primary: '#ce93d8', background: '#2e003e' },
  pinkLight: { mode: 'light', primary: '#e91e63', background: '#fff5f8' },
  forest: { mode: 'dark', primary: '#ffeb3b', background: '#1b5e20' },
  sunset: { mode: 'dark', primary: '#ffc107', background: '#4e2200' },
  wine: { mode: 'dark', primary: '#ff80ab', background: '#880e4f' },
};

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, {
    ...initialState,
    themeName: localStorage.getItem('themeName') || 'blue'
  });

  const isRtl = state.language === 'fa';

  useEffect(() => {
    localStorage.setItem('themeName', state.themeName);
    document.body.dir = isRtl ? 'rtl' : 'ltr';
  }, [state.themeName, state.language, isRtl]);

  const theme = useMemo(() => {
    const selected = themePalettes[state.themeName] || themePalettes.blue;
    
    const currentMode = state.darkMode ? 'dark' : 'light';

    return createTheme({
      direction: isRtl ? 'rtl' : 'ltr',
      palette: {
        mode: currentMode,
        primary: { main: selected.primary },
        background: {
          default: currentMode === 'dark' ? (selected.mode === 'dark' ? selected.background : '#121212') : selected.background,
          paper: currentMode === 'dark' ? 'rgba(255,255,255,0.05)' : '#ffffff',
        },
      },
      typography: {
        fontFamily: state.language === 'en' ? 'Roboto, Arial' : 'Tahoma, Arial',
      },
    });
  }, [state.themeName, state.language, isRtl, state.darkMode]);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      <CacheProvider value={isRtl ? cacheRtl : cacheLtr}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);