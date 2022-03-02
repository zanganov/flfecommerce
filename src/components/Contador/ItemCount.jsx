import {useState} from 'react'

//let count = 1
const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount( count + 1 )
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }

    const agregar = () => {
        onAdd( count )
                
    }
    function onAdd (){
        console.log (count)
    }

    return (
        <div>
            <button onClick={restar}> - </button>
            <label> { count } </label> 
            <button onClick={sumar}> + </button><br />
            <button onClick={ agregar }>AGREGAR</button>
            
        </div>
    )
}


export default ItemCount

