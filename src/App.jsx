import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './views/Home';
import Carrito from './views/Carrito';
import Contacto from './views/Contacto';
import Detalle from './views/Detalle';


const App = () => {

     return (
        <>

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/carrito" component={Carrito} />
                    <Route exact path="/carrito/producto/:id" component={Detalle} />
                    <Route exact path="/contacto" component={Contacto} />
                    
                    

                </Switch>

            </BrowserRouter>        
            


        </>
    )
}

export default App