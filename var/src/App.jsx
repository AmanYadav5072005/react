// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default Ap
import Event from "./Event"
function App(){
  let name ="Aman"
  let ob = {
    fname : "Akash",
    lname : "yadav",
    age : 20,
    contact : 987654
  }
  let arr=[bio,chem,phy,hindi,maths,eng,comp]
  return(
    <>
     {/* <h1>Welcome {name}</h1>  */}
    {/* <h1>My first name is {emp.Age} and contact {emp.contact}</h1> */}
    <h1>Array are{arr[0]},{arr[1]},{arr[2]},{arr[3]},{arr[4]},{arr[5]},{arr[6]},</h1>
    <Event/>
    </>
  )
}
export default App
