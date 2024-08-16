import React, { useEffect } from 'react'
import './App.css'
import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from "@mui/icons-material"
import MenuContainer from './Component/MenuContainer'

const App = () => {

  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer")
    

    function setMenuActive(){
      allIcon.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allIcon.forEach(n => n.addEventListener("click" , setMenuActive))
  } , [])

  return (
    <div className="App">
    <div className = "menuContainer">
      <img className = "logo" src="pin.png" />

      <div className='subMenu'>
         <div>
            <MenuContainer icon= {<Person />}/>
            <MenuContainer icon= {<Notifications />}/>
            <MenuContainer icon= {<Chat />}/>
         </div>
         <div>
            <MenuContainer icon= {<FavoriteRounded />}/>
         </div>
         <div>
            <MenuContainer icon= {<QuestionMark />}/>
            <MenuContainer icon= {<Add />}/>
         </div>
      </div>  
    </div>


    <main className = "main">
      <div className='searchBox'>
        <input type='text' placeholder='Search..' />
        <div className='search'>
            <img src='pinarrow.png' alt='' />
        </div>
      </div>
      <div className='mainContainer'></div>
    </main>
  </div>
  )
}

export default App