import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import IndexProducts from './pages/Products/IndexProducts';
import FormProducts from './pages/Products/FormProducts';
import ExemploAxios from './pages/EstudoBibliotecas/ExemploAxios';

function App() {
  return (
    <>
      <div className="App">
        <ExemploAxios />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart />} />

            <Route path='/products' element={<IndexProducts />} />
            <Route path='/products/new' element={<FormProducts />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
