import React from 'react'
import {chdata} from './Child3'
const Child5 = () => {
  return (
    <>
      <h1>Child5 page</h1>
      <chdata.Consumer>
        {
            (city)=>{return <h1>{city}</h1>}
        }
      </chdata.Consumer>
    </>
  )
}

export default Child5
