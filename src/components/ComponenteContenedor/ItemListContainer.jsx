//import SaludoApp from "./SaludoApp"
//
//function ItemListContainer( { saludo } ) {
//  return (
//    <div>
//      <SaludoApp saludo={'Saludos Musicales'}  /> 
//        <h2>{saludo}</h2>
//    </div>
//  )
//}

//export default ItemListContainer

//saludo {()=> console.log('saludo')}

//import Div from "../Contador/Div"   DESAFIO 5
//import ItemCount from "../Contador/ItemCount"

//function ItemListContainer (){
  //return (
  //<div>
    //<Div/>
    //<ItemCount initial={1} stock={5}  />
      //  </div>
//)
//}
//export default ItemListContainer




//setTimeout 2000);
//task.then(
  //(response) => console.log(response),
  //(error) => console.log(error),
//);

import { useState } from "react"
import { useEffect } from "react"
import { getFetch } from "./ItemList"

function ItemListContainer() {
const [guitarras, setGuitarras] = useState ([])

useEffect(() => {
getFetch
.then((respuesta) => setGuitarras (respuesta)) 
.catch(err => console.log(err))

},[])
 
  return (
    <div>
      { guitarras.map(guitarra =><li key={guitarra.id}>{guitarra.price}{guitarra.title}{guitarra.id}</li>)}
    </div>
  )
}

export default ItemListContainer