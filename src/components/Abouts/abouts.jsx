import { useState } from "react";
import "../Abouts/abouts.css"; 
 
 const Abouts = () =>
 {
    
     const [datas,setDatas]= useState([]);
     
     const [addname,setaddName]= useState("");
     const [addexp,setaddExp]=useState("");
     const [addcont,setaddCont]=useState("");
const handelname = (event) =>
{
   setaddName(event.target.value);

}
const handelexp = (event) =>
{
    setaddExp(event.target.value);
}
const handelcont = (event) =>
{
    setaddCont(event.target.value);
}
const click = () =>
{
   setDatas((olddatas) =>
   {
       return ([...olddatas,{cont:addcont,name:addname,exp:addexp}]
        )
   });
   setaddName("");
   setaddExp("");
   setaddCont("");

}

     return (
         <div className="About">
            <div className="page">
              <div className="heading">
                  <h3 style={{fontFamily:"inherit",color:"lavender"}}>Experience of covid warriors</h3>
              </div>
              <div className="blog">
                  <div className="nameBox"><input style={{height:"25px",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderColor:"lightsalmon"}} type="text" placeholder="name"  onChange={handelname
            } value={addname}></input></div>
                  <div className="expBox" ><input style={{height:"150px",width:"90%",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}placeholder="experience" onChange={handelexp} value={addexp}></input></div>
                  <div className="contBox"><input  style={{height:"50px",width:"200px",borderRadius:"10px",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} type="text" placeholder="contact NO" onChange={handelcont} value={addcont}></input></div>
                   <button className="buttonbox" onClick={click}>SUBMIT</button>
              </div>
              <div  >

    {
        datas.map((item) =>
        {
            return (<div className="nameElem">
                <div>NAME: {item.name}</div>
                <div>EXPERIENCE: {item.exp}</div>
                <div>CONTACT: {item.cont}</div>
             </div>
            )
        })
    }
   
 

              </div>
            </div>
         </div>
     )
 }

 export default Abouts;