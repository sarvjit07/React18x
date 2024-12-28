import { useEffect,useState } from "react";
export function DataBinding3(){
    const [stock,setStock]=useState(true);
    useEffect(()=>{
        setStock(false);
    },[])

    return(
        <div className="container-fluid">
        <h2> Stock : {(stock==true)?"Available":"Out of Stock"}</h2>
        </div>
    )
}