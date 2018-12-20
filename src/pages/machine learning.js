import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const MachineLearning = (props) => (
    <Layout>
        <Helmet>
            <title>Machine Learning</title>
            <meta name="danhj.com Machine Learning" content="Machine Learning projects by Daniel" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Machine Learning Projects</h1>
                    </header>
                    <h2 id="content"><a href="https://colab.research.google.com/drive/1jgFX4jjlfYF6M6wpDxuTQn4JdAIhwTrQ" target="blank">ML in Python from A to Z</a></h2>
                      <p>In <a href="https://colab.research.google.com/drive/1jgFX4jjlfYF6M6wpDxuTQn4JdAIhwTrQ" target="blank"> this Collab project</a> I go over some key examples of the
                      foundations of Machine Learning.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default MachineLearning
