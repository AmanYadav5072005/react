import React, { createContext } from 'react'
let chdata = createContext()
let city = "Bhopal"
const Child3 = () => {
  return (
    <>
      <h1>Child3  page</h1>
      <chdata.Provider value={city}>
      <Child4/>
      </chdata.Provider>
    </>
  )
}

export default Child3
export{chdata}

