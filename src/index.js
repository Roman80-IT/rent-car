import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Manrope/static/Manrope-Bold.ttf';
import './fonts/Manrope/static/Manrope-Medium.ttf';
import './fonts/Manrope/static/Manrope-Regular.ttf';
import './fonts/Manrope/static/Manrope-SemiBold.ttf';
import './fonts.css';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <BrowserRouter basename="/rent-car"> */}
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
