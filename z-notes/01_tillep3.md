 # Code till 3rd episode 

 - why this ? 
 - making this files , becouse in every episode we modify our code and make it better , but each step should be 
    available in structured way , how we came up to that modified things , 
    so making this .md files 

``` javascript 
import React from "react"; 
 import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1" , { id :"heading" , xyz :"abc"} , " Hello world from React ")
      
// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

// adding two children to div tage , use an array of childrens in thired parameter
// const parent = React.createElement("div" , {id : "parent"} ,
// [ React.createElement("h1" , {} , "first h1 "), React.createElement("h1" , {} , "second h1") ] );


// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent); 

// making it more complex 


```

_________ Episode 2 starts here __________

``` javascript 

// const parent = React.createElement("div" , {id : "parent"} , 
//  [ 
//     React.createElement("div" , {id:"child1"} , 
//    [ React.createElement("h1" , {} , "first heading h ") , 
//    React.createElement('h2' , {} , "second heading h mtlb sibling"),]),
   
//    React.createElement("div" , {id:"cilde2"} , 
//    [ React.createElement("h1" , {} , "first  heading h ") , 
//    React.createElement('h2' , {} , "second heading h mtlb sibling"),]),
   
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent); 


 ```
 
 ____________________Episode 3 starts here ______________________

 ``` javascript 

 // jsx 
/*
 const  jsxHeading = (<h1 
  id="heading" className="root"
  tabIndex="1">Namste React using jsx </h1>);

 // jsx => React.createElement => ReactElement ( js object ) => HTMLElement( Render)

 // jsx is just syntax - html like syntax - not html 

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(js)
*/

 // ---- React Components - Class Based Component and Funtional Components

 const Tital = ()=>(
    <h1>bhai component composition se aaya hu</h1>
 )
 const ele = <span> React Element spannnn </span>
 const HeadingComponent = ()=>{
    return  ( 
        <div id="container">
         {ele}
       <h2>{console.log("hiiiiiiii")}</h2> 
      {Tital}
     <h1 className="head">hii This is First functional component</h1>
      <Tital/>
    </div>)
 } 

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingComponent/>)
 ```


 ``` html 
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nidhu React</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="root"> "Not rendered" </div>
  <!-- <script
     crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script 
    crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> 
   // we no loger need this episode 2 part 2
  -->

    <script type="module" src="./src/app.js">
    </script>

</body>
<!-- <script>
   const heading = document.createElement('h1')
    heading.innerHTML = "hello world from js"
     
     const root = document.getElementById('root')
     root.appendChild(heading)
  
</script> -->
</html>

 ```