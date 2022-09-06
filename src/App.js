import logo from './logo.svg';
import './App.css';
import NavBar from './componente/NavBar';
import ItemListConteiner from './componente/Items/ItemListContainer';
import ItemCount from './componente/ItemCount/ItemCount';


function App() {
  let greeting = "Bienvenido a la tienda de smartwatch"
  const stock = 10
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting = { greeting }/>
      <ItemCount stock={stock}/>
    </div>
  );
}

export default App;
