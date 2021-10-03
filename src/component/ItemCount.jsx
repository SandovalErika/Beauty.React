import { Container } from "react-bootstrap"
import { useState } from 'react';

const ItemCount = () => {

    const [contador, setContador] = useState(1)
    
    // useEffect(() => {


    // })
    const aumentar = () => {
        
        // let stock = [1,2,3,4,5,6]
        setContador(contador + 1)
        
        // if (stock >= 1 && stock <= 5){
        //     setContador()
        // } 
        console.log(contador);
    }

    const disminuir = () => {
        setContador(contador - 1);
        console.log(contador);
    }

    return (
        <>
            <Container fluid>
                <p>El contador va: {contador} </p>
                <button onClick={aumentar} >Sumar</button>
                <button onClick={disminuir} >Restar</button>


            </Container>
        </>

    )



}

export default ItemCount