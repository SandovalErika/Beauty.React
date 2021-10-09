import React, { useEffect, useState } from 'react'
import ItemsApi from './ItemsApi';


function ItemsListApi() {

    const [datos,setDatos]=useState([]);

    const leerDatos=()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((resp)=>{
            console.log(resp);
            setDatos(resp)
        });
    }

    useEffect(() => {
        leerDatos();
    },[])

    return (
        <div className="container">
            <div className="row">
                {datos.length>0 && datos.map((dato)=>{
                    return <ItemsApi id={dato.id} category={dato.category} image={dato.image} price={dato.price} title={dato.title}/>
                })
                }
            </div>
            
        </div>
    )
}

export default ItemsListApi
