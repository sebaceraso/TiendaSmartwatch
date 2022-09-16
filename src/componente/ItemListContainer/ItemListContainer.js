import {getItem} from "../mockData";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [productList, setProductList] = useState( [] );
    
    useEffect(() => {
        getItem
        .then((response) => setProductList(response.find((title) => title.id === 3)))
        .catch((error) => console.log(error));
        });
        
    


  return (
    <>
        <ItemList productList={productList} />
    </>
    
  )
}


export default ItemListContainer