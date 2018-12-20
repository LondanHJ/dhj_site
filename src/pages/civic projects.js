import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Civic = (props) => (
    <Layout>
        <Helmet>
            <title>Civic Projects</title>
            <meta name="danhj.com Civic Projects" content="Civic projects by Daniel" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Civic Projects</h1>
                    </header>
                    <h2 id="content">Wiki CLub</h2>
                    <p>As one of my voluntary civic projects, I meet one evening per fortnight with the Brussels Wiki
                    Club for a <a href="https://www.meetup.com/Civic-Lab-Brussels" target="blank"> Civic hack night</a>.
                    Our goal here is to add prominent women to Wikipedia in order to address
                    <a href="https://en.wikipedia.org/wiki/Gender_bias_on_Wikipedia" target="blank"> gender bias on Wikipedia.</a>
                    We are currently adding them from the Forbes
                    <a href="https://www.forbes.com/top-tech-women/#6f7d79f94df0" target="blank"> Top 50 Women in European Tech </a>.</p>
                    </div>
            </section>
        </div>

    </Layout>
)

export default Civic
