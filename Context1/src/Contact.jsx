import React, { useContext } from 'react'
import { senddata } from './main'

const Contact = () => {
    let acceptdata = useContext(senddata)
  return (
    
    <>
    <h1>Contact {acceptdata.name} and my age{acceptdata.age}</h1>
    {/* <senddata.Consumer>
        {
            (appdata)=>{return <h1>{appdata}</h1>}
        }
    </senddata.Consumer> */}
    </>
  )
}

export default Contact
