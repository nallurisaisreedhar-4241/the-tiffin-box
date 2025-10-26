import { useState } from 'react'
import './App.css'
import Home from './home.jsx'
import About from './Components/About/About.jsx'
import Menu from './Components/Menu/Menu.jsx'
import Online from './Components/Online/Online.jsx'
import Dinein from './Components/Dinein/Dinein.jsx'
import Specialties from './Components/Specialties/Specialties.jsx'
import Chef from './Components/Chef/Chef.jsx'
import Customers from './Components/Reviews/Customers.jsx'
import Footer from './Components/Footer/Footer.jsx'


function App() {

  return (
    <>
   <Home/>
   <About/>
   <Menu/>
    <Online/>
    <Dinein/>
    <Specialties/>
    <Chef/>
    <Customers/>
    <Footer/>
    </>
  )
}

export default App
