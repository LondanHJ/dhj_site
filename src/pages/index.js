import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Hello Friend - welcome home"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Machine Learning</h3>
                                <p>This is where the 21st century magic happens</p>
                            </header>
                            <Link to="/machine learning" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Web and UX Design</h3>
                                <p>From wireframes to web arcitecture, find it here</p>
                            </header>
                            <Link to="/web and UX" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Digital Marketing</h3>
                                <p>Build it, and they will come!<br/>
                                When you tell them about it.
                                </p>
                            </header>
                            <Link to="/digital marketing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Writing</h3>
                                <p>The home of content creation by me, Dan HJ</p>
                            </header>
                            <Link to="/content" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Civic Projects</h2>
                            </header>
                            <p>Civic duties are very importoant for us to have a nice society, click here to see some of my Civic projects<br />
                            in Brussels and before. I am one of many participants</p>
                            <ul className="actions">
                                <li><Link to="/civic projects" className="button next">Civic projects</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
