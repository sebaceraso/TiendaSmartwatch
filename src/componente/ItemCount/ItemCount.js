import { useState } from "react"
import "./ItemCount.css"
import "./w26.jpg"


const ItemCount = (props) => {
     
    const [items, setItems] = useState(0)

    const sumar = () => items < props.stock ? setItems(items + 1) : alert("No tengo mas sotck")
    const resta = () => items > 0 ? setItems(items - 1) : alert("No se pueden introducir valores negativos")
    
  return (
        <>
            <h3>Smartwatch W26+</h3>
            <img src="w26" alt="smartwatch w26"></img>
            <div className="carrito">
                <button onClick={sumar}>+</button>
                <p>Agregar al carrito {items}</p>
                <button onClick={resta}>-</button>       
            </div>
        </>
    
    )
}

export default ItemCount