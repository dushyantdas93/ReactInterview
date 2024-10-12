import React, { createContext, useState } from 'react'
import Home from './pages/Home'
import Green from './pages/Green'

export const myprovider = createContext()

const App = () => {
  const [color,setColor] = useState("blue")
  const [green,setGreen] = useState("black")
  return (
    <myprovider.Provider value={{color,setColor,green,setGreen}}>
 <div>
  <Home/>

  <Green/>
 </div>
    </myprovider.Provider>
   
  )
}

export default App