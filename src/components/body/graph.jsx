import React,{useState,useEffect} from 'react';
import {Bar,Line} from "react-chartjs-2";
import "./graph.css";
 import {fetchDailyData} from "../../api";
const Graph = ({country}) =>
{
    const [dailyData,setDailyData]=useState([]);
    const [data,setData]=useState(null);
    const [date,setDate]=useState(null);
    const [reacovered,setRecovered]=useState(null);
    const [death,setDeath]=useState(null);


    useEffect( async () =>
    {
      const fetchAPI= async () =>
      {
          setDailyData(await fetchDailyData());
      }
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
    
    
      fetchAPI();
    },[country]);
    
   const lineChart = (
       dailyData.length
       ? (
           <Line 
           data={{
               labels:dailyData.map(({date}) => date),
               datasets:[{
                   data:dailyData.map(({confirmed}) => confirmed),
                   label:"Infected",
                   borderColor:"#3333ff",
                   fill:true,
               },{
                data:dailyData.map(({deaths}) => deaths),
                label:"Deaths",
                borderColor:"red",
                backgroundColor:"rgba(255,0,0,0.5)",
                fill:true,
               }],
           }}
           />):null
   )
   const barChart =
   (
     data ? (
               <Bar 
            data={{ 
                labels:["INFECTED","RECOVERED","DEATHS"],
                datasets:[
                    {
                        label:`Corona Case in ${country.country}`,
                        data: [data,reacovered,death],
                        backgroundColor: [
                           'rgba(0, 0, 255,0.5)',
                            'rgba(0, 255,0,0.5)',
                            'rgba(255,0,0,0.5)'
                        ],
                        borderColor: [
                            'rgba(0, 0, 255,0.5)',
                            'rgba(0, 255,0,0.5)',
                            'rgba(255,0,0,0.5)'
                        ],
                    },
                ],
            }}
           
            />):null

   )
    
    return (
      <div className="chart">
  {country ? barChart:lineChart}
      </div>
    )
        }

export default Graph;