import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../mockData/MockData';
import ItemList from './ItemList';
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoriaId } = useParams();

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "items");
        getDocs(querySnapshot).then((response) => {
            const data = response.docs.map((product) => {
                return { id: product.id, ...product.data() };
            });
            setItems(data);
        });
    };

    useEffect(() => {
        getProducts();
    }, [categoriaId]);

    return (
        <div>
            <ItemList items={items} />
        </div>

    );
};

export default ItemListContainer;

