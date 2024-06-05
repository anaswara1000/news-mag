// import { useState } from "react"
// import Navbar from "./Components/Navbar"
// import Newsboard from "./Components/Newsboard"

// ReadableStreamDefaultController

// const App=()=>{
//   const[category,setCategory]=useState("general");
//   return(
//       <div>
//         <Navbar setCategory={setCategory}/>
//         <Newsboard category={category}/>
   
//       </div>

     
   
//   )
// }

// export default App
import Navbar from "./Components/Navbar"
import Newsboard from "./Components/Newsboard"


const App=()=>{
  return(
      <div>
        <Navbar/>
        <Newsboard category='sports'/>
   
      </div>

  )
}

export default App