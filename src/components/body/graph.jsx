import React,{useState,useEffect} from 'react';
import {Bar,Line} from "react-chartjs-2";
import "./graph.css";
 import {fetchDailyData} from "../../api";
const Graph = () =>
{
    const [dailyData,setDailyData]=useState([]);

    useEffect(() =>
    {
      const fetchAPI= async () =>
      {
          setDailyData(await fetchDailyData());
      }
    
      fetchAPI();
    });
    
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
    
    return (
      <div className="chart">
      {lineChart}
      </div>
    )
        }

export default Graph;