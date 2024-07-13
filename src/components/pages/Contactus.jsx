import React, { memo } from 'react'
import Layout from '../Layout/Layout'

const Contact = () => {

    return (
        <Layout>
            <div className='container' >
                <form>
                    <div className='m-5'>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Issue</label>
                            <textarea className="form-control" rows={3} defaultValue={""} />
                        </div>
                        <div className='mb-3'>
                            <button type="button" class="btn btn-outline-secondary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default memo(Contact)

