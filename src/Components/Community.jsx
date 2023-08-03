import React, { useState } from 'react'
import Announcements from './Announcements'
import './MiddleSection.css'
import Posts from './Posts'

const Community = ({setPage}) => {
    const [post , setPost] = useState(true)
    const POST =()=>{
        setPage('- Post')
        setPost(true)
    }
    const Announcements2 =()=>{
        setPage('- Announcements')
        setPost(false)
    }
    return (
        <>
            <div className='topContainer'>
                <div className="top">
                    <div className='community'>
                        <img src="dsaImg.jpeg" className='plutonnLogo' />
                        <div className='members'>
                            <h2>DSA Community</h2>
                            <p>114 Members</p>
                        </div>
                    </div>
                    <div className='join'>
                        <i className="fa-solid fa-plus"></i>
                        <span> Join</span>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className='btns'>
                    <button onClick={POST}>Posts</button>
                    <button onClick={Announcements2}>Announcements</button>
                </div>
                {post?<Posts/>:<Announcements/>}
                
            </div>
            
        </>
    )
}

export default Community