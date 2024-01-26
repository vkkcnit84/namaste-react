import { useState } from "react";
const Header = () => {

  const [btnText, setBtnText] = useState("Login");
  // console.log('HEADER')


    return (
      <div className="header">
        <header>
          <h1>Your Restaurant Name</h1>
        </header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#" onClick={() => 
              (btnText==='Login') ? setBtnText('Logout') : setBtnText('Login')
              }>{btnText}</a></li>
          </ul>
        </nav>
      
      </div>
    );

  };

  export default Header;