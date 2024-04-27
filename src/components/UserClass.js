import React from "react";

class UserClass extends React.Component{
       constructor(props){
          super(props);
         
          console.log(this.props.name+"Constructor")

          this.state ={
            count1 : 0 ,
            count2 : 0 
          }
       } 

       componentDidMount(){
         console.log(this.props.name+"child did mount");
       }
      render(){
           console.log(this.props.name+"child render");
         const { count1 , count2 } = this.state;
        const {name , location} = this.props;
        return(
            <div className="user-card">
            <h3>count : {count1}</h3>
            <button onClick={()=>{
               this.setState ({
                  count1 : this.state.count1+1
               })
            }}>increase-count</button>    
           <h2> {name}</h2> 
           <h3>{location}</h3>
           <h4>contact : addb@gmail.com</h4>
        </div> 
        );
      }
}

export default UserClass;