import React, { useEffect, useState } from 'react'
import pedirProductos from './pedirProductos'
import ItemList from './ItemList'
import { useParams } from 'react-router'

const ItemListContainer = () => {


    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
        .then((res) => {
            
            if(categoryId){
                setItems(res.filter(item => item.category === categoryId))
            } else {
                setItems(res)
            }
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
            console.log("Fin del llamado")
        })
    }, [categoryId])


    return (
        <section className="container my-5">
            {
                loading 
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={items}/>
            }
            
        </section>
    )


}

export default ItemListContainer