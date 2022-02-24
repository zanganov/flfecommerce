import SaludoApp from "./SaludoApp"

function ItemListContainer( { saludo } ) {
  return (
    <div>
        <SaludoApp saludo={'Saludos Musicales'}  /> 
        <h2>{saludo}</h2>
    </div>
  )
}

export default ItemListContainer

//saludo {()=> console.log('saludo')}
