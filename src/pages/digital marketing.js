import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import DMC from '../assets/images/DMC.png'

const DigitalMarketing = (props) => (
    <Layout>
        <Helmet>
            <title>Digital Marketing</title>
            <meta name="danhj.com Digital Marketing" content="Digital Marketing projects by Daniel" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Digital Marketing Essentials</h1>
                    </header>
                    <h2 id="content">The Most Important Thing - Strategy</h2>
                    <div className="box alt">
                        <div className="grid-wrapper">
                            <div className="col-4"><a href="https://drive.google.com/file/d/1mJ4leFwxqXRNKFKwnoUBt3H1SMcvsE4o/view?usp=sharing" target="blank"><span className="image fit"><img src={DMC} alt="" /></span></a></div>
                        </div>
                    </div>
                    <p>When setting up your basics for digital marketing, there are a few steps to always take,
                     with some special considerations in Europe post GDPR. But First thing's first, your <a href="https://drive.google.com/file/d/1mJ4leFwxqXRNKFKwnoUBt3H1SMcvsE4o/view?usp=sharing" target="blank">DMC</a></p>
                    <h2 id="content">Setting up your Digital Marketing Basics</h2>
                    <p>Have a look here for some helpful ways that you can grow your own website or app
                    What does your business need, who is the customer and what's the medium? We go from there.</p>
                    <h2 id="content">Events and Community building</h2>
                    <p>The time has gone where companies made ads to get the attentions of customers, partners and employees.
                    It's less about formal one way actions as it is about an ongoing discourse and collaberation. There are many ways this can go,
                    and in my experience it was events and hackathons mainly....story to follow</p>
                    </div>
            </section>
        </div>

    </Layout>
)

export default DigitalMarketing
