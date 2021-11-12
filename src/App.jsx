import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Contacto from "./views/Contacto";
import Detalle from "./views/Detalle";
import { CartProvider } from "./CartContext";
import Checkout from "./views/Checkout";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/stock/:id" component={Detalle} />
            <Route exact path="/detalle/:categoryId" component={Home} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/carrito" component={Carrito} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
