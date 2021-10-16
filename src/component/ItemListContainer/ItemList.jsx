import React from 'react'
import Item from './Item'

const ItemList = ( {productos = []} ) => {


    return (
        <div className="container">
            <h2>Bienvenidos a Beauty Commerce</h2>
            <hr/>

            <div className="row">
                { productos.map((item) => <Item {...item} key={item.id}/> )}
                
            </div>
        </div>
    )
}

export default ItemList