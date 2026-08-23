import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FeedBack from './Contradication-State'
import Menu from './Avoid-Duplication-State'
import TravelPlan from './Avoid-Deeply-NestedState'

function App() {

  return (
    <>
    <TravelPlan></TravelPlan>
    <Menu></Menu>
      <FeedBack></FeedBack>
    </>
  )
}

export default App
