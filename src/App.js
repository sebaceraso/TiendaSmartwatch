import logo from './logo.svg';
import './App.css';
import NavBar from './componente/NavBar';
import ItemListConteiner from './componente/Items/ItemListContainer';


function App() {
  let greeting = "Bienvenido a la tienda de smartwatch"
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting = { greeting }/>
    </div>
  );
}

export default App;
