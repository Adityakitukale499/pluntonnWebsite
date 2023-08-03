import React from 'react'
import './LeftSection.css'
import Follow from './Follow'

const LeftSection = () => {
  return (
    <div className='leftSection'>
            <div className="logo">
            <img src="https://www.plutonn.com/static/media/Mask.c87a2edc5f7bc40a251cbff35040b1cb.svg" className='bordersmile'/>
            <img src="smile.png" className='smile' />
            </div>
        <div className='profileBar'>
            <h3>You Haven't Logge...</h3>
            <p style={{fontSize:'12px'}}>take your username now</p>
            <p style={{fontSize:'14px',marginTop:5}}>Click the login button and </p><p style={{fontSize:'14px',marginTop:5}}> make yourself a part of this</p> <p style={{fontSize:'14px',marginTop:5}}> wonderful community.</p>
        </div>
        <button className='login'> <i class="fa-solid fa-right-to-bracket"></i> Login</button>
        <div className='navbar'>
            <ul>
                <li><a href=""> <i class="fa-solid fa-house"></i> Home</a></li>
                <li><a href=""> <i class="fa-solid fa-people-group"></i> Community</a></li>
                <li><a href=""><i class="fa-solid fa-magnifying-glass"></i> Search</a></li>
                <li><a href=""><i class="fa-brands fa-square-youtube"></i> Courses</a></li>
            </ul>
        </div>
        <div className="followers">
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        </div>
    </div>
  )
}

export default LeftSection