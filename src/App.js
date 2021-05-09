import NavBar from "./components/Navbar/navbar";
import Graph from "./components/body/graph";
import Input from "./components/country/country";
import Card from "./components/card/card";
import { useState } from "react";
import "../src/App.css";
import backimage from "./images/2.jpeg";
import {BrowserRouter as Router ,Route ,Switch }from "react-router-dom";
import Abouts from "./components/Abouts/abouts";
import Contact from "./components/contact/cont";


const App = () =>
{
  const [countries,setCountries]=useState("");

  const handelChanges = async (country) =>
{
  setCountries({country});
  
}

    return(
 
    <Router>
       
         <NavBar></NavBar>
        
      <Switch>
        
        <Route  path="/" exact>
      <div className="main">
      <NavBar></NavBar>
       <Card country={countries}></Card>
       <Input handelChanges={handelChanges}></Input>
       <Graph country={countries}></Graph>
       </div>
       </Route>
      
      
      <Route path="/about"><Abouts></Abouts></Route>
      <Route path="/contact"><Contact></Contact></Route>

        </Switch>
    
    
    </Router>

   
        
      )
  
}

export default App;