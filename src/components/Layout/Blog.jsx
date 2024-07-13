import React, { memo } from 'react'
import Layout from './Layout'
import blogsdata from '../data/blogsdata.js'
import { NavLink } from 'react-router-dom'
import '../style/blog.css'

const Blog = () => {
    return (
        <Layout>
            <div className='blogg'>
                {
                    blogsdata.map((blog) => {
                        return (
                            <div key={blog.id}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={blog.img} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5>Title:</h5> <p>{blog.title}</p>
                                    </div>
                                    <NavLink to={`/blog/${blog.id}`} className='text-center mb-4'> more... </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default memo(Blog)