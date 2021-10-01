import Nav from "react-bootstrap/Nav"

const {Link, Item} = Nav

const CustomNav = () => {
    return(
    <>
        <Nav >
            <Item>
                <Link href="#">Inicio</Link>
            </Item>
            <Item>
                <div className= 'shop-card'>
                <Link  href="#">Carrito</Link>
                <i className='material-icons'>shopping_cart</i>
                </div>
            </Item>
            <Item>
                <Link href="#">Contacto</Link>
            </Item>
        </Nav>
    </>
    )
}

export default CustomNav
