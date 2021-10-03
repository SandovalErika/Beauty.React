
import { useState } from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';

const App = () => {

    const [contador, setContador] = useState(0)

    // useEffect(() => {


    // })

    //const resultado = useState(0)
    //let [contador, setContador] = resultado 

    // let  contador = 0
    //let contador = resultado[0]
    //let setContador = resultado[1]

    // console.log(resultado);

    const aumentar = () => {
        // contador = contador + 1; 
        setContador(contador + 1)
    }

    return (
        <>
            <Header />
            <Container fluid>
                <p>El contador va: {contador} </p>
                <button onClick={aumentar} >Sumar</button>
                {/* <Main />
            <Footer /> */}
            </Container>


        </>
    )
}

export default App