

import Header from './component/Header';
import Container from 'react-bootstrap/Container';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemCount from './component/ItemCount';

const App = () => {

     return (
        <>
            <Header />
            <Container fluid>
                
                <ItemListContainer />
                <ItemCount />
                {/* <Footer /> */}
            </Container>


        </>
    )
}

export default App