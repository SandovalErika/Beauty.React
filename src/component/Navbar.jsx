import { NavLink} from 'react-router-dom'
import { CardWidget } from './ItemListContainer/CardWidget'
import ItemCount from './ItemListContainer/ItemCount'



const CustomNav = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
            {/* <Link  className="navbar-brand" to='/'>Beauty</Link> */}
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
            <NavLink className='navLink'  activeclassName={"activeLink"} exact to="/">Productos</NavLink>
            <NavLink className='navLink' activeclassName={"activeLink"} exact to="/detalle/cara">Cara</NavLink>
            <NavLink className='navLink' activeclassName={"activeLink"} exact to="/detalle/ojos">Ojos</NavLink>
            <NavLink className='navLink' activeclassName={"activeLink"} exact to="/detalle/accesorios">Accesorios</NavLink>
            <NavLink className='navLink' activeclassName={"activeLink"} exact to="/contacto">Contacto</NavLink>
            <NavLink className='navLink' activeclassName={"activeLink"} exact to="/carrito"><CardWidget/><h3>{ItemCount }</h3> </NavLink>
                 
            </div>
        </div>
      </nav>


       
    </>
    )
}

export default CustomNav
