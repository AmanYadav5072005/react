import React from 'react'
import {chdata} from './Child3'
const Child5 = () => {
  return (
    <>
      <h1>Child5 page</h1>
      <chdata.Consumer>
        {
            (city)
        }
      </chdata.Consumer>
    </>
  )
}

export default Child5
