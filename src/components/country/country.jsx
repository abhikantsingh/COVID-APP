import { useState } from "react";
import "./country.css";

const Input = () =>
{
    const [dataInput,setData]=useState("");

    return (
        <div className="input" style={{border:"none"}}>
            <input placeholder="COUNTRY NAME" value=""></input>
            <button></button>
            <h3>{dataInput}</h3>
        </div>
        
    )
}

export default Input;