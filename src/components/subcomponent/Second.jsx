import React, { memo } from 'react'
import pic5 from '../images/pic5.webp'
import pic6 from '../images/pic6.jpg'
import '../style/second.css'
import { Link } from 'react-router-dom'

function Second() {
    return (
        <div className="container my-5">
            <div className="row mb-5 p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border-hero">
                <div className="col-lg-7">
                    <h4 className='mb-3'>People's NGO</h4>
                    <p className="lead">"Our NGO is dedicated to fostering sustainable development through education, healthcare, and community empowerment. We strive to create lasting impact by addressing critical needs and fostering self-reliance in underserved communities worldwide."</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to='/blog' className='btnn'><button type="button" className="btn btn-outline-secondary btn-lg px-4">Know more...</button></Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle img-circle" src={pic5} alt='pic5' />
                </div>
            </div>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border-hero">
                <div className="col-lg-7">
                    <h4 className='mb-3'>Events</h4>
                    <p className="lead">"Our NGO hosts impactful events that address critical issues and promote community engagement. Our past events have focused on education, healthcare, and economic development, while current and future events continue to expand our reach and foster positive change. Join us in making a difference through our dynamic and inclusive initiatives."</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link to='/event' className='btnn'><button type="button" className="btn btn-outline-secondary btn-lg px-4">Know more...</button></Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle img-circle" src={pic6} alt='pic5' />
                </div>
            </div>
        </div>

    )
}

export default memo(Second)