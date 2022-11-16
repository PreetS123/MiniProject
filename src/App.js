import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Cart } from './Pages/Cart';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className='app'>
      <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
   </Routes>
    </div>
  );
}

export default App;
