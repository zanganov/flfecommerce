function Item ({guitarras}){
    return (
        <div> 
            <li> {guitarras.id }</li>
            <li> {guitarras.title} </li>
            <li> {guitarras.price}</li>
            <li> {guitarras.pictureUrl}</li>
        </div>
    )
}
 
 export default Item 

 //<div key={guitarras.id}>
   //         <div>{`$ {guitarras.title}`} </div>
     //       <div>{`$ {guitarras.price}`}</div>
       //     <div>{`$ {guitarras.pictureUrl}`} </div> 