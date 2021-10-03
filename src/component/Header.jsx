import  CustomNav from './Navbar';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const {Brand, Collapse, Toggle} = Navbar

const Header = () => {
    return(
    <>
        <Navbar as='header' expand='md' bg= 'light' variant='light' >
            <Container fluid= {true} >
            <Brand>
            <h1>Beauty</h1>
            </Brand>
            <Toggle/>
            <Collapse>    
                <CustomNav />
            </Collapse>
            </Container>

        </Navbar>
    </>
    )
}

export default Header
