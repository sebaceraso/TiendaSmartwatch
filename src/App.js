import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './componente/NavBar';
import ItemCount from './componente/ItemCount/ItemCount';
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';


function App() {
  let greeting = "Bienvenido a la tienda de smartwatch"
  const stock = 10
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="contact" element={<div>Contact</div>} />
            <Route path="detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
