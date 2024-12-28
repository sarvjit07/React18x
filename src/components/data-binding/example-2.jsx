import { useEffect,useState } from "react";
export function DataBinding2(){
    const [price,setPrice]=useState(0);
    useEffect(()=>{
        setPrice(60000);
    },[])
    return(
        <div className="container-fluid">
        <h2>{price.toLocaleString('en-in',{style:"currency",currency:'INR'})}</h2>
        </div>
    )
}