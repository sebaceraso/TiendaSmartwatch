import './App.css';
import NavBar from './componente/NavBar';
import ItemCount from './componente/ItemCount/ItemCount';
import ItemListContainer from './componente/ItemListContainer/ItemListContainer';



function App() {
  let greeting = "Bienvenido a la tienda de smartwatch"
  const stock = 10
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount stock={stock}/>
    </div>
  );
}

export default App;
