import axios from "axios";

const url="https://covid19.mathdro.id/api";
const url2="https://covid19.mathdro.id/api/daily";
/*export const fetchData = async () =>
{
    try{
     const {data} = await axios.get(url);

     const modifiedData ={
         confirmed:data.confirmed,
         recovered:data.recovered,
         deaths:data.deaths,
         lastUpdate:data.lastUpdate,
     }
     return modifiedData;
    }
    catch(error)
    {

    }
}
*/
export const fetchDailyData = async () =>
{
  try 
  {
    const {data} = await axios.get (url2);

    const modifiedData= data.map((dailyData) => ({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate,
    }));
    return modifiedData;
  }
  catch(error)
  {

  }
}