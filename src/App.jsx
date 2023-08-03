import { useState } from 'react'
import LeftSection from './Components/LeftSection'
import MiddleSection from './Components/MiddleSection'
import RightSection from './Components/RightSection'
import './App.css'
import UpperSection from './Components/UpperSection'

function App() {
  const [page, setPage] = useState("")

  return (
    <>
    <UpperSection page={page}/>
      <div className='container'>
        <LeftSection />
        <MiddleSection setPage={setPage}/>
        <RightSection />
      </div>
    </>
  )
}

export default App
