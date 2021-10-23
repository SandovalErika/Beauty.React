import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router';
import Header from '../component/Header';
import stock from '../component/stock';



function Detalle(props) {

    const [datos,setDatos] = useState({})
    const {id} = useParams()
    

    useEffect(() => {

        const promesa = new Promise((resolve,rejects) => {
            setTimeout(() => {
                const datos = stock.find(datos => datos.id == id)
                resolve(datos)
            },2000)
        })

        promesa.then(datos => setDatos(datos))

    },[id])



    return (
        
        <>
        <Header/>
        

        <Container fluid= {true} >
        <div className="col card-details">
        <div className="card card-api" style={{ width: "16rem" }}>
        <img className="card-img-top" src={datos.image} alt="imagen_producto" />
        <div className="card-body">
            <h5 className="card-title">{datos.title}</h5>
            <p className="card-text">
                {datos.description} 
            </p>
            <p className="price">${datos.price}</p>
            <button className="btn btn-primary">Finalizar compra</button>
        </div>
        </div>
        </div>
        </Container>
        </>


        
    )
}

export default Detalle
