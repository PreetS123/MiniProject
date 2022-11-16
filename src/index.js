import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <ChakraProvider>
      <BrowserRouter>
      <Context>
      <App />
      </Context>
      </BrowserRouter>
    </ChakraProvider>
  </>
);

