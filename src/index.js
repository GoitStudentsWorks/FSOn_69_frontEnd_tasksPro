import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import useAuth from 'hooks/useAuth.js';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'components/App';

import './GlobalStyles.js';

import { darkTheme, lightTheme, violetTheme } from './themes/theme';

import './index.css';

const ThemedApp = () => {
  const { theme } = useAuth();

  const themeChoice = React.useMemo(() => {
    switch (theme) {
      case 'Dark':
        return darkTheme;
      case 'Light':
        return lightTheme;
      case 'Violet':
        return violetTheme;
      default:
        return darkTheme;
    }
  }, [theme]);

  return (
    <ThemeProvider theme={themeChoice}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/FSOn_69_frontEnd_tasksPro">
          <ThemedApp />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
