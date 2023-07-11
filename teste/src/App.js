import React from 'react';
import { ToastContainer } from 'react-toastify';
import Notifications from './pages/Notifications';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Notifications />
    </>
  );
}

export default App;
