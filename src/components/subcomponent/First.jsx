import React, { memo } from 'react'
import pic1 from '../images/pic1.jpg'
import '../style/first.css'


function First() {
    return (
        <div className='first-container'>
            <div className='background-image'>
                <img src={pic1} alt="pic1" className='overlay' />
            </div>
        </div>
    )
}

export default memo(First)