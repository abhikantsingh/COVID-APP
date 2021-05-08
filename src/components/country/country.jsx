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
      
         <select className="input"style={{width:"400px",border:"0px",backgroundColor:" #ebebeb",outline:"0px"}} onChange={(event) => handelChanges(event.target.value)}>
         <option value="global">Global</option>
         {
            fetchedCountries.map((country,i) => 
                <option style={{backgroundColor:"#ffbf80"}} key={i} value={country}>{country}</option>)
        }
         </select>
       
    )
}

export default Input;