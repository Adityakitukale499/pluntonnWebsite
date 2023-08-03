import React from 'react'

const Posts = () => {
    return (
        <>
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
                <div className='follow'><i class="fa-solid fa-plus"></i> Follow <i class="fa-solid fa-ellipsis-vertical" style={{ color: 'black' }}></i></div>
            </div>
            <p>🌟 Greetings, Members! 🌟</p>
            <p>🔥 Introducing our very first challenge! 🔥</p>
            <small>read more</small>
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
                <div className='follow'><i class="fa-solid fa-plus"></i> Follow <i class="fa-solid fa-ellipsis-vertical" style={{ color: 'black' }}></i></div>
            </div>
            <p>Hello everyone! </p>
            <p>
We're excited to share our first post in the community. </p>
            <small>read more</small>
            <img src="Javaanddsa.jpg"  />
            </div>
        </>
    )
}

export default Posts