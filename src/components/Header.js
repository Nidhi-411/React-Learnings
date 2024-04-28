import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

import {useState } from "react";

const Header = ()=>{ 

    const [btnName , setbtnName] = new useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className ="flex justify-between bg-pink-100 shadow-lg py-2" >
           <div className="w-32">
            <img className="image" src={LOGO_URL}/>
            
           </div>
           <div className="flex items-center">
              <ul className="flex">
                 <li className="px-4">online Status : {onlineStatus  ? "\u2705" : "\u2B55"}</li>
                <li className="px-4"><Link to="/"> Home</Link></li>
                <li className="px-4"> <Link to="/about">About us</Link> </li>
                <li className="px-4"> <Link to="/contact">Contact us</Link> </li>
                <li className="px-4"> <Link to = "/grocery">Grocery</Link></li>
                <li className="px-4"> cart </li>
                <li className="px-4"> <button className="login-btn" onClick={()=>{
                  btnName ==="Login"?setbtnName("Log-out"):setbtnName("Login");
                }}>{btnName}</button></li>
              </ul>
           </div>
        </div>
    )
 } 

 export default Header;
