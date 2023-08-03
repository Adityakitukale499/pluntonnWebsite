import React from 'react'

const Posts = () => {
    return (
        <>
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
                <div className='follow'><i class="fa-solid fa-plus"></i> Follow <i class="fa-solid fa-ellipsis-vertical" style={{color:'black'}}></i></div>
            </div>
        </>
    )
}

export default Posts