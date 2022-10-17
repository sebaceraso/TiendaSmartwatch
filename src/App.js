import React from "react";
import ItemDetailContainer from "./componente/Detail/ItemDetailContainer";
import { ItemListContainer } from "./componente/Items/ItemListContainer";
import NavBar from "./componente/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./componente/NavBar/Cart";
import { CartProvider } from './context/CartContext'
import CheckOut from "./componente/CheckOut/CheckOut";

function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalles/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />

          </Routes>

        </BrowserRouter>
      </CartProvider>


    </>
  );
}

export default App;
