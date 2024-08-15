import React from 'react'
import './App.css'
import { Person } from "@mui/icons-material"
import MenuContainer from './Component/MenuContainer'

const App = () => {
  return (
    <div className="App">
    <div className = "menuContainer">
      <img className = "logo" src="pin.png" />

      <div className='subMenu'>
         <div>
            <MenuContainer icon= {<Person />}/>
         </div>
      </div>  
    </div>


    <main className = "main"></main>
  </div>
  )
}

export default App