import NavBar from "./components/Navbar/navbar";
import Graph from "./components/body/graph";
import Input from "./components/country/country";
import Card from "./components/card/card";
import { useState } from "react";
import "../src/App.css";
import backimage from "./images/2.jpeg";

const App = () =>
{
  const [countries,setCountries]=useState("");

  const handelChanges = async (country) =>
{
  setCountries({country});
  
}

    return(
      <div className="main">
        <NavBar></NavBar>
        <Card country={countries}></Card>
        <Input handelChanges={handelChanges}></Input>
        <Graph country={countries}></Graph>
      </div>
      )
  
}

export default App;