import React from 'react'
import './UpperSection.css'

const UpperSection = ({page}) => {
    return (
        <>
            <div className='upperSection'>
                <div className='leftSide'>
                    <img src="plutonnImg.png" className='plutonnLogo' />
                    <h1 className='heading'>Plutonn</h1>
                </div>
                <h2 className='heading'>Community {page}</h2>

                <img src="https://www.plutonn.com/static/media/avatar.0fcf2859458b6be5a69d.png" className='plutonnLogo' />
            </div>
            <hr />
        </>
    )
}

export default UpperSection