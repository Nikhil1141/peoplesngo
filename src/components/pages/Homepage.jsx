import React, { memo } from 'react'
import Layout from '../Layout/Layout';
import First from '../subcomponent/First';
import Second from '../subcomponent/Second';

const HomePage = () => {

    return (
        <Layout>
            <div>
                <First />
                <Second />
            </div>
        </Layout>
    )
}

export default memo(HomePage);