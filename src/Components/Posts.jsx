import React from 'react'
import './MiddleSection.css'
const Posts = () => {
    return (
        <>
        <div className='post'>
        <div >
            <div className='followContainer'>
                <div>
                    <div className='list_item'>
                        <img src="downloadavtar.jpeg" className='avtarProfile' />
                        <div className="name">
                            <p className='smalltext'>@ciperSchool</p>
                            <p>CiperSch...</p>
                        </div>
                    </div>
                </div>
                <div className='follow'><i className="fa-solid fa-plus"></i> Follow <i className="fa-solid fa-ellipsis-vertical" style={{ color: 'black' }}></i></div>
            </div>
            <p>🌟 Greetings, Members! 🌟</p>
            <p>🔥 Introducing our very first challenge! 🔥</p>
           <p> <small>read more</small></p>
            <img src="tree.png" alt="" />
            </div>
            <div>
            <div className='followContainer'>
                <div>
                    <div className='list_item'>
                        <img src="downloadavtar.jpeg" className='avtarProfile' />
                        <div className="name">
                            <p className='smalltext'>@ciperSchool</p>
                            <p>CiperSch...</p>
                        </div>
                    </div>
                </div>
                <div className='follow'><i className="fa-solid fa-plus"></i> Follow <i className="fa-solid fa-ellipsis-vertical" style={{ color: 'black' }}></i></div>
            </div>
            <p>Hello everyone! </p>
            <p>
We're excited to share our first post in the community. </p>
           <p> <small>read more</small></p>
            <img src="Javaanddsa.jpg"  />
            </div>
            <div>
            <div className='followContainer'>
                <div>
                    <div className='list_item'>
                        <img src="downloadavtar.jpeg" className='avtarProfile' />
                        <div className="name">
                            <p className='smalltext'>@ciperSchool</p>
                            <p>CiperSch...</p>
                        </div>
                    </div>
                </div>
                <div className='follow'><i className="fa-solid fa-plus"></i> Follow <i className="fa-solid fa-ellipsis-vertical" style={{ color: 'black' }}></i></div>
            </div>
            <p>Hello everyone! </p>
            <p>
We're excited to share our first post in the community. </p>
            </div>
            </div>
        </>
    )
}

export default Posts