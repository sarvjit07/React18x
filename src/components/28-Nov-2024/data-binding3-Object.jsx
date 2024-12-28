import { useEffect, useState} from "react";

export function DataBinding6(){
    const [product,setProduct]=useState({})
    useEffect(()=>{
       setProduct({Name:'Samsung TV', Price:56000}); 
    },[])
    return(
        <div className="container-fluid">
        <h2>Product Details</h2>
        <dl>
        <dt>Name</dt>
        <dd>{product.Name}</dd>
        </dl>
        <h2>Keys</h2>
        <ul>
        {
            Object.keys(product).map(key=><li key={key}>
                {key}:{product[key]}</li>)
        }
        </ul>
        </div>
    )
}