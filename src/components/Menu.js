import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About Me</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/machine learning">Machine Learning</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/web and UX">Web and UX Design</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/digital marketing">Digital Marketing</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/civic projects">Civic Projects</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/content">Writing</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
