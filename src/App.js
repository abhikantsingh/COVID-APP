import NavBar from "./components/Navbar/navbar";
import Graph from "./components/body/graph";
import Input from "./components/country/country";
import Card from "./components/card/card";

const App = () =>
{
  
    return(
      <div>
        <NavBar></NavBar>
        <Card ></Card>
        <Input></Input>
        <Graph></Graph>
      </div>
      )
  
}

export default App;