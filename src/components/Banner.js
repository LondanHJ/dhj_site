import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, I'm Daniel</h1>
            </header>
            <div className="content">
                <p>Here is where you can find my work and projects,<br />
                plus a little bit about me and what I do.</p>
                <ul className="actions">
                  <li><Link to="/about" className="button next">About me</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
