import React from 'react';
import './App.css'
import {BrowserRouter} from 'react-router-dom'

import Routes from './routes/Routes'

//Import fontawesome
import './fontawesome/index'

//Import modalContextProvider from state
import ModalContextProvider from './state/modal-context';

function App() {
  return (
      <ModalContextProvider>
     <BrowserRouter>
        <Routes />
     </BrowserRouter>
     </ModalContextProvider>
  );
}

export default App;
