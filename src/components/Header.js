import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

import {useState } from "react";

const Header = ()=>{ 

    const [btnName , setbtnName] = new useState("Login");
    return (
        <div className ="header">
           <div className="logo">
            <img className="image" src={LOGO_URL}/>
            
           </div>
           <div className="nav-items">
              <ul>
                <li><Link to="/"> Home</Link></li>
                <li> <Link to="/about">About us</Link> </li>
                <li> <Link to="/contact">Contact us</Link> </li>
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
