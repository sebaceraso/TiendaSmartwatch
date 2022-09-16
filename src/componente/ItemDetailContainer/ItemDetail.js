import React from 'react'

const ItemDetail = (productList) => {
  const {id, title, price, image} = productList



  return (
    <>
      <div className='card' style={{width:'50rem', backgroundColor:"brown", color: "pink", padding:'5px', margin: "5px" }}>

        <div className='cardBody' style={{display:'flex'}}>
          <img src={image} alt={title} style={{width: '10rem'}}/>
           <p className='cardText'>{title}</p>
           <p className='cardText'>${price}</p>
        </div>
      </div>

    </>
  )
}

export default ItemDetail