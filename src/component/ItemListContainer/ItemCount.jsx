import React from 'react'

// const ItemCount = ({stock,initial = 1,onAdd}) => {

//     const [count, setCount] = useState(initial);

//     const increment = () => {
//             setCount(count + 1);
        
//     }

//     const decrement = () => {
//         setCount(count - 1);
//     }

//     const confirm = () => {
//         onAdd(count)
//     }

//     return ( 
//         <div>
//             <h4>Cantidad</h4>
            
//             <div className='count'>
//             <button type="button" class="btn btn-secondary btnCount" onClick={increment}>+</button>
//             <p className="btnCount">{count}</p>
//             <button type="button" class="btn btn-secondary btnCount" onClick={decrement}>-</button>
//             <button type="button" class="btn btn-success btnCount" onClick={confirm}><i className='material-icons'>done</i></button>
//             </div>
//         </div>
//     );
// }



 
// export default ItemCount;

const ItemCount = ({cantidad, modify, max}) => {

    

     const handleRestar = () => {
        if (cantidad > 0)  {
            modify(cantidad - 1)
        }
    }
    

    const handleSumar = () => {
        if (cantidad < max) {
            modify(cantidad + 1)
        }
    }
    

    return(
        <div className='styleCount'>
            <button
                onClick={handleRestar}
                className={`btn ${cantidad === 0 ? "btn-danger desactivado" : "btn-primary"}`}
            >
                -
            </button>

            <span className="mx-3">{cantidad}</span>

            <button
                onClick={handleSumar}
                className={`btn ${cantidad === max ? "btn-danger desactivado" : "btn-primary"}`}
            >
                +
            </button>
        </div>
    )

}

export default ItemCount;