import React from 'react';
import './App.css'
import {BrowserRouter} from 'react-router-dom'

import Routes from './routes/Routes'

//Import fontawesome
import './fontawesome/index'

//Import modalContextProvider from state
import ModalContextProvider from './state/modal-context';

//Import AuthContextProvider from state

import AuthContextProvider from './state/auth-context';

function App() {
  return (
     <AuthContextProvider>
      <ModalContextProvider>
     <BrowserRouter>
        <Routes />
     </BrowserRouter>
     </ModalContextProvider>
     </AuthContextProvider>
  );
}

export default App;
