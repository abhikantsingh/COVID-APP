import { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";
import CountUp from 'react-countup';

const Card = () =>
{
    const [data,setData]=useState(null);
    const [date,setDate]=useState(null);
    const [reacovered,setRecovered]=useState(null);
    const [death,setDeath]=useState(null);

    useEffect(async () =>
    {
        const response=await fetch("https://covid19.mathdro.id/api");
        const data=await response.json();
        const confCase=data.confirmed.value;
        const confDate=data.lastUpdate;
        const Recovered=data.recovered.value;
        const confDeath=data.deaths.value;
        setData(confCase);
        setDate(confDate);
        setRecovered(Recovered);
        setDeath(confDeath);
    },[]);
    return (
        <div>
       
        <div className="card">
            <div style={{textAlign:"center"}}>
                <h1>Infected</h1>
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
          <div style={{textAlign:"center"}}>
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
      <div style={{textAlign:"center"}}>
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