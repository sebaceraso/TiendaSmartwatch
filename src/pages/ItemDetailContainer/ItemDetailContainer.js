import { useEffect, useState } from "react";
import ItemDetail from "../../componente/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { data } from "../../componente/mockData";



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();

    const getProduct = () => {
        setProduct(data.filter(product => product.id === id))
  };


    useEffect(() => {
        getProduct();
    }, [id])
  
    return (
    <div>
        Estoy en el ItemDetail
        {product ? 
        (<ItemDetail product={product} />)
        : (<h2>Obteniendo detalle</h2>) }

    </div>
  );
};

export default ItemDetailContainer