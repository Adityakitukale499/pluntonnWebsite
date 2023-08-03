import React from 'react'
import './LeftSection.jsx'
const Follow = () => {
  return (
    <div className='followContainer'>
        <div>
            <div className='list_item'>
                <img src="downloadavtar.jpeg" className='avtarProfile'/>
                <div className="name">
                    <p className='smalltext'>@ciperSchool</p>
                    <p>CiperSch...</p>
                </div>
            </div>
        </div>
        <span className='follow'><i class="fa-solid fa-plus"></i> Follow</span>
    </div>
  )
}

export default Follow