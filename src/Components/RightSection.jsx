import React from 'react'
import './RightSection.css'
import CommunitiiesOption from './CommunitiiesOption'
const RightSection = () => {
  return (
    <div className='RightSection'>
        <div className="search">
        <input type="text" className='inp'/> <i className="fa-solid fa-magnifying-glass searchIcon"></i>
        </div>
        <p>Popular Communities</p>
        <CommunitiiesOption/>
    </div>
  )
}

export default RightSection