import React from 'react'
import "./Item.css" 

export default function ItemListConteiner( { greeting } ) {
  return (
        <div className='greeting'>
            <h2>
                { greeting }
            </h2>

        </div>
  )
}