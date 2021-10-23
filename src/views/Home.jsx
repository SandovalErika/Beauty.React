import React from 'react'
import Header from '../component/Header'
import Container from 'react-bootstrap/Container';
import ItemListContainer from '../component/ItemListContainer/ItemListContainer';
import ItemsListApi from '../component/ItemListContainer/ItemsListApi';

function Home() {
    return (
        <>
            <Header/>
            <Container fluid>
                
                <ItemListContainer />
                
            
                {/* <Footer /> */}
            </Container>
        </>
    )
}

export default Home
