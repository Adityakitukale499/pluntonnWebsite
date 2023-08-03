import { useState } from 'react'
import LeftSection from './Components/LeftSection'
import MiddleSection from './Components/MiddleSection'
import RightSection from './Components/RightSection'
import './App.css'
import UpperSection from './Components/UpperSection'

function App() {

  return (
    <>
    <UpperSection/>
      <div className='container'>
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
    </>
  )
}

export default App
