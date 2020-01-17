import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container">
                <Link to="/">
                    <div className="treebnb-logo-with-word">
                        <i className="fas fa-tree"></i>
                        <span id="treebnb-word">treebnb</span>
                    </div>
                </Link>
                <div className="attribution-container">
                    <div className="attribution">
                        Created by <a target="_blank" href="https://ezekielp.github.io/">Ezekiel Pfeifer</a>
                    </div>
                    <ul className="logos-bar">
                        <li className="logo-li">
                            <a href="https://github.com/ezekielp" target="_blank">
                                <img src={window.githubLogo} alt="Link to Zeke's Github" />
                            </a>
                        </li>
                        <li className="logo-li">
                            <a href="https://linkedin.com/in/ezekielpfeifer" target="_blank">
                                <img src={window.linkedinLogo} alt="Link to Zeke's LinkedIn" />
                            </a>
                        </li>
                        <li className="logo-li">
                            <a href="https://angel.co/ezekiel-pfeifer" target="_blank">
                                <img src={window.angellistLogo} alt="Link to Zeke's AngelList" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;