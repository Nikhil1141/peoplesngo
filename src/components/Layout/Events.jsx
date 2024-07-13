import React, { memo } from 'react';
import Layout from './Layout';
import pic4 from '../images/pic4.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import '../style/event.css';
import pasteventsdata from '../data/pastevents.js';
import presenteventsdata from '../data/presentevents.js';
import futureeventsdata from '../data/futureevents.js';

function Events() {
    return (
        <Layout>
            <div className='container'>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={pic4} className="d-block" alt="pic4" />
                        </div>
                        <div className="carousel-item">
                            <img src={pic2} className="d-block" alt="pic2" />
                        </div>
                        <div className="carousel-item">
                            <img src={pic3} className="d-block" alt="pic3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div>
                <h1 className='text-center mt-4'>Past Events</h1>
                <div className='eventt m-3'>
                    {pasteventsdata.map((past) => (
                        <div key={past.id}>
                            <div className="card">
                                <img src={past.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5>Title:</h5>
                                    <p>{past.title}</p>
                                </div>
                                <div className="description">
                                    <p>{past.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className='text-center mt-4'>Present Events</h1>
                <div className='eventt m-3'>
                    {presenteventsdata.map((present) => (
                        <div key={present.id}>
                            <div className="card">
                                <img src={present.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5>Title:</h5>
                                    <p>{present.title}</p>
                                </div>
                                <div className="description">
                                    <p>{present.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mb-5'>
                <h1 className='text-center mt-4'>Future Events</h1>
                <div className='eventt m-3'>
                    {futureeventsdata.map((future) => (
                        <div key={future.id}>
                            <div className="card">
                                <img src={future.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5>Title:</h5>
                                    <p>{future.title}</p>
                                </div>
                                <div className="description">
                                    <p>{future.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default memo(Events);
