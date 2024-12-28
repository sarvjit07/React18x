import { useEffect,useState } from "react";

export function DataBinding(){
    const [userName,setUserName]=useState();
    useEffect(()=>{
        setUserName('Sarvjit');
    },[])
    return(
        <div className="container-fluid">
        <h2>Hello! {userName}</h2>
        </div>
    )
}