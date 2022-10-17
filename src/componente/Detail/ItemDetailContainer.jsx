import { db } from "../firebase/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    // firebase
    useEffect(() => {
        const coleccionProductos = collection(db, 'items')
        const referenciaDoc = doc(coleccionProductos, id)

        getDoc(referenciaDoc)
            .then((result)=> {
                setProducts({
                    id: result.id,
                    ...result.data()
                })
            })
            .catch((error)=> console.log('error'))
            .finally(()=>setLoading(false))
    },[id])


    return (
        <>
        <div className='d-flex justify-content-center flex-wrap align-content-around m-1'>
        {loading ? 'Cargando...':<ItemDetail key={products.id} products={products} />}
        </div>
            
        </>
    )
}

export default ItemDetailContainer;