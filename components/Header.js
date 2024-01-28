import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnText, setBtnText] = useState("Login");

    return (
      <div className="header">
        <header>
          <h1>Your Restaurant Name</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
             </li>
            <li>
              <Link to={"/about"} >About</Link>  
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li><a href="#" onClick={() => 
              (btnText==='Login') ? setBtnText('Logout') : setBtnText('Login')
              }>{btnText}</a></li>
          </ul>
        </nav>
      
      </div>
    );

  };

  export default Header;