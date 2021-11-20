import React from 'react';
import './App.css'
import {BrowserRouter} from 'react-router-dom'

import Routes from './routes/Routes'

//Import fontawesome
import './fontawesome/index'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes />
     </BrowserRouter>
    </div>
  );
}

export default App;
