import { useEffect, useState } from "react";
import "./country.css";
import {fetchCountries} from "../../api";


const Input = ({handelChanges}) =>
{
   
    const [fetchedCountries,setFetchCountries]=useState([]);
    useEffect(() => {
        const fetchAPI = async () =>
        {
            setFetchCountries(await fetchCountries());
        }
       fetchAPI();
    },[setFetchCountries]);


  
    return (
        <div className="input">
         <select id="country" onChange={(event) => handelChanges(event.target.value)}>
         <option value="global">Global</option>
         {
            fetchedCountries.map((country,i) => 
                <option style={{color:"black"}} key={i} value={country}>{country}</option>)
        }
         </select>
        </div>
    )
}

export default Input;