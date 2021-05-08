import NavBar from "./components/Navbar/navbar";
import Graph from "./components/body/graph";
import Input from "./components/country/country";
import Card from "./components/card/card";
import { useState } from "react";



const App = () =>
{
  const [countries,setCountries]=useState("");

  const handelChanges = async (country) =>
{
  setCountries({country});
  
}

    return(
      <div>
        <NavBar></NavBar>
        <Card country={countries}></Card>
        <Input handelChanges={handelChanges}></Input>
        <Graph></Graph>
      </div>
      )
  
}

export default App;