import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    

    constructor(props){

        super(props);
       console.log("Parent Constructor"); 
    }
   
    componentDidMount(){
        console.log("parent did mount")
    }
   render(){
    console.log("parent render");
    return(
       
        <div>
          <h1>About</h1>
         <UserClass name={"Tonu Titu"} location={"Pta-nhi-pta"} /> 
         <UserClass name={"Child2"} location={"us"} /> 
           
        </div> 
    );
   }
}



export default  About; 