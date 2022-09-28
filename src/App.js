
import ItemDetailContainer from "../src/componente/Detail/ItemDetailContainer";
import { ItemListContainer } from "../src/componente/Items/ItemListContainer";
import NavBar from "../src/componente/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "../src/componente/NavBar/Cart";
import { CartProvider } from "../src/context/CartContext";


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
          </Routes>

        </BrowserRouter>
      </CartProvider>


    </>
  );
}

export default App;
