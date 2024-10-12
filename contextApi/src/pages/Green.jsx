import React, { useContext } from 'react'
import { myprovider } from '../App.jsx'


const Green = () => {
  const {color,setColor,green,setGreen} = useContext(myprovider)
  return (
    <div>
      <h1 style={{color:green}}>green clor</h1>
          <button onClick={()=>setGreen("green")}>set green</button>
    </div>
  )
}

export default Green