import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import danhj3 from '../assets/images/danhj3.png'

const About = (props) => (
    <Layout>
        <Helmet>
            <title>About</title>
            <meta name="danhj.com About Me" content="About Daniel" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Me</h1>
                    </header>
                    <div className="box alt">
                        <div className="grid-wrapper">
                            <div className="col-4"><span className="image fit"><img src={danhj3} alt="" /></span></div>
                        </div>
                    </div>
                    <h2 id="content">Change maker in Progress</h2>
                    <p>Hi, I’m Daniel and I had a normal education and then got a normal office job, just like almost everyone else I
                    know. I moved to London after university, just like almost everyone else I know. However many of these office/career
                    jobs I tried there was always something that was not quite right. <br /><br />The status quo was for the most part feeling decidedly
                    broken, with the ways of working feeling very stale. Paperwork and telephone communication combined with off the shelf
                    internal systems that never quite seemed to work just didn’t seem right.<br /><br /> The experience was broken compared to what was
                    being developed for our personal devices. I knew the future was coming and so I decided to see if I could somehow be part of it.
                    Only issue was I’d studied Sociology and only had 'normal' office experience. It was time
                    <a href="https://medium.com/@danielhattonjohnson/how-to-get-a-modern-education-844988d4e842" target="blank"> to get a modern education.</a><br /><br />
                    I started with a short Christmas Product Design Course at the University of Arts in London where we studied Lighting Design.
                    The following year in 2014  studied UX Design at General Assembly before eventually quitting my job  and becoming heavily involved
                    in the London tech scene, through Meetups and then a Freelance job with my UX design school General Assembly before  eventually starting
                    with a new co-working space, Work.Life in Camden.<br /><br /> Then we had Brexit and I decided to get closer to my neighbours rather than turning away.
                    So I visited some cities in Northern Europe for proximity to London and a similar cool climate, found an interesting project and code school in
                    Brussels where I could continue my tech education with the goal of helping people and companies find new better ways of working.<br /><br />Since
                    coming to Brussels I have studied Full Stack Web Development, Growth Hacking and just finished Data Science and Machine Learning at the end of 2018.
                    In that time I also have three company projects under my belt and hope to become ’T-shaped’ by specialising in Machine Learning.</p>

                    <h2 id="content">See some of my work</h2>
                    <p><a href="https://colab.research.google.com/drive/1jgFX4jjlfYF6M6wpDxuTQn4JdAIhwTrQ" target="blank">Machine Learning in Python A-Z of methods</a> - Google Colaboratory</p>
                    <p><a href="https://projects.invisionapp.com/share/GCPOE3KX6RE#/screens" target="blank">SSAFA Armed Forces Lottery page redesign</a> - Framer and Invision.</p>
                    <p><a href="https://medium.com/@danielhattonjohnson/how-to-get-a-modern-education-844988d4e842" target="blank">How to Get a Modern Education</a> - Medium.</p>
                    <p><Link to="/digital marketing" className="link primary">Digital Marketing Essentials</Link></p>
                    </div>
            </section>
        </div>

    </Layout>
)

export default About
