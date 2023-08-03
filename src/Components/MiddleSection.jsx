import React from 'react'
import Community from './Community'
import './MiddleSection.css'

const MiddleSection = ({setPage}) => {
  return (
    <>
    <div className="communityContainer">
    <Community setPage={setPage}/>
    </div>
    </>
  )
}

export default MiddleSection