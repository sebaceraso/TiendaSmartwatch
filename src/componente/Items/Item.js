const Item = ({ title, price, image }) => {
  return (
    <div>
        <img width={"200px"} src={image} alt={title} />
        <h2>{title}</h2>  
        <h3>{price}</h3>  
        <button>Detalle</button>
    </div>
  )
}


export default Item