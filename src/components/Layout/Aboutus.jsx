import React, { memo } from 'react'
import Layout from './Layout'
import aboutus from '../images/aboutus pic.png'
import '../style/aboutus.css'

const About = () => {
    return (
        <Layout>
            <div>
                <img className='img1' src={aboutus} alt="aboutus" />
                <div className='m-5'>
                    <h4>Our Mission</h4>
                    <p>At Prople's NGO, our mission is to foster sustainable development and empower communities to build a brighter future. We believe in the power of collective action to bring about meaningful change. Our work spans various sectors, including education, healthcare, clean water access, and economic development, ensuring that every project we undertake has a lasting impact.</p>
                </div>
                <div className='m-5'>
                    <h4>Who We Are</h4>
                    <p>Prople's NGO is a dedicated team of passionate individuals committed to making a difference in the world. Founded in [Year], we have grown into a reputable organization that partners with local communities, governments, and other NGOs to create holistic and sustainable solutions to pressing global issues. Our approach is rooted in empathy, transparency, and a deep respect for the communities we serve.</p>
                </div>
                <div className='m-5'>
                    <h4>Our Projects</h4>
                    <p>We work on a diverse range of projects that address the specific needs of the communities we support. Here are some of our key initiatives:<br />
                        <b>Education for All:</b> We build and renovate schools, provide scholarships, and supply educational materials to ensure that children in underserved areas have access to quality education.<br />
                        <b>Healthcare Access: </b> Our healthcare projects focus on training healthcare workers, building clinics, and conducting medical camps to provide essential health services to remote communities.<br />
                        <b>Clean Water Initiatives:</b> We install wells and water purification systems, conduct hygiene workshops, and advocate for sustainable water management practices to ensure access to clean and safe drinking water.<br />
                        <b>Economic Empowerment:</b> Through vocational training programs, microfinance initiatives, and entrepreneurship support, we help individuals and communities achieve financial independence and economic stability.</p>
                </div>
                <div className='m-5'>
                    <h4>Our Achievements</h4>
                    <p>Over the years, we have made significant strides in our mission. Here are some of our proudest achievements:<br />
                        <b>100+ Schools Built:</b> We have constructed and renovated over 100 schools, impacting the lives of thousands of children.<br />
                        <b>Healthcare for 50,000+:</b> Our healthcare initiatives have provided essential services to more than 50,000 individuals.<br />
                        <b>Clean Water for 50,000+ Households:</b>Clean Water for 50,000+ Households: We have brought clean water to over 50,000 households, improving health and quality of life.<br />
                        <b>10,000+ Trained Professionals:</b> We have trained over 10,000 healthcare workers and professionals, strengthening local capacity and sustainability.</p>
                </div>
            </div>
        </Layout>
    )
}

export default memo(About)