import {getItem} from "../mockData"
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
      
    const [productList, setProductList] = useState( {} );
    
    useEffect(() => {
    setTimeout(() => {
        getItem
        .then((response) => setProductList(response.find((title) => title.id === 3)))
        .catch((error) => console.log(error));
    },2000  )
        
    }, []);

    
    
  return (
    <div>
        <p> Cargando....</p> :<ItemDetail key={productList.id} productList = {productList}/>
    </div>

  )
}

export default ItemDetailContainer