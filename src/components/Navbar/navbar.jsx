import "./navbar.css";
import logo from "../../images/default-logo.png";

const NavBar = () =>
{
    return (
        <div className="main_nav">
           <div className="image">
              <img alt="logo" src={logo}></img> 
           </div>
           <div className="content">
               <div className="home">HOME</div>
               <div className="about">ABOUT</div>
               <div className="contact">CONTACT</div>
           </div>
        </div>
    )
}

export default NavBar;