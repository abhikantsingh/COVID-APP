import "./navbar.css";
import logo from "../../images/default-logo.png";
import {Link} from "react-router-dom";

const NavBar = () =>
{
    return (
        <div className="main_nav">
           <div className="image">
              <img alt="logo" src={logo}></img> 
           </div>
           <div className="content">
              <Link to="/"><div className="home">HOME</div></Link>
              <Link to="/about"> <div className="about">BLOG</div></Link>
              <Link to="/contact"> <div className="contact">CONTACT</div></Link>
               
              
              
           </div>
        </div>
    )
}

export default NavBar;