import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Header from './Components/Header/Header'
import MainDashboard from './Components/MainDashboard/MainDashboard'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/login' 
import { LoginContext } from './Components/contextApi/loginContext' 



function App() {

  const globalName = "Ranjith";
  
  
  return (
    <>
    
    <LoginContext.Provider value = {{globalName}}>
      <Header/>
      <MainDashboard />
       <Login/>
      <Footer/>
      </LoginContext.Provider>
    </>
  )
}

export default App
