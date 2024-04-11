// const heading = React.createElement("h1" , { id :"heading" , xyz :"abc"} , " Hello world from React ")
      
// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

// adding two children to div tage , use an array of childrens in thired parameter
// const parent = React.createElement("div" , {id : "parent"} ,
// [ React.createElement("h1" , {} , "first h1 "), React.createElement("h1" , {} , "second h1") ] );


// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent); 

// making it more complex 
const parent = React.createElement("div" , {id : "parent"} , 
 [ 
    React.createElement("div" , {id:"child1"} , 
   [ React.createElement("h1" , {} , "first heading h ") , 
   React.createElement('h2' , {} , "second heading h mtlb sibling"),]),
   
   React.createElement("div" , {id:"cilde2"} , 
   [ React.createElement("h1" , {} , "first heading h ") , 
   React.createElement('h2' , {} , "second heading h mtlb sibling"),]),
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent); 