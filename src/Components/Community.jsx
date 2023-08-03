import React from 'react'
import './MiddleSection.css'
import Posts from './Posts'

const Community = () => {
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
                        <i class="fa-solid fa-plus"></i>
                        <span> Join</span>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className='btns'>
                    <button>Posts</button>
                    <button>Announcements</button>
                </div>
                <Posts/>
            </div>
            
        </>
    )
}

export default Community