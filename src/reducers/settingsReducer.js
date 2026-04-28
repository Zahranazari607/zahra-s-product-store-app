export const initialState = {
  darkMode: false,
  view: 'grid',
  language: 'en',
  themeName: localStorage.getItem('themeName') || 'blue',
};

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const nextTheme = state.themeName === 'blue' ? 'darkBlue' : 'blue';
      localStorage.setItem('themeName', nextTheme);
      return { 
        ...state, 
        darkMode: !state.darkMode, 
        themeName: nextTheme 
      };
    
    case 'SET_THEME':
      localStorage.setItem('themeName', action.payload);
      return { 
        ...state, 
        themeName: action.payload,
        darkMode: action.payload.toLowerCase().includes('dark') || ['forest', 'sunset', 'wine'].includes(action.payload)
      };

    case 'SET_VIEW':
      return { ...state, view: action.payload };

    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };

    default:
      return state;
  }
};