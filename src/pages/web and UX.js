import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const WebUX = (props) => (
    <Layout>
        <Helmet>
            <title>Web and UX Design</title>
            <meta name="danhj.com Web design and UXD" content="Web and UX projects by Daniel" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    <h1>Web and UX Design Projects</h1>
                    </header>
                    <h2 id="content"><a href="https://invis.io/GCPOE3KX6RE" target="blank">SSAFA Armed Forces Lottery page</a></h2>
                    <p>During the summer in 2017 I worked at SSAFA and helped with some basic page redesigns for their fundraising Lottery.
                    I got them registered for Facebook donate, a first important step in their process to modernise their fundraising efforts.
                    For the Lottery I designed and prototyped a new header with clearer calls to action. The header was implemented though the rest of
                    the page design wasn't due to budget with their agency. However this was a victory for an organisation still prototyping in Microsoft Word,
                    to be able to show them tools like Framer and Invision so they could work better and faster internally and with the agency.
                    See <a href="https://www.ssafa.org.uk/ways-give/forces-lottery" target="blank">here</a> for the page header as implemented and below for Invision simple prototypes.
                    <br />
                    <a href="https://projects.invisionapp.com/share/GCPOE3KX6RE#/screens/253140726" target="blank">SSAFA Lotto page top</a>
                    <br />
                    <a href="https://projects.invisionapp.com/share/GCPOE3KX6RE#/screens/253140753" target="blank">SSAFA Lotto page body</a>
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default WebUX
