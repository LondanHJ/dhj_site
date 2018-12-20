import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const WritingContent = (props) => (
    <Layout>
        <Helmet>
            <title>Writing and Content Creation</title>
            <meta name="danhj.com Writing and Content Creation" content="Writing and Content Creation projects by Daniel" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Content projects</h1>
                    </header>
                    <h2 id="content">Wiki CLub</h2>
                    <p>As one of my voluntary civic projects, I meet once per fortnight with the Brussels Wiki
                    Club. Our goal here is to add prominent women to Wikipedia, and we are currently adding them
                    from the Forbes Top 50 Women in European tech. See below for some articles we have added.</p>
                    <p>
                      <a href="https://en.wikipedia.org/wiki/Roberta_Lucca" target="blank">Roberta Lucca</a>
                    </p>
                    <p>
                      <a href="https://en.wikipedia.org/wiki/Karen_Dolva" target="blank">Karen Dolva</a>
                    </p>
                    <p>
                      <a href="https://en.wikipedia.org/wiki/Loubna_Bouarfa" target="blank">Loubna Bouarfa</a>
                    </p>

                    <h2 id="content">Medium Articles</h2>
                    <p><a href="https://medium.com/@danielhattonjohnson/how-to-get-a-modern-education-844988d4e842" target="blank">How to Get a Modern Education</a></p>
                    </div>

            </section>
        </div>

    </Layout>
)

export default WritingContent
