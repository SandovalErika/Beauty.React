import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext';
import ItemCount from '../component/ItemListContainer/ItemCount';
import pedirProductos from '../component/ItemListContainer/pedirProductos';
// import deleteFromCart from '../CartContext'

import Navbar from '../component/Navbar'



function Carrito() {
    const [carrito]=useContext(CartContext);

    const [total,setTotal]=useState(0);

    useEffect(() => {
        let tot = 0;
        carrito.map((item)=>{
            tot = tot + item.price
        });

        setTotal(tot)

    }, [])

    function borrar(index){
        let temp = carrito;
        temp.splice(index,1)
        setTotal(temp);
    }

    const onAdd = (cantidad) => {
        console.log("Item Detail")
        console.log(pedirProductos)
        console.log(cantidad)
        console.log(cantidad)
        
    }


    return (<>
        <Navbar/>
        <div className="container shoppingCart">
            {carrito && carrito.map((item,index)=>{
                return (
                    <ul className="list-group liCount" key={index}>
                        <li  className="list-group-item ">
                        <div>
                            <div className="detail-img-account">
                                <img src={item.image} width='100px' alt=""/>
                                <ItemCount stock={pedirProductos.stock} onAdd={onAdd}/>
                            </div>
                            <div className='divDelete'>
                                
                                {/* {carrito.map((item) => (
                                    <div key={item.id}>
                                    <h2>{item.item.name}</h2>

                                    <button type="button" class="btn btn-danger btnCard" onClick={() => deleteFromCart(item)}><i className='material-icons'>close</i></button>
                                    </div>
                                ))} */}
                                
                                
                                
                                <button type="button" class="btn btn-danger btnCard" onClick={()=>{borrar(index)}}><i className='material-icons'>close</i></button>
                            </div>
                        </div>
                        </li>
                        <li className="list-group-item">{item.title}</li>
                        <li className="list-group-item">{item.price}</li>
                        
                    </ul>
                )
            })}
            <h3>Total a pagar: {total.toFixed(2)}</h3>
            <button type="button" class="btn btn-secondary btnFinalize"><h4>Finalizar Compra</h4></button>
            
        </div>
        </>
    )
}

export default Carrito

