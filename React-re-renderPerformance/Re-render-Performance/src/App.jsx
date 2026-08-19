import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlowComponent from './SlowComponent'
import Modal from './Modal'
import ButtonWithModal from './ButtonWithModal'

function App() {

  return (
    <>
      <ButtonWithModal/>
      <div>
        Write something here
      </div>
      <div>
        write something here
      </div>
      <SlowComponent/>
    </>
  )
}

export default App
