import React from 'react'
import Header from '../component/Header'
import Container from 'react-bootstrap/Container';
import ItemListContainer from '../component/ItemListContainer/ItemListContainer';
import ItemCount from '../component/ItemListContainer/ItemCount';
import ItemsListApi from '../component/ItemListContainer/ItemsListApi';

function Carrito() {
    return (
        <>
            <Header/>
            <Container fluid>
                
                <ItemListContainer />
                <ItemsListApi/>
                {/* <ItemCount /> */}
                {/* <Footer /> */}
            </Container>
        </>
    )
}

export default Carrito
