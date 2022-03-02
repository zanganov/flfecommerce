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

import Div from "../Contador/Div"
import ItemCount from "../Contador/ItemCount"



//export default ItemListContainer

//saludo {()=> console.log('saludo')}

function ItemListContainer (){
  return (
  <div>
    <Div/>
    <ItemCount initial={1} stock={5}  />
    </div>
)
}
export default ItemListContainer