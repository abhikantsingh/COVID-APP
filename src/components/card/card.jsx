import { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import CountUp from 'react-countup';
import {fetchCountries} from "../../api";

const Card = ({country}) =>
{
    const [data,setData]=useState(null);
    const [date,setDate]=useState(null);
    const [reacovered,setRecovered]=useState(null);
    const [death,setDeath]=useState(null);
  


    useEffect(async () =>
    {
        console.log(country);
     
      const url='https://covid19.mathdro.id/api';
        let response = await fetch(url);
        
        if(country)
       {
           
           response=await fetch(`${url}/countries/${country.country}`)
       }
      
       
        const data=await response.json();
        const confCase=data.confirmed.value;
        const confDate=data.lastUpdate;
        const Recovered=data.recovered.value;
        const confDeath=data.deaths.value;
        setData(confCase);
        setDate(confDate);
        setRecovered(Recovered);
        setDeath(confDeath);
      

    },[country]);

   
    return (
        <div>
       
        <div className="card">
            <div className="infected" style={{textAlign:"center",borderRadius:"10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",margin:"0 10px 0 10px",backgroundColor:"rgba(0, 0, 255,0.5)"}}>
                <h1 style={{fontStyle:"Poppins"}}>Infected</h1>
            </div>
          <div style={{paddingLeft:"10px"}}>
             <CountUp
             start={0}
             end={data}
             duration={2.5}
             seperator=","
             ></CountUp>
          </div>
          <div style={{paddingLeft:"10px"}}>
          <p>{new Date(date).toDateString()}</p>
          </div>
         <h4 style={{paddingLeft:"10px"}}>
             Number of active cases of COVID-19
         </h4>
      </div>
      <div className="card2">
          <div className="recovered"style={{textAlign:"center",borderRadius:"10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",margin:"0 10px 0 10px",backgroundColor:"rgba(0, 255, 0,0.5)"}}>
          <h1>Recovered</h1>
          </div>
      <div style={{paddingLeft:"10px"}}>
      <CountUp
             start={0}
             end={reacovered}
             duration={2.5}
             seperator=","
             ></CountUp>
      </div>
      <div style={{paddingLeft:"10px"}}>
      <p>{new Date(date).toDateString()}</p>
      </div>
      <div style={{paddingLeft:"10px"}}>
     <h4>
     Number of recoveries from COVID-19
     </h4>
  </div>
  </div>
  <div className="card3">
      <div className="deaths" style={{textAlign:"center",borderRadius:"10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",margin:"0 10px 0 10px",backgroundColor:"rgba(255, 0, 0,0.5)"}}>
          <h1>Deaths</h1>
      </div>
  <div style={{paddingLeft:"10px"}}>
  <CountUp
             start={0}
             end={death}
             duration={2.5}
             seperator=","
             ></CountUp>
  </div>
  <div style={{paddingLeft:"10px"}}>
  <p>{new Date(date).toDateString()}</p>
  </div>
 <h4 style={{paddingLeft:"10px"}}>
 Number of deaths caused by COVID-19
 </h4>
</div>
</div>
    )
}

export default Card;