
import React, { useContext } from 'react'
import { myprovider } from '../App.jsx'





const Home = () => {
    const {color,setColor} = useContext(myprovider)
    // console.log("appColor",color)
  return (
    <div>
        <h1 style={{color:color}}>hellow world</h1>
        <button onClick={()=>setColor('yellow')}>yellow</button>


    </div>
  )
}

export default Home