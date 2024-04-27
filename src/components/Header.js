import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

import {useState } from "react";

const Header = ()=>{ 

    const [btnName , setbtnName] = new useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className ="header">
           <div className="logo">
            <img className="image" src={LOGO_URL}/>
            
           </div>
           <div className="nav-items">
              <ul>
                 <li>online Status : {onlineStatus  ? "\u2705" : "\u2B55"}</li>
                <li><Link to="/"> Home</Link></li>
                <li> <Link to="/about">About us</Link> </li>
                <li> <Link to="/contact">Contact us</Link> </li>
                <li> <Link to = "/grocery">Grocery</Link></li>
                <li> cart </li>
                <li> <button className="login-btn" onClick={()=>{
                  btnName ==="Login"?setbtnName("Log-out"):setbtnName("Login");
                }}>{btnName}</button></li>
              </ul>
           </div>
        </div>
    )
 } 

 export default Header;
