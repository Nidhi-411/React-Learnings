# Namste React 
## handwritten notes of React js 
#### React js - part 1 
https://drive.google.com/file/d/14dCi_rosNO1x0VdqsGKFtdZmTORkjl0m/view?usp=sharing
#### React js - part 2
https://drive.google.com/file/d/1U_ed94EQzaTYfzVo7GwTZ8ivA3zP_Weg/view?usp=sharing

## parcel 
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

## episode 4 food webapp
 
    
     *   Header 
         - logo
         -  nav items
       
     *  Body 
         - search
         - Restorant container 
         - Resorant Card
            . img
            . name of restro, star rating, cusins ,delivery time etc 
     
    *  Footer 
        - copyright
        - links
        - adress
        - contact
      
   
   ## episode 5 , hooks in react 
   
    two type of export and import 

   - default export import 

     export default Component
     
     import Component from "path"

   - Named export import 

       export const Component

       import {Component} from "path"

   ## episode 6
    - using usEffect - made Symmer ui effect in body
    - made a small feature(login - logout) in header
    -  added a search feature in header (very intrusting and cunceptual)
    -  extra things you may try - lazy loading (fetch post call) , 
                               - corseproxy.io ( for solving cors plugin issue)

   ## episode 7 

    - React routers for smooth navigation and routing  , react router , dynamic router , outlet component

    - routing of react application - creating routing congiguration ( createBrowserRouter())
                                   - providing this configuration  ( using RouterProvider)
                                   - useRouterError hook 

      - routing - two types of routing in web apps 
        - cliend side routing 
         - server side routing 

       part 4 - children routes , <Outlet/> component , <Link><Link/> compnent 

  ## episode 9 

  - custom hooks
  -lazy loading / chunking / code splitting / dynamic building / on demand loading / dynamic import  

  ## episode 10 
  - all about tailwind css

  ## episode 11

  - higher order component 
  - Controled and uncontroled components
  --
  - Created a accordian functionality for RestaurantMenu

  - Lifting state up 

  - props drilling 

  -  context 

  ## episode 12 

  -  ____________Redux___________   

  - install @redux.js/toolkit and react-redux
  - build our store 
  - connect our store to our app 
  - slice (cartSlice)
  - dispatch (action)
  - selector     
