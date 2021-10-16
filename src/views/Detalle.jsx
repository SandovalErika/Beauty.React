import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router';
import Header from '../component/Header';
import ItemList from '../component/ItemListContainer/ItemList';
import pedirProductos from '../component/ItemListContainer/pedirProductos';
import stock from '../component/stock';



function Detalle(props) {

    const [identificador] = props.match.params.id;

    const [datos,setDatos] = useState({});

    const getDatos = ()=>{
        fetch('https://fakestoreapi.com/products/'+identificador)
        .then(res=>res.json())
        .then((resp)=>{
            console.log(resp);
            setDatos(resp)
        });
    }
    useEffect(()=>{
        getDatos();
    },[])



    const [producto,setProducto] = useState({})
    const {id} = useParams()

    useEffect(() => {

        const promesa = new Promise((resolve,rejects) => {
            setTimeout(() => {
                const producto = stock.find(producto => producto.id == id)
                resolve(producto)
            },2000)
        })

        promesa.then(producto => setProducto(producto))

    },[id])



    return (
        
        <>
        <Header/>
        <section>

        <ItemList producto={producto}/>
        </section>

        <Container fluid= {true} >
        <div className="col card-details">
        <div className="card card-api" style={{ width: "16rem" }}>
        <img className="card-img-top" src={datos.image} alt="imagen_producto" />
        <div className="card-body">
            <h5 className="card-title">{datos.title}</h5>
            <p className="card-text">
                {datos.description}
            {datos.price}
            </p>
        </div>
        </div>
        </div>
        </Container>
        </>


        
    )
}

export default Detalle
