import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header/Header'
import Time from './Components/Timer/Timer'
import Competitors from './Components/Compitetors/Competitors'
import { VoteModal } from './Modal/VoteModel'
import Timer from './Components/Timer/Timer'


function App() {


  return (
    <>
     
      <Header/>
      <Timer/>
      <Competitors/>
      <VoteModal/>
    </>
  )
}

export default App
