import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Header from '../component/Header';

// import ItemList from '../component/ItemListContainer/ItemList'
// import pedirProductos from '../component/ItemListContainer/pedirProductos'
// import {Card} from 'react-bootstrap'

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


    // const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(false)

    // useEffect(()=>{
    //     setLoading(true)

    // pedirProductos()
    //     .then((res) => {
    //         setItems(res)
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(() => {
    //         setLoading(false)
    //         console.log("Fin del llamado")
    //     })
    // }, [])



    return (
        // <section className="container my-5">
        //     {
        //         loading 
        //             ? <h2>Cargando...</h2>
        //             : <ItemList productos={items[4]}/> 
        //     }
        // </section>
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
            {datos.category} - {datos.price}
            </p>
        </div>
        </div>
        </div>
        </Container>
        </>



        //  <Card style={{ width: '18rem' }} className="m-3">
        //     <Card.Img variant="top" src={datos.img} />
        //     <Card.Body>
        //         <Card.Title>{datos.name}</Card.Title>
        //         <Card.Text>{datos.description}</Card.Text>
        //         <Card.Text>Precio: ${datos.price}</Card.Text>

        //         {/* <Button><Link className="btn btn-primary" to={'/carrito/stock/'+id}>VER</Link></Button> */}
        //     </Card.Body>
        // </Card>


        
    )
}

export default Detalle
