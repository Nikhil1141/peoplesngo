import React, { memo, useEffect, useState } from 'react';
import Layout from './Layout';
import { useParams, NavLink } from 'react-router-dom';
import blogsdata from '../data/blogsdata.js';
import '../style/blogpost.css';

function Blogpost() {
    const { id } = useParams();
    const [blogitemDetails, setBlogItemDetails] = useState(null);

    useEffect(() => {
        const blogDetails = blogsdata.find((blog) => blog.id === parseInt(id));
        if (blogDetails) {
            setBlogItemDetails(blogDetails);
        } else {
            setBlogItemDetails(null);
        }
    }, [id]);

    return (
        <Layout>
            <NavLink to="/blog" className="btn text-decoration-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle-fill color-dark" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg></NavLink>
            <div className='container'>
                {blogitemDetails ? (
                    <div>
                        <img className='imgg' src={blogitemDetails.img} alt={blogitemDetails.title} />
                        <div className='inner-menucontent'>
                            <h1>{blogitemDetails.title}</h1>
                            <i>{blogitemDetails.author}</i>
                            <p>{blogitemDetails.publicationDate}</p>
                            {/*<p id='p1'>{blogitemDetails.description}</p>*/}
                            <div dangerouslySetInnerHTML={{ __html: blogitemDetails.description }}></div>
                        </div>
                    </div>
                ) : (
                    <p>Blog details not found.</p>
                )}
            </div>
        </Layout>
    );
}

export default memo(Blogpost);

