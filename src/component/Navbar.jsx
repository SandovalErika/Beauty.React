// import Nav from "react-bootstrap/Nav"
import {Link} from 'react-router-dom'

// const {Link, Item} = Nav

const CustomNav = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            {/* <Link  className="navbar-brand" to='/'>Beauty</Link> */}
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                
              </li>
              <li className="nav-item shop-card">
                <Link className="nav-link"  to="/carrito">Carrito</Link>
                 <i className='material-icons'>shopping_cart</i>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/contacto">Contacto</Link>
              </li>
              
             
            </ul>
          </div>
        </div>
      </nav>


        {/* <Nav >
            <Item>
                <Link to='/'>Inicio</Link>
            </Item>
            <Item>
                <div className= 'shop-card'>
                <Link to="/carrito">Carrito</Link>
                <i className='material-icons'>shopping_cart</i>
                </div>
            </Item>
            <Item>
                <Link to='/contacto'>Contacto</Link>
            </Item>
        </Nav> */}
    </>
    )
}

export default CustomNav
