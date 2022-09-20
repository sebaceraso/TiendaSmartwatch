
export const ItemDetail = ({ product }) => {
  return (
    <div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
    </div>
  );
};

export default ItemDetail