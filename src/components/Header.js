import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import onlineStatus from "../../utils/useIsOnline";
import UserDetails from "../../utils/userContext";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const data = useContext(UserDetails);
  
    return (
      <div className="flex mt-10 bg-gray-400 w-full h-20 items-center justify-between">
        <div className="flex">
          <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" height={`100px`} width={`110px`} />
        </div>
        <div className="flex justify-between items-center">
          <div className="m-10">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="m-10">
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="m-10">
            <Link to={"/about"} >About</Link>  
          </div>
          <div>
            <Link to={"/grocery"}>Grocery</Link>
          </div>
            <div className="m-10">
              Online Status: {(onlineStatus()) ? "🟢" : "🔴"}
            </div>
            <div>
              <span>UserName: {data.loggedInUser}</span>
            </div>
          <div className="p-2">
            <a href="#" onClick={() => 
              (btnText==='Login') ? setBtnText('Logout') : setBtnText('Login')
              }>{btnText}
            </a>
          </div>
        </div>
      </div>
    );

  };

  export default Header;