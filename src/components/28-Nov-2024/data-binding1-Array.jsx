import { useEffect,useState } from "react";

export function DataBinding4(){
    const [categories,setCategories]=useState(["All",'Electronics','Footwear']);
    useEffect(()=>{

    },[])
    return(
        <div className="container-fluid">
        <header>
        <nav className="btn-group">
        {
            categories.map(category=><button key={category} className="btn btn-danger">{category}</button>)
        }
        </nav>
        </header>
        <h2>Categories</h2>
        <ul>
        {
            categories.map(category=><li key={category}>{category}</li>)
        }
        </ul>
        <h2>Select Category</h2>
        <select>
        {
            categories.map((category,index)=><option key={index} value={category}>{category}</option>)
        }
        </select>
        <h2>Select Categories</h2>
        <ul className="list-unstyled">
        {
            categories.map(category=><li key={category}>
                <input type="checkbox" value={category}/> <label>{category}</label>
                </li>)
        }
        </ul>
        </div>
    )
}