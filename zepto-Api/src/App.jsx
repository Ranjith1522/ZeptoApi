import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Header from './Components/Header/Header'
import MainDashboard from './Components/MainDashboard/MainDashboard'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/login'  

function App() {

  return (
    <>
      {/* <Header/>
      <MainDashboard />
      <Footer/> */}
      <Login/>
    </>
  )
}

export default App
